---
description: Verlinkt Rechnungen und Transfers.
forge: github.com
kind: howto
name: stock_picking_invoice_link
partner: OCA
prev: ./stock
repo: OCA/stock-logistics-workflow
title: Stock Picking Invoice Link
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Stock Picking Invoice Link

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Verlinkte Rechnungen auf Lieferung anzeigen

Diese Erweiterung verknüpft Lieferungen und Rechnungen. Auf einer Lieferung finden Sie einen Smart-Link für den Zugriff auf die verlinkten Rechnungen.

![](attachments/Stock%20Picking%20Invoice%20Link.png)

Dasselbe funktioniert auch umgekehrt.

![](attachments/Stock%20Picking%20Invoice%20Link%20Invoice.png)

::: warning
Damit eine Verlinkung erstellt werden kann, muss die LIeferung erledigt sein.
:::
