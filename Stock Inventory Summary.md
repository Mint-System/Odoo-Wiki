---
description: Lagerbestand gruppiert nach Lagerort und Produkt.
forge: github.com
kind: howto
name: stock_inventory_summary
partner: Mint System
prev: ./stock
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Inventory Summary
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Stock Inventory Summary

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Lagerbestand zu Zeitpunkt berechnen

Navigieren Sie nach _Lager > Berichtswesen > Übersicht Bestand_. Der Bericht berechnet anhand der Produktlieferungen den Bestand für jedes Produkt und Lagerort. Wählen Sie _Lagerbestand Zum Zeitpunkt_ und geben Sie im Dialog ein bestimmtes Datum ein. Wählen Sie weiter mit _Nur interne Lagerorte_ aus, ob nur Lagerorte vom Typ _Interner Lagerort_ berücksichtigt werden sollen und filtern Sie optional die Struktur der Lagerorte mit der Auswahl _Lagerort_.

Starten Sie den Berechnungs-Vorgang mit _Bestätigen_.
