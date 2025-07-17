---
title: Mail Activity Datetime
description: Datum mit Zeit für Fälligkeit von Aktivität.
kind: howto
tags:
- Mint-System
prev: ./dialog
---
# Mail Activity Datetime
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mail_activity_datetime`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/14.0/mail_activity_datetime>

## Verwendung

### Aktivitäte mit Datum und Uhrzeit terminieren

Wenn Sie eine Aktivität erstellen können Sie auf dem Feld *Fälligkeit* die Uhrzeit festlegen.

::: warning
Technisch handelt sich um ein neues Feld `date_deadline_time`. Auf Kanban- und Listenansichten von `mail.activity` muss eine Anpassungen vorgenommen werden, damit das Feld angezeigt wird.
:::
