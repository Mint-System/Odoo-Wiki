---
title: Sale Order Line Pricelist Fixed Discount
description: Auftragszeilen mit Rabatt aus Preisliste mit Festpreis.
kind: howto
tags:
- Mint-System
prev: ./sale
---
# Sale Order Line Pricelist Fixed Discount
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `sale_order_line_pricelist_fixed_discount`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/16.0/sale_order_line_pricelist_fixed_discount>

## Konfiguration

### Optionen aktivieren

Damit diese Erweiterung korrekt funktioniert müssen Sie [Erweiterte Preisregeln aktivieren](Sale%20Price.md#Erweiterte%20Preisregeln%20aktivieren) und
[Rabatte aktivieren](Sale%20Price.md#Rabatte%20aktivieren).

## Verwendung

### Rabatt aus Preisliste filtern

Diese Erweiterung filter die verfügbaren Rabatte anhander der folgenden Merkmale aus der Preisliste:

* **Produkt**: Das Produkt der Auftragszeile ist in der Auswahlmöglichkeit der Preisregel enthalten.
* **Datum**: Preisregeln mit aktiver Periode (Start- und Enddatum) übersteuern Preisregeln ohne Periode
* **Mindestmenge**: Preisregeln mit passender Mindestmenge übersteuern Preisregeln ohne Mindestmenge
* **Sortierung**: Preisregeln werden gemäss Sortierung auf der Preisliste geladen, ausser bei mehreren Mindestmengen wird nach der grössten Mindestmenge sortiert
