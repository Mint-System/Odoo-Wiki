const fs = require('fs')
var path = require('path')

/* arguments:
all
index
convert
assets
sitemap
*/

// settings
const ignoreFiles = ['_navbar.md', '_sidbar.md']
const scheme = 'https://'
const hostname = 'www.odoo-wiki.org'
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

const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
        const value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
    }, {});

function convert(content,file) {

    // convert markdown video links
    // ![](Video.webm) -> <video width="560" height="240" controls><source src="./assets/video.webm"></video> 
    const mdVideo = /(!\[.*\]\(.*\.(webm|mp4)\))/g
    matches = content.match(mdVideo) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        
        let video = match.match(/!\[.*\]\((.*\..*)\)/)[1]
        video = sanitizeAssetname(video.replace(`${assetsFolder}/`,''))

        content = content.replace(match, `<video width="560" height="240" controls><source src="${basePathAssets}${video}"></video>`)
    }

    // convert markdown image links
    // ![title](Image.png) -> ![](./assets/image.png)
    const mdImage = /(!\[.*?\]\(.*?\..*?\))/g
    matches = content.match(mdImage) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        
        let image = match.match(/!\[.*\]\((.*\..*)\)/)[1]
        image = sanitizeAssetname(image.replace(`${assetsFolder}/`,''))
                
        content = content.replace(match, `![](${basePathAssets}${image})`)
    }

    // convert markdown links
    // [Title](Content.md#link to heading) -> [Title](Content.html#link-to-heading)
    const mdLink = /(?<!!)(\[.*\]\([^\)]*\.md.*\))/g
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
    // const mdInclude = /(!\[.*?\]\(.*?\.md\))/g
    // matches = content.match(mdInclude) || []
    // for (i = 0; i < matches.length; i++) {
    //     let match = matches[i]
        
    //     let include = match.match(/!\[.*\]\((.*\.md)\)/)[1]
    //     include = sanitizeName(include)
                
    //     content = content.replace(match, `!!!include(${include})!!!`)
    // }

    // return content
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
 
if (!firstArg || ['all', 'convert'].indexOf(firstArg) >= 0) {

    // log
    console.log('Convert files ...')

    // loop all markdown files of the current folder
    loopMdFiles().forEach((file) => {

        // get markdown content
        let content = fs.readFileSync(file, 'utf8')

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

    // log
    console.log('Converting files finished.')
}

if (!firstArg || ['all', 'index'].indexOf(firstArg) > 0) {
    
    // log
    console.log('Build glossary ...')

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

    // log
    console.log('Building glossary finished.')
}

if (!firstArg || ['all', 'assets'].indexOf(firstArg) > 0) {
        
    // log
    console.log('Move assets ...')

    // Loop all asset files
    fs.readdirSync(path.join(__dirname, assetsFolder)).forEach((file) => {
        
        // set new file name
        newfile = sanitizeAssetname(file)

        // move asset file
        fs.renameSync(path.join(__dirname, assetsFolder,file), path.join(__dirname, newfile))
    })
 
    // log
    console.log('Moving assets finished.')
}


if (!firstArg || ['all', 'sitemap'].indexOf(firstArg) > 0) {
    
    // log
    console.log('Build sitemap ...')

    content = []
    loopMdFiles().forEach((file) => {
        href = sanitizeName(file.replace('\.md', ''))
        content.push(`${scheme}${hostname}${basePath}${href}${uriSuffix}\n`)
    })
    
    // write content to index file
    fs.writeFileSync('.vuepress/public/sitemap.txt', content.join(''), 'utf8')

    // log
    console.log('Building sitemap finished.')
}