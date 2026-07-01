---
description: Lieferaufträge mit Rechnungszeile verlinken.
forge: github.com
kind: howto
name: account_move_line_link_pickings
partner: Mint System
prev: ./accounting
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Move Line Link Pickings
versions:
- '14.0'
---


# Account Move Line Link Pickings

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Verlinkte Lieferaufträge auf Rechnungszeile anzeigen

Mit dieser Erweiterung werden Lieferungen mit der Rechnungszeile verlinkt.

![](attachments/Account%20Move%20Line%20Link%20Pickings.png)

### Sammelrechnung erstellen

Mit dem Snippet <https://odoo.build/snippets/account.html#group-by-pickings> und dieser Erweiterung können Sie Sammelrechnungen generieren.

![](attachments/Account%20Move%20Line%20Link%20Pickings%20Sammelrechnung.png)

Für die Implementation müssen Sie Folgendes berücksichtigen:

- [Snippet hinzufügen](Development%20Snippets.md#Snippet%20hinzufügen)
- [Für mehrere Verkaufsaufträge eine Rechnung generieren](Sale.md#Für%20mehrere%20Verkaufsaufträge%20eine%20Rechnung%20generieren)
