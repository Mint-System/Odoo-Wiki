---
description: Über das zugeordnete Band kann konfiguriert werden, ob ein Produkt in
  den Warenkorb gelegt werden kann.
forge: github.com
kind: howto
name: website_sale_disable_cart
partner: Mint System
prev: ./website-sale
repo: Mint-System/Odoo-Apps-Website
title: Website Sale Disable Cart
versions:
- '18.0'
---


# Website Sale Disable Cart

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

### Verwendung

Produkt-Bänder können so konfiguriert werden, dass Produkte mit diesem Band nicht in den Warenkorb gelegt werden können.

Dafür muss auf dem Band das Feld 'Disable add to cart' aktiviert werden (Vorgabewert: nicht aktiviert).
