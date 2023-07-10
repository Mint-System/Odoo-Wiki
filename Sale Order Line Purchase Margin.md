---
title: Sale Order Line Purchase Margin
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./sale-blanket-order
---
# Sale Order Line Purchase Margin
![icon_oms_box](attachments/icon_oms_box.png)

Kalkulation der Marge basierend auf verlinkter Bestellung.

Technischer Name: `sale_order_line_purchase_margin`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/14.0/sale_order_line_purchase_margin>

## Verwendung

### Verkaufsmarge basierend auf Bestellpositionen berechnen

Mit dieser Erweiterungen wird die Marge jeder Verkaufspositionen anhand der Kosten aus der verlinkten Bestellung berechnet.

::: warning
Wenn es mehrere verlinkte Bestellpositionen gibt, wird der Durchschnitt aus deren Kosten berechnet.
:::

![Sale Order Line Purchase Margin](attachments/Sale%20Order%20Line%20Purchase%20Margin.gif)