---
description: Für E-Mails mit dem Status Bounced ein Helpdesk-Ticket erstellen.
forge: github.com
kind: howto
name: mail_tracking_helpdesk_bounce_ticket
partner: Mint System
prev: ./discuss
repo: Mint-System/Odoo-Apps-Server-Tools
title: Mail Tracking Helpdesk Bounce Ticket
versions:
- '16.0'
---


# Mail Tracking Helpdesk Bounce Ticket

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

::: warning
Vor der Installation dieses Moduls wird empfohlen alle E-Mails im Status _Bounced_ aus Odoo zu löschen oder den Status dieser E-Mails manuell zu ändern.
::::

## Beschreibung

Mit dieser Erweiterung wird für E-Mails im Status _Bounced_ ein Kundendienst-Ticket erstellt.

## Aktionen

### Auf Bounced setzen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Auf Bounced setzen`\
Modell: `mail.tracking.email`\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
for rec in records:
	rec.write({
	  'state': 'bounced'
	})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und speichern.
