---
tags:
- HowTo
prev: ./forestry-base
---
# Forestry Stock
![icons_odoo_forestry_base](assets/icons_odoo_forestry_base.png)

Erweiterung Lager für die Holzwirtschaft.

Technischer Name: `forestry_stock`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Vertical-Forestry/tree/15.0/forestry_stock>

## Lagerbuchungen validieren

Wenn Sie die Zeiterfassungseinträge validieren, wird unter folgenden Bedinungen eine Lagerbuchung erstellt:
* Der Zeiterfassungseintrag ist mit einer Aufgabe verknüpft
* Das verlinkte Produkt ist gelagert
* Die vorhandene Menge ist nicht negativ

Hier ein Bespiel des Prozesses:

![Forestry Stock](assets/Forestry%20Stock.gif)