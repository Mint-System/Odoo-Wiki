---
description: Geplante Arbeitszeit und Gleitzeit im Anwesenheitsbericht.
forge: github.com
kind: howto
name: hr_attendance_report_add_flexitime
partner: Mint System
prev: ./hr-attendance
repo: Mint-System/Odoo-Apps-HR
title: HR Attendance Report Add Flexitime
versions:
- '16.0'
---


# HR Attendance Report Add Flexitime
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

Fügt die geplante Arbeitszeit und die Abweichung dazu (Gleitzeit) als *Measures* dem Anwesenheitsbericht hinzu.

Beim Installieren des Moduls werden alle geplanten Arbeitszeiten aller Mitarbeiter seit dem 1. Januar des aktuellen Jahres aus der Kalender-Ressource neu berechnet.

Die Geplante Aktion *Geplante Arbeitsstunden berechnen (gestern)* trägt im weiteren Verlauf einmal am Tag die geplanten Arbeitszeiten des Vortages nach.

Diese Aktion kann auch jederzeit mit einem anderen Zeitraum (`START_DATE, END_DATE`) aufgerufen werden:
```
model.compute_planned_hours($START_DATE, $END_DATE)
```





