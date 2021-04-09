const fs = require('fs')
var path = require('path')

/* arguments:
all
index
convert
assets
*/

// settings
const ignoreFiles = ['_navbar.md', '_sidbar.md']
const basePath = '/'
const basePathAssets = './'
const uriSuffix = '.html'
const anchorPrefix = '#'
const assetsFolder = 'assets'
const gitUrl = 'https://github.com/Mint-System/Odoo-Handbuch/blob/master/'

function sanitizeName(name) {
    return name.toLocaleLowerCase()
        .replace(/\s+/g, '-')
        .replace(/%20/g,'-')
        .replace('---','-')
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
        .replace(/%c3%84/g,'ä')
        .replace(/%c3%bc/g,'ü')
        .replace(/%c3%a4/g,'ä')
        .replace(/%c3%9c/g,'ü')
        .replace(/%c3%b6/g,'ö')
        .replace(/ö/g,'o')
        .replace(/ü/g, 'u')
        .replace(/ä/g,'a')
}

const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});

function convert(content,file) {

    // convert markdown image links
    // ![title](Image.png) -> ![](./assets/image.png)
    const mdImage = /(!\[.*\]\(.*\..*\))/g
    matches = content.match(mdImage) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        
        let image = match.match(/!\[.*\]\((.*\..*)\)/)[1]
        image = sanitizeAssetname(image.replace(`${assetsFolder}/`,''))
                
        content = content.replace(match, `![](${basePathAssets}${image})`)
    }

    // convert markdown links
    // ()[Content#link to heading] -> ()[content#link-to-heading]
    const mdLink = /(?<!!)(\[[^\]]*\]\([^\)]*\))/g
    matches = content.match(mdLink) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]

        let href = match.match(/\]\(([^\)|#]*)/)[1] || file
        let title = match.match(/\[([^\]]*)\]\(/)[1]
        let anchor = null

        // set anchor
        if (match.indexOf('#') > 0) {
            anchor = match.match(/#([^\)]*)/)[1]
            // sanitize anchor link
            anchor = sanitizeAssetname(anchor)
        }

        // sanitize href
        href = sanitizeName(href.replace('\.md', ''))

        let mdLink = `[${title}](${basePath}${href}${uriSuffix}${anchor ? (anchorPrefix + anchor) : ''})`
        content = content.replace(match, mdLink)
    }

    return content
}

// Build vars
var files = []
var args = process.argv.slice(2);
var firstArg = args[0]

if (!firstArg || ['all', 'index'].indexOf(firstArg) >= 0) {
    // loop all markdown files
    fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md') && (ignoreFiles.indexOf(file) != 0)).forEach((file) => {

        // create file link list
        files.push({ source: file.replace('\.md', ''), target: file, firstLetter: file[0].toUpperCase() })
    })
}
 
if (!firstArg || ['all', 'convert'].indexOf(firstArg) >= 0) {
    // loop all markdown files of the current folder
    fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md') && (ignoreFiles.indexOf(file) != 0)).forEach((file) => {

        // get markdown content
        var content = fs.readFileSync(file, 'utf8')

        // set new file name
        newfile = sanitizeName(file)

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
            'Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a>',
            '</footer>'
        ].join('')

        // Delete existing file
        fs.unlinkSync(file)

        // write content to new file
        fs.writeFileSync(newfile, content, 'utf8')
    })
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) > 0) {
    
    // Group files by first letter
    groupedFiles = groupBy('firstLetter')(files)
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
    fs.writeFileSync('glossary.md', content.join(''), 'utf8')
}

if (!firstArg || ['all', 'assets'].indexOf(firstArg) > 0) {
    // Loop all asset files
    fs.readdirSync(path.join(__dirname, assetsFolder)).forEach((file) => {
        
        // set new file name
        newfile = sanitizeAssetname(file)

        // move asset file
        fs.renameSync(path.join(__dirname, assetsFolder,file), path.join(__dirname, newfile))
    })
}