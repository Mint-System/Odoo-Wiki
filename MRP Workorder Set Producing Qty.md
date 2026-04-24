---
description: Arbeitsauftrag startet ohne erledigte Menge.
forge: github.com
kind: howto
name: mrp_workorder_set_producing_qty
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP Workorder Set Producing Qty
versions:
- '16.0'
---


# MRP Workorder Set Producing Qty

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Arbeitsauftrag ohne erledigte Menge starten

Mit dieser Erweiterung wird ein Arbeitsauftrag immer ohne erledigte Menge gestartet. Der ausführende Benutzer muss die Menge explizit eingeben.

![](attachments/MRP%20Workorder%20Set%20Producing%20Qty.png)
