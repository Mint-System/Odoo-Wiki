---
description: Zukünftiges Datum auf Lagerbuchung bei Planungsabruch festlegen.
forge: github.com
kind: howto
name: mrp_production_unplan_move
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP Production Unplan Move
versions:
- '17.0'
---


# MRP Production Unplan Move

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Zukünftiges Datum bei Planungsabruch setzen

Mit dieser Erweiterung wird beim Abbruch der Planung oder bei der Bestätigung eines Fertigungsauftrag auf der dazugehörigenden Lagerbuchung eine fiktives Datum festgelegt.

![](attachments/MRP%20Production%20Unplan%20Move.png)

Damit sind Aufträge erkennbar, welche noch genauer geplant werden müssen.
