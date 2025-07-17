---
title: HR Attendance Missing
description: Fehlende Anwesenheiten erstellen.
kind: howto
tags:
- Mint-System
prev: ./hr-attendance
---
# HR Attendance Missing
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_attendance_missing`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/16.0/hr_attendance_missing>

## Beschreibung

Wenn Mitarbeitende vergessen ihre Anwesenheit zu erfassen, registriert Odoo keine Minusstunden. Mit dieser Erweiterung wird in einem ausgewählten Zeitraum für jeden Tag geprüft, ob der Mitarbeitende Soll-Arbeitszeit hat und ob keine Abwesenheiten (Urlaub, Feiertag, Krank ...) registriert wurden. Wenn dies der Fall ist, wird für den jeweiligen Tag eine Anwesenheit mit 0 Stunden erstellt und dementsprechend Überstunden berechnet.

Die Erweiterung instaliert eine geplante Aktion, die täglich für alle Mitarbeitenden fehlende Anwesenheiten zum Vortag generiert.

## Verwendung

### Fehlende Anwesenheit für ausgewählten Zeitraum generieren

Navigieren Sie nach *Personal* und öffnen Sie einen Mitarbeitenden-Eintrag. Wählen Sie *Aktionen > Fehlende Anwesenheiten erstellen* und legen Sie im Dialog ein Start- und Enddatum fest. Erstellen Sie die Einträge mit *Erstellen*.

### Generierte fehlende Anwesenheiten anzeigen

Navigieren Sie nach *Anwesenheiten > Anwesenheiten* und wählen Sie *Filter > Fehlende Anwesenheit*. Die angezeigten Einträge sind generierte Anwesenheiten.
