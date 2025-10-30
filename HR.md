---
title: Personal
description: Personalmanagement für moderne Unternehmen.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Personal

![icons_odoo_hr](attachments/icons_odoo_hr.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/employees>

## Bereiche

| Bereich                                    | Beschreibung                        |
| ------------------------------------------ | ----------------------------------- |
| [Personal Aktivitäten](HR%20Activities.md) | Aktivitäten für Personal verwalten. |
| [Personal Verträge](HR%20Contract.md)      | Personalverträge zentral verwalten. |

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                                                              |     |     |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | --- | --- |
| [Employee Vehicle Request](Employee%20Vehicle%20Request.md)                               | Fahrzeug-Reservationen für Mitarbeitende verwalten.                                       |     |     |
| [HR Activity Date](HR%20Activity%20Date.md)                                               | Plannungstypen mit Aktivitätsdatum basierend auf Arbeitsverträgen.                        |     |     |
| [HR Birthday Calender](HR%20Birthday%20Calender.md)                                       | Kalenderansicht aller Geburtstage.                                                        |     |     |
| [HR Calendar User Color](HR%20Calendar%20User%20Color.md)                                 | Events im Kalender nach User-Color färben                                                 |     |     |
| [HR Employee Employ Like](HR%20Employee%20Employ%20Like.md)                               | Neues Feld Anstellung wie auf Mitarbeitenden.                                             |     |     |
| [HR Employee Firstname](HR%20Employee%20Firstname.md)                                     | Vor- und Nachname auf Mitarbeitenden.                                                     |     |     |
| [HR Employee ID](HR%20Employee%20ID.md)                                                   | Identifikationsnummer für Mitarbeitende.                                                  |     |     |
| [HR Employee Paid Out Overtime Report](HR%20Employee%20Paid%20Out%20Overtime%20Report.md) | Bericht Mitarbeitende mit ausbezahlten Überstunden.                                       |     |     |
| [HR Employee Skill](HR%20Employee%20Skill.md)                                             | Übersicht der Mitarbeiterfähigkeiten.                                                     |     |     |
| [HR Employee User ACL](HR%20Employee%20User%20ACL.md)                                     | Zugriffsrechte auf Mitarbeitende festlegen.                                               |     |     |
| [HR Holidays User ACL](HR%20Holidays%20User%20ACL.md)                                     | Zugriffsrechte auf Abwesenheiten festlegen.                                               |     |     |
| [HR Shortname](HR%20Shortname.md)                                                         | Zu jedem Mitarbeitenden ein Kürzel speichern.                                             |     |     |
| [HR Vehicle Request Calendar](HR%20Vehicle%20Request%20Calendar.md)                       | Kalenderansicht und Terminbestätigung für Fahrzeuganfragen.                               |     |     |
| [HR Vehicle Request](HR%20Vehicle%20Request.md)                                           | Fahrzeuganfragen für Mitarbeitende verwalten.                                             |     |     |
| [HR Work Entry Profile](HR%20Work%20Entry%20Profile.md)                                   | Mitarbeiter können ihre Arbeitseinträge im Profile anzeigen.                              |     |     |
| [Resource Calendar Get Days](Resource%20Calendar%20Get%20Days.md)                         | Die Anzahl Tage in Abwesenheiten relativ zu den Arbeitszeiten des Unternehmens berechnen. |     |     |

## Organisation

::: tip
Odoo unterscheidet zwischen Benutzer und Mitarbeiter. Mitarbeiter müssen nicht zwingend einen Odoo-Account besitzen. Zur Verwendung von Apps wie die Zeiterfassung muss den Benutzern ein Mitarbeiter hinterlegt werden.
:::

### Abteilungen anzeigen

Navigieren Sie nach _Personal > Abteilungen_.

### Mitarbeiter erfassen

Navigieren Sie nach _Personal_ und wählen Sie _+ Anlegen_. Geben Sie den Vor- und Nachnamen des Mitarbeiters ein und öffnen Sie den Tab _HR Einstelungen_. Wählen Sie unter _Verknüpfter Benutzer_ einen bestehenden Benutzer aus, falls der Mitarbeiter Zugriff auf Odoo haben soll. Schliessen Sie den Vorgang mit _Speichern_ ab.

### Mitarbeiter aus Benutzer erstellen

Alternativ zu [Mitarbeiter erfassen](#Mitarbeiter%20erfassen) können Sie nach _Einstellungen > Benutzer > Benutzer verwalten_ navigieren und hier den Odoo-Benutzer auswählen. Über den Knopf _Mitarbeiter anlegen_ können Sie den Mitarbeiter erfassen. Dieser wird über den Smart-Link verknüpft.

![](attachments/Peresonal%20Smart-Link%20Mitarbeiter.png)

### Vorgesetzte hinterlegen

Damit Prozesse korrekt Ablaufen, muss die _Organisations-Charta_ konfiguriert werden. Öffnen Sie den Mitarbeitenden via _Personal_ und wählen im Feld _Manager_ den Vorgesetzten aus. Die Visualisierung der Organisationsstruktur wird aktualisiert, sobald die Anpassung gespeichert ist.

### Benutzer mit Mitarbeiter verknüpfen

Sie können einen bestehenden Benutzer mit einem Mitarbeitenden-Eintrag verknüpfen. Zeigen Sie den Eintrag via _Personal_ an und öffnen Sie den Tab _HR Einstellungen_. Wählen Sie hier im Feld _Verknüpfter Benutzer_ den entsprechenden Benutzer aus.

![](attachments/Personal%20Verknüpfter%20Benutzer.png)

## Adressen

### Private Adresse hinterlegen

Bestimmte Unterlagen wie die Lohnabrechnung werden an die private Adresse des Mitarbeiters versandt. Dafür gibt es ein entsprechendes Feld in der Mitarbeiter-Ansicht.

Erstellen Sie eine private Adresse folgendermassen: _Personal > Mitarbeiter auswählen > Tab Private Information > Bearbeiten_ und legen Sie private Adresse im Feld _Adresse_ fest.

::: warning
Das Feld heisst Adresse, aber effektiv ist damit ein privater Kontakt-Eintrag verbunden.
:::

## Abrechnung

### Bankverbindung einrichten

Zur Lohnabrechung und Abrechnung von Aufwänden brauchen Mitarbeitende eine private Adresse mit einem Bankkonto. Navigieren Sie nach _Personal_ und öffnen Sie einen Eintrag. Im Tab _Private Information_ finden Sie das Feld _Bankverbindung_. Hier können Sie ein [Bankkonto erfassen](Invoicing.md#Bankkonto%20erfassen)

## Arbeitszeit

### Arbeitszeit erstellen

Navigieren Sie nach _Einstellungen > Technisch > Arbeitszeit_ und erstellen Sie einen neuen Eintrag mit Namen gemäss dem bestehenden Schema. Geben Sie entweder die _Durchschnittliche Stundenzahl pro Tag_ manuell ein oder erstellen Sie neue Einträge in der Liste _Arbeitsstunden_.

![](attachments/Personal%20Arbeitszeit.png)

::: warning
Stellen Sie sicher, dass die Anzahl Stunden am Vor- und Nachmittag gleich sind. Bei Abwesenheitseinträgen mit Halbtagen wird diese Anzahl Stunden verwendet.
:::

### Flexible Arbeitszeit erfassen

Navigieren Sie nach _Einstellungen > Technisch > Arbeitszeit_ und erstellen Sie einen neuen Eintrag mit Namen _Standard 0 hours/week_. Entfernen Sie alle Einträge in _Arbeitsstunden_ und tragen Sie als _Durchschnittliche Stundenzahl pro Tag_ den Wert `0` ein.

![](attachments/Personal%20Flexible%20Arbeitszeit.png)

### Arbeitszeiten festlegen

Um die Arbeitszeiten für einen Mitarbeiter festzulegen, öffnen Sie das App _Personal_ und wählen den Mitarbeiten aus. Wählen Sie _Bearbeiten_ und legen Sie im Tab _Arbeitsinformation_ unter _Arbeitsplan_ die _Arbeitsstunden_ fest.

![](attachments/Personal%20Arbeitsstunden.png)

### Arbeitszeiten auf Vertrag festlegen

Um die Arbeitszeiten für einen Mitarbeitenden auf dem Arbeitsvertrag festzulegen, zeigen Sie _Mitarbeiter > Mitarbeiter > Alle Verträge_ und wählen einen Vertrag aus. Legen Sie unter _Arbeitsplan_ die Arbeitszeiten fest.

### Arbeitspensum wechseln

Um das Pensum eines Mitarbeiten zu wechseln, muss ein Enddatum für die bestehenden Arbeitszeiten eingetragen werden und die neuen Arbeitszeiten werden darunter erfasst.

Erstellen Sie eine neues Pensum _Personal > Mitarbeiter auswählen > Tab Arbeitsinformation > Ausführungsplan > Anlegen und Bearbeiten_. Definieren Sie einen passenden Titel und legen Sie bei den bestehenden Arbeitszeiten das Enddatum fest.

![](attachments/Personal%20Arbeitszeiten%20mit%20Enddatum.png)

::: tip
Es wird empfohlen pro Mitarbeitenden eine Arbeitszeit zu definieren.
:::

::: warning
Wenn Mitarbeitende unterhalb des Jahres ein Arbeitspensum reduzieren oder erhöhen, muss sichergestellt werden, dass die Abwesenheiten neu berechnet werden.
:::

## Offboarding

### Mitarbeiteraustritt ausführen

Ein Mitarbeiteraustritt bedeutet für Odoo eine Archivierung des Mitarbeitenden in der _Personal_ App. Wählen Sie den/die Mitarbeitenden unter _Personal_ aus und klicken auf _Aktionen > Archiv_. Zusammenhängende Ressourcen zum Personaleintrag werden mit dier Aktion ebenfalls archiviert.

## Berechtigung

### Neue Berechtigungsgruppe Personalmanager anlegen

Gehen Sie nach _Einstellungen > Benutzer und Unternehmen > Gruppen_ und erstellen Sie eine Kopie von _Personal / Personalsachbearbeiter_. Geben Sie als Namen _Personalmanager_ ein und entfernen Sie die Einträge im Tab _Benutzer_, _Vererbt_, _Menüs_ und _Datensatzregeln_. Benutzer in dieser Gruppe erhalten Zugriff auf Aktivitäten auf dem Mitarbeiter-Objekt.
