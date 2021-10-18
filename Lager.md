---
tags:
- HowTo
---
# Lager
![icons_odoo_stock](assets/icons_odoo_stock.png)

Maximieren sie die Effizienz Ihres Lagers.

Erweiterungen:
* [Demand Planner](Demand-Planner.md)
* [Handscanner Zebra TC21](Handscanner-Zebra-TC21.md)

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

## Produktverpackung erfassen

Um die verschiedenen Produktverpackungen zu erfassen navigieren sie zu folgender Einstellung: *Lager > Konfiguration > Produkte > Produktverpackungen*.

![Lager Produktverpackungen Beispiel](assets/Lager%20Produktverpackungen%20Beispiel.png)

## Produkt verpacken

Für einen internen Transfer verpacken sie ein Produkt wie folgt:

![Lager Verpackungen Beispiel](assets/Lager%20Verpackungen%20Beispiel.gif)



![Lager Vorgänge Verpackungen](assets/Lager%20Vorgänge%20Verpackungen.gif)

## Lieferung in mehre Packungen verpacken

Jede Lieferung umfasst 1 oder mehrere *Vorgänge*. In einem Vorgang wird der Bedarf pro Produkt augelistet.

![](assets/Lager%20Vorgänge.png)

Wenn sie einen Vorgang in mehere Packungen verpacken möchten, müssen sie unter *Detaillierte Vorgänge* zuerst das Teilgewicht in die vordefinierte Zeile einfügen. Anschliessend können sie weitere Zeilen mit weiteren Teilmengen hinzufügen.

![Lager Vorgänge Verpackungen](assets/Lager%20Vorgänge%20Verpackungen.gif)

## Versandverpackungen

Verwalten sie Versandverpackungen unter *Lager > Konfiguration > Versandverpackungen*.

## Ablaufdatum aktivieren

Für Produkte in Lots oder Produkte mit Seriennummer könne sie ein Ablaufdatum festlegen. Öffnen sie das Produkt via *Lager > Produkte > Produkte* und zeigen sie den Tab *Lager* an. Unter Lieferfolgung müssen sie eine Option für *Nachverfolung* auswählen. Nun erscheint die Checkbox *Ablaudatum*. Aktivieren sie diese und konfigurieren sie die Ablaufzeiten.

![](assets/Lager%20Ablaufdatum%20konfiguriert.png)

## Sicherheitsvorlaufzeiten definieren

Die Sicherheitsvorlaufzeiten können sie zentral unter *Einstellungen > Lager > Erweiterte Planung* festlegen. Aktivieren sie für jeweilige Vorlaufzeit die Checkbox und tragen sie die gewünschten Zeiten ein.