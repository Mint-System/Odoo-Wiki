---
description: Auftragszeilen mit Rabatt aus Preisliste mit Festpreis.
forge: github.com
kind: howto
name: sale_order_line_pricelist_fixed_discount
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Line Pricelist Fixed Discount
versions:
- '18.0'
- '16.0'
- '14.0'
---


# Sale Order Line Pricelist Fixed Discount

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Optionen aktivieren

Damit diese Erweiterung korrekt funktioniert müssen Sie [Erweiterte Preisregeln aktivieren](Sale%20Price.md#Erweiterte%20Preisregeln%20aktivieren) und
[Rabatte aktivieren](Sale%20Price.md#Rabatte%20aktivieren).

## Verwendung

### Rabatt aus Preisliste filtern

Diese Erweiterung filter die verfügbaren Rabatte anhander der folgenden Merkmale aus der Preisliste:

- **Produkt**: Das Produkt der Auftragszeile ist in der Auswahlmöglichkeit der Preisregel enthalten.
- **Datum**: Preisregeln mit aktiver Periode (Start- und Enddatum) übersteuern Preisregeln ohne Periode
- **Mindestmenge**: Preisregeln mit passender Mindestmenge übersteuern Preisregeln ohne Mindestmenge
- **Sortierung**: Preisregeln werden gemäss Sortierung auf der Preisliste geladen, ausser bei mehreren Mindestmengen wird nach der grössten Mindestmenge sortiert
