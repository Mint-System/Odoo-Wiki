---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./einkauf
---
# Purchase Order Line Description
![icon_oms_box](assets/icon_oms_box.png)

Nur die Einkaufsbeschreibung in die Einkaufsposition übernehmen.

Technischer Name: `purchase_order_line_description`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/14.0/purchase_order_line_description>

## Konfiguration

### Produktreferenz ausblenden

Mit dem Systemparameter `purchase.order.line.hide_ref` können Sie festlegen, ob die Produktreferenz eingeblendet werden soll. Setzen Sie den Wert auf `True` um die Referenz einzublenden.

## Verwendung

### Nur Einkaufsbeschreibung übertragen

Mit dieser Erweiterung wird beim Hinzufügen eines Produkts in einer Bestellung statt *Referenz + Name + Einkaufsbeschreibung* die folgende Formel angewendet:

*Verkäufer Produktcode + Einkaufsbeschreibung + Verkäufer Produktname*

Falls *Produktcode* oder *Produktname* nicht vorhanden sind wird die Einkaufsbeschreibung übernommen.

![](assets/Purchase%20Order%20Line%20Description%20Product%20Code.png)