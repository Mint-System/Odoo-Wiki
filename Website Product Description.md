---
description: Separates Feld für Produktbeschreibungen.
forge: github.com
kind: howto
name: website_product_description
partner: Mint System
prev: ./website
repo: Mint-System/Odoo-Apps-Website
title: Website Product Description
versions:
- '15.0'
- '14.0'
---


# Website Product Description

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>
