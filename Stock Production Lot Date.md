---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./stock
---
# Stock Production Lot Date
![icon_oms_box](assets/icon_oms_box.png)

Datum auf Losnummer festlegen und Ablaufdatum relativ setzen.

Technischer Name: `stock_production_lot_date`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/14.0/stock_production_lot_date>

## Verwendung

### Datum auf Los definieren

Mit dieser Erweiterung können Sie auf einem Los zusätzlich zum Namen ein Datum definieren. Das Datum wird im Anzeigenamen des Los angefügt. Los-Nummern sind eindeutig, wenn das Unternehmen, Produkt, Name und Datum unterschiedlch sind.

Navigieren Sie nach *Lager > Produkte > Chargen-/Seriennummern* und erstellen Sie ein Los. Legen Sie im Feld *Datum* das entsprechende Datum fest.

![](assets/Stock%20Production%20Lot%20Date.png)

::: tip
Wenn das Produkt ein Ablaufdatum hat, wird dieses aufgrund des gewählten Datums berechnet.
:::