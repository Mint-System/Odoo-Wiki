---
title: Purchase Order Line Description
description: Nur die Einkaufsbeschreibung in die Einkaufsposition übernehmen.
kind: howto
tags:
- Mint-System
prev: ./purchase
---
# Purchase Order Line Description
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `purchase_order_line_description`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/16.0/purchase_order_line_description>

## Konfiguration

### Produktreferenz ausblenden

Mit dem Systemparameter `purchase.order.line.hide_ref` können Sie festlegen, ob die Produktreferenz eingeblendet werden soll. Setzen Sie den Wert auf `True` um die Referenz einzublenden.

## Verwendung

### Nur Einkaufsbeschreibung übertragen

Mit dieser Erweiterung wird beim Hinzufügen eines Produkts in einer Bestellung statt *Referenz + Name + Einkaufsbeschreibung* die folgende Formel angewendet:

*Lieferant Produktcode + Einkaufsbeschreibung + Lieferant Produktname*

Falls *Produktcode* oder *Produktname* nicht vorhanden sind wird die Einkaufsbeschreibung übernommen.

![](attachments/Purchase%20Order%20Line%20Description%20Product%20Code.png)
