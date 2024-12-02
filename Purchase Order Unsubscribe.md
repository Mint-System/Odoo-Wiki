---
title: Purchase Order Unsubscribe
description: Alle Abonnenten nach Bestätigung der Bestellung entfernen.
tags:
- HowTo
- Drittanbieter
prev: ./dialog
---
# Purchase Order Unsubscribe
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}
 
Technischer Name: `purchase_order_unsubscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/14.0/purchase_order_unsubscribe>

## Verwendung

### Abonnenten entfernen

Mit dieser Erweiterung werden beim Bestätigen einer Bestellung alle Abonnenten bis auf den Einkaufsbeauftragten entfernt.

![](attachments/Purchase%20Order%20Unsubscribe.png)

### Alle Abonnenten entfernen

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail.unsubscribe_all` und Wert `True` anlegen, werden alle Abonnenten entfernt.