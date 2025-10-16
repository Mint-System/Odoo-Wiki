---
title: HR Attendance Report Add Flexitime
description: Geplante Arbeitszeit und Gleitzeit im Anwesenheitsbericht.
kind: howto
partner: Mint-System
prev: ./hr-attendance
---

# HR Attendance Report Add Flexitime
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_attendance_report_add_flexitime`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/16.0/hr_attendance_report_add_flexitime>

## Verwendung

Fügt die geplante Arbeitszeit und die Abweichung dazu (Gleitzeit) als *Measures* dem Anwesenheitsbericht hinzu.

Beim Installieren des Moduls werden alle geplanten Arbeitszeiten aller Mitarbeiter seit dem 1. Januar des aktuellen Jahres aus der Kalender-Ressource neu berechnet.

Die Geplante Aktion *Geplante Arbeitsstunden berechnen (gestern)* trägt im weiteren Verlauf einmal am Tag die geplanten Arbeitszeiten des Vortages nach.

Diese Aktion kann auch jederzeit mit einem anderen Zeitraum (`START_DATE, END_DATE`) aufgerufen werden:
```
model.compute_planned_hours($START_DATE, $END_DATE)
```





