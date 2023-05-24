const fs = require('fs')
var path = require('path')

/* arguments:
all
index
convert
assets
sitemap
sidebar
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
const sidebarAppend = ['glossary.md','contribution.md']


function loopMdFiles() {
    return fs.readdirSync(__dirname).filter(file => (file.slice(-3) === '.md') && (ignoreFiles.indexOf(file) != 0))
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
