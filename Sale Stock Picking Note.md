---
description: Interne und externe Notiz für Lieferungen.
forge: github.com
kind: howto
name: sale_stock_picking_note
partner: OCA
prev: ./sale
repo: OCA/sale-workflow
title: Sale Stock Picking Note
versions:
- '17.0'
---


# Sale Stock Picking Note

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Kommentar für Packvorgang und Lieferung hinterlassen.

Zeigen Sie _Verkauf > Angebot auswählen > Tab Weitere Information_ an. Hier finden Sie die zwei Felder _Picking Internal Note_ und _Picking Customer Comments_.

![](attachments/Sale%20Stock%20Picking%20Note.png)

Die Kommentare sind auf dem Transfer und den Berichten ersichtlich.

![](attachments/Sale%20Stock%20Picking%20Note%20Transfer.png)

![](attachments/Sale%20Stock%20Picking%20Note%20Lieferschein.png)
