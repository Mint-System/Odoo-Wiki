---
title: Hr Timesheet Attendance Record
description: Anwesenheitseinträge aus Zeiterfassung erstellen.
kind: howto
tags:
  - Mint-System
prev: ./hr-timesheet
forge: github.com
repo: Mint-System/Odoo-Apps-HR
versions:
  - '18.0'
name: hr_timesheet_attendance_record
---

# Hr Timesheet Attendance Record

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a><!--\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>-->

## Beschreibung

Mit diesem Modul wird jede Zeiterfassung gespiegelt in einen Anwesenheitseintrag am gleichen Tag. So kann die Berechnung der Überstunden über Zeiterfassung gemacht werden.

Dieses Modul geht davon aus, dass Anwesenheitserfassung nur noch über Zeiterfassung läuft.
