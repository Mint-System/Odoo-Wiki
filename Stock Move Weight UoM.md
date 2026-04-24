---
description: Berechnung Gewicht unter Berücksichtigung der Mengeneinheit.
forge: github.com
kind: howto
name: stock_move_weight_uom
partner: Mint System
prev: ./stock
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Move Weight UoM
versions:
- '17.0'
---


# Stock Move Weight UoM

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Gewicht mit Mengeneinheit berechnen

Mit dieser Erweiterung wird das Gewicht der Lieferung unter Berücksichtungen der Mengeneinheit im Tab _Lager_ der Produkte berechnet.

::: warning
Bei der Darstellung des Gesamtgewichts, kann es zu Rundungsfehler kommen. Damit die Berechnung stimmt, muss auf der Mengenheit die Rundungsgenauigkeit entsprechend definiert werden.
:::
