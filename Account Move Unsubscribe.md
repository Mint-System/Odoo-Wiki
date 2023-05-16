---
description: Alle Abonnenten nach Buchung eines Buchungssatzes entfernen.
tags:
- HowTo
- Drittanbieter
prev: ./discuss
---
# Account Move Unsubscribe
![icon_oms_box](assets/icon_oms_box.png)

{{ $frontmatter.description }}
 
Technischer Name: `account_move_unsubscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/14.0/account_move_unsubscribe>

## Verwendung

### Abonnenten entfernen

Mit dieser Erweiterung werden beim Buchen eines Buchungssatzes alle Abonnenten bis auf den aktuellen Benutzer entfernt.

![](assets/Account%20Move%20Unsubscribe.png)

### Alle Abonnenten entfernen

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail.unsubscribe_all` und Wert `True` anlegen, werden alle Abonnenten entfernt.