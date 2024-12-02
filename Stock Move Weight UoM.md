---
title: Stock Move Weight UoM
description: Berechnung Gewicht unter Berücksichtigung der Mengeneinheit.
tags:
- HowTo
- Drittanbieter
prev: ./stock
---
# Stock Move Weight UoM
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `stock_move_weight_uom`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/14.0/stock_move_weight_uom>

## Verwendung

### Gewicht mit Mengeneinheit berechnen

Mit dieser Erweiterung wird das Gewicht der Lieferung unter Berücksichtungen der Mengeneinheit im Tab *Lager* der Produkte berechnet.

::: warning
Bei der Darstellung des Gesamtgewichts, kann es zu Rundungsfehler kommen. Damit die Berechnung stimmt, muss auf der Mengenheit die Rundungsgenauigkeit entsprechend definiert werden.
:::