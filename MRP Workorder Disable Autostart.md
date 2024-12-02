---
title: MRP Workorder Disable Autostart
description: Bei Aufruf von Arbeitsaufträgen in der Tablet-Ansicht nicht automatisch starten.
tags:
- HowTo
- Drittanbieter
prev: ./manufacture
---
# MRP Workorder Disable Autostart
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mrp_workorder_disable_autostart`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/16.0/mrp_workorder_disable_autostart>

## Verwendung

### Arbeitsauftrag nicht automatisch starten

Mit dieser Erweiterung werden Arbeitsaufträge beim Aufruf in der Kanban-Ansicht nicht automatisch gestartet.

::: tip
Mit der Kontext-Option `context="{'mrp_workorder_disable_autostart': False}"` kann das Standardverhalten beim Aufruf der Tablet-Ansicht deaktiviert werden.
:::

![MRP Workorder Disable Autostart](attachments/MRP%20Workorder%20Disable%20Autostart.gif)