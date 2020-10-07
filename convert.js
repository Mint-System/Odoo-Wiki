function convert(content,file) {
    
    // convert wiki image links
    // const wikiImage = /\!.*\]\(([^\]]*)(.jpg|.png|.gif)\)/g
    // content = content.replace(wikiImage, '<img src="/assets/$1$2" \/>')

    // convert headings links
    // ()[#link to heading] -> ()[#link-to-heading]

    // add footer
    content = content + [
        '\n\n',
        '<hr>',
        '\n\n',
        '[📝 Edit on GitHub](' + 'https://github.com/Mint-System/Odoo-Handbuch/blob/master/' + file + ')',
        '\n\n',
        '[📂 Open in Obsidan](' + 'obsidian://open?vault=Odoo%20Handbuch&file=' + file + " ':target=_self')",
        '\n\n',
        '<footer>',
        'Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a>',
        '</footer>'
    ].join('')

    return content
}

exports.convert = convert
