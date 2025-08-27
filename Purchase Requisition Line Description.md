---
title: Purchase Requisition Line Description
description: Nur die Einkaufsbeschreibung in die Einkaufsposition übernehmen.
kind: howto
partner: Mint-System
prev: ./purchase-requisition
---
# Purchase Requisition Line Description
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `purchase_requisition_line_description`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/17.0/purchase_requisition_line_description>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `purchase.requisition.line.hide_ref` können Sie festlegen, ob die Produktreferenz eingeblendet werden soll. Setzen Sie den Wert auf `True` um die Referenz einzublenden.

### Nur Einkaufsbeschreibung übertragen

Mit dieser Erweiterung wird beim Hinzufügen eines Produkts in einer Bestellung statt *Referenz + Name + Einkaufsbeschreibung* die folgende Formel angewendet:

*Lieferant Produktcode + Einkaufsbeschreibung + Lieferant Produktname*

Falls *Produktcode* oder *Produktname* nicht vorhanden sind wird die Einkaufsbeschreibung übernommen.

![](attachments/Purchase%20Requisition%20Line%20Description.png)


#### Beispiel
Produktname: 6kt-Schraube M6x30 A4\
Interne Referenz: 072001/04\
Lieferant Produktname: Schraube M6x30 A4\
Lieferant Produktcode: ISO 4014 M6x30 A4\
Einkaufsbeschreibung: Packet à 100 Stk


Systemparameter `purchase.requisition.line.hide_ref` ist False

Variante 1: Ohne Einkaufsbeschreibung
![](attachments/Purchase%20Requisition%20Line%20Description%20Variante%201.png)

Variante 2: Mit Einkaufsbeschreibung *Packet à 100 Stk*
![](attachments/Purchase%20Requisition%20Line%20Description%20Variante%202.png)

Systemparameter `purchase.requisition.line.hide_ref` ist True

Variante 3: Ohne Einkaufsbeschreibung
![](attachments/Purchase%20Requisition%20Line%20Description%20Variante%203.png)

Variante 4: Mit Einkaufsbeschreibung *Packet à 100 Stk*
![](attachments/Purchase%20Requisition%20Line%20Description%20Variante%204.png)
