---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./lager
---
# Stock Picking MRP Production Done
![icon_oms_box](assets/icon_oms_box.png)

Lieferung mit Fertigungsauftrag gleichzeitig abschliessen.

Technischer Name: `stock_picking_mrp_production_done`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/14.0/stock_picking_mrp_production_done>

## Verwendung

### Reservierung vor Erledigung konfigurieren

Wenn Sie den [Systemparameter](Entwicklung.md#Systemparameter%20anlegen) mit Schlüssel `stock_picking_mrp_production_done.assign_before` und Wert `True` anlegen, wird vor dem Bestätigen der Fertigungsaufträge eine Reservierung ausgeführt.

### Upstream Fertigungsauftrag gleichzeitig mit Lieferung erledigen

Mit dieser Erweiterung können Fertigungsaufträge und Lieferung in einem gültigen Zustand gleichzeitig abgeschlossen werden.

![Stock Picking MRP Production Done](assets/Stock%20Picking%20MRP%20Production%20Done.gif)