---
description: Beim Buchen wird sofern gesetzt die Warnung des Rechnungskontakt angezeigt.
forge: github.com
kind: howto
name: account_move_post_warn
partner: Mint System
prev: ./accounting
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Sale Move Reconciled Date
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Sale Move Reconciled Date

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Warnung beim Buchen ausgeben

Mit dieser Erweiterung wird beim Buchen einer Rechnung die Warnung, die auf dem Rechnungskontakt hinterlegt ist, im Chatter angezeigt. Als erstes müssen Sie eine [Warnung für den Rechnungskontakt festlegen](Invoicing.md#Warnung%20für%20den%20Rechnungskontakt%20festlegen).

![Account Move Post Warn](attachments/Account%20Move%20Post%20Warn.gif)
