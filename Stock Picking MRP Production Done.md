---
description: Lieferung mit Fertigungsauftrag gleichzeitig abschliessen.
forge: github.com
kind: howto
name: stock_picking_mrp_production_done
partner: Mint System
prev: ./stock
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Picking MRP Production Done
versions:
- '14.0'
---


# Stock Picking MRP Production Done

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Reservierung vor Erledigung konfigurieren

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `stock_picking_mrp_production_done.assign_before` und Wert `True` anlegen, wird vor dem Bestätigen der Fertigungsaufträge eine Reservierung ausgeführt.

### Upstream Fertigungsauftrag gleichzeitig mit Lieferung erledigen

Mit dieser Erweiterung können Fertigungsaufträge und Lieferung in einem gültigen Zustand gleichzeitig abgeschlossen werden.

![Stock Picking MRP Production Done](attachments/Stock%20Picking%20MRP%20Production%20Done.gif)
