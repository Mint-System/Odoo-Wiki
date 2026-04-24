---
description: Kalkulation der Marge basierend auf verlinkter Bestellung.
forge: github.com
kind: howto
name: sale_order_line_purchase_margin
partner: Mint System
prev: ./sale-blanket-order
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Line Purchase Margin
versions:
- '17.0'
---


# Sale Order Line Purchase Margin

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Verkaufsmarge basierend auf Bestellpositionen berechnen

Mit dieser Erweiterungen wird die Marge jeder Verkaufspositionen anhand der Kosten aus der verlinkten Bestellung berechnet.

::: warning
Wenn es mehrere verlinkte Bestellpositionen gibt, wird der Durchschnitt aus deren Kosten berechnet.
:::

![Sale Order Line Purchase Margin](attachments/Sale%20Order%20Line%20Purchase%20Margin.gif)
