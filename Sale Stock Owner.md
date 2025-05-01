---
title: Sale Stock Owner
description: Kunde als Besitzer an Lieferungen und Beständen zuordnen.
tags:
- HowTo
- Drittanbieter
prev: ./sale-stock
---
# Sale Stock Owner
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `sale_stock_owner`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/15.0/sale_stock_owner>

## Beschreibung

Wenn diese Erweiterung installier ist, wird der Kunde eines Verkaufsauftrags auf der Lieferung als Eigentümer eingetragen.

![](attachments/Sale%20Stock%20Owner%20Eigentümer.png)

Wenn die Lieferung bestätigt wird, wird bei der Anpassung des Bestandes im Abgangslager der Eigentümer entfernt.

Der Eigentümer des Bestands im Kundenlager bleibt erhalten.

![](attachments/Sale%20Stock%20Owner%20Customer%20Location.png)