---
title: Stock Move Lot Quantity
description: Setzt die gepickte Menge eines Los-geführten Produkts immer auf die verfügbare Gesamtmenge des Lot.
kind: howto
tags:
prev: ./stock
forge: github.com
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
versions:
- '19.0'
- '18.0'
name: stock_move_lot_quantity
partner: Mint System
---

# Stock Move Lot Quantity

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Enthält ein Picking ein Produkt, das per Los nachverfolgt wird, wird die transferierte Menge auf den Gesamtbestand dieses Loses gesetzt. 
Das Los, von dem nur eine Teilmenge verbraucht bzw. reserviert wird, wird farblich hervorgehoben.
