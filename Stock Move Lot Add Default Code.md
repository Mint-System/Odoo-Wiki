---
description: Fügt einer Serien- oder Chargennummer die Referenz (default code) des
  Produkts hinzu.
forge: github.com
kind: howto
name: stock_move_lot_add_default_code
partner: Mint System
prev: ./stock
repo: Mint-System/Odoo-Apps-stock-logistics-workflow
title: Stock Move Lot Add Default Code
versions:
- '19.0'
---


# Stock Move Lot Add Default Code

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

### Verwendung

Mit dieser Erweiterung wird einer generierte Serien- oder Chargennummer die Referenz (default code ) des Produkts in der Form `$default_code / $lot_name` vorangestellt.
Beispiel: SN0005 -> P01-005-007/SN005
