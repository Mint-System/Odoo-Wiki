---
title: Sale Order Line Position
description: Verkaufsaufträge mit Positionsnummern. 
tags:
- HowTo
- Drittanbieter
prev: ./order-positions
---
# Sale Order Line Position
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `sale_order_line_position`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/16.0/sale_order_line_position>

## Konfiguration

### Positionsnummer wiederhlolen

Navigieren Sie nach *Verkauf > Produkte > Produkte* und zeigen Sie ein Produkt an. Im Tab *Verkauf* aktivieren Sie die Option *Wiederhole Positionsnummer in Auftragszeile*. Wenn Sie nun das Produkt in einem Verkaufsauftrag hinzufügen, wird die vorhergehende Positionummer für dieses Produkt wiederholt.

## Verwendung

Gilt ab #Odoo15 .

### Positionsnummern generieren

Die Positionsnummern auf einem Verkausauftrag werden mit dieser Erweiterung automatisch generiert. Zeigen Sie einen Auftrag unter *Verkauf > Aufträge > Angebote* an.

::: tip
Wenn Positionsnummern leer sind, können Sie *Aktionen > Positionsnummern festlegen* ausführen.
:::

## Berichte

### Positionsnummer anzeigen

Unter <https://odoo.build/snippets> finden Sie Snippets mit der Bezeichnung *Get Postition*, beispielsweise <https://odoo.build/snippets/purchase.html#get-position>. Verwenden Sie diese Snippets um auf Berichten, die Positionsnummer aus Verkaus-, Einkaufs- und Fertigungsaufträgen anzuzeigen.