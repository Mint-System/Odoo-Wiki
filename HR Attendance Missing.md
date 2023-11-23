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

Wenn Mitarbeitende vergessen ihre Anwesenheit zu registrieren, registriert Odoo keine Minusstunden. Mit dieser Erweiterung wird für einen ausgewählten Zeitraum geprüft, ob der Mitarbeitende eine Soll-Arbeitszeit erfüllen muss und ob in diesem Zeitraum keine Abwesenheiten registriert sind. Wenn das der Fall ist, generiert die Erweiterung einen Anwesenheit-Eintrag mit 0 Stunden.

Standardmässig wird mit der Erweiterung eine geplante Aktion installiert, welche täglich für alle Mitarbeitenden fehlende Anwesenheiten am Vortag generiert.

## Verwendung

### Fehlende Anwesenheit für ausgewählten Zeitraum generieren

Navigieren Sie nach *Personal* und öffnen Sie einen Mitarbeitenden-Eintrag. Wählen Sie *Aktion > Fehlende Anwesenheiten erstellen* und legen Sie im Dialog ein Start- und Enddatum fest. Erstellen Sie die Einträge mit *Erstellen*.

### Generierte fehlende Anwesenheiten anzeigen

Navigieren Sie nach *Anwesenheiten > Anwesenheiten* und wählen Sie *Filter > Fehlende Anwesenheit*. Die angezeigten Einträge sind generierte Anwesenheiten.