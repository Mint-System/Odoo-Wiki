---
title: Zeiterfassung
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./
---
# Zeiterfassung
![icons_odoo_hr_timesheet](attachments/icons_odoo_hr_timesheet.png)

Verfolgen Sie die Zeit, prognostizieren Sie die Produktivität.

Website: <https://www.odoo.com/de_DE/app/timesheet>

## Bereiche

| Bereich                                                 | Beschreibung                                        |
| ------------------------------------------------------- | --------------------------------------------------- |
| [Awesome Timesheet](Awesome%20Timesheet.md)             | Mobile Zeiterfassung.                               |
| [Terminal Zeiterfassung](Terminal%20HR%20Timesheet.md)   | Ein- und auschecken mit dem Terminal Zeiterfassung. |
| [Zeiterfassung Ansichten](Timesheet%20Views.md) | Ansichten der Zeiterfassung anpassen.                                                    |

## Erweiterungen

| Erweiterung                                                      | Beschreibung                                  |
| ---------------------------------------------------------------- | --------------------------------------------- |
| [HR Timesheet From Until](HR%20Timesheet%20From%20Until.md)      | Berechnung Dauer anhand Start- und Endzeit.   |
| [HR Timesheet Multiline Name](HR%20Timesheet%20Multiline%20Name) | Mehrzeilige Beschreibung in Zeiterfassung.    |
| [Task Timer Advance](Sh%20Task%20Time%20Adv.md)                  | Aufgaben-Timer einfacher starten und beenden. |

## Konfiguration

### Fakturierungsregeln festlegen

Navigieren Sie nach *Einstellungen > Zeiterfassung > Abrechnung* und wählen Sie eine Option bei *Fakturierungsregel*. Ist die Fakturierungsregel *Nur bestätigte Stundenzettel* aktiviert, müssen die Stundenzettel zur Verrechnung vorgängit validiert werden.

## Erfassung

### Eintrag manuell erstellen

Damit ein Odoo Benutzer ein Zeiterfassungs-Eintrag machen kann, müssen die foglenden Bedingungen erfüllt sein:
* Dem Benutzer ist ein Mitarbeiter zugewiesen
* Der Benutzer hat Zugriff auf ein Projekt und auf eine Projektaufgabe

Zur manuellen Erfassung folgende Aktion ausführen *Zeiterfassung > + Anlegen*. Anschliessend die Beschreibung eingeben, Projekt wählen, Aufgabe wählen und die Zeitdauer eintragen.

### Verrechnungstyp anpassen

Jeder Zeiterfassungseintrag ist ein Verrechnungstyp zugeweisen. Dieser wird beim Erstellen des Eintrag abhängig von Konfiguration des Projekts und der Projektaufgabe festgelegt. In der Listenansicht des Stundenzettels kann nach dem Attribut *Abrechenbarer Typ* gruppiert werden. Falsche Einträge können so identifiziert werden.

Wenn Sie den Abrechnungstyp von bestehenden Eintägen ändern möchten, müssen Sie die verknüpfte Aufgaben ändern und wieder zuweisen.

![](attachments/Zeiterfassung%20Verrechnungstyp%20ändern.gif)

### Auftragselement von Aufgabe entfernen
*Gilt ab #Odoo14.*

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

## Validierung

### Stundenzettel bis Datum validieren
*Gilt für #Odoo13.*

Der Stundenzettel-Manager des Mitarbeiters navigiert nach *Zeiterfassung > Zu Validieren* und wählt den entsprechenden Zeitraum aus. Mit *Bestätigen* wird ein Validierungsdatum festgelegt. Alle Zeitnachweise vor dem Validierungsdatum gelten als validiert.

![](attachments/Zeiterfassung%20Validierungsdatum.png)

### Stundenzettel validieren
*Gilt ab #Odoo14.*

Der Stundenzettel-Manager des Mitarbeiters navigiert nach *Zeiterfassung > Zu Validieren* und wählt den entsprechenden Zeitraum aus. Mit *Bestätigen* wird ein Validierungsdatum festgelegt.

### Validierung zurücksetzen
*Gilt für #Odoo13.*

Einmal validierte Stundeneinträge können nicht mehr verändert werden. Benötigen Sie dennoch eine korrektur, müssen Sie für jeden Mitarbeitenden folgende Aktion ausführen: *Personal > Mitarbeitenden auswählen > Tab HR Einstellungen öffnen* und dort das Feld *Stundenzettel-Validierungsdatum* anpassen.

![](attachments/Zeiterfassung%20Stundenzettel-Validierungsdatum%20anpassen.png)

Nach der Korrektur der Stundeinträge müssen Sie diese wieder validieren.

### Validierung zurücksetzen
*Gilt ab #Odoo14.*

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

## Berichte

### Anwesenheit und Zeiterfassung vergleichen

Navigieren Sie nach *Zeiterfassung > Berichtswesen > Zeiterfassung / Anwesenheit*. In diesem Bericht wird die Differenz zwischen Anwesenheit und erfasster Projektzeit berechnet.

## Berechtigungen

### Zugriff Bericht Anwesenheit und Zeiterfassung erteilen

Damit Benutzer die [Anwesenheit und Zeiterfassung vergleichen](#Anwesenheit%20und%20Zeiterfassung%20vergleichen) können, müssen Sie Zugriffsrechte auf Menüeinträge anpasst werden.

Als erstes müssen Sie die folgenden [Menüeinträge bearbeiten](Development.md#Menüeintrag%20bearbeiten):

* *Zeiterfassung/Berichtswesen*
* *Zeiterfassung/Berichtswesen/Zeiterfassung / Anwesenheit*

Fügen Sie im Tab *Zugriffsrechte* die Gruppe *Zeiterfassung / Benutzer: nur eigene Stundenzettel* hinzu. 

Anschliessend müssen Sie für *Zeiterfassung Anwesenheitsnachweis* die [Rechte für Daten auf Datenmodell vergeben](Settings%20Permissions.md#Rechte%20für%20Daten%20auf%20Datenmodell%20vergeben):

Für die Benutzer:

* **Name**: *Zeiterfassung / Benutzer: nur eigene Stundenzettel*
* **Gruppe**: *Zeiterfassung / Benutzer: nur eigene Stundenzettel*
* **Filter**: `[('user_id', '=', user.id)]`
* **Berechtigung**: Leseberechtigung

Für die Vorgesetzten:

* **Name**: *Zeiterfassung / Benutzer: Alle Stundenzettel*
* **Gruppe**: *Zeiterfassung / Benutzer: Alle Stundenzettel*
* **Filter**: `[]`
* **Berechtigung**: Leseberechtigung

Nun sollten Benutzer, die nur ihren eigenen Stundenzettel sehen, den Bericht aufrufen können.