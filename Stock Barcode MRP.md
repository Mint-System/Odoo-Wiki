---
title: Stock Barcode MRP
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./barcode
---
# Stock Barcode MRP
![icon_oms_box](attachments/icon_oms_box.png)

Arbeits- und Fertigungsaufträge mit der Barcode App aufrufen.

Technischer Name: `stock_barcode_mrp`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/14.0/stock_barcode_mrp>

## Verwendung

### Fertigungsauftrag scannen

Mit dieser Erweiterung können Sie den Strichcode auf Fertigungsaufträgen scannen und gelangen direkt zum Arbeitsauftrag sofern einer existiert. Dazu eine Simulation des Scan-Vorgangs.

![Stock Barcode MRP Arbeitsauftrag](attachments/Stock%20Barcode%20MRP%20Arbeitsauftrag.gif)

Dieser Vorgang funktioniert auch mit *Backorders* und dem Barcode des originalen Fertigungsauftrag.

![Stock Barcode MRP Backorder](attachments/Stock%20Barcode%20MRP%20Backorder.gif)