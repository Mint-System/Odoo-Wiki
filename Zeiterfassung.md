---
tags:
- HowTo
prev: ./
---
# Zeiterfassung
![icons_odoo_hr_timesheet](assets/icons_odoo_hr_timesheet.png)

Verfolgen Sie die Zeit, prognostizieren Sie die Produktivität.

Website: <https://www.odoo.com/de_DE/app/timesheet>

## Bereiche

| Bereich                                           | Beschreibung                                        |
| ----------------------------------------------------- | --------------------------------------------------- |
| [Terminal Zeiterfassung](Terminal%20Zeiterfassung.md) | Ein- und auschecken mit dem Terminal Zeiterfassung. |
| [Awesome Timesheet](Awesome%20Timesheet.md)           | Mobile Zeiterfassung.                               |

## Eintrag manuell erstellen

Damit ein Odoo Benutzer ein Zeiterfassungs-Eintrag machen kann, müssen die foglenden Bedingungen erfüllt sein:
* Dem Benutzer ist ein Mitarbeiter zugewiesen
* Der Benutzer hat Zugriff auf ein Projekt und auf eine Projektaufgabe

Zur manuellen Erfassung folgende Aktion ausführen *Zeiterfassung > + Anlegen*. Anschliessend die Beschreibung eingeben, Projekt wählen, Aufgabe wählen und die Zeitdauer eintragen.

## Verrechnungstyp anpassen

Jeder Zeiterfassungseintrag ist ein Verrechnungstyp zugeweisen. Dieser wird beim Erstellen des Eintrag abhängig von Konfiguration des Projekts und der Projektaufgabe festgelegt. In der Listenansicht des Stundenzettels kann nach dem Attribut *Abrechenbarer Typ* gruppiert werden. Falsche Einträge können so identifiziert werden.

Wenn Sie den Abrechnungstyp von bestehenden Eintägen ändern möchten, müssen Sie die verknüpfte Aufgaben ändern und wieder zuweisen.

![](assets/Zeiterfassung%20Verrechnungstyp%20%C3%A4ndern.gif)

## Stundenzettel validieren
Gilt für #Odoo13

Ist die Fakturierungsregel *Nur bestätigte Stundenzettel* aktiviert, müssen zur Verrechnung die Stundenzetter der Mitarbieter explizit validiert werden.

Der Stundenzettel-Manager des Mitarbeiters navigiert nach *Zeiterfassung > Zu Validieren* und wählt den entsprechenden Zeitraum aus. Mit *Bestätigen* wird ein Validierungsdatum festgelegt. Alle Zeitnachweise vor dem Validierungsdatum gelten als validiert.

![](assets/Zeiterfassung%20Validierungsdatum.png)

## Stundenzettel validieren
Gilt ab #Odoo14

Der Stundenzettel-Manager des Mitarbeiters navigiert nach *Zeiterfassung > Zu Validieren* und wählt den entsprechenden Zeitraum aus. Mit *Bestätigen* wird ein Validierungsdatum festgelegt.

## Validierung zurücksetzen
Gilt für #Odoo13

Einmal validierte Stundeneinträge können nicht mehr verändert werden. Benötigen Sie dennoch eine korrektur, müssen Sie für jeden Mitarbeitenden folgende Aktion ausführen: *Personal > Mitarbeitenden auswählen > Tab HR Einstellungen öffnen* und dort das Feld *Stundenzettel-Validierungsdatum* anpassen.

![](assets/Zeiterfassung%20Stundenzettel-Validierungsdatum%20anpassen.png)

Nach der Korrektur der Stundeinträge müssen Sie diese wieder validieren.

## Validierung zurücksetzen
Gilt ab #Odoo14

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Validierung zurücksetzen`\
Modell: `Kostenstellen-Buchungen`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld Pythoncode:

```python
for record in records:
	records.write({'validated': False})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Ansicht von Kostenstellen-Buchungen erscheint nun in der Auswahl *Aktion* das Menu *Validierung zurücksetzen*.

## Auftragselement von Aufgabe entfernen
Gilt ab #Odoo14

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Auftragselement von Aufgabe entfernen`\
Modell: `Kostenstellen-Buchungen`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld Pythoncode:

```python
for record in records:
	record.task_id.write({'sale_line_id': False})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Ansicht von Kostenstellen-Buchungen erscheint nun in der Auswahl *Aktion* das Menu *Validierung zurücksetzen*.