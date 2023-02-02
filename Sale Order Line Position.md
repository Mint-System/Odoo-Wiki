---
tags:
- HowTo
- Drittanbieter
prev: ./order-positions
---
# Sale Order Line Po
![icon_oms_box](assets/icon_oms_box.png)

Verkaufsaufträge mit Positionsnummern. 

Technischer Name: `sale_order_line_position`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/15.0/sale_order_line_position>

## Verwendung

Gilt ab #Odoo15 .

### Positionsnummern generieren

Die Positionsnummern auf einem Verkausauftrag werden mit dieser Erweiterung automatisch generiert. Zeigen Sie einen Auftrag unter *Verkauf > Aufträge > Angebote* an.

::: tip
Wenn Positionsnummern gleich 0 sind, können Sie *Aktion > Positionsnummern festlegen* ausführen.
:::

### Positionsnummer anzeigen

Unter <https://odoo.build/snippets> finden Sie Snippets mit der Bezeichnung *Get Postition*, beispielsweise <https://odoo.build/snippets/purchase.html#get-position>. Verwenden Sie diese Snippets um auf Berichten, die Positionsnummer aus Verkaus-, Einkaufs- und Fertigungsaufträgen anzuzeigen.