---
title: Product Sequence
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- OCA
prev: ./manufacture
---
# Product Sequence
![icon_oca_app](assets/icon_oca_app.png)

Produkreferenzen anhand einer Sequenz generieren lassen.

Technischer Name: `product_sequence`\
Repository: <https://github.com/OCA/product-attribute/tree/13.0/product_sequence>

## Verwendung

### Prefix festlegen

Navigieren Sie nach *Lager > Konfiguration > Produktkategorie* und wählen Sie eine Kategorie aus. Geben Sie den Prefix im Feld *Prefix for Product Internal Reference* ein. Wenn die Kategorie gespeichert wird, wird zugleich eine Sequenz angelegt.

![](assets/Product%20Sequence%20Prefix%20erstellt.png)

### Produkt mit generierter Referenz erstellen

Damit die Referenz beim Erstellen eines Produkts automatisch generiert wird müssen Sie eine Kategorie mit Prefix auswählen.

Falls Sie eine Unterkategorie auswählen möchten und dabei der Prefix der übergeordneten Kategorie verwendet werden soll, müssen Sie die Option *Use parent categories to determine the prefix* unter *Einstellungen > Allgemeine Einstellungen > Produkte* aktivieren.

![Product Sequence Erstellen](assets/Product%20Sequence%20Erstellen.gif)

