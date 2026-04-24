---
description: Legen Sie Mindestbestellmengen für Produkte und Produktvarianten fest.
forge: github.com
kind: howto
name: website_sale_minimum_order_quantity
partner: Mint System
prev: ./website
repo: Mint-System/Odoo-Apps-Website
title: Website Sale Minimum Order Quantity
versions:
- '16.0'
- '15.0'
---


# Website Sale Minimum Order Quantity

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Mindestbestellmenge festlegen

Navigieren Sie nach _Verkauf > Produkte > Produkte_ und zeigen Sie ein Produkt an. Im Feld _Mindestbestellmenge_ legen Sie die entsprechende Menge fest.

::: warning
Wenn Sie Produktvarianten im Einsatz haben, müssen Sie die Mindestbestellmenge für jede Produktvariante einrichten.
:::
