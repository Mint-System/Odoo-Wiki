---
tags:
- HowTo
- Drittanbieter
prev: ./fertigung
---
# Manufacturing BoM Scrap
![icon_oms_box](assets/icon_oms_box.png)

Definieren Sie eine Stückliste, die bei der Lieferung verschrottet wird.

Technischer Name: `mrp_bom_scrap`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/14.0/mrp_bom_scrap>

## Stückliste zum Verbrauch erstellen

Öffnen sie ein Produkt und erstellen sie eine Stückliste. Als *Stücklisten Typ* geben sie *Scrap* an. Als Lagerquelle geben sie *WH/Stock* und als Ziellager *Virtual Locations/Scrap* ein.

Fügen sie der Komponenteliste Produkte und deren zu verbrauchende Menge ein.

![Manufacture BoM Scrap erstellen](assets/Manufacture%20BoM%20Scrap%20erstellen.gif)

## Lot Lagerschwund erstellen

Damit der Verbrauch richtig verfolgt werden kann, erstellen sie für die zu verbrauchenden Produkte ein Lot. Öffnen sie das Produkt und erstellen sie ein Lot. Hinterlegen sie das Lot bei den Stücklisten zum Verbrauch.

![Manufacture BoM Scrap Lot erstellen](assets/Manufacture%20BoM%20Scrap%20Lot%20erstellen.gif)

## Lieferung mit Verbrauch erstellen

Haben sie ein Produkt mit einer Verbrauchsstückliste erstellt, wird bei der Bestätigung der Lieferung automatisch eine Lagerbuchung und Produktlieferung mit dem Verbrauch erstellt.

![Manufacture BoM Scrap Lagerschwund](assets/Manufacture%20BoM%20Scrap%20Lagerschwund.gif)

## Verbrauch anzeigen

Öffnen sie das Produkt via *Lager > Produkte > Produkte* und drücken sie auf *Produktlieferungen*. Hier sehen sie alle Lagerbewegungen des Produkts.

![](assets/Pasted%20image%2020220202165832.png)