---
tags:
- HowTo
---
[> Home](/)
# Lager
![icons_odoo_stock](assets/icons_odoo_stock.png)

Maximieren sie die Effizienz Ihres Lagers.

| Bereich                                                 | Beschreibung                      |
| ------------------------------------------------------- | --------------------------------- |
| [Handscanner Zebra TC21](Handscanner%20Zebra%20TC21.md) | Handscanner für Odoo.             |
| [Handscanner Zebra DS22](Handscanner%20Zebra%20DS22.md) | Handscanner für Odoo.             |
| [Lager Verpackungen](Lager%20Verpackungen.md)           | Verpackungen effizient verwalten. |

| Erweiterung                                                         | Beschreibung                                                                                                |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Demand Planner](Demand%20Planner.md)                               | Bestellvorschläge für Kompontenten aus Stücklisten anhand Lageroperationen und Prognosen generieren lassen. |
| [Stock Production Lot Active](Stock%20Production%20Lot%20Active.md) | Erlaubt die Archivierung von Los/Chargen.                                                                   |
| [Stock Move Line Position](Stock%20Move%20Line%20Position.md)       | Positionsnummer aus dem Verkaufs- oder Einkaufsauftrag anzeigen.                                            |
| [Stock Delivery Note](Stock%20Delivery%20Note.md)                   | Notiz auf Lieferschein.                                                                                     |
| [Stock Move Line Packaging](Stock%20Move%20Line%20Packaging.md)     | Verknüpfen der Verpackung von Verkaufsauftrag.                                                              |
| [Stock Barcode Packaging](Stock%20Barcode%20Packaging.md)           | Verpackung auf Strichcode-Vorgang anzeigen.                                                                                                            |


## Erweiterte Vorgangstypen einrichten

Wenn in den Einstellungen für das Lager die Option *Mehrstufige Routen* eingeschaltet wird, erweitert sich die Liste der Vorgangstypen mit *Interne Transfers*. Die neue Liste zeigt sich wie folgt:

1. Anlieferungen
2. Interne Transfers
3. Lieferaufträge
4. Manufacturing

Die Option *Mehrere Lagerorte* wird automatisch eingeschaltet und es erscheinen im Menu die neuen Funktion *Lagerorte* und *Regeln*.

![](assets/Lager%20Erweitertes%20Menu.png)

## Inventur vorbereiten

Navigieren sie zum Menu *Lager > Vorgänge > Inventur*. Mit dem Knopf *Anlegen* erstellen sie einen Inventurauftrag. Befüllen sie die Felder gemäss untenstehender Tabelle.

| Bezeichnung                       | Beschreibung                                                                                    |
| --------------------------------- | ----------------------------------------------------------------------------------------------- |
| Veranstaltungsorte                | Auswahl auf ein bestimmtes Lager (erscheint nur falls die Option "Lagerorte" eingeschaltet ist) |
| Inventurauftrag                   | Name der Inventur (z.B. "Jahresabschluss 2020")                                                 |
| Produkte                          | Auswahl der zu inventierenden Produkte (1-n)                                                    |
| Enthaltene Produkte einschliessen | Produkte mit Bestand 0 berücksichtigen oder nicht                                               |
| Buchungsdatum                     | -                                                                                               |
| Unternehmen                       | -                                                                                               |
| Gezählte Mengen                   | -                                                                                               |

## Inventur durchführen

Starten sie die vorbereitete Inventur mit *Inventur Starten*. Falls ein nicht gelistetes Produkt gezählt wird, kann über *Anlegen* eine neue Position eingefügt werden.

Befüllen sie nun die Spalte *Gezählt* entsprechend der gezählten Quantität pro Produkt. Nach der abgeschlossenen Zählung wird mit *Bestandsbuchung Durchführen* der korrigierte Bestand gebucht. Das Protokoll kann über *Print Count Sheet* erstellt werden.

## Ablaufdatum aktivieren

Für Produkte in Lots oder Produkte mit Seriennummer könne sie ein Ablaufdatum festlegen. Öffnen sie das Produkt via *Lager > Produkte > Produkte* und zeigen sie den Tab *Lager* an. Unter Lieferfolgung müssen sie eine Option für *Nachverfolung* auswählen. Nun erscheint die Checkbox *Ablaudatum*. Aktivieren sie diese und konfigurieren sie die Ablaufzeiten.

![](assets/Lager%20Ablaufdatum%20konfiguriert.png)

## Sicherheitsvorlaufzeiten definieren

Die Sicherheitsvorlaufzeiten können sie zentral unter *Einstellungen > Lager > Erweiterte Planung* festlegen. Aktivieren sie für jeweilige Vorlaufzeit die Checkbox und tragen sie die gewünschten Zeiten ein

## Bordereau-Export erstellen

Öffnen sie *Lager > Berichtswesen > Produktlieferungen*. Filtern sie die Daten wie  folgt:

* Ausgehend
* Erledigt

Gruppieren und sortieren sie Lagerbuchungen nach:

* Datum > Tag
* Lieferadresse
* Produkt

Markieren sie zu exportierenden Lagerbuchungen und wählen sie *Aktion > Export*. Wählen sie diese Felder:

* Lagerbuchung/Lieferadresse
* Produkt/Referenz
* Produkt
* Produkt/HS-Code
* Erledigt