---
title: Purchase Order Line Position
description: Einkaufsaufträge mit Positionsnummern.
tags:
- HowTo
- Drittanbieter
prev: ./order-positions
---
# Purchase Order Line Position
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `purchase_order_line_position`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/16.0/purchase_order_line_position>

## Verwendung

### Positionsnummern generieren

Die Positionsnummern auf einem Einkaufsauftrag werden mit dieser Erweiterung automatisch generiert.

::: tip
Wenn Positionsnummern leer sind, können Sie *Aktion > Positionsnummern festlegen* ausführen.
:::

## Berichte

### Positionsnummer anzeigen

Unter <https://odoo.build/snippets.html> finden Sie Snippets mit der Bezeichnung *Get Postition*, beispielsweise <https://odoo.build/snippets/purchase.html#get-position>. Verwenden Sie diese Snippets um auf Berichten, die Positionsnummer aus Verkaus-, Einkaufs- und Fertigungsaufträgen anzuzeigen.

![](attachments/Snippets%20Positionsnummer%20anzeigen.png)