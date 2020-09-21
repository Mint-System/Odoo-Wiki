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

    content = convert.convert(content,file)

    // write content back to file
    // fs.writeFileSync(file, content, 'utf8')
})

// write paths.json for search index
const content = `const paths = ${JSON.stringify(paths)}`
fs.writeFileSync('paths.js', content, 'utf8')