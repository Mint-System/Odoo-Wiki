---
description: Arbeits- und Fertigungsaufträge mit der Barcode App aufrufen.
forge: github.com
kind: howto
name: stock_barcode_mrp
partner: Mint System
prev: ./barcode
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Barcode MRP
versions:
- '16.0'
---


# Stock Barcode MRP

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Fertigungsauftrag scannen

Mit dieser Erweiterung können Sie den Strichcode auf Fertigungsaufträgen scannen und gelangen direkt zum Arbeitsauftrag sofern einer existiert. Dazu eine Simulation des Scan-Vorgangs.

![Stock Barcode MRP Arbeitsauftrag](attachments/Stock%20Barcode%20MRP%20Arbeitsauftrag.gif)

Dieser Vorgang funktioniert auch mit _Backorders_ und dem Barcode des originalen Fertigungsauftrag.

![Stock Barcode MRP Backorder](attachments/Stock%20Barcode%20MRP%20Backorder.gif)
