---
title: Sale Order Line Date Propagate
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./sale
---
# Sale Order Line Date Propagate
![icon_oms_box](attachments/icon_oms_box.png)

Lieferfristen auf dem Verkaufsautrag und dessen Zeilen werden auf den Lieferauftrag übertragen.


Technischer Name: `sale_order_line_date_propagate`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/14.0/sale_order_line_date_propagate>

## Verwendung

### Lieferdatum Verkauf auf Lieferung übertragen

Ist diese Erweiterung installiert wird das Lieferdatum vom Verkaufsauftrag auf den Lieferauftrag übertragen. Dies gilt auch für die Verkaufspositionen.

![Sale Order Line Date Propagate](attachments/Sale%20Order%20Line%20Date%20Propagate.gif)

::: tip
Beim Übertrag des Lieferdatum wird die Sicherheitsvorlaufzeit für den Verkauf eingerechnet.
:::