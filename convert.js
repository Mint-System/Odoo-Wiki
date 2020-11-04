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

    return content
}

exports.convert = convert
