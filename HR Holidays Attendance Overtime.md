---
title: HR Holidays Attendance Overtime
description: Verknüpft Überstundenregeln mit Abwesenheitsarten, um Extrastunden- und Überstundenbilanzen getrennt zu halten.
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

Mit dieser Erweiterung kann eine Überstundenregel mit einer Abwesenheitsart verknüpft werden. Für jede verknüpfte Abwesenheitsart wird dabei ein eigener Saldo geführt und das Abwesenheiten-Dashboard zeigt pro verknüpfter Abwesenheitsart eine eigene Kachel.

**Beispiele für Regeln**

| Name            | Definition                                                                                                        | Regel                                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Überstunden** | Arbeitszeit über dem vertraglichen Soll (Arbeitszeitmodell, z.B. 42h/Woche bei 100%, 33.6h bei 80%) bis 45h/Woche | Regel „Überstunden": Basis Menge, Periode Woche, Grundlage Arbeitszeitmodell |
| **Überzeit**    | Arbeitszeit über der gesetzlichen Höchstarbeitszeit von 45h/Woche (ArG Art. 9)                                    | Regel „Überzeit": Basis Menge, Periode Woche, feste Schwelle 45h             |
