---
description: Preis vor Bestätigung des Angebots prüfen.
forge: github.com
kind: howto
name: sale_order_check_price
partner: OCA
prev: ./sale
repo: OCA/sale-workflow
title: Sale Order Check Price
versions:
- '14.0'
---


# Sale Order Check Price

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Preis vor Bestätigung des Angebots prüfen

Diese Erweiterung stellt sicher, dass es keine Auftragszeilen gibt, die einen Preis von Null haben. Hat eine Zeile einen Preis von Null und sie versuchen das Angebot zu bestätigen, erscheint eine Fehlermeldung.

![](attachments/Sale%20Order%20Check%20Price.png)
