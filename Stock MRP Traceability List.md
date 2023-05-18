---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./manufacture
---
# Stock MRP Traceability List
![icon_oms_box](assets/icon_oms_box.png)

Daten aus Lieferverfolgungsbericht als Liste anzeigen.

Technischer Name: `stock_mrp_traceability_list`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/14.0/stock_mrp_traceability_list>


## Verwendung

### Lieferverfolgung als Liste anzeigen

Zeigen Sie einen erledigten Fertigungsauftrag via *Fertigung > Vorgänge > Fertigungsaufträge* an und klicken Sie auf den Smart-Link *Lieferverfolgungsliste*. Sie erhalten eine Listenansicht der Zeilen aus dem Lieferverfolgungsbericht.

Die Lieferverfolgungsliste:

![](assets/Stock%20MRP%20Traceability%20List.png)

Der Lieferverfolungsbericht:

![](assets/Stock%20MRP%20Traceability%20List%20Report.png)

::: tip
Wenn der Fertigungsauftrag nicht erledigt ist, aber Materialreservationen gemacht wurden, versucht der Bericht anhand der Lot die Lieferverfolgungsliste zu erstellen.
:::