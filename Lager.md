---
tags:
- HowTo
prev: ./
---
# Lager
![icons_odoo_stock](assets/icons_odoo_stock.png)

Maximieren Sie die Effizienz Ihres Lagers.

## Bereiche

| Bereich                                                 | Beschreibung                           |
| ------------------------------------------------------- | -------------------------------------- |
| [Handscanner Zebra TC21](Handscanner%20Zebra%20TC21.md) | Handscanner für Odoo.                  |
| [Handscanner Zebra DS22](Handscanner%20Zebra%20DS22.md) | Handscanner für Odoo.                  |
| [Lager Verpackungen](Lager%20Verpackungen.md)           | Verpackungen effizient verwalten.      |
| [Lager Bestand](Lager%20Bestand.md)                     | Den Lagerbestand optimal verwalten.    |
| [Lager Aktionen](Lager%20Aktionen.md)                   | Arbeitsflüsse im Lager automatisieren. |
| [Lager Vorgänge](Lager%20Vorgänge.md)                   | Vorgänge im Lager ausführen.           |

## Erweiterungen

| Erweiterung                                                                                   | Beschreibung                                                                                                |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Demand Planner](Demand%20Planner.md)                                                         | Bestellvorschläge für Kompontenten aus Stücklisten anhand Lageroperationen und Prognosen generieren lassen. |
| [Stock Production Lot Active](Stock%20Production%20Lot%20Active.md)                           | Erlaubt die Archivierung von Los/Chargen.                                                                   |
| [Stock Move Line Position](Stock%20Move%20Line%20Position.md)                                 | Positionsnummer aus dem Verkaufs- oder Einkaufsauftrag anzeigen.                                            |
| [Stock Delivery Note](Stock%20Delivery%20Note.md)                                             | Notiz auf Lieferschein.                                                                                     |
| [Product Logistics UoM](Product%20Logistics%20UoM.md)                                         | Individuelle Mengenheit für Produkte festlegen.                                                             |
| [Stock Move Weight UoM](Stock%20Move%20Weight%20UoM.md)                                       | Berechnung Gewicht unter Berücksichtigung der Mengeneinheit.                                                |
| [Stock Move Line Auto Fill](Stock%20Move%20Line%20Auto%20Fill.md)                             | Die erledigte Menge auf einem Transfer automatisch ausfüllen.                                               |
| [Stock Critical Forecast](Stock%20Critical%20Forecast.md)                                     | Kritisches Datum für gelieferte Produkte und Komponenten in der Fertigung anzeigen.                         |
| [Stock Picking Notes](Stock%20Picking%20Notes)                                                | Zusätzliche Notizfelder auf dem Transfer, die beim Bestätigen eines Verkaufsauftrags kopiert werden.        |
| [Stock Move Sale Order Name](Stock%20Move%20Sale%20Order%20Name.md)                           | Beschreibung der Auftragsposition wird auf die Lieferung kopiert.                                           |
| [Stock Picking Responsible](Stock%20Picking%20Responsible.md)                                 | Verantworliche Person des Verkaufsauftrags wird auf die Lieferung kopiert.                                  |
| [Stock Vendor Evaluation](Stock%20Vendor%20Evaluation.md)                                     | Lieferungen bewerten und Lieferanten auswerten.                                                             |
| [Stock Aggregated Move Lines Description](Stock%20Aggregated%20Move%20Lines%20Description.md) | Beschreibungsfeld auf aggregierten Zeilen anzeigen.                                                         |
| [Stock Aggregated Move Line](Stock%20Aggregated%20Move%20Line.md)                             | Zugriff auf Lieferung in aggregierten Zeilen.                                                               |
| [Stock Picking Invoice Link](Stock%20Picking%20Invoice%20Link.md)                             | Verlinkt Rechnungen und Transfers.                                                                          |
| [Stock Move Available Locations](Stock%20Move%20Available%20Locations.md)                     | Nur Lagerorte mit Besand in Auswahl anzeigen.                                                                                                            |

## Ablaufdatum aktivieren

Für Produkte in Lots oder Produkte mit Seriennummer könne Sie ein Ablaufdatum festlegen. Öffnen Sie das Produkt via *Lager > Produkte > Produkte* und zeigen Sie den Tab *Lager* an. Unter Lieferfolgung müssen Sie eine Option für *Nachverfolung* auswählen. Nun erscheint die Checkbox *Ablaudatum*. Aktivieren Sie diese und konfigurieren Sie die Ablaufzeiten.

![](assets/Lager%20Ablaufdatum%20konfiguriert.png)

## Sicherheitsvorlaufzeiten definieren

Die Sicherheitsvorlaufzeiten können Sie zentral unter *Einstellungen > Lager > Erweiterte Planung* festlegen. Aktivieren Sie für jeweilige Vorlaufzeit die Checkbox und tragen Sie die gewünschten Zeiten ein

## Rundungsgenauigkeit einer Mengeneinheit ändern

Wenn Sie die Rundungsgenauigkeit (Stellen nach dem Komma) einer Mengeneinheit ändern möchten, öffnen Sie *Lager > Konfiguration > Mengeneinheiten > UoM* und wählen hier die Einheit aus. Im Feld *Rundungsgenauigkeit* geben Sie den entsprechenden Wert ein. 

::: warning
Die Anzahl Dezimalstellen für eine Einheit wird unter *Einstellungen > Technisch> Datenbankstruktur > Dezimalstellen* verwaltet. Passen Sie dort den entsprechenden Eintrag an.
:::

Die hier gemachten Einstellung haben Einfluss auf die Darstellung der Zahl.

![](assets/Lager%20Wicht%20mit%203%20Kommastellen.png)

## Lagerort Lagerschwund mit externer ID ergänzen

Erfassen Sie für das Lagerort *Virtual Locations/Scrap* eine externe ID gemäss [Externe ID erfassen](Entwicklung.md#Externe%20ID%20erfassen). Die Definition ist wie folgt:

![](assets/Lager%20Lagerschwund%20externe%20ID.png)