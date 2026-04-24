---
description: Ein- und Auschecken mit Kanban-Board.
forge: github.com
kind: howto
name: hr_attendance_kanban
partner: OCA
prev: ./hr-attendance
repo: sozialinfo/hr-attendance
title: HR Attendance Kanban
versions:
- '16.0'
---


# HR Attendance Kanban

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit diesem Modul können Mitarbeiter ein- oder auschecken, indem sie ihre Kachel auf dem Kanban-Board verschieben. Das Kanban-Board zeigt auch einen schnellen Überblick über alle Mitarbeiter, gruppiert nach Anwesenheitsart, wie z. B.:

- 👋 Abwesend
- 🏢 Büro
- 🏠 Home-Office
- 🚋 Reisend

![](attachments/HR%20Attendance%20Kanban.png)

## Konfiguraiton

### Mitarbeitende auf Kanban-Ansicht anzeigen

Damit Mitarbeitende ihre Kachel auf der Kanban-Ansicht haben, muss auf dem Mitarbeiter-Eintrag eine Option aktiviert werden. Zeigen Sie einen Mitarbeitenden unter _Mitarbeiter_ an aktivieren Sie die Option _Mitarbeiter-Kanban_.

### Anwesenheitsarten verwalten

Navigieren Sie nach _Anwesenheiten > Konfiguration > Anwesenheitsarten_. Hier önnen Sie die Spalten des Kanban-Boards verwalten. Die Einträge können sortiert werden, damit ändert sich die Spalten-Reihenfolge auf dem Board.
