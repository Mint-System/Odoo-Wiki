---
title: Stock Picking Split And Validate
description: Überträgt entsprechend gekennzeichnete Produkte in eigenes Picking und validiert dieses unm unmittelbar.
kind: howto
tags:
  - Mint-System
prev: ./stock
forge: github.com
repo: Mint-System/Odoo-Apps-stock-logistics-workflow
versions:
- '18.0'
name: stock_picking_split_and_validate
---

# Stock Picking Split And Validate

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung werden entsprechend gekennzeichnete Produkte ("Automatisch kommissionieren und bestätigen") vom Picking eines Produktionsauftrages abgetrennt und in ein eigenes Picking transferiert.
Dieses Picking wird unmittelbar validiert.
Dadurch bleiben solche Produkte auf der Stückliste eines Fertigungsauftrages sichtbar, müssen aber nicht kommissioniert und bestätigt werden.
Voraussetzung für das Aktivieren von "Automatisch kommissionieren und bestätigen" ist, dass das Produkt nicht bestandsgeführt ist.
