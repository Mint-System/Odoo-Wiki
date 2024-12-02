---
title: Sale Order Unsubscribe
description: Alle Abonnenten nach Bestätigung des Angebots entfernen.
tags:
- HowTo
- Drittanbieter
prev: ./dialog
---
# Sale Order Unsubscribe
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}
 
Technischer Name: `sale_order_unsubscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/16.0/sale_order_unsubscribe>

## Verwendung

### Abonnenten entfernen

Mit dieser Erweiterung werden beim Bestätigen eines Angebots alle Abonnenten bis auf die Verkaufsperson entfernt.

![](attachments/Sale%20Order%20Unsubscribe.png)

### Alle Abonnenten entfernen

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail.unsubscribe_all` und Wert `True` anlegen, werden alle Abonnenten entfernt.