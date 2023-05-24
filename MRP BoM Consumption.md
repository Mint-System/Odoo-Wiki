---
title: MRP BoM Consumption
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./manufacture
---
# MRP BoM Consumption
![icon_oms_box](assets/icon_oms_box.png)

Definieren Sie eine Stückliste, die bei der Lieferung verbraucht wird.

Technischer Name: `mrp_bom_consumption`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/14.0/mrp_bom_consumption>

## Verwendung

### Vorgangstyp für Lagerschwund erstellen

Navigieren Sie nach *Lager > Konfiguration > Vorgangstypen* und erstellen Sie einen neuen Eintrag:

* **Name**: Scrap
* **Code**: BIN
* **Standard Quellort**: *WH/Stock*
* **Standard Zielort**: *Virtual Locations/Scrap*
* **Vorgangstyp**: *Interne Überweisung*

### Stückliste für Lagerschwund erstellen

Öffnen Sie ein Produkt und erstellen Sie eine Stückliste. Als *Stücklisten Typ* geben Sie *Scrap* an.

Fügen Sie der Komponenteliste Produkte und deren zu verbrauchende Menge ein.

![](assets/MRP%20BoM%20Consumption%20Stückliste.png)

### Lot Lagerschwund erstellen

Sie können die Verbrauch-Lagerbuchungen auf ein Lot beziehen. Öffnen Sie dazu das Produkt und erstellen Sie ein Lot. Hinterlegen Sie das Lot bei den Stücklisten zum Verbrauch.

![](assets/Manufacturing%20BoM%20Consumption%20Lot.png)

### Lieferung mit Lagerschwund erstellen

Wenn Sie einen Verkaufsauftrag für ein lieferbares Produkt mit einer Verbrauch-Stückliste bestätigen werden automatisch Verbrauch-Lagerbuchungen erstellt.

![](assets/MRP%20BoM%20Consumption%20Operations.png)

### Lieferung mit Lagerschwund bestätigen

Haben Sie ein Produkt mit einer Verbrauch-Stückliste erstellt, wird bei der Bestätigung der Lieferung automatisch die Lagerbuchung und Produktlieferung für den Lagerschwund bestätigt.

![Manufacture BoM Scrap Lagerschwund](assets/Manufacture%20BoM%20Scrap%20Lagerschwund.gif)

### Lieferung mit mehrfachem Lagerschwund erstellen

Angenommen Sie verbrauchen zur Lieferung von 1 Kg *Zander Ganz*: 0.5 Kg *Filet ohne Haut* und zur Lieferung von 1 Kg *Filet ohne Haut*:  2 Kg *Zander Ganz*, dann wird für jedes Produkt ein Lagerschwund registriert.

![Manufacturing BoM Scrap doppelt](assets/Manufacturing%20BoM%20Scrap%20mehrfach.gif)

### Verbrauch-Lagerbuchungen anzeigen

Öffnen Sie das Produkt via *Lager > Produkte > Produkte* und drücken Sie auf *Produktlieferungen*. Hier sehen Sie alle Lagerbewegungen des Produkts.

![](assets/Manufacturing%20BoM%20Scrap%20Produktlieferungen.png)

### Lieferung mit Lagerschwund abbrechen

Beim erledigen einer Lieferung mit Lagerschwund, wird eine zusätzlicher Lagerbuchung erstellt. Wird die Lieferung abgebrochen, dann wird die zusätzliche Lagerbuchung auf Null gesetzt.

![Manufacture BoM Scrap abbrechen](assets/Manufacture%20BoM%20Scrap%20abbrechen.gif)

### Verkaufsauftrag mit Lagerschwund abbrechen

Beim Abbrechen eines Verkaufsauftrags mit Lagerschwund wird die entsprechende Lagerbuchung abgebrochen.

![Manufacturing BoM Scrap Verkauf abbrechen](assets/Manufacturing%20BoM%20Scrap%20Verkauf%20abbrechen.gif)