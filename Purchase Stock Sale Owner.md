---
title: Purchase Stock Sale Owner
description: Eigentümer auf Wareneingang aus Verkaufsauftrag zuordnen.
tags:
- HowTo
- Drittanbieter
prev: ./purchase
---
# Purchase Stock Sale Owner
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `purchase_stock_sale_owner`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/15.0/purchase_stock_sale_owner>

## Verwendung

### Eigentümer beim Wareneingang zuordnen

Mit dieser Erweiterung wird bei der Generierung des Wareneingangs aus einer Bestellung geprüft, ob es sich um eine Purchase To Order Bestellung handelt. Wenn die Bestellung mit einem Verkaufsauftrag verknüpft ist, wird der Kontakt aus Lieferadresse als Eigentümer auf dem Wareneingang eingetragen.