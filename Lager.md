---
tags:
- HowTo
---
# Lager
![icons_odoo_stock](assets/icons_odoo_stock.png)

Maximieren sie die Effizienz Ihres Lagers.

## Lagerorte erfassen

## Erweiterte Vorgangstypen einrichten

Wenn in den Einstellungen für das Lager die Option *Mehrstufige Routen* eingeschaltet wird, erweitert sich die Liste der Vorgangstypen mit *Interne Transfers*. Die neue Liste zeigt sich wie folgt:

1. Anlieferungen
2. Interne Transfers
3. Lieferaufträge
4. Manufacturing

Die Option "Mehrere Lagerorte" wird automatisch eingeschaltet und es erscheinen im Menu die neuen Funktion *Lagerorte* und *Regeln*.

**Variante 3**

Wenn für die Lieferungsschritte die Variante *3 Schritte* (siehe oben) gewählt wird, werden die Vorgangstypen mit *Pick* und *Pack* erweitert. Die neue Liste zeigt sich wie folgt:

1. Anlieferungen
2. Interne Transfers
3. Pick
4. Pack
5. Lieferaufträge
6. Manufacturing

## Inventur vorbereiten

Navigieren sie zum Menu *Vorgänge > Inventur*. Mit dem Knopf *Anlegen* erstellen sie einen Inventurauftrag. Befüllen sie die Felder gemäss untenstehender Tabelle.

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

Starten sie die vorbereitete Inventur mit *Inventur Starten*.

Falls ein nicht gelistetes Produkt gezählt wird, kann über *Anlegen* eine neue Position eingefügt werden.

Befüllen sie nun die Spalte *Gezählt* entsprechend der gezählten Quantität pro Produkt. Nach der abgeschlossenen Zählung wird mit *Bestandsbuchung Durchführen* der korrigierte Bestand gebucht. Das Protokoll kann über *Print Count Sheet* erstellt werden.

## Auslieferung priorisieren

#FIXME

::: tip
Durch Aktivierung des Sterns im Objekt der Auslieferung wird der Auftrag priorisiert.
:::

## Produktverpackung erfassen

Um die verschiedenen Produktverpackungen zu erfassen navigieren sie zu folgender Einstellung: *Lager > Konfiguration > Produkte > Produktverpackungen*.

![Lager Produktverpackungen Beispiel](assets/Lager%20Produktverpackungen%20Beispiel.png)

## Produkt verpacken

Beispiel Produkt für internen Transfer verpacken:

![Lager Verpackungen Beispiel](assets/Lager%20Verpackungen%20Beispiel.gif)

## Verpackung verpacken

#FIXME 
