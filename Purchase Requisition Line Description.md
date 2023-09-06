---
title: Purchase Requisition Line Description
description: Nur die Einkaufsbeschreibung in die Einkaufsposition übernehmen.
tags:
- HowTo
- Drittanbieter
prev: ./purchase-requisition
---
# Purchase Requisition Line Description
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `purchase_requisition_line_description`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/14.0/purchase_requisition_line_description>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `purchase.requisition.line.hide_ref` können Sie festlegen, ob die Produktreferenz eingeblendet werden soll. Setzen Sie den Wert auf `True` um die Referenz einzublenden.

### Nur Einkaufsbeschreibung übertragen

Mit dieser Erweiterung wird beim Hinzufügen eines Produkts in einer Bestellung statt *Referenz + Name + Einkaufsbeschreibung* die folgende Formel angewendet:

*Verkäufer Produktcode + Einkaufsbeschreibung + Verkäufer Produktname*

Falls *Produktcode* oder *Produktname* nicht vorhanden sind wird die Einkaufsbeschreibung übernommen.

![](attachments/Purchase%20Requisition%20Line%20Description.png)