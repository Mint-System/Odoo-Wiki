const fs = require('fs')
const convert = require('./convert')

const paths = []
const ignoreFiles = ['_navbar.md', '_sidbar.md']

// loop all markdown files of the current folder
fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md') && (ignoreFiles.indexOf(file) != 0)).forEach((file) => {

    // push filename
    paths.push('/' + encodeURI(file.replace('.md', '')))

    // get markdown content
    var content = fs.readFileSync(file, 'utf8')

    // add footer
    content = content + [
        '\n\n',
        '<hr>',
        '\n\n',
        '[📝 Edit on GitHub](' + 'https://github.com/Mint-System/Odoo-Handbuch/blob/master//' + file.replace(/\s+/g, '%20') + ')',
        '\n\n',
        '[📂 Open in Obsidan](' + 'obsidian://open?vault=Odoo%20Handbuch&file=' + file.replace(/\s+/g, '%20') + ')',
        '\n\n',
        '<footer>',
        'Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a>',
        '</footer>'
    ].join('')

    // write content back to file
    fs.writeFileSync(file, content, 'utf8')
})

// write paths.json for search index
const content = `const paths = ${JSON.stringify(paths)}`
fs.writeFileSync('paths.js', content, 'utf8')