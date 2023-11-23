---
title: HR Attendance Missing
description: Fehlende Anwesenheiten erstellen.
tags:
- HowTo
- Drittanbieter
prev: ./hr-attendance
---
# HR Attendance Delta
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `hr_attendance_missing`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/16.0/hr_attendance_missing>

## Beschreibung

Wenn Mitarbeitende vergessen ihre Anwesenheit zu registrieren, registriert Odoo keine Minusstunden. Mit dieser Erweiterung wird in einem ausgewählten Zeitraum für jeden Tag geprüft, ob der Mitarbeitende Soll-Arbeitszeit hat und ob keine Abwesenheiten (Urlaub, Feiertag, Krank ...) registriert sind. Wenn dies der Fall ist, wird für den Tag eine Anwesenheit mit 0 Stunden erstellt und dementsprechend Überstunden berechnet.

Standardmässig wird mit der Erweiterung eine geplante Aktion installiert, die täglich für alle Mitarbeitenden fehlende Anwesenheiten zum Vortag generiert.

## Verwendung

### Fehlende Anwesenheit für ausgewählten Zeitraum generieren

Navigieren Sie nach *Personal* und öffnen Sie einen Mitarbeitenden-Eintrag. Wählen Sie *Aktion > Fehlende Anwesenheiten erstellen* und legen Sie im Dialog ein Start- und Enddatum fest. Erstellen Sie die Einträge mit *Erstellen*.

### Generierte fehlende Anwesenheiten anzeigen

Navigieren Sie nach *Anwesenheiten > Anwesenheiten* und wählen Sie *Filter > Fehlende Anwesenheit*. Die angezeigten Einträge sind generierte Anwesenheiten.