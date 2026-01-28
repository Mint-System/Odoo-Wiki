---
title: Zeiterfassung
description: Verfolgen Sie die Zeit, prognostizieren Sie die Produktivität.
kind: howto
prev: ./
partner: Odoo S.A.
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
| [Project Timesheet Limit](Project%20Timesheet%20Limit.md)                 | Erfassbare Zeit auf geplante Zeit limitieren.                      |
| [Sale Timesheet Billable Price](Sale%20Timesheet%20Billable%20Price.md)   | Abrechenbarkeit basierend auf Preis der Auftragszeile festlegen.   |
| [Sale Timesheet Line Exclude](Sale%20Timesheet%20Line%20Exclude.md)       | Zeiterfassungseinträge als nicht abrechenbar markieren.            |
| [Sale Timesheet Total Validated](Sale%20Timesheet%20Total%20Validated.md) | Nur bestätige Zeiterfassungs-Einträge in Verkaufsauftrag anzeigen. |

## Konfiguration

### Abrechnungspolitik festlegen

Navigieren Sie nach _Einstellungen > Zeiterfassung > Abrechnung_ und wählen Sie eine Option bei _Abrechnungspolitik_. Ist die Auswahl _Nur validierte Zeiterfassungen_ aktiviert, müssen die Zeiterfassungen zur Verrechnung zuerst validiert werden.

::: tip
Um die Option zu aktivieren kann auch das Modul `sale_timesheet_enterprise` installiert werden.
:::

### Benachrichtigung "Erinnerung an Ihre Zeiterfassung" deaktivieren

Wenn Sie die Benachrichtigung _Erinnerung an Ihre Zeiterfassung_ nicht mehr erhalten möchten, müssen sie ihren Mitarbeiter-Eintrag archivieren oder die geplante Aktion _Zeiterfassung: E-Mail-Erinnerung an Mitarbeiter_ deaktivieren.

## Erfassung

### Eintrag manuell erstellen

Damit ein Odoo Benutzer einen Zeiterfassungs-Eintrag machen kann, müssen die folgenden Bedingungen erfüllt sein:

- Dem Benutzer ist ein Mitarbeiter zugewiesen
- Der Benutzer hat Zugriff auf ein Projekt und auf eine Projektaufgabe

Zur manuellen Erfassung folgende Aktion ausführen _Zeiterfassung > + Anlegen_. Anschliessend die Beschreibung eingeben, Projekt wählen, Aufgabe wählen und die Zeitdauer eintragen.

### Verrechnungstyp anpassen

Jedem Zeiterfassungseintrag ist ein Verrechnungstyp zugeweisen. Dieser wird beim Erstellen des Eintrags abhängig von der Konfiguration des Projekts und der Projektaufgabe festgelegt. In der Listenansicht des Stundenzettels kann nach dem Attribut _Abrechenbarer Typ_ gruppiert werden. Falsche Einträge können so identifiziert werden.

Wenn Sie den Abrechnungstyp von bestehenden Einträgen ändern möchten, müssen Sie die verknüpfte Aufgaben ändern und wieder zuweisen.

![](attachments/Zeiterfassung%20Verrechnungstyp%20ändern.gif)

## Validierung

### Zeiterfassung validieren

Der Zeiterfassung-Manager des Mitarbeiters navigiert nach _Zeiterfassung > Zu Validieren > letzter Monat_. Es werden Standardmässig die eigenen Zeiterfassungseinträge und die des Teams aufgelistet. Eine Validierung der Einträge erfolgt mit Knopf _Validiere_.

### Zeiterfassung bis Datum validieren

_Gilt für #Odoo13._

Der Stundenzettel-Manager des Mitarbeiters navigiert nach _Zeiterfassung > Zu Validieren_ und wählt den entsprechenden Zeitraum aus. Mit _Bestätigen_ wird ein Validierungsdatum festgelegt. Alle Zeitnachweise vor dem Validierungsdatum gelten als validiert.

![](attachments/Zeiterfassung%20Validierungsdatum.png)

### Auf Entwurf zurücksetzen

Wenn Sie validieren Zeiterfassungs-Einträge zurücksetzen möchten, navigieren Sie nach _Zeiterfassung > Zeiterfassung > Alle Zeiterfassungen_. Wechseln Sie in die Listen-Ansicht und wählen Sie *Filter > Validiert. Markieren Sie Einträgen und wählen Sie *Aktionen > Auf Entwurf zurücksetzen\*.

### Validierung zurücksetzen

_Gilt für #Odoo13._

Einmal validierte Stunden-Einträge können nicht mehr verändert werden. Benötigen Sie dennoch eine Korrektur, müssen Sie für jeden Mitarbeitenden folgende Aktion ausführen: _Personal > Mitarbeitenden auswählen > Tab HR Einstellungen öffnen_ und dort das Feld _Stundenzettel-Validierungsdatum_ anpassen.

![](attachments/Zeiterfassung%20Stundenzettel-Validierungsdatum%20anpassen.png)

Nach der Korrektur der Stunden-Einträge müssen Sie diese wieder validieren.

## Berichte

### Anwesenheiten und Zeiterfassung vergleichen

Navigieren Sie nach _Zeiterfassung > Berichtswesen > Zeiterfassung / Anwesenheiten_. In diesem Bericht wird die Differenz zwischen Anwesenheit und erfasster Projektzeit berechnet.

## Berechtigungen

### Zugriff Bericht Anwesenheiten und Zeiterfassung erteilen

Damit Benutzer die [Anwesenheit und Zeiterfassung vergleichen](#Anwesenheit%20und%20Zeiterfassung%20vergleichen) können, müssen Sie Zugriffsrechte auf Menüposten anpasst werden.

Als Erstes müssen Sie die folgenden [Menüposten bearbeiten](Development.md#Menüposten%20bearbeiten):

- _Zeiterfassung/Berichtswesen_
- _Zeiterfassung/Berichtswesen/Zeiterfassung / Anwesenheiten_

Fügen Sie im Tab _Zugriffsrechte_ die Gruppe _Zeiterfassung / Benutzer: nur eigene Stundenzettel_ hinzu.

Anschliessend müssen Sie für _Zeiterfassung Anwesenheitsnachweis_ die [Datensatzregeln auf Datenmodell vergeben](Settings%20Permissions.md#Datensatzregeln%20auf%20Datenmodell%20vergeben):

Für die Benutzer:

- **Name**: _Zeiterfassung / Benutzer: nur eigene Stundenzettel_
- **Gruppe**: _Zeiterfassung / Benutzer: nur eigene Stundenzettel_
- **Filter**: `[('user_id', '=', user.id)]`
- **Berechtigung**: Leseberechtigung

Für die Vorgesetzten:

- **Name**: _Zeiterfassung / Benutzer: Alle Stundenzettel_
- **Gruppe**: _Zeiterfassung / Benutzer: Alle Stundenzettel_
- **Filter**: `[]`
- **Berechtigung**: Leseberechtigung

Nun sollten Benutzer, die nur ihren eigenen Stundenzettel sehen, den Bericht aufrufen können.

### Zugriff Genehmiger Zeiterfassung auf Team erteilen

Führen Sie [Datensatzregel anpassen](Settings%20Permissions.md#Datensatzregel%20anpassen) für `Timesheets Analysis Report approver` aus. Geben Sie den folgenden Code als Regeldefinition ein:

```python
[
	('project_id', '!=', False),
	('employee_id.timesheet_manager_id', '=', user.id),
	'|',
		('project_id.privacy_visibility', '!=', 'followers'),
		('project_id.message_partner_ids', 'in', [user.partner_id.id])
]
```

Damit haben Genehmiger von Zeiterfassungseinträgen nur Zugriff auf ihr Team.
