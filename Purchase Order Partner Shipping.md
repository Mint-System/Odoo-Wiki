---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./purchase
---
# Purchase Order Partner Shipping
![icon_oms_box](assets/icon_oms_box.png)

Alternative Lieferadresse für Bestellungen.

Technischer Name: `purchase_order_partner_shipping`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/14.0/purchase_order_partner_shipping>

## Verwendung

### Alternative Lieferadresse festlegen

Mit dieser Erweiterung können Sie auf Bestellung eine alternative Lieferadresse definieren. Zeigen Sie eine Bestellung unter *Einkauf* an und legen Sie im Feld *Lieferadresse* die alternative Lieferadresse fest.

![Purchase Order Partner Shipping](assets/Purchase%20Order%20Partner%20Shipping.gif)

::: warning
Wird aus einer Bestellung eine Lieferung generiert, so wird die alternative Lieferadesse der Warenhausadresse aus der Lieferung auf den Einkaufs-Berichten vorgezogen.

![](assets/Purchase%20Order%20Partner%20Shipping%20Priority.png)
:::