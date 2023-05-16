---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./discuss
---
# Purchase Order Unsubscribe
![icon_oms_box](assets/icon_oms_box.png)

Alle Abonnenten nach Bestätigung der Bestellung entfernen.
 
Technischer Name: `purchase_order_unsubscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/14.0/purchase_order_unsubscribe>

## Verwendung

### Abonnenten entfernen

Mit dieser Erweiterung werden beim Bestätigen einer Bestellung alle Abonnenten bis auf den Einkaufsbeauftragten entfernt.

![](assets/Purchase%20Order%20Unsubscribe.png)

### Alle Abonnenten entfernen

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail.unsubscribe_all` und Wert `True` anlegen, werden alle Abonnenten entfernt.