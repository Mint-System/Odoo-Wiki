---
title: Sale Order Check Price
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- OCA
prev: ./sale
---
# Sale Order Check Price
![icon_oms_box](assets/icon_oms_box.png)

Preis vor Bestätigung des Angebots prüfen.

Technischer Name: `sale_order_check_price`\
Repository: <https://github.com/OCA/sale-workflow/tree/14.0/sale_order_check_price>

## Verwendung

### Preis vor Bestätigung des Angebots prüfen

Diese Erweiterung stellt sicher, dass es keine Auftragszeilen gibt, die einen Preis von Null haben. Hat eine Zeile einen Preis von Null und sie versuchen das Angebot zu bestätigen, erscheint eine Fehlermeldung.

![](assets/Sale%20Order%20Check%20Price.png)
