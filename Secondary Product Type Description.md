---
description: Zu jedem Produkt ein Beschreibungsfeld.
forge: github.com
kind: howto
name: product_type_description2
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Product-Attribute
title: Secondary Product Type Description
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Secondary Product Type Description

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Zweite Beschreibung hinzufügen

Öffnen Sie ein Produkt via _Lager > Produkte > Produkte_ und zeigen Sie den Tab _Allgemeine Informationen_ an. Unter dem Feld _Type Description_ finden das Feld _Secondary Type Description_.
