---
description: Zu jedem Produkt ein Beschreibungsfeld.
forge: github.com
kind: howto
name: product_type_description
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Product-Attribute
title: Product Type Description
versions:
- '19.0'
---


# Product Type Description

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Beschreibung hinzufügen

Öffnen Sie ein Produkt via _Lager > Produkte > Produkte_ und zeigen Sie den Tab _Allgemeine Informationen_ an. Unter dem Feld _Interne Referenz_ finden das Feld _Type Description_.
