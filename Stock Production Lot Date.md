---
title: Stock Production Lot Date
description: Datum auf Losnummer festlegen und Ablaufdatum relativ setzen.
kind: howto
partner: Mint-System
prev: ./stock
---

# Stock Production Lot Date

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `stock_production_lot_date`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/14.0/stock_production_lot_date>

## Verwendung

### Datum auf Los definieren

Mit dieser Erweiterung können Sie auf einem Los zusätzlich zum Namen ein Datum definieren. Das Datum wird im Anzeigenamen des Los angefügt. Los-Nummern sind eindeutig, wenn das Unternehmen, Produkt, Name und Datum unterschiedlch sind.

Navigieren Sie nach _Lager > Produkte > Chargen-/Seriennummern_ und erstellen Sie ein Los. Legen Sie im Feld _Datum_ das entsprechende Datum fest.

![](attachments/Stock%20Production%20Lot%20Date.png)

::: tip
Wenn das Produkt ein Ablaufdatum hat, wird dieses aufgrund des gewählten Datums berechnet.
:::
