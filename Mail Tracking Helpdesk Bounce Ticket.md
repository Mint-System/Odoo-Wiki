---
title: Mail Tracking Helpdesk Bounce Ticket
description: Für E-Mails mit dem Status Bounced ein Helpdesk-Ticket erstellen.
kind: howto
tags:
- Drittanbieter
prev: ./dialog
---
# Mail Tracking Helpdesk Bounce Ticket
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mail_tracking_helpdesk_bounce_ticket`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/16.0/mail_tracking_helpdesk_bounce_ticket>

::: warning
Vor der Installation dieses Moduls wird empfohlen alle E-Mails im Status *Bounced* aus Odoo zu löschen oder den Status dieser E-Mails manuell zu ändern.
::::

## Beschreibung

Mit dieser Erweiterung wird für E-Mails im Status *Bounced* ein Kundendienst-Ticket erstellt.

## Aktionen

### Auf Bounced setzen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Auf Bounced setzen`\
Modell: `mail.tracking.email`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:
	rec.write({
	  'state': 'bounced'
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.