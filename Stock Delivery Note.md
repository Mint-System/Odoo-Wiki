---
description: Notiz auf Lieferschein.
forge: github.com
kind: howto
name: stock_delivery_note
partner: OCA
prev: ./stock
repo: OCA/stock-logistics-workflow
title: Stock Delivery Note
versions:
- '16.0'
---


# Stock Delivery Note

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Notiz auf Lieferschein erfassen

Öffnen Sie einen Lieferschein via _Lager > Lieferaufträge > Lieferauftrag auswählen > Tab Zusätzliche Informationen_ und tragen Sie im Feld _Delivery Note_ ihre Notiz ein. Die Notiz wird auf dem Lieferschein _Drucken > Lieferschein_ unterhalb der Tabelle mit den Positionen aufgeführt.
