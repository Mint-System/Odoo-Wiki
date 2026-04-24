---
description: Daten aus Lieferverfolgungsbericht als Liste anzeigen.
forge: github.com
kind: howto
name: stock_mrp_traceability_list
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: Stock MRP Traceability List
versions:
- '18.0'
- '17.0'
- '16.0'
- '14.0'
---


# Stock MRP Traceability List

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### ### Rückverfolgbarkeit als Liste anzeigen

Zeigen Sie einen erledigten Fertigungsauftrag via _Fertigung > Vorgänge > Fertigungsaufträge_ an und klicken Sie auf den Smart-Link _*Rückverfolgbarkeitsliste*_. Sie erhalten eine Listenansicht der Zeilen aus dem Rückverfolgbarkeitsbericht.

Die Lieferverfolgungsliste:

![](attachments/Stock%20MRP%20Traceability%20List.png)

Der Rückverfolgbarkeitsbericht zum Verlgeich:

![](attachments/Stock%20MRP%20Traceability%20List%20Report.png)

::: tip
Wenn der Fertigungsauftrag nicht erledigt ist, aber Materialreservationen gemacht wurden, versucht der Bericht anhand der Lot die Lieferverfolgungsliste zu erstellen.
:::
