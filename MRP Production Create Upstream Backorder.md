---
title: MRP Production Create Upstream Backorder
description: Erstelle Nachlieferungen für Pickings von Fertigungsaufträgen.
tags:
- HowTo
- Drittanbieter
prev: ./manufacture
---
# MRP Production Create Upstream Backorder
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `mrp_production_create_upstream_backorder`\
Repository: <https://github.com/OCA/product-attribute/tree/14.0/mrp_production_create_upstream_backorder>

## Verwendung

### Nachlieferungen erstellen

Mit dieser Erweiterungen wird bei positiver Änderung der zu produzierende Menge auf einem Fertigungsauftrag, eine neue Nachlieferung angelegt, sofern die bestehende Lieferung erledigt ist.

![](attachments/MRP%20Production%20Create%20Upstream%20Backorder%20Erstellen.gif)

Wird die zu produzierende Menge reduziert und ist der Materialbedarf gedeckt, werden offene Nachlieferungen gelöscht.

![](attachments/MRP%20Production%20Create%20Upstream%20Backorder%20Entfernen.gif)

