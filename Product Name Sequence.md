---
description: Generate product names based on a sequence.
forge: github.com
kind: howto
name: product_name_sequence
partner: Mint System
prev: ./product
repo: Mint-System/Odoo-Apps-Product-Attribute
title: Product Name Sequence
versions:
- '15.0'
---


# Product Name Sequence

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Generate product name

Product will have the default name `New`. If nothing else is set and the product form is saved or updated, then the product template sequence will be called and set as name.

![Odoo App Product Name Sequence Generate](attachments/Odoo%20App%20Product%20Name%20Sequence%20Generate.gif)

### Change sequence format

The sequence based on which the product name is generated, can be customized.

![Odoo App Product Name Sequence Update](attachments/Odoo%20App%20Product%20Name%20Sequence%20Update.gif)
