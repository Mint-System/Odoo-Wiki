---
description: Falls eine Einlagerungsregel existiert, wird der finale Lagerort angezeigt.
forge: github.com
kind: howto
name: product_putaway_final_location
partner: Mint System
prev: ./product
repo: Mint-System/Odoo-Apps-Product-Attribute
title: Product Putaway Final Location
versions:
- '17.0'
---


# Product Putaway Final Location

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

Falls für ein Produkt eine Einlagerungsregel existiert, wird deren finaler Einlagerungsort in den Reitern *Allgemeine Informationen* und *Lager* angezeigt.
Gibt es mehrere Einlagerungsregeln, wird eine kommaseparierte Liste der Einlagerungsorte angzeigt.
Man kann Produkte nach dem ersten bekannten Einlagerungsort filtern.
