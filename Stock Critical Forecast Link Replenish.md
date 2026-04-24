---
description: Aktionsdatum berücksichtigt aktive Bestandsregeln von Produkten.
forge: github.com
kind: howto
name: stock_critical_forecast_link_replenish
partner: Mint System
prev: ./stock-critical-forecast
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Critical Forecast Link Replenish
versions:
- '17.0'
---


# Stock Critical Forecast Link Replenish

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Das ist eine Erweiterung für [Stock Critical Forecast](Stock%20Critical%20Forecast.md). Bei der Berechnung des kritischen Datums wird berücksichtigt, ob das Produkt eine Bestandsregel mit einer minimalen Menge hat. Wenn das zutrifft wird anhand der Bestands-Vorhersage das Datum gesucht an dem die Bestandsregel unterschritten wird.

## Verwendung

### Produkte mit Bestandsregeln auf Bericht anzeigen

Mit dieser Erweiterung werden Bestandsregeln auf Produkten im Bericht _Kritische Vorhersage_ angezeigt. Mit dem entsprechenden Aktion gelangen Sie direkt zur Ansicht _Aufüllen_.

![Stock Critical Forecast Link Replenish](attachments/Stock%20Critical%20Forecast%20Link%20Replenish.gif)
