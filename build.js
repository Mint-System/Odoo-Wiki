const fs = require('fs')
var path = require('path')

/* arguments:
all
vuepress
index
convert
attachments
sitemap
sidebar
*/

// settings
const ignoreFiles = ['_navbar.md', '_sidbar.md']
const scheme = 'https://'
const hostname = 'www.odoo-wiki.org'
const basePath = '/'
const basePathAttachments = './'
const targetPath = './src/'
const uriSuffix = '.html'
const anchorPrefix = '#'
const attachmentsFolder = 'attachments'
const gitUrl = 'https://github.com/Mint-System/Odoo-Handbuch/blob/master/'
const sidebarAppend = ['glossary.md','contribution.md']
const ignoreLinks = 'TOC'

function sanitizeName(name) {
    return name.toLocaleLowerCase()
        .replace(/\s+/g, '-')
        .replace(/%20/g,'-')
        .replace('---','-')
        .replace('--','-')        
        .replace(/%c3%84/g,'ä')
        .replace(/%c3%bc/g,'ü')
        .replace(/%c3%a4/g,'ä')
        .replace(/%c3%9c/g,'ü')
        .replace(/%c3%b6/g,'ö')
}

function sanitizeAssetname(name) {
    return name.toLocaleLowerCase()
        .replace(/\s+/g, '-')
        .replace(/%20/g,'-')
        .replace('---','-')
        .replace('--','-')        
        .replace(/%c3%84/g,'ä')
        .replace(/%c3%bc/g,'ü')
        .replace(/%c3%a4/g,'ä')
        .replace(/%c3%9c/g,'ü')
        .replace(/%c3%b6/g,'ö')
        .replace(/ö/g,'o')
        .replace(/ü/g, 'u')
        .replace(/ä/g,'a')
}

function loopMdFiles() {
    return fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md') && (ignoreFiles.indexOf(file) != 0))
}

const groupBy = (key, sort = false) => array => {
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
    return [...new Set(arr)];
}

function convert(content,file) {

    // convert markdown video links
    // ![](attachments/Video.webm) -> <video width="560" height="240" controls><source src="./video.webm"></video> 
    const mdVideo = /(!\[.*\]\(.*\.(webm|mp4)\))/g
    matches = content.match(mdVideo) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        
        let video = match.match(/!\[.*\]\((.*\..*)\)/)[1]
        video = sanitizeAssetname(video.replace(`${attachmentsFolder}/`,''))

        content = content.replace(match, `<video width="560" height="240" controls><source src="${basePathAttachments}${video}"></video>`)
    }

    // convert markdown image links
    // ![title](attachments/Image.png) -> ![](./image.png)
    const mdImage = /(!\[.*?\]\(attachments.*?\..*?\))/g
    matches = content.match(mdImage) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        
        let image = match.match(/!\[.*\]\((.*\..*)\)/)[1]
        image = sanitizeAssetname(image.replace(`${attachmentsFolder}/`,''))
                
        content = content.replace(match, `![](${basePathAttachments}${image})`)
    }

    // convert markdown links
    // [Title](Content.md#link to heading) -> [Title](Content.html#link-to-heading)
    // Ignore [![Title](Link)](Link) and ![title](attachments/Image.png) and [title](https:)
    const mdLink = /(?<!!)(\[(?!!).+\])(\((?!https:).+[.md#|\.md].+?\))/g
    const mdHref = /.+\]\(([^\)|#]*)/
    const mdTitle = /\[(.*)\]\(/
    const mdAnchor = /#(.*)\)/
    matches = content.match(mdLink) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]

        let href = match.match(mdHref)[1] || file
        let title = match.match(mdTitle)[1]
        let anchor = null

        // set anchor
        if (match.indexOf('#') > 0) {
            anchor = match.match(mdAnchor)[1]

            // sanitize anchor link
            anchor = sanitizeAssetname(anchor)
        }

        // sanitize href
        href = sanitizeName(href.replace('\.md', ''))

        let mdLink = `[${title}](${basePath}${href}${uriSuffix}${anchor ? (anchorPrefix + anchor) : ''})`
        content = content.replace(match, mdLink)
    }

    // convert include markdown links
    // ![title](file.md) -> !!!include(file.md)!!!
    const mdInclude = /(!\[.*?\]\(.*?\.md\))/g
    matches = content.match(mdInclude) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        
        let include = match.match(/!\[.*\]\((.*\.md)\)/)[1]
        include = sanitizeName(include)
                
        content = content.replace(match, `!!!include(${include})!!!`)
    }

    return content
}

// Build vars
var files = []
var args = process.argv.slice(2);
var firstArg = args[0]

if (!firstArg || ['all', 'index'].indexOf(firstArg) >= 0) {

    // log
    console.log('Build title index ...')

    // loop all markdown files
    loopMdFiles().forEach((file) => {

        // Read file and split into lines
        let lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);

        // Find title
        let title = null
        for (let line of lines) {
            if (line.startsWith('# ') || line.startsWith('## ') || line.startsWith('### ')) {
                // Get title
                title = line.replace('### ','').replace('## ','').replace('# ','')
                break
            }
        }

        // Use filename as title
        if (!title) {
            title = file.replace('.md','')
            // throw new Error(`Could not find title for '${file}'.`)
        }

        // create file link list
        files.push({ source: title, target: file, firstLetter: title[0].toUpperCase() })
    })

    // log
    console.log('Building title index finished.')
}

if (!firstArg || ['all', 'sidebar'].indexOf(firstArg) > 0) {
    
    // log
    console.log('Build sidebar ...')

    sidebar = []
    childrenExtension = []
    childrenTopic = []

    // Read file and split into lines
    let lines = fs.readFileSync('README.md', 'utf8').split(/\r?\n/);

    // Find sidebar items
    for (let line of lines) {
        if (line.startsWith('### ')) {
            // Add file name to content list
            filename = line.slice(0, -1).split('](')[1]
            if (filename != undefined) {
                filename = filename.replace(/%20/g,' ')

                sidebar.push(sanitizeName(filename))

                // Read file and split into lines
                lines = fs.readFileSync(filename, 'utf8').split(/\r?\n/);

                // Find sidebar topics and extensions
                isTopic = false
                isExtension = false
                sidebarExtension = []
                sidebarTopic = []
                for (let line of lines) {

                    try {
                        if (line.startsWith('## Bereiche')) { isTopic = true, isExtension = false}
                        if (line.startsWith('## Erweiterungen')) { isExtension = true, isTopic = false}

                        if (line.startsWith('| [')) {
                            // Add file name to content list
                            subfilename = line.split('](')[1].split(')')[0].replace(/%20/g,' ')
                            if (isExtension) { sidebarExtension.push(sanitizeName(subfilename)) }
                            if (isTopic) { sidebarTopic.push(sanitizeName(subfilename)) }
                        }       
                    } catch(error) {
                        console.log(filename)
                        console.error(error)                        
                    }
                }

                if (sidebarExtension.length > 0) {
                    childrenExtension.push({
                        text: filename.split('.md')[0],
                        collapsible: true,
                        children: removeDuplicates(sidebarExtension)
                    })
                }
                if (sidebarTopic.length > 0) {
                    childrenTopic.push({
                        text: filename.split('.md')[0],
                        collapsible: true,
                        children: removeDuplicates(sidebarTopic)
                    })
                }
            }
        }
    }

    childrenBestPractice = []

    // Read file and split into lines
    lines = fs.readFileSync('Best Practice.md', 'utf8').split(/\r?\n/);

    // Find sidebar items
    for (let line of lines) {
        if (line.startsWith('* [')) {
            // Add file name to content list
            filename = line.slice(0, -1).split('](')[1]
            if (filename != undefined) { childrenBestPractice.push(sanitizeName(filename)) }
        }
    }

    // Assemble sidebar
    sidebarMain = [
        {
            text: 'Best Practice',
            link: 'best-practice.md',
            collapsible: true,
            children: removeDuplicates(childrenBestPractice.sort())
        }
    ]
    sidebarExtension = [
        {
            text: 'Erweiterungen',
            collapsible: true,
            children: removeDuplicates(childrenExtension.sort())
        }
    ]
    sidebarTopic = [
        {
            text: 'Bereiche',
            collapsible: true,
            children: removeDuplicates(childrenTopic.sort())
        }
    ]    
    sidebar = [].concat(sidebarMain, sidebar, sidebarTopic, sidebarExtension, sidebarAppend)
    
    // write content to sidebar file
    sidebar = `export default ${JSON.stringify(sidebar, null, 2)}`
    fs.writeFileSync('.vuepress/sidebar.js', sidebar, 'utf8')

    // log
    console.log('Building sidebar finished.')
}

if (!firstArg || ['all', 'vuepress'].indexOf(firstArg) >= 0) {

    // log
    console.log('Copy vuepress files ...')

    if (!fs.existsSync(targetPath)){
        fs.mkdirSync(targetPath)
    }
    fs.cpSync('.vuepress', './src/.vuepress', {recursive: true})


    // log
    console.log('Copying vuepress files finished.')
}

if (!firstArg || ['all', 'convert'].indexOf(firstArg) >= 0) {

    // log
    console.log('Convert files ...')

    // loop all markdown files of the current folder
    loopMdFiles().forEach((file) => {

        // get markdown content
        let content = fs.readFileSync(file, 'utf8')

        // set new file name
        newfile = targetPath + sanitizeName(file)

        // convert content
        content = convert(content, file)

        // add footer
        content = content + [
            '\n\n',
            '<hr>',
            '\n\n',
            '[📝 Edit on GitHub](' + gitUrl + file.replace(/\s+/g, '%20') + ')',
            '\n\n',
            '<footer>',
            'This page is maintained by <a href="https://www.mint-system.ch/">Mint System GmbH</a>',
            '</footer>'
        ].join('')
  
        fs.writeFileSync(newfile, content, 'utf8')
    })

    // log
    console.log('Converting files finished.')
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) > 0) {
    
    // log
    console.log('Build glossary ...')

    // Group files by first letter
    groupedFiles = groupBy('firstLetter', true)(files)
    content = [
        '# Glossary',
        '\n'
    ]

    Object.keys(groupedFiles).forEach(function(key) {
        content.push(`## ${key}`)
        content.push('\n','\n')
        groupedFiles[key].forEach((link) => {
            content.push(`[${link.source}](${sanitizeName(link.target)})  `)
            content.push('\n')
        })
        content.push('\n')
    })
    
    // write content to index file
    fs.writeFileSync(targetPath + 'glossary.md', content.join(''), 'utf8')

    // log
    console.log('Building glossary finished.')
}

if (!firstArg || ['all', 'attachments'].indexOf(firstArg) > 0) {
        
    // log
    console.log('Move attachments ...')

    // Loop all asset files
    fs.readdirSync(path.join(__dirname, attachmentsFolder)).forEach((file) => {
        
        // Set new file name
        newfile = targetPath + sanitizeAssetname(file)

        // Copy asset file
        fs.copyFileSync(path.join(__dirname, attachmentsFolder,file), path.join(__dirname, newfile))
    })
 
    // log
    console.log('Moving attachments finished.')
}


if (!firstArg || ['all', 'sitemap'].indexOf(firstArg) > 0) {
    
    // log
    console.log('Build sitemap ...')

    content = []
    loopMdFiles().forEach((file) => {
        href = sanitizeName(file.replace('\.md', ''))
        loc = `${scheme}${hostname}${basePath}${href}${uriSuffix}`
        stats = fs.statSync(file)
        date = new Date(stats.mtime)
        lastmod = date.toISOString().substring(0, 10)

        content.push(`<url>
<loc>${loc}</loc>
<lastmod>${lastmod}</lastmod>
<changefreq>daily</changefreq>
<priority>0.5</priority>
</url>`)
    })

    xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${content.join('\n')}
</urlset> 
    `
    
    // write content to index file
    fs.writeFileSync('.vuepress/public/sitemap.xml', xml, 'utf8')

    // log
    console.log('Building sitemap finished.')
}
