---
title: Stock MRP Traceability List
description: Daten aus Lieferverfolgungsbericht als Liste anzeigen.
tags:
- HowTo
- Drittanbieter
prev: ./manufacture
---
# Stock MRP Traceability List
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `stock_mrp_traceability_list`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/16.0/stock_mrp_traceability_list>


## Verwendung

### Lieferverfolgung als Liste anzeigen

Zeigen Sie einen erledigten Fertigungsauftrag via *Fertigung > Vorgänge > Fertigungsaufträge* an und klicken Sie auf den Smart-Link *Lieferverfolgungsliste*. Sie erhalten eine Listenansicht der Zeilen aus dem Lieferverfolgungsbericht.

Die Lieferverfolgungsliste:

![](attachments/Stock%20MRP%20Traceability%20List.png)

Der Lieferverfolungsbericht:

![](attachments/Stock%20MRP%20Traceability%20List%20Report.png)

::: tip
Wenn der Fertigungsauftrag nicht erledigt ist, aber Materialreservationen gemacht wurden, versucht der Bericht anhand der Lot die Lieferverfolgungsliste zu erstellen.
:::