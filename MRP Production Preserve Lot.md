---
description: Los-Nummern bei Aufteilung von Fertigungsauftrag beibehalten.
forge: github.com
kind: howto
name: mrp_production_preserve_lot
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP Production Preserve Lot
versions:
- '16.0'
---


# MRP Production Preserve Lot

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Wenn Sie einen Fertigungsauftrag in einem Arbeitsauftrag aufeilen, werden die im Verbraucht erstmalig zugeordneten Los-Nummern in den neuen Fertigungsauftrag/Arbeitsauftrag übernommen.
