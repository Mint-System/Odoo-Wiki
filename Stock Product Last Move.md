---
description: Letztes Datum zu ein- und ausgehender Lagerbewegung anzeigen.
forge: github.com
kind: howto
name: stock_product_last_move
partner: Mint System
prev: ./stock
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Product Last Move
versions:
- '16.0'
---


# Stock Product Last Move

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Letztes Eingangs- und Ausgangsdatum anzeigen

Navigieren Sie nach _Lager > Produkte > Produkte_ und schalten Sie die Listen-Ansicht ein. In der Spalte _Datum Letzter Eingang_ sehen Sie das Datum der letzten eingehenden Lieferung von einem Lieferanten und in der Spalte _Datum Letzter Ausgang_ sehen Sie das Datum der letzten Lieferung an einen Kunden oder an einen Fertigungsauftrag.

![](attachments/Stock%20Product%20Last%20Move%20Produktvarianten.png)
