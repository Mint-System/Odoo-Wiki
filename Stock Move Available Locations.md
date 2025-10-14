---
title: Stock Move Available Locations
description: Nur Lagerorte mit Besand in Auswahl anzeigen.
kind: howto
partner: Mint-System
prev: ./stock
---

# Stock Move Available Locations

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `stock_move_available_locations`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/16.0/stock_move_available_locations>

## Verwendung

### Lagerort immer anzeigen

Zeigen Sie _Lager > Konfiguration > Lageorte_ an und wählen Sie ein Lageort aus, der immer in Transfer angezeigt werden soll. Markieren Sie das Feld _Lageort für Transfer?_.

### Lagerorte nach Verfügbarkeit filtern

Mit dieser Erweiterung wird die Auswahl der Lageort anhand des Produktbestands eingeschränkt. Lagerorte mit einem postivien Bestand oder dem Attribut _Lageort für Transfer?_ werden angezeigt.

Auf Operationen:

![Stock Move Available Locations Operationen](attachments/Stock%20Move%20Available%20Locations%20Operationen.gif)

Auf detaillierten Operationen:

![Stock Move Available Locations](attachments/Stock%20Move%20Available%20Locations.gif)
