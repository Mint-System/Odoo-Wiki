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

## Bordereau-Ansicht erstellen

Die Bordereau-Ansicht bietet dem Logistiker eine Übersicht der anstehenden Aufträge. Odoo bietet standardmässig keine Bordereau-Ansicht, jedoch können Sie diese einfach selber erstellen. Führen Sie dazu [Neue Ansicht mit Aktion hinzufügen](Entwicklung%20Aktionen.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) aus und verwenden diese Werte:

Name der Aktion: `Bordereau`\
Objekt: `stock.picking`\
Ansichtsmodus: `tree,form,pivot`\
Wertebereich:

```
[
"&",
["carrier_id", "in", ["Bordereau", "Bordereau Migros"]],
["state", "in", ["assigned","done"]],
["scheduled_date", ">=", datetime.datetime.now()],
["scheduled_date", "<=", (datetime.datetime.now() + datetime.timedelta(days=3)).strftime('%Y-%m-%d')]
]
```

Menü: `Bordereau`\
Obermenü: `Lager/Lager`\
Aktion: `ir.actions.act_window` `Bordereau`\
Nummernfolge: `10`


## Reservierter Bestand zurücksetzen

Für jeden Lagerort wird ein Bestand geführt *Lager > Konfiguration > Lagerorte > Lagerort auswählen > Smart-Link Bestand*. Wenn Sie die [Aktion Reservierter Bestand zurücksetzen erstellen](Lager%20Aktionen.md#Aktion%20Reservierter%20Bestand%20zurücksetzen%20erstellen), können Sie die Bestände markieren und die *Aktion > Reservierter Bestand zurücksetzen* ausführen.

::: warning
Damit Sie diese Aktion ausführen können, müssen Sie [Superuser werden](Einstellungen.md#Superuser%20werden)
:::

![](assets/Lager%20Bestand%20Reservierter%20Bestand%20zurücksetzen.png)

Wenn Sie offene Lieferungen mit reservierten Mengen haben, können Sie die [Aktion Reservierungen zurücksetzen erstellen](Lager%20Aktionen.md#Aktion%20Reservierungen%20zurücksetzen%20erstellen) und ausführen.