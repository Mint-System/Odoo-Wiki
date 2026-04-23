---
title: Stock Move Lot Add Default Code
description: Fügt einer Serien- oder Chargennummer die Referenz (default code) des Produkts hinzu.
kind: howto
partner: Mint System
prev: ./stock
---

# Stock Move Lot Add Default Code

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `stock_move_lot_add_default_code`\
Repository: <https://github.com/Mint-System/Odoo-Apps-stock-logistics-workflow/tree/19.0/stock_move_lot_add_default_code>

### Verwendung

Mit dieser Erweiterung wird einer generierte Serien- oder Chargennummer die Referenz (default code ) des Produkts in der Form `$default_code / $lot_name` vorangestellt.
Beispiel: SN0005 -> P01-005-007/SN005
