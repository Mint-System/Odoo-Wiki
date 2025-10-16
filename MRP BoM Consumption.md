---
title: MRP BoM Consumption
description: Definieren Sie eine Stückliste, die bei der Lieferung verbraucht wird.
kind: howto
partner: Mint-System
prev: ./manufacture
---

# MRP BoM Consumption

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mrp_bom_consumption`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/14.0/mrp_bom_consumption>

## Verwendung

### Vorgangstyp für Lagerschwund erstellen

Navigieren Sie nach _Lager > Konfiguration > Vorgangstypen_ und erstellen Sie einen neuen Eintrag:

- **Name**: Scrap
- **Code**: BIN
- **Standard Quellort**: _WH/Stock_
- **Standard Zielort**: _Virtual Locations/Scrap_
- **Vorgangstyp**: _Interne Überweisung_

### Stückliste für Lagerschwund erstellen

Öffnen Sie ein Produkt und erstellen Sie eine Stückliste. Als _Stücklisten Typ_ geben Sie _Scrap_ an.

Fügen Sie der Komponenteliste Produkte und deren zu verbrauchende Menge ein.

![](attachments/MRP%20BoM%20Consumption%20Stückliste.png)

### Lot Lagerschwund erstellen

Sie können die Verbrauch-Lagerbuchungen auf ein Lot beziehen. Öffnen Sie dazu das Produkt und erstellen Sie ein Lot. Hinterlegen Sie das Lot bei den Stücklisten zum Verbrauch.

![](attachments/Manufacturing%20BoM%20Consumption%20Lot.png)

### Lieferung mit Lagerschwund erstellen

Wenn Sie einen Verkaufsauftrag für ein lieferbares Produkt mit einer Verbrauch-Stückliste bestätigen werden automatisch Verbrauch-Lagerbuchungen erstellt.

![](attachments/MRP%20BoM%20Consumption%20Operations.png)

### Lieferung mit Lagerschwund bestätigen

Haben Sie ein Produkt mit einer Verbrauch-Stückliste erstellt, wird bei der Bestätigung der Lieferung automatisch die Lagerbuchung und Produktlieferung für den Lagerschwund bestätigt.

![Manufacture BoM Scrap Lagerschwund](attachments/Manufacture%20BoM%20Scrap%20Lagerschwund.gif)

### Lieferung mit mehrfachem Lagerschwund erstellen

Angenommen Sie verbrauchen zur Lieferung von 1 Kg _Zander Ganz_: 0.5 Kg _Filet ohne Haut_ und zur Lieferung von 1 Kg _Filet ohne Haut_: 2 Kg _Zander Ganz_, dann wird für jedes Produkt ein Lagerschwund registriert.

![Manufacturing BoM Scrap doppelt](attachments/Manufacturing%20BoM%20Scrap%20mehrfach.gif)

### Verbrauch-Lagerbuchungen anzeigen

Öffnen Sie das Produkt via _Lager > Produkte > Produkte_ und drücken Sie auf _Produktlieferungen_. Hier sehen Sie alle Lagerbewegungen des Produkts.

![](attachments/Manufacturing%20BoM%20Scrap%20Produktlieferungen.png)

### Lieferung mit Lagerschwund abbrechen

Beim erledigen einer Lieferung mit Lagerschwund, wird eine zusätzlicher Lagerbuchung erstellt. Wird die Lieferung abgebrochen, dann wird die zusätzliche Lagerbuchung auf Null gesetzt.

![Manufacture BoM Scrap abbrechen](attachments/Manufacture%20BoM%20Scrap%20abbrechen.gif)

### Verkaufsauftrag mit Lagerschwund abbrechen

Beim Abbrechen eines Verkaufsauftrags mit Lagerschwund wird die entsprechende Lagerbuchung abgebrochen.

![Manufacturing BoM Scrap Verkauf abbrechen](attachments/Manufacturing%20BoM%20Scrap%20Verkauf%20abbrechen.gif)
