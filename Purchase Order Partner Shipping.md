---
title: Purchase Order Partner Shipping
description: Alternative Lieferadresse für Bestellungen.
kind: howto
partner: Mint-System
prev: ./purchase
---

# Purchase Order Partner Shipping

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `purchase_order_partner_shipping`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/17.0/purchase_order_partner_shipping>

## Verwendung

### Alternative Lieferadresse festlegen

Mit dieser Erweiterung können Sie auf Bestellung eine alternative Lieferadresse definieren. Zeigen Sie eine Bestellung unter _Einkauf_ an und legen Sie im Feld _Lieferadresse_ die alternative Lieferadresse fest.

![Purchase Order Partner Shipping](attachments/Purchase%20Order%20Partner%20Shipping.gif)

::: warning
Wird aus einer Bestellung eine Lieferung generiert, so wird die alternative Lieferadesse der Warenhausadresse aus der Lieferung auf den Einkaufs-Berichten vorgezogen.

![](attachments/Purchase%20Order%20Partner%20Shipping%20Priority.png)
:::
