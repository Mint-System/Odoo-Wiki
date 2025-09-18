---
title: HR Attendance Policy
description: Richtlinien für die Anwesenheit festlegen.
kind: howto
partner: Mint-System
prev: ./hr-attendance
---
# HR Attendance Policy
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_attendance_policy`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/18.0/hr_attendance_policy>

## Beschreibung

Wenn diese Erweiterung und die Berechnung der Überstunden aktiv ist, wird bei der Berechnung der Überstunden geprüft, ob die erfasste Anwesenheit den Anwesenheitsrichtlinien entsprechen.

Ein Beispiel: Die folgende Richtlinie erfordert 30 Minuten Pause nach 7:00 Stunden Arbeit:

![](attachments/HR%20Attendance%20Policy%20Break.png)

Wenn ein Mitarbeitender bei der Erfassung der Anwesenheit zu wenig Pause macht:

![](attachments/HR%20Attendance%20Policy%20Attendance.png)

Wird der Überstunden-Eintrag mit der Anwesenheitsrichtlinie verlinkt:

![](attachments/HR%20Attendance%20Policy%20Konflikt.png)

Mitarbeitende sehen in der Liste der Überstunden, welche Einträge in Konflikt stehen und können, sofern erlaubt, mit manuellen Anpassungen die Anwesenheitseinträge korrigieren.

## Konfiguration

### Anwesenheitsrichtlinie erfassen

Navigieren Sie nach *Mitarbeiter > Konfiguration > Anwesenheitsrichtlinien* und erstellen Sie einen neuen Eintrag. Geben Sie einen Namen und eine Beschreibung ein. Definieren Sie Regeln mit Bereich der gearbeiteten Stunden pro Tag und dem benötigten Pausen (Abstand zwischen Anwesenheitseinträgen).

::: tip
Mehrere Regeln werden einzeln und unabhängig voneinander geprüft.
:::
