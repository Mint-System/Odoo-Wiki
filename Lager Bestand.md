---
tags:
- HowTo
prev: ./lager
---
# Lager Bestand
![icons_odoo_stock](assets/icons_odoo_stock.png)

Den Lagerbestand optimal verwalten.

## Meldebestand erfassen

Für jedes einlagerbare Produkt kann eine Meldebestand definiert werden. Navigieren Sie nach *Lager > Konfiguration > Meldebestände* und erstellen Sie einen neuen Eintrag.

![](assets/Lager%20Bestand%20Meldebestand.png)

Für dieses Produkt wird bei Unterschreitung des Minimalbestand automatisch ein Bestellvorschlag generiert. Mit [Scheduler manuell starten](Lager%20Vorgänge.md#Scheduler%20manuell%20starten) können Sie die Bestandsregeln forcieren.

## Inventur vorbereiten

Navigieren Sie zum Menu *Lager > Vorgänge > Inventur*. Mit dem Knopf *Anlegen* erstellen Sie einen Inventurauftrag. Befüllen Sie die Felder gemäss untenstehender Tabelle.

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

Starten Sie die vorbereitete Inventur mit *Inventur Starten*. Falls ein nicht gelistetes Produkt gezählt wird, kann über *Anlegen* eine neue Position eingefügt werden.

Befüllen Sie nun die Spalte *Gezählt* entsprechend der gezählten Quantität pro Produkt. Nach der abgeschlossenen Zählung wird mit *Bestandsbuchung Durchführen* der korrigierte Bestand gebucht. Das Protokoll kann über *Print Count Sheet* erstellt werden.

## Bordereau-Export erstellen

Öffnen Sie *Lager > Berichtswesen > Produktlieferungen*. Filtern Sie die Daten wie  folgt:

* Ausgehend
* Erledigt

Gruppieren und sortieren Sie Lagerbuchungen nach:

* Datum > Tag
* Lieferadresse
* Produkt

Markieren Sie zu exportierenden Lagerbuchungen und wählen Sie *Aktion > Export*. Wählen Sie diese Felder:

* Lagerbuchung/Lieferadresse
* Produkt/Referenz
* Produkt
* Produkt/HS-Code
* Erledigt
