---
title: Zeiterfassung
description: Verfolgen Sie die Zeit, prognostizieren Sie die Produktivität.
tags:
- HowTo
prev: ./
---
# Zeiterfassung
![icons_odoo_hr_timesheet](attachments/icons_odoo_hr_timesheet.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/timesheet>

## Bereiche

| Bereich                                                | Beschreibung                                        |
| ------------------------------------------------------ | --------------------------------------------------- |
| [Awesome Timesheet](Awesome%20Timesheet.md)            | Mobile Zeiterfassung.                               |
| [Terminal Zeiterfassung](Terminal%20HR%20Timesheet.md) | Ein- und auschecken mit dem Terminal Zeiterfassung. |
| [Zeiterfassung Aktionen](HR%20Timesheet%20Actions.md)  | Arbeitsflüsse in der Zeiterfassung automatisieren.  |
| [Zeiterfassung Ansichten](Timesheet%20Views.md)        | Ansichten der Zeiterfassung anpassen.               |

## Erweiterungen

| Erweiterung                                                               | Beschreibung                                                       |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [HR Timesheet From Until](HR%20Timesheet%20From%20Until.md)               | Berechnung Dauer anhand Start- und Endzeit.                        |
| [HR Timesheet Multiline Name](HR%20Timesheet%20Multiline%20Name)          | Mehrzeilige Beschreibung in Zeiterfassung.                         |
| [Portal Timesheet](Sh%20Portal%20Timesheet.md)                            | Zeiterfassung im Portal.                                           |
| [Project Timesheet Limit](Project%20Timesheet%20Limit.md)                 | Erfassbare Zeit auf geplante Zeit limitieren.                      |
| [Sale Timesheet Line Exclude](Sale%20Timesheet%20Line%20Exclude.md)       | Zeiterfassungseinträge als nicht abrechenbar markieren.            |
| [Sale Timesheet Total Validated](Sale%20Timesheet%20Total%20Validated.md) | Nur bestätige Zeiterfassungs-Einträge in Verkaufsauftrag anzeigen. |
| [Task Timer Advance](Sh%20Task%20Time%20Adv.md)                           | Aufgaben-Timer einfacher starten und beenden.                      |

## Konfiguration

### Abrechnungspolitik festlegen

Navigieren Sie nach *Einstellungen > Zeiterfassung > Abrechnung* und wählen Sie eine Option bei *Abrechnungspolitik*. Ist die Auswahl *Nur validierte Zeiterfassungen* aktiviert, müssen die Zeiterfassungen zur Verrechnung zuerst validiert werden.

## Erfassung

### Eintrag manuell erstellen

Damit ein Odoo Benutzer einen Zeiterfassungs-Eintrag machen kann, müssen die folgenden Bedingungen erfüllt sein:

* Dem Benutzer ist ein Mitarbeiter zugewiesen
* Der Benutzer hat Zugriff auf ein Projekt und auf eine Projektaufgabe

Zur manuellen Erfassung folgende Aktion ausführen *Zeiterfassung > + Anlegen*. Anschliessend die Beschreibung eingeben, Projekt wählen, Aufgabe wählen und die Zeitdauer eintragen.

### Verrechnungstyp anpassen

Jedem Zeiterfassungseintrag ist ein Verrechnungstyp zugeweisen. Dieser wird beim Erstellen des Eintrags abhängig von der Konfiguration des Projekts und der Projektaufgabe festgelegt. In der Listenansicht des Stundenzettels kann nach dem Attribut *Abrechenbarer Typ* gruppiert werden. Falsche Einträge können so identifiziert werden.

Wenn Sie den Abrechnungstyp von bestehenden Einträgen ändern möchten, müssen Sie die verknüpfte Aufgaben ändern und wieder zuweisen.

![](attachments/Zeiterfassung%20Verrechnungstyp%20ändern.gif)

## Validierung

### Zeiterfassung validieren

Der Zeiterfassung-Manager des Mitarbeiters navigiert nach *Zeiterfassung > Zu Validieren > letzter Monat*. Es werden Standardmässig die eigenen Zeiterfassungseinträge und die des Teams aufgelistet. Eine Validierung der Einträge erfolgt mit Knopf *Validiere*.

### Zeiterfassung bis Datum validieren

*Gilt für #Odoo13.*

Der Stundenzettel-Manager des Mitarbeiters navigiert nach *Zeiterfassung > Zu Validieren* und wählt den entsprechenden Zeitraum aus. Mit *Bestätigen* wird ein Validierungsdatum festgelegt. Alle Zeitnachweise vor dem Validierungsdatum gelten als validiert.

![](attachments/Zeiterfassung%20Validierungsdatum.png)

### Auf Entwurf zurücksetzen

Wenn Sie validieren Zeiterfassungs-Einträge zurücksetzen möchten, navigieren Sie nach *Zeiterfassung > Zeiterfassung > Alle Zeiterfassungen*. Wechseln Sie in die Listen-Ansicht und wählen Sie *Filter > Validiert. Markieren Sie Einträgen und wählen Sie *Aktionen > Auf Entwurf zurücksetzen*.

### Validierung zurücksetzen

*Gilt für #Odoo13.*

Einmal validierte Stunden-Einträge können nicht mehr verändert werden. Benötigen Sie dennoch eine Korrektur, müssen Sie für jeden Mitarbeitenden folgende Aktion ausführen: *Personal > Mitarbeitenden auswählen > Tab HR Einstellungen öffnen* und dort das Feld *Stundenzettel-Validierungsdatum* anpassen.

![](attachments/Zeiterfassung%20Stundenzettel-Validierungsdatum%20anpassen.png)

Nach der Korrektur der Stunden-Einträge müssen Sie diese wieder validieren.

## Berichte

### Anwesenheit und Zeiterfassung vergleichen

Navigieren Sie nach *Zeiterfassung > Berichtswesen > Zeiterfassung / Anwesenheit*. In diesem Bericht wird die Differenz zwischen Anwesenheit und erfasster Projektzeit berechnet.

## Berechtigungen

### Zugriff Bericht Anwesenheit und Zeiterfassung erteilen

Damit Benutzer die [Anwesenheit und Zeiterfassung vergleichen](#Anwesenheit%20und%20Zeiterfassung%20vergleichen) können, müssen Sie Zugriffsrechte auf Menüposten anpasst werden.

Als Erstes müssen Sie die folgenden [Menüposten bearbeiten](Development.md#Menüposten%20bearbeiten):

* *Zeiterfassung/Berichtswesen*
* *Zeiterfassung/Berichtswesen/Zeiterfassung / Anwesenheit*

Fügen Sie im Tab *Zugriffsrechte* die Gruppe *Zeiterfassung / Benutzer: nur eigene Stundenzettel* hinzu. 

Anschliessend müssen Sie für *Zeiterfassung Anwesenheitsnachweis* die [Datensatzregeln auf Datenmodell vergeben](Settings%20Permissions.md#Datensatzregeln%20auf%20Datenmodell%20vergeben):

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