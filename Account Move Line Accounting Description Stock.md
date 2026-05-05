---
description: Beschreibung Lagerbuchung auf Rechnung übertragen.
forge: github.com
kind: howto
name: account_move_line_accounting_description_stock
partner: Mint System
prev: ./accounting
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Move Line Accounting Description Stock
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Account Move Line Accounting Description Stock

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Beschreibung Lagerbuchung auf Rechnung übertragen

Diese Erweiterung kopiert die Beschreibung der Lagerbuchung auf das Feld _External Name_ auf der Rechnungszeile, wenn aus einem Verkausauftrag eine Rechnung generiert wird.

![Account Move Line Accounting Description Stock](attachments/Account%20Move%20Line%20Accounting%20Description%20Stock.gif)
