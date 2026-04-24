---
description: Verkaufsaufträge mit Positionsnummern.
forge: github.com
kind: howto
name: sale_order_line_pos
partner: Mint System
prev: ./order-positions
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Line Pos
versions:
- '14.0'
---


# Sale Order Line Pos

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

Gilt bis #Odoo14 .

### Positionsnummern generieren

Die Positionsnummern auf einem Verkausauftrag werden mit dieser Erweiterung automatisch generiert.

![](attachments/Sale%20Order%20Line%20Position%20Pos%20auf%20Auftrag.png)

### Positionsnummer anzeigen

Unter <https://odoo.build/snippets> finden Sie Snippets mit der Bezeichnung _Get Postition_, beispielsweise <https://odoo.build/snippets/purchase.html#get-position>. Verwenden Sie diese Snippets um auf Berichten, die Positionsnummer aus Verkaus-, Einkaufs- und Fertigungsaufträgen anzuzeigen.

![](attachments/Snippets%20Positionsnummer%20anzeigen.png)
