---
tags:
- HowTo
- Drittanbieter
prev: ./diskussion
---
# Sale Order Unsubscribe
![icon_oms_box](assets/icon_oms_box.png)

Alle Abonnenten nach Bestätigung des Angebots entfernen.
 
Technischer Name: `sale_order_unsubscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/14.0/sale_order_unsubscribe>

## Abonnenten entfernen

Mit dieser Erweiterung werden beim Bestätigen eines Angebots alle Abonnenten bis auf die Verkaufsperson entfernt.

![](assets/Sale%20Order%20Unsubscribe.png)

## Alle Abonnenten entfernen

Wenn Sie den [Systemparameter](Entwicklung.md#Systemparameter%20anlegen) mit Schlüssel `mail.unsubscribe_all` und Wert `True` anlegen, werden alle Abonnenten entfernt.