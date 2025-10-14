---
title: Mail Show Follower
description: CC-Hinweis in E-Mail-Header einfügen.
kind: howto
partner: OCA
prev: ./dialog
---

# Mail Show Follower

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `mail_show_follower`\
Repository: <https://github.com/OCA/social/tree/17.0/mail_show_follower>

## Konfiguration

### Format für CC-Hinweis definieren

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Diskussion_. Im Bereich _Show Followers on mails_ können Sie das Format des CC-Hinweis festlegen. Verwenden Sie die folgenden Angaben:

- **Text 'Sent to'**: `Diese Nachricht wurde an folgende Empfänger geschickt:`
- **Partner format**: `%(partner_name)s`
- **Text 'Replies'**: `Hinweis: Bei einer Antwort erhalten alle Empfänger eine Beanchrichtigung.`
- **Models to exclude**: `blog.blog,blog.post,slide.slide,slide.channel,forum.forum,forum.post`

![](attachments/Mail%20Show%20Follower.png)

## Verwendung

### CC-Hinweis in E-Mail einfügen

Mit dieser Erweiterung wird bei mehreren Empfängern von E-Mails einen Hinweis mit den Namen der Empfänger im E-Mail eingefügt.

![](attachments/Mail%20Show%20Follower%20Example.png)
