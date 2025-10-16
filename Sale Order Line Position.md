---
title: Sale Order Line Position
description: Verkaufsaufträge mit Positionsnummern.
kind: howto
partner: Mint-System
prev: ./order-positions
---

# Sale Order Line Position

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `sale_order_line_position`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/17.0/sale_order_line_position>

## Konfiguration

### Positionsnummer wiederhlolen

Navigieren Sie nach _Verkauf > Produkte > Produkte_ und zeigen Sie ein Produkt an. Im Tab _Verkauf_ aktivieren Sie die Option _Wiederhole Positionsnummer in Auftragszeile_. Wenn Sie nun das Produkt in einem Verkaufsauftrag hinzufügen, wird die vorhergehende Positionummer für dieses Produkt wiederholt.

## Verwendung

Gilt ab #Odoo15 .

### Positionsnummern generieren

Die Positionsnummern auf einem Verkausauftrag werden mit dieser Erweiterung automatisch generiert. Zeigen Sie einen Auftrag unter _Verkauf > Aufträge > Angebote_ an.

::: tip
Wenn Positionsnummern leer sind, können Sie _Aktionen > Positionsnummern festlegen_ ausführen.
:::

## Berichte

### Positionsnummer anzeigen

Unter <https://odoo.build/snippets> finden Sie Snippets mit der Bezeichnung _Get Postition_, beispielsweise <https://odoo.build/snippets/purchase.html#get-position>. Verwenden Sie diese Snippets um auf Berichten, die Positionsnummer aus Verkaus-, Einkaufs- und Fertigungsaufträgen anzuzeigen.
