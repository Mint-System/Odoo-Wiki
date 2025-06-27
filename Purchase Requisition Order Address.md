---
title: Purchase Requisition Order Address
description: Bestelladresse auf Kaufverträge.
kind: howto
tags:
- Drittanbieter
prev: ./purchase-requisition
---
# Purchase Requisition Order Address
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `purchase_requisition_order_address`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/17.0/purchase_requisition_order_address>

## Verwendung

### Bestelladresse auf Kaufvertrag erfassen

Mit dieser Erweiterung wird bei der Auswahl des Kontakts der Unterkontakt vom Typ *Bestelladresse* auf das gleichnamige Feld im Kaufvertrag übertragen. Beim Erstellen einer Bestellung wird die *Bestelladresse* übertragen.

![](attachments/Purchase%20Requisition%20Order%20Address.png)

::: warning
Die Bestelladresse auf Kaufvertrag übersteuert die Bestelladresse des Lieferant auf der Bestellung.
:::