---
tags:
- HowTo
- Drittanbieter
prev: ./fertigung
---
# MRP Workorder Disable Autostart
![icon_oms_box](assets/icon_oms_box.png)

Bei Aufruf von Arbeitsaufträgen in der Tablet-Ansicht nicht automatisch starten.

Technischer Name: `mrp_workorder_disable_autostart`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/14.0/mrp_workorder_disable_autostart>

## Verwendung

### Arbeitsauftrag nicht automatisch starten

Mit dieser Erweiterung werden Arbeitsaufträge beim Aufruf in der Kanban-Ansicht nicht automatisch gestartet.

::: tip
Mit der Kontext-Option `context="{'mrp_workorder_disable_autostart': False}"` kann das Standardverhalten beim Aufruf der Tablet-Ansicht deaktiviert werden.
:::

![MRP Workorder Disable Autostart](assets/MRP%20Workorder%20Disable%20Autostart.gif)