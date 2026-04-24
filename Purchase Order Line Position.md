---
description: Einkaufsaufträge mit Positionsnummern.
forge: github.com
kind: howto
name: purchase_order_line_position
partner: Mint System
prev: ./order-positions
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Order Line Position
versions:
- '19.0'
---


# Purchase Order Line Position

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Positionsnummern generieren

Die Positionsnummern auf einem Einkaufsauftrag werden mit dieser Erweiterung automatisch generiert.

::: tip
Wenn Positionsnummern leer sind, können Sie _Aktionen > Positionsnummern festlegen_ ausführen.
:::

## Berichte

### Positionsnummer anzeigen

Unter <https://odoo.build/snippets.html> finden Sie Snippets mit der Bezeichnung _Get Postition_, beispielsweise <https://odoo.build/snippets/purchase.html#get-position>. Verwenden Sie diese Snippets um auf Berichten, die Positionsnummer aus Verkaus-, Einkaufs- und Fertigungsaufträgen anzuzeigen.

![](attachments/Snippets%20Positionsnummer%20anzeigen.png)
