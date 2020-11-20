const fs = require('fs')
var path = require('path')

// settings
const ignoreFiles = ['_navbar.md', '_sidbar.md']
const basePath = '/'
const basePathAssets = './'
const uriSuffix = '.html'
const anchorPrefix = '#'
const gitUrl = 'https://github.com/Mint-System/Odoo-Handbuch/blob/master'

function sanitizeName(name) {
    return name.toLocaleLowerCase().replace(/\s+/g, '-').replace('---','-').replace(/%20/g,'-')
}

function sanitizeAssetname(name) {
    return name.toLocaleLowerCase().replace(/\s+/g, '-').replace('---','-').replace('%c3%84','ae').replace('%c3%bc','ue').replace('%c3%a4','ae').replace('%c3%9c','ue').replace('ö','oe').replace('ü','ue').replace('ä','ae').replace(/%20/g,'-')
}

function convert(content,file) {

    // convert wiki image links
    // ![[Image.png]] -> ![](./assets/image.png)
    const wikiImage = /!\[\[([^\]]*\.png|jpg|jpeg|svg|gif)\]\]/g
    let matches = content.match(wikiImage) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let image = sanitizeAssetname(match.match(/!\[\[([^\]]*)/)[1])
        content = content.replace(match, `![](${basePathAssets}${image})`)
    }

    // convert embeded content links
    // ![[Content]] -> [Content](Content.md ':include')
    const embededContent = /!\[\[([^\]]*)\]\]/g
    matches = content.match(embededContent) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        let title = encodeURI(match.match(/\[\[([^\]|#]*)/)[1])
        content = content.replace(embededContent, `[$1](${title}.md ':include')`)
    }

    // convert wiki links
    // [[href#anchor|title] -> [title](href#anchor)
    const wikiLink = /\[\[([^\]]*)\]\]/g
    matches = content.match(wikiLink) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]

        let href = match.match(/\[\[([^\]|#]*)/)[1]
        let title = match.match(/\[\[([^\]|#]*)/)[1]
        let anchor = null

        // set anchor
        if (match.indexOf('#') > 0) {
            anchor = match.match(/#([^\||\]]*)/)[1]
            // sanitize anchor link
            anchor = sanitizeName(anchor)
        }

        // set title and href
        if (match.indexOf('|') > 0) {
            href = match.match(/\[\[([^\||#]*)/)[1]
            title = match.match(/\|(.*)\]\]/)[1]
        }

        // sanitize href
        href = sanitizeName(href ? href : file.replace('\.md', ''))

        content = content.replace(match, `[${title}](${basePath}${href}${uriSuffix}${anchor ? (anchorPrefix + anchor) : ''})`)
    }

    // convert markdown image links
    // ![title](Image.png) -> ![](./assets/image.png)
    const mdImage = /(!\[.*\]\(.*\..*\))/g
    matches = content.match(mdImage) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]
        
        let image = match.match(/!\[.*\]\((.*\..*)\)/)[1]
        image = sanitizeAssetname(image.replace('assets/',''))
                
        content = content.replace(match, `![](${basePathAssets}${image})`)
    }

    // convert markdown links
    // ()[Content#link to heading] -> ()[content#link-to-heading]
    // FIXME does not get link
    const mdLink = /[^!](\[.*\(*\))/g
    matches = content.match(mdLink) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]

        let href = match.match(/\]\(([^\)|#]*)/)[1]
        let title = match.match(/\[([^\]]*)\]\(/)[1]
        let anchor = null

        // set anchor
        if (match.indexOf('#') > 0) {
            anchor = match.match(/#(.*)/)[1]
            // sanitize anchor link
            anchor = sanitizeName(anchor)
        }

        // sanitize href
        href = sanitizeName(href.replace('\.md', ''))

        content = content.replace(match, `[${title}](${basePath}${href}${uriSuffix}${anchor ? (anchorPrefix + anchor) : ''})`)
    }

    return content
}

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

// Loop all asset files
fs.readdirSync(__dirname + '/assets').forEach((file) => {
    
    // set new file name
    newfile = sanitizeAssetname(file)

    // move asset file
    fs.renameSync(__dirname + '/assets/' + file, __dirname + '/' + newfile)
})