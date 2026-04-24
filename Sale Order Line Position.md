---
description: Verkaufsaufträge mit Positionsnummern.
forge: github.com
kind: howto
name: sale_order_line_position
partner: Mint System
prev: ./order-positions
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Line Position
versions:
- '19.0'
- '17.0'
- '16.0'
- '15.0'
---


# Sale Order Line Position

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

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
