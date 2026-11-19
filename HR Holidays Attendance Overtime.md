---
title: HR Holidays Attendance Overtime
description: Erlaubt eine Trennung von Überstunden und Überzeit.
kind: howto
partner: Mint-System
prev: ./hr
forge: github.com
repo: Mint-System/Odoo-Apps-HR
versions:
  - '19.0'
name: hr_holidays_attendance_overtime
---

# HR Holidays Attendance Overtime

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung können Überstundenregel-Zeilen mit einer Abwesenheitsart verknüpft werden. Bei der Erfassung der Anwesenheit werden alle Zeilen der Überstundenregel des Mitarbeitenden geeprüèt.

Standardässig werden diese Überstundenregel-Zeilen erstellt:

| Name            | Definition                                                                                                        | Regel                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Überstunden** | Arbeitszeit über dem vertraglichen Soll (Arbeitszeitmodell, z.B. 42h/Woche bei 100%, 33.6h bei 80%) bis 45h/Woche | Regel "Überstunden": Grundlage Arbeitszeitmodell, aktiv bis 45h minus Arbeitssollstunden |
| **Überzeit**    | Arbeitszeit über der gesetzlichen Höchstarbeitszeit von 45h/Woche (ArG Art. 9)                                    | Regel "Überzeit": Periode Woche, aktiv ab 45h minus Arbeitssollstunden                   |
