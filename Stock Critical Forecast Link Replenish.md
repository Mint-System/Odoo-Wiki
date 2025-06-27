---
title: Stock Critical Forecast Link Replenish
description: Aktionsdatum berücksichtigt aktive Bestandsregeln von Produkten.
kind: howto
tags:
- Drittanbieter
prev: ./stock-critical-forecast
---
# Stock Critical Forecast Link Replenish
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `stock_critical_forecast_link_replenish`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/16.0/stock_critical_forecast_link_replenish>

## Beschreibung

Das ist eine Erweiterung für [Stock Critical Forecast](Stock%20Critical%20Forecast.md). Bei der Berechnung des kritischen Datums wird berücksichtigt, ob das Produkt eine Bestandsregel mit einer minimalen Menge hat. Wenn das zutrifft wird anhand der Bestands-Vorhersage das Datum gesucht an dem die Bestandsregel unterschritten wird.

## Verwendung

### Produkte mit Bestandsregeln auf Bericht anzeigen

Mit dieser Erweiterung werden Bestandsregeln auf Produkten im Bericht *Kritische Vorhersage* angezeigt. Mit dem entsprechenden Aktion gelangen Sie direkt zur Ansicht *Aufüllen*.

![Stock Critical Forecast Link Replenish](attachments/Stock%20Critical%20Forecast%20Link%20Replenish.gif)