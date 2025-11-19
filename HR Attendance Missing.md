---
title: HR Attendance Missing
description: Fehlende Anwesenheiten erstellen.
kind: howto
partner: Mint-System
prev: ./hr-attendance
---

# HR Attendance Missing

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_attendance_missing`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/16.0/hr_attendance_missing>

::: warning
Seit #Odoo18 wird diese App nicht mehr benötigt. 
#DEPRECATED
:::

## Beschreibung

Wenn Mitarbeitende vergessen ihre Anwesenheit zu erfassen, registriert Odoo keine Minusstunden. Mit dieser Erweiterung wird in einem ausgewählten Zeitraum für jeden Tag geprüft, ob der Mitarbeitende Soll-Arbeitszeit hat und ob keine Abwesenheiten (Urlaub, Feiertag, Krank ...) registriert wurden. Wenn dies der Fall ist, wird für den jeweiligen Tag eine Anwesenheit mit 0 Stunden erstellt und dementsprechend Überstunden berechnet.

Die Erweiterung instaliert eine geplante Aktion, die täglich für alle Mitarbeitenden fehlende Anwesenheiten zum Vortag generiert.

## Konfugration

### Abwesenheitsart ignorieren

Wenn Sie bestimmte Abwesenheitsart bei der Prüfung der fehlenden Anwesenheiten ignorieren wollen, dann können Sie die Abwesenheitsart entsprechend anpassen. Zeigen Sie die Abwesenheitsart unter _Abwesenheiten > Konfiguration > Abwesenheitsarten_ an und aktivieren Sie die Option _Fehlende Abwesenheit ignorieren_.

## Verwendung

### Fehlende Anwesenheit für ausgewählten Zeitraum generieren

Navigieren Sie nach _Personal_ und öffnen Sie einen Mitarbeitenden-Eintrag. Wählen Sie _Aktionen > Fehlende Anwesenheiten erstellen_ und legen Sie im Dialog ein Start- und Enddatum fest. Erstellen Sie die Einträge mit _Erstellen_.

### Generierte fehlende Anwesenheiten anzeigen

Navigieren Sie nach _Anwesenheiten > Anwesenheiten_ und wählen Sie _Filter > Fehlende Anwesenheit_. Die angezeigten Einträge sind generierte Anwesenheiten.
