const fs = require('fs')
var path = require('path')

/* arguments:
all
frontmatter
*/

// settings
const ignoreFiles = ['_navbar.md', '_sidbar.md']

function loopMdFiles() {
  return fs
    .readdirSync(__dirname)
    .filter(
      (file) => file.slice(-3) === '.md' && ignoreFiles.indexOf(file) != 0
    )
}

// Build vars
var files = []
var args = process.argv.slice(2)
var firstArg = args[0]

if (!firstArg || ['all', 'frontmatter'].indexOf(firstArg) >= 0) {
  // log
  console.log('Update frontmatter ...')

  // loop all markdown files
  loopMdFiles().forEach((file) => {
    // Read file and split into lines
    let lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)

    // Find title
    let title = null
    for (let line of lines) {
      if (
        line.startsWith('# ') ||
        line.startsWith('## ') ||
        line.startsWith('### ')
      ) {
        // Get title
        title = line.replace('### ', '').replace('## ', '').replace('# ', '')
        break
      }
    }

    // Find title
    let content = []
    let frontmatter = []
    let isFrontmatter = false
    for (let line of lines) {
      if (line.startsWith('---')) {
        isFrontmatter = !isFrontmatter
      }
      if (isFrontmatter && !line.startsWith('---')) {
        frontmatter.push(line)
      }
      if (!isFrontmatter && !line.startsWith('---')) {
        content.push(line)
      }
    }

    // Update frontmatter title
    frontmatterTitle = 'title: ' + title
    let hasFrontmatterTitle = false
    for (let i in frontmatter) {
      line = frontmatter[i]
      if (line.startsWith('title: ')) {
        hasFrontmatterTitle = true
        frontmatter[i] = frontmatterTitle
      }
    }
    if (!hasFrontmatterTitle) {
      frontmatter.unshift(frontmatterTitle)
    }

    // add footer
    new_content = ['---'].concat(frontmatter, ['---'], content).join('\n')

    // Write content to file
    fs.writeFileSync(file, new_content, 'utf8')
  })

  // log
  console.log('Updating frontmatter.')
}
