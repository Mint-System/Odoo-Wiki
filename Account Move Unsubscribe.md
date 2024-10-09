---
title: Account Move Unsubscribe
description: Alle Abonnenten nach Buchung eines Buchungssatzes entfernen.
tags:
- HowTo
- Drittanbieter
prev: ./dialog
---
# Account Move Unsubscribe
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}
 
Technischer Name: `account_move_unsubscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/16.0/account_move_unsubscribe>

## Verwendung

### Abonnenten entfernen

Mit dieser Erweiterung werden beim Buchen eines Buchungssatzes alle Abonnenten bis auf den aktuellen Benutzer entfernt.

![](attachments/Account%20Move%20Unsubscribe.png)

### Alle Abonnenten entfernen

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail.unsubscribe_all` und Wert `True` anlegen, werden alle Abonnenten entfernt.