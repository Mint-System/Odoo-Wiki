const fs = require('fs')
const path = require('path')

/* arguments:
all
index
convert
attachments
*/

// settings
const rootDir = path.resolve(__dirname, '..')
const ignoreFiles = ['_navbar.md', '_sidbar.md', 'prompt.md', 'agents.md', 'changelog.md']
const basePath = '/'
const basePathAttachments = './'
const targetPath = './docs/'
const uriSuffix = '/'
const anchorPrefix = '#'
const attachmentsFolder = 'attachments'
const gitUrl = 'https://github.com/Mint-System/Odoo-Wiki/blob/main/'

const containerTypes = ['tip', 'warning', 'warnung', 'info']

function sanitizeName(name) {
  return name
    .toLocaleLowerCase()
    .replace(/\s+/g, '-')
    .replace(/%20/g, '-')
    .replace('---', '-')
    .replace('--', '-')
    .replace(/%c3%84/g, 'ä')
    .replace(/%c3%bc/g, 'ü')
    .replace(/%c3%a4/g, 'ä')
    .replace(/%c3%9c/g, 'ü')
    .replace(/%c3%b6/g, 'ö')
}

// Anchor slugs must match the identifiers Zensical/MkDocs generates from
// headings. MkDocs transliterates umlauts to their ASCII base letters,
// so `ü` -> `u`, `ä` -> `a`, `ö` -> `o`.
function sanitizeAssetname(name) {
  return sanitizeName(name)
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ä/g, 'a')
}

// In-page anchors follow the same slug rules as filenames, but MkDocs also
// strips slashes/punctuation from heading tokens, so `Web Grabber / Dumper
// Worker` becomes `web-grabber-dumper-worker` (no `-/-`).
function sanitizeAnchor(name) {
  return sanitizeAssetname(name)
    .replace(/\//g, '')
    .replace(/-{2,}/g, '-')
}

function loopMdFiles() {
  return fs
    .readdirSync(rootDir)
    .filter(
      (file) =>
        file.slice(-3) === '.md' &&
        !ignoreFiles.includes(file.toLowerCase())
    )
}

const groupBy =
  (key, sort = false) =>
  (array) => {
    const grouped = array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key]
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
      return objectsByKeyValue
    }, {})

    if (sort) {
      return Object.keys(grouped)
        .sort((a, b) => a.localeCompare(b))
        .reduce((acc, sortedKey) => {
          acc[sortedKey] = grouped[sortedKey]
          return acc
        }, {})
    }

    return grouped
  }

function removeDuplicates(arr) {
  return [...new Set(arr)]
}

function unquote(value) {
  return value.replace(/^(['"])(.*)\1$/, '$2')
}

// Minimal YAML frontmatter parser. Only needs the scalar fields and the
// first list entry used by the Vuepress `{{ $frontmatter.* }}` templates.
function parseFrontmatter(content) {
  const fm = {}
  const match = content.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n/)
  if (!match) return fm

  let listKey = null
  for (const line of match[1].split(/\r?\n/)) {
    // List items may be indented (`  - '18.0'`) or at column 0 (`- '16.0'`)
    const item = line.match(/^\s*-\s*(.*)$/)
    if (item) {
      if (listKey) fm[listKey].push(unquote(item[1].trim()))
      continue
    }
    const prop = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/)
    if (prop) {
      const key = prop[1].toLowerCase()
      const value = prop[2].trim()
      if (value === '') {
        listKey = key
        fm[key] = []
      } else {
        listKey = null
        fm[key] = unquote(value)
      }
    }
  }
  return fm
}

function resolveFrontmatter(key, fm) {
  const array = key.match(/^(\w+)\[(\d+)\]$/)
  if (array) {
    const values = fm[array[1]]
    return Array.isArray(values) ? values[Number(array[2])] : undefined
  }
  return fm[key]
}

// Resolve Vuepress `{{ $frontmatter.<field> }}` interpolation from the
// page frontmatter (description, name, forge, repo, versions[0], ...).
function resolveFrontmatterTemplates(content, fm) {
  return content.replace(
    /\{\{\s*\$frontmatter\.([^}\s]+)\s*\}\}/g,
    (match, key) => {
      const value = resolveFrontmatter(key, fm)
      return value !== undefined ? String(value) : match
    }
  )
}

function expandTemplate(str, fm) {
  return str.replace(/\$\{\s*\$frontmatter\.([^}\s]+)\s*\}/g, (match, key) => {
    const value = resolveFrontmatter(key, fm)
    return value !== undefined ? String(value) : match
  })
}

// Convert Vuepress `<a v-bind:href="`...`">label</a>` meta links
// (Repository / Runboat in the module footer) to markdown links.
function convertVueLinks(content, fm) {
  return content.replace(
    /<a v-bind:href="([^"]*)">([\s\S]*?)<\/a>(?:<!--\\?|-->|<?)/g,
    (match, href, text) => {
      const template = expandTemplate(href.trim().replace(/^`|`$/g, ''), fm)
      const label = text.trim() || template
      return template ? `[${label}](${template})` : match
    }
  )
}

// Convert Vuepress hard line breaks (`\` at end of line) to two trailing
// spaces, which MkDocs renders as a `<br>`. Fenced code blocks are left
// untouched.
function convertHardLineBreaks(content) {
  const lines = content.split(/\r?\n/)
  let inFence = false
  for (let i = 0; i < lines.length - 1; i++) {
    if (/^\s*(```|~~~)/.test(lines[i])) inFence = !inFence
    if (!inFence && lines[i].endsWith('\\')) {
      lines[i] = lines[i].slice(0, -1) + '  '
    }
  }
  return lines.join('\n')
}

// Convert Vuepress `:::` containers to MkDocs `!!!` admonitions. MkDocs
// requires the content to be indented by four spaces, so each level of
// container adds four spaces. Handles `:::`/`::::` markers with or without
// a space after the marker.
function convertContainers(content) {
  const lines = content.split(/\r?\n/)
  const out = []
  let depth = 0
  let inFence = false

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence

    const open = !inFence && line.match(/^\s*(:+) *([a-zA-Z]+)(.*)$/)
    if (open && containerTypes.includes(open[2])) {
      const type = open[2] === 'warnung' ? 'warning' : open[2]
      const title = open[3].replace(/\s+/g, ' ').trim()
      out.push('    '.repeat(depth) + `!!! ${type}${title ? ' ' + title : ''}`)
      depth++
      continue
    }

    if (!inFence && /^\s*:+\s*$/.test(line)) {
      if (depth > 0) depth--
      out.push('')
      continue
    }

    out.push('    '.repeat(depth) + line)
  }

  return out.join('\n')
}

// Vuepress `<Badge type="…" text="…" vertical="middle"/>` components are not
// part of Material/MkDocs. Rendered verbatim they are empty unknown elements
// (the label sits in the `text` attribute and would be invisible), so convert
// them to styled inline spans matching the CSS shipped in docs/stylesheets.
// Fenced code blocks are skipped so author-facing examples keep the raw markup.
function convertBadges(content) {
  const lines = content.split(/\r?\n/)
  let inFence = false

  return lines
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
      if (inFence) return line
      return line.replace(
        /<Badge\s+type="([^"]+)"\s+text="([^"]*)"\s+vertical\s*=\s*"middle"\s*\/?>/g,
        (_match, type, text) =>
          `<span class="md-badge md-badge--${type}">${text}</span>`
      )
    })
    .join('\n')
}

// In CommonMark `#DEPRECATED` (no space between `#` and the text) is still a
// valid ATX heading, so Vuepress' deprecation marker would render as a big
// `DEPRECATED` H1. Escape the hash so it shows up as literal `#DEPRECATED`.
// Fenced code blocks are skipped so author-facing examples keep the raw form.
function convertDeprecatedMarks(content) {
  const lines = content.split(/\r?\n/)
  let inFence = false

  return lines
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
      if (inFence) return line
      return line.replace(/^(\s*)(#deprecated)\s*$/gi, '$1\\$2')
    })
    .join('\n')
}

function convert(content, file) {
  const fm = parseFrontmatter(content)

  // Remove the Vuepress table-of-contents placeholder. Zensical renders the
  // table of contents automatically for each page.
  content = content.replace(/^\s*\[\[TOC\]\]\s*$/gm, '')

  // Resolve Vuepress template variables from the frontmatter
  content = resolveFrontmatterTemplates(content, fm)

  // Convert Vuepress `<a v-bind:href>` links (Repository / Runboat footer)
  content = convertVueLinks(content, fm)

  const mdVideo = /(!\[.*\]\(.*\.(webm|mp4)\))/g
  let matches = content.match(mdVideo) || []

  for (let i = 0; i < matches.length; i++) {
    let match = matches[i]
    let video = match.match(/!\[.*\]\((.*\..*)\)/)[1]
    video = sanitizeAssetname(video.replace(`${attachmentsFolder}/`, ''))

    content = content.replace(
      match,
      `<video width="560" height="240" controls><source src="${basePathAttachments}${video}"></video>`
    )
  }

  const mdImage = /(!\[.*?\]\(attachments.*?\..*?\))/g
  matches = content.match(mdImage) || []

  for (let i = 0; i < matches.length; i++) {
    let match = matches[i]
    let image = match.match(/!\[.*\]\((.*\..*)\)/)[1]
    image = sanitizeAssetname(image.replace(`${attachmentsFolder}/`, ''))

    content = content.replace(match, `![](${basePathAttachments}${image})`)
  }

  const mdLink =
    /\[((?:\!\[[^\]]*\]\([^)]+\))|[^\]]+)\]\((?!https:)([^)\s]+)(#[^\s)]*)?\)/g

  content = content.replace(mdLink, (match, title, href, anchorRaw) => {
    if (match.startsWith('![')) return match

    // Split anchor manually
    let [target, anchor] = href.split('#')

    let url
    if (!target) {
      // In-page anchor: [text](#Anchor) stays on the same page
      url = anchor
        ? anchorPrefix + sanitizeAnchor(anchor)
        : anchorPrefix
    } else {
      let cleanHref = sanitizeName(target.replace(/\.md$/, ''))

      // The home page is served at the site root
      url =
        cleanHref === 'readme'
          ? basePath
          : `${basePath}${cleanHref}${uriSuffix}`

      if (anchor) {
        url += anchorPrefix + sanitizeAnchor(anchor)
      }
    }

    return `[${title}](${url})`
  })

  // Vuepress hard line breaks (`\` at end of line)
  content = convertHardLineBreaks(content)

  // Vuepress `:::` containers to MkDocs admonitions
  content = convertContainers(content)

  // Vuepress `<Badge type="…" text="…" vertical="middle"/>` is not part of
  // Material/MkDocs. Without conversion it renders as an empty unknown element
  // (the version label lives in an HTML attribute, so it is invisible), hence
  // map it to a styled inline span.
  content = convertBadges(content)

  // Vuepress `#DEPRECATED` markers would otherwise render as H1 headings
  content = convertDeprecatedMarks(content)

  return content
}

// Build vars
var files = []
var slugToTitle = {}
var args = process.argv.slice(2)
var firstArg = args[0]

if (!fs.existsSync(targetPath)) {
  fs.mkdirSync(targetPath)
}

// Remove previously generated markdown and attachments from docs/. Static
// subdirectories (assets, javascripts, stylesheets) are kept.
function cleanTargetFiles() {
  for (const entry of fs.readdirSync(targetPath, { withFileTypes: true })) {
    if (entry.isFile()) {
      fs.rmSync(path.join(targetPath, entry.name), { force: true })
    }
  }
  console.log('Cleaning target files finished.')
}

if (!firstArg || firstArg === 'all') {
  cleanTargetFiles()
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) >= 0) {
  // log
  console.log('Build title index ...')

  // loop all markdown files
  loopMdFiles().forEach((file) => {
    // Read file and split into lines
    let lines = fs.readFileSync(path.join(rootDir, file), 'utf8').split(/\r?\n/)

    // Find title
    let title = null
    for (let line of lines) {
      if (
        line.startsWith('# ') ||
        line.startsWith('## ') ||
        line.startsWith('### ')
      ) {
        // Get title
        title = line.replace(/^#+\s+/, '').trim()
        break
      }
    }

    // Use filename as title
    if (!title) {
      title = file.replace('.md', '')
    }

    // create file link list
    files.push({
      source: title.trim(),
      target: file,
      // A title that starts with whitespace (e.g. `#  Name`) must be trimmed,
      // otherwise its first letter is a space and the glossary gets an empty
      // section heading (broken `#_1` anchor).
      firstLetter: (title.trim().charAt(0) || '').toUpperCase(),
    })
  })

  // log
  console.log('Building title index finished.')

  // Map page slugs to their titles so the Vuepress `prev` back link can be
  // labelled with the target page's real title instead of „Zurück”.
  slugToTitle = {}
  files.forEach((f) => {
    slugToTitle[sanitizeName(f.target.replace(/\.md$/, ''))] = f.source
  })
}

if (!firstArg || ['all', 'convert'].indexOf(firstArg) >= 0) {
  // log
  console.log('Convert files ...')

  // loop all markdown files of the current folder
  loopMdFiles().forEach((file) => {
    // get markdown content
    let content = fs.readFileSync(path.join(rootDir, file), 'utf8')

    // set new file name
    let newfile = targetPath + sanitizeName(file)

    // The home page (index.md) lives at the site root
    if (newfile.endsWith('readme.md')) {
      newfile = targetPath + 'index.md'
    }

    // convert content
    content = convert(content, file)

    // add a footer with an edit link. Mint System GmbH is attributed in the
    // Zensical site footer (zensical.toml `copyright`), so no credit is
    // repeated in the page body.
    content =
      content +
      [
        '\n\n',
        '<hr>',
        '\n',
        '[📝 Edit on GitHub](' +
          gitUrl +
          file.replace(/\s+/g, '%20') +
          ')',
        '\n',
      ].join('')

    // Vuepress `prev` frontmatter: render the previous page as a return link
    // at the TOP of the document (in the header, above the title). The link is
    // labelled with the target page's real title when resolvable.
    const prev = parseFrontmatter(content).prev
    if (prev) {
      const prevValue = prev
        .replace(/^[./]+/, '')
        .replace(/\.md$/, '')
        .replace(/\/+$/, '')
      const slug =
        prevValue && prevValue.toLowerCase() !== 'readme'
          ? sanitizeName(prevValue.replace(/_/g, '-'))
          : ''
      const url = slug === '' ? '/' : `/${slug}/`
      const label = slug === '' ? null : slugToTitle[slug]

      // Insert the return link right after the frontmatter block (keeping it
      // valid) and thus above the page title.
      const headerLink = `[← ${label || 'Home'}](${url})\n\n`
      const withHeaderLink = content.replace(
        /^---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n/,
        (frontmatter) => frontmatter + headerLink
      )
      content = withHeaderLink === content ? headerLink + content : withHeaderLink
    }

    fs.writeFileSync(newfile, content, 'utf8')
  })

  // log
  console.log('Converting files finished.')
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) >= 0) {
  // log
  console.log('Build glossary ...')

  // Group files by first letter
  groupedFiles = groupBy('firstLetter', true)(files)
  content = ['# Glossary', '\n']

  Object.keys(groupedFiles).forEach(function (key) {
    content.push(`## ${key}`)
    content.push('\n', '\n')
    groupedFiles[key].forEach((link) => {
      // The home page is served at the site root
      const target =
        link.target.toLowerCase() === 'readme.md'
          ? '/'
          : sanitizeName(link.target)
      content.push(`[${link.source}](${target})  `)
      content.push('\n')
    })
    content.push('\n')
  })

  // write content to index file
  fs.writeFileSync(targetPath + 'glossary.md', content.join(''), 'utf8')

  // log
  console.log('Building glossary finished.')
}

if (!firstArg || ['all', 'attachments'].indexOf(firstArg) >= 0) {
  // log
  console.log('Move attachments ...')

  // Loop all asset files
  fs.readdirSync(path.join(rootDir, attachmentsFolder)).forEach((file) => {
    // Set new file name
    let newfile = targetPath + sanitizeAssetname(file)

    // Copy asset file
    fs.copyFileSync(
      path.join(rootDir, attachmentsFolder, file),
      path.join(rootDir, newfile)
    )
  })

  // log
  console.log('Moving attachments finished.')
}
