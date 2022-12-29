---
tags:
- HowTo
- Drittanbieter
prev: ./einkauf
---
# Purchase Order Comment
![icon_oms_box](assets/icon_oms_box.png)

Kommentar-Feld für Einkaufsaufträge.

Technischer Name: `purchase_order_comment`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/14.0/purchase_order_comment>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `purchase.order.copy_requisition_comment` können Sie festlegen, ob der Kommentar vom Einkaufsvertrag kopiert werden soll. Setzen Sie den Wert auf `True` damit der Wert kopiert wird.

### Kommentar hinzufügen

Öffnen Sie einen Einkaufsauftrag via *Einkauf > Aufträge > Bestellungen*. Im Tab *Weitere Informationen* finden Sie das Feld *Kommentar*.

![](assets/Purchase%20Order%20Comment.png)

### Kommentar auf Kaufvertrag hinzufügen

Öffnen Sie einen Kaufvertrag via *Einkauf > Aufträge > Kaufverträge. Im Tab *Weitere Informationen* finden Sie das Feld *Kommentar*.

![](assets/Purchase%20Order%20Comment%20Kaufvertrag.png)



