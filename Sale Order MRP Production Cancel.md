---
description: Verlinkter Fertigungsauftrag bei Abbruch Verkaufsauftrag ebenfalls abbrechen.
forge: github.com
kind: howto
name: sale_order_mrp_production_cancel
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order MRP Production Cancel
versions:
- '14.0'
---


# Sale Order MRP Production Cancel

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Verlinkter Fertigungsauftrag zusammen mit Verkaufsauftrag abbrechen

Bei Abbruch des Verkaufsauftags wird ein verlinkter Fertigungsauftrag ebenfalls abgebrochen. Es somit dasselbe Verhalten wie bei den verlinkten Lieferungen.

![Sale Order MRP Production Cancel](attachments/Sale%20Order%20MRP%20Production%20Cancel.gif)
