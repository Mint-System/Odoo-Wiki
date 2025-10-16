---
title: Product Sequence
description: Produkreferenzen anhand einer Sequenz generieren lassen.
kind: howto
partner: OCA
prev: ./manufacture
---

# Product Sequence

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `product_sequence`\
Repository: <https://github.com/OCA/product-attribute/tree/18.0/product_sequence>

## Verwendung

### Prefix festlegen

Navigieren Sie nach _Lager > Konfiguration > Produktkategorie_ und wählen Sie eine Kategorie aus. Geben Sie den Prefix im Feld _Prefix for Product Internal Reference_ ein. Wenn die Kategorie gespeichert wird, wird zugleich eine Sequenz angelegt.

![](attachments/Product%20Sequence%20Prefix%20erstellt.png)

### Produkt mit generierter Referenz erstellen

Damit die Referenz beim Erstellen eines Produkts automatisch generiert wird müssen Sie eine Kategorie mit Prefix auswählen.

Falls Sie eine Unterkategorie auswählen möchten und dabei der Prefix der übergeordneten Kategorie verwendet werden soll, müssen Sie die Option _Use parent categories to determine the prefix_ unter _Einstellungen > Allgemeine Einstellungen > Produkte_ aktivieren.

![Product Sequence Erstellen](attachments/Product%20Sequence%20Erstellen.gif)
