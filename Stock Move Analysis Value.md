---
description: Fügt des Standardpreis eines Produkts der Buchungsanalyse hinzu.
forge: github.com
kind: howto
name: stock_move_analysis_value
partner: Mint System
prev: ./stock
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Move Analysis Value
versions:
- '17.0'
---


# Stock Move Analysis Value

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

Mit dieser Erweiterung wird einer Buchungszeile die Grösse _Planungskosten_ hinzugefügt. Sie ist das Produkt aus Bedarf und Standardpreis des entsprechenden Produkts.

Das Feld ist in der Pivot-Ansicht der Buchungsasnalyse unter der Bezeichung _Kosten_ verfügbar.
