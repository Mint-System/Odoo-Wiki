# Lager Bestand


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

## Aktion "Bestand zurücksetzen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Bestand zurücksetzen`\
Modell: `stock.quant`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```py
for record in records:
	record.sudo().write({
	  'quantity': 0,
	  # 'reserved_quantity': 0
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Bestände erscheint nun in der Auswahl *Aktion* das Menu *Bestand zurücksetzen*.