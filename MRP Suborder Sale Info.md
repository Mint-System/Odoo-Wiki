---
title: MRP Suborder Sale Info
description: In MTO-Workflows Verkaufsauftrag auf Child-Fertigungsaufträge übertragen.
kind: howto
partner: Mint-System
prev: ./manufacture
---

# MRP Suborder Sale Info

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mrp_suborder_sale_info`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/17.0/mrp_suborder_sale_info>

## Verwendung

### Erweiterung der Übertragung von Verkaufsinfos

Das Modul *MRP Sale Info* überträgt beim Anlegen von Produktionsaufträgen in MTO-Workflows die Referenz zum Verkaufsauftrag auf den Fertigungsauftrag. Löst ein MTO-Produkt der Stückliste selbst  wieder einen Fertigungsauftrag aus, wird die Referenz zum Verkaufsauftrag auch auf diesen Fertigungsauftrag übertragen.  


