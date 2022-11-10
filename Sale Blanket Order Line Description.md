---
tags:
- HowTo
- Drittanbieter
prev: ./verkauf-rahmenverträge
---
# Sale Blanket Order Line Description
![icon_oms_box](assets/icon_oms_box.png)

Beschreibungsfeld von Rahmenauftragszeile auf die Verkaufsauftragszeile kopieren.

Technischer Name: `sale_blanket_order_line_description`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/14.0/sale_blanket_order_line_description>

## Verwendung

### Beschreibung Rahmenauftrag ohne interne Referenz generieren

Damit beim Hinzufügen der Beschreibung nur der Produktname angezeigt wird, legen Sie einen [Systemparameter](Entwicklung.md#Systemparameter%20anlegen) mit Wert `sale.blanket.order.line.hide_default_code` und Wert `True` an.

![](assets/Sale%20Blanket%20Order%20Line%20Description%20Systemparameter.png)

### Beschreibung Rahmenauftrag ohne Produktname generieren

Wenn Sie beim Hinzufügen eines Produkt nur die Verkaufsbeschreibung anzeigen möchten, legen Sie einen [Systemparameter](Entwicklung.md#Systemparameter%20anlegen) mit Wert `sale.blanket.order.line.sale_description_only` und Wert `True` an.

![](assets/Sale%20Blanket%20Order%20Line%20Description%20Systemparameter.png)

### Beschreibung Rahmenauftragszeile kopieren

Mit dieser Erweiterung wird die in der Rahmenauftragszeile das Feld *Beschreibung* eingeblendet. Sie können dieses überschreiben. Beim Erstellen eines Verkaufsauftrags wird es kopiert.

![](assets/Sale%20Blanket%20Order%20Line%20Description.png)

Gemäss den Optionen oben kann der Übertrag konfiguriert werden:

![](assets/Sale%20Blanket%20Order%20Line%20Description%20Params.png)