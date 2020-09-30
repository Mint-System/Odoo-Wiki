function convert(content,file) {
    // convert wiki image links
    // const wikiImage = /\!.*\]\(([^\]]*)(.jpg|.png|.gif)\)/g
    // content = content.replace(wikiImage, '<img src="/assets/$1$2" \/>')

    // add footer
    content = content + [
        '\n\n',
        '<hr>',
        '\n\n',
        '[📝 Edit on GitHub](' + 'https://github.com/Mint-System/Knowledge/blob/master/' + file + ')',
        '\n\n',
        '[📂 Open in Obsidan](' + 'obsidian://open?vault=Knowledge%20Mint%20System&file=' + file + " ':target=_self')",
        '\n\n',
        '<footer>',
        'Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a>',
        '</footer>'
    ].join('')

    return content
}

exports.convert = convert
