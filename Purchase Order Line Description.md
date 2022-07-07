---
tags:
- HowTo
- Drittanbieter
prev: ./einkauf
---
# Purchase Order Line Description
![icon_oms_box](assets/icon_oms_box.png)

Nur die Einkaufsbeschreibung in der Einkaufsposition übernehmen.

Technischer Name: `purchase_order_line_description`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/14.0/purchase_order_line_description>

## Erweiterung konfigurieren

Mit dem Systemparameter `purchase.order.line.hide_ref` können Sie festlegen, ob die Produktreferenz eingeblendet werden soll. Setzen Sie den Wert auf `True` um die Referenz einzublenden.

## Nur Einkaufsbeschreibung übertragen

Mit dieser Erweiterung wird beim Hinzufügen eins Produkts in einer Bestellung statt *Referenz + Name + Einkaufsbeschreibung* die folgende Formel angewendet:

*Verkäufer Produktcode + Einkaufsbeschreibung + Verkäufe Produktname*

Falls *Produktcode* oder *Produktname* nicht vorhanden sind wird die Einkaufsbeschreibung übernommen.

![](assets/Purchase%20Order%20Line%20Description%20Product%20Code.png)