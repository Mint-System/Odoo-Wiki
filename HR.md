---
title: Personal
description: Personalmanagement für moderne Unternehmen.
tags:
- HowTo
prev: ./
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

| Erweiterung                                                         | Beschreibung                                                                              |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [Employee Vehicle Request](Employee%20Vehicle%20Request.md)         | Fahrzeug-Reservationen für Mitarbeitende verwalten.                                       |
| [HR Activity Date](HR%20Activity%20Date.md)                         | Plannungstypen mit Aktivitätsdatum basierend auf Arbeitsverträgen.                        |
| [HR Birthday Calender](HR%20Birthday%20Calender.md)                 | Kalenderansicht aller Geburtstage.                                                        |
| [HR Employee Employ Like](HR%20Employee%20Employ%20Like.md)         | Neues Feld Anstellung wie auf Mitarbeitenden.                                             |
| [HR Employee Firstname](HR%20Employee%20Firstname.md)               | Vor- und Nachname auf Mitarbeitenden.                                                     |
| [HR Employee ID](HR%20Employee%20ID.md)                             | Identifikationsnummer für Mitarbeitende.                                                  |
| [HR Employee Skill](HR%20Employee%20Skill.md)                       | Übersicht der Mitarbeiterfähigkeiten.                                                     |
| [HR Employee User ACL](HR%20Employee%20User%20ACL.md)               | Zugriffsrechte auf Mitarbeitende festlegen.                                               |
| [HR Holidays User ACL](HR%20Holidays%20User%20ACL.md)               | Zugriffsrechte auf Abwesenheiten festlegen.                                               |
| [HR Shortname](HR%20Shortname.md)                                   | Zu jedem Mitarbeitenden ein Kürzel speichern.                                             |
| [HR Vehicle Request Calendar](HR%20Vehicle%20Request%20Calendar.md) | Kalenderansicht und Terminbestätigung für Fahrzeuganfragen.                               |
| [HR Vehicle Request](HR%20Vehicle%20Request.md)                     | Fahrzeuganfragen für Mitarbeitende verwalten.                                             |
| [HR Work Entry Profile](HR%20Work%20Entry%20Profile.md)             | Mitarbeiter können ihre Arbeitseinträge im Profile anzeigen.                              |
| [Resource Calendar Get Days](Resource%20Calendar%20Get%20Days.md)   | Die Anzahl Tage in Abwesenheiten relativ zu den Arbeitszeiten des Unternehmens berechnen. |

## Organisation

::: tip
Odoo unterscheidet zwischen Benutzer und Mitarbeiter. Mitarbeiter müssen nicht zwingend einen Odoo-Account besitzen. Zur Verwendung von Apps wie die Zeiterfassung muss den Benutzern ein Mitarbeiter hinterlegt werden.
:::

### Abteilungen anzeigen

Navigieren Sie nach *Personal > Abteilungen*.

### Mitarbeiter erfassen

Navigieren Sie nach *Personal* und wählen Sie *+ Anlegen*. Geben Sie den Vor- und Nachnamen des Mitarbeiters ein und öffnen Sie den Tab *HR Einstelungen*. Wählen Sie unter *Verknüpfter Benutzer* einen bestehenden Benutzer aus, falls der Mitarbeiter Zugriff auf Odoo haben soll. Schliessen Sie den Vorgang mit *Speichern* ab.

### Mitarbeiter aus Benutzer erstellen

Alternativ zu [Mitarbeiter erfassen](#Mitarbeiter%20erfassen) können Sie nach *Einstellungen > Benutzer > Benutzer verwalten* navigieren und hier den Odoo-Benutzer auswählen. Über den Knopf *Mitarbeiter anlegen* können Sie den Mitarbeiter erfassen. Dieser wird über den Smart-Link verknüpft.

![](attachments/Peresonal%20Smart-Link%20Mitarbeiter.png)

### Vorgesetzte hinterlegen

Damit Prozesse korrekt Ablaufen, muss die *Organisations-Charta* konfiguriert werden. Öffnen Sie den Mitarbeitenden via *Personal* und wählen im Feld *Manager* den Vorgesetzten aus. Die Visualisierung der Organisationsstruktur wird aktualisiert, sobald die Anpassung gespeichert ist.

### Benutzer mit Mitarbeiter verknüpfen

Sie können einen bestehenden Benutzer mit einem Mitarbeitenden-Eintrag verknüpfen. Zeigen Sie den Eintrag via *Personal* an und öffnen Sie den Tab *HR Einstellungen*. Wählen Sie hier im Feld *Verknüpfter Benutzer* den entsprechenden Benutzer aus.

![](attachments/Personal%20Verknüpfter%20Benutzer.png)

## Adressen

### Private Adresse hinterlegen

Bestimmte Unterlagen wie die Lohnabrechnung werden an die private Adresse des Mitarbeiters versandt. Dafür gibt es ein entsprechendes Feld in der Mitarbeiter-Ansicht.

Erstellen Sie eine private Adresse folgendermassen: *Personal > Mitarbeiter auswählen > Tab Private Information > Bearbeiten* und legen Sie private Adresse im Feld *Adresse* fest.

::: warning
Das Feld heisst Adresse, aber effektiv ist damit ein privater Kontakt-Eintrag verbunden. 
:::

## Abrechnung

### Bankverbindung einrichten

Zur Lohnabrechung und Abrechnung von Aufwänden brauchen Mitarbeitende eine private Adresse mit einem Bankkonto. Navigieren Sie nach *Personal* und öffnen Sie einen Eintrag. Im Tab *Private Information* finden Sie das Feld *Bankverbindung*. Hier können Sie ein [Bankkonto erfassen](Invoicing.md#Bankkonto%20erfassen)

## Arbeitszeit

### Arbeitszeit erstellen

Navigieren Sie nach *Einstellungen > Technisch > Arbeitszeit* und erstellen Sie einen neuen Eintrag mit Namen gemäss dem bestehenden Schema. Geben Sie entweder die *Durchschnittliche Stundenzahl pro Tag* manuell ein oder erstellen Sie neue Einträge in der Liste *Arbeitsstunden*.

![](attachments/Personal%20Arbeitszeit.png)

::: warning
Stellen Sie sicher, dass die Anzahl Stunden am Vor- und Nachmittag gleich sind. Bei Abwesenheitseinträgen mit Halbtagen wird diese Anzahl Stunden verwendet.
:::

### Flexible Arbeitszeit erfassen

Navigieren Sie nach *Einstellungen > Technisch > Arbeitszeit* und erstellen Sie einen neuen Eintrag mit Namen *Standard 0 hours/week*. Entfernen Sie alle Einträge in *Arbeitsstunden* und tragen Sie als *Durchschnittliche Stundenzahl pro Tag* den Wert `0` ein. 

![](attachments/Personal%20Flexible%20Arbeitszeit.png)

### Arbeitszeiten festlegen

Um die Arbeitszeiten für einen Mitarbeiter festzulegen, öffnen Sie das App *Personal* und wählen den Mitarbeiten aus. Wählen Sie *Bearbeiten* und legen Sie im Tab *Arbeitsinformation* unter *Arbeitsplan* die *Arbeitsstunden* fest.

![](attachments/Personal%20Arbeitsstunden.png)

### Arbeitszeiten auf Vertrag festlegen

Um die Arbeitszeiten für einen Mitarbeitenden auf dem Arbeitsvertrag festzulegen, zeigen Sie *Mitarbeiter > Mitarbeiter > Alle Verträge* und wählen einen Vertrag aus. Legen Sie unter *Arbeitsplan* die Arbeitszeiten fest.

### Arbeitspensum wechseln

Um das Pensum eines Mitarbeiten zu wechseln, muss ein Enddatum für die bestehenden Arbeitszeiten eingetragen werden und die neuen Arbeitszeiten werden darunter erfasst.

Erstellen Sie eine neues Pensum *Personal > Mitarbeiter auswählen > Tab Arbeitsinformation > Ausführungsplan > Anlegen und Bearbeiten*. Definieren Sie einen passenden Titel und legen Sie bei den bestehenden Arbeitszeiten das Enddatum fest.

![](attachments/Personal%20Arbeitszeiten%20mit%20Enddatum.png)

::: tip
Es wird empfohlen pro Mitarbeitenden eine Arbeitszeit zu definieren.
:::

::: warning
Wenn Mitarbeitende unterhalb des Jahres ein Arbeitspensum reduzieren oder erhöhen, muss sichergestellt werden, dass die Abwesenheiten neu berechnet werden.
:::

## Offboarding

### Mitarbeiteraustritt ausführen

Ein Mitarbeiteraustritt bedeutet für Odoo eine Archivierung des Mitarbeitenden in der *Personal* App. Wählen Sie den/die Mitarbeitenden unter *Personal* aus und klicken auf *Aktionen > Archiv*. Zusammenhängende Ressourcen zum Personaleintrag werden mit dier Aktion ebenfalls archiviert.

## Berechtigung

### Neue Berechtigungsgruppe Personalmanager anlegen

Gehen Sie nach *Einstellungen > Benutzer und Unternehmen > Gruppen* und erstellen Sie eine Kopie von *Personal / Personalsachbearbeiter*. Geben Sie als Namen *Personalmanager* ein und entfernen Sie die Einträge im Tab *Benutzer*, *Vererbt*, *Menüs* und *Datensatzregeln*. Benutzer in dieser Gruppe erhalten Zugriff auf Aktivitäten auf dem Mitarbeiter-Objekt.
