---
description: Datum mit Zeit für Fälligkeit von Aktivität.
forge: github.com
kind: howto
name: mail_activity_datetime
partner: Mint System
prev: ./discuss-e-mail
repo: Mint-System/Odoo-Apps-Social
title: Mail Activity Datetime
versions:
- '14.0'
---


# Mail Activity Datetime

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Aktivitäte mit Datum und Uhrzeit terminieren

Wenn Sie eine Aktivität erstellen können Sie auf dem Feld _Fälligkeit_ die Uhrzeit festlegen.

::: warning
Technisch handelt sich um ein neues Feld `date_deadline_time`. Auf Kanban- und Listenansichten von `mail.activity` muss eine Anpassungen vorgenommen werden, damit das Feld angezeigt wird.
:::
