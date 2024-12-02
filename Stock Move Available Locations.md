---
title: Stock Move Available Locations
description: Nur Lagerorte mit Besand in Auswahl anzeigen.
tags:
- HowTo
- Drittanbieter
prev: ./stock
---
# Stock Move Available Locations
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `stock_move_available_locations`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/14.0/stock_move_available_locations>

## Verwendung

### Lagerort immer anzeigen

Zeigen Sie *Lager > Konfiguration > Lageorte* an und wählen Sie ein Lageort aus, der immer in Transfer angezeigt werden soll. Markieren Sie das Feld *Lageort für Transfer?*.

### Lagerorte nach Verfügbarkeit filtern

Mit dieser Erweiterung wird die Auswahl der Lageort anhand des Produktbestands eingeschränkt. Lagerorte mit einem postivien Bestand oder dem Attribut *Lageort für Transfer?* werden angezeigt.

Auf Operationen:

![Stock Move Available Locations Operationen](attachments/Stock%20Move%20Available%20Locations%20Operationen.gif)

Auf detaillierten Operationen:

![Stock Move Available Locations](attachments/Stock%20Move%20Available%20Locations.gif)