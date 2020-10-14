function sanitizeHeading(heading) {
    return heading.toLocaleLowerCase().replace(/%20/g, '-').replace('---','-')
}

function convert(content,file) {
    
    // convert links    
    const link = /\]\(([^\)]*)/g
    matches = content.match(link) || []
    for (i = 0; i < matches.length; i++) {
        let match = matches[i]

        // ()[#link to heading] -> ()[#link-to-heading]
        let href = match.match(/#(.*)/)
        if (href) {
            let newHref = sanitizeHeading(href[0])
            content = content.replace(href[0],newHref)
        }
    }

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
