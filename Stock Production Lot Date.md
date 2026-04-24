---
description: Datum auf Losnummer festlegen und Ablaufdatum relativ setzen.
forge: github.com
kind: howto
name: stock_production_lot_date
partner: Mint System
prev: ./stock
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Production Lot Date
versions:
- '14.0'
---


# Stock Production Lot Date

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Datum auf Los definieren

Mit dieser Erweiterung können Sie auf einem Los zusätzlich zum Namen ein Datum definieren. Das Datum wird im Anzeigenamen des Los angefügt. Los-Nummern sind eindeutig, wenn das Unternehmen, Produkt, Name und Datum unterschiedlch sind.

Navigieren Sie nach _Lager > Produkte > Chargen-/Seriennummern_ und erstellen Sie ein Los. Legen Sie im Feld _Datum_ das entsprechende Datum fest.

![](attachments/Stock%20Production%20Lot%20Date.png)

::: tip
Wenn das Produkt ein Ablaufdatum hat, wird dieses aufgrund des gewählten Datums berechnet.
:::
