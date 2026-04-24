---
description: Teilmengen von Produkten in Webshop bestellen.
forge: github.com
kind: howto
name: website_sale_float_qty
partner: Mint System
prev: ./website-sale
repo: Mint-System/Odoo-Apps-Website
title: Website Sale Float Qty
versions:
- '16.0'
---


# Website Sale Float Qty

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Teilmenge auf Mengeneinheit aktivieren

Navigieren Sie nach _Verkauf > Konfiguration > Masseinheiten_ und wählen Sie die Masseinheit aus für welche die Teilmengen aktiviert werden sollen. Aktivieren Sie die Option _Float Qty_.

## Verwendung

### Teilmengen von Produkt bestellen

Zeigen Sie ein Produkt mit einer Mengeneinheit mit Teilmengen im Webshop an und erhöhen Sie Menge. Fügen Sie das Produkt dem Warenkorb hinzu.

![](attachments/Website%20Sale%20Float%20Qty.png)
