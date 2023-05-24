---
title: Sale Order Line Description Name
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./sale-order-line-description
---
# Sale Order Line Description Name
![icon_oms_box](assets/icon_oms_box.png)

 Benutze Produktname ohne Referenz wenn Verkaufsbeschreibung leer ist.

Technischer Name: `sale_order_line_description_name`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/14.0/sale_order_line_description_name>

## Konfiguration

### Produktname mit Verkaufsbeschreibung übertragen

Mit dem Systemparameter `sale_order_line_description_name.prefix_sale_description` können Sie festlegen, ob beim Erstellen der Beschreibung in der Auftragszeile der Produktname + Verkaufsbeschreibung eingesetzt werden soll. Setzen Sie den Wert auf `True` um die Produktname und Verkaufsbeschreibung zu kombinieren.

## Verwendung

### Produktname ohne Referenz übertragen

Mit dieser Erweiterung wird beim Eintragen des Produkt auf der Verkaufszeile nur der Produktname übertragen, sofern keine Verkaufsbeschreibung vorhanden ist.

![Sale Order Line Description Name](assets/Sale%20Order%20Line%20Description%20Name.png)