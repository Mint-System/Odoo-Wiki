---
description: Erfassbare Zeit auf geplante Zeit limitieren.
forge: github.com
kind: howto
name: project_timesheet_limit
partner: Mint System
prev: ./hr-timesheet
repo: Mint-System/Odoo-Apps-HR
title: Project Timesheet Limit
versions:
- '17.0'
---


# Project Timesheet Limit

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erfassbare Zeit limitieren

Zeigen Sie den Tab _Einstellungen_ eines Projekts via _Projekt > Konfiguration > Projekte_ an. Aktivieren Sie die Option _Erfassbare Zeit limitieren_.

::: tip
Wenn die Option aktiv ist, können die Stunden der Zeiterfassung auf den Aufgaben des Projekts die geplante Zeit der Aufgabe nicht überschreiten.
:::
