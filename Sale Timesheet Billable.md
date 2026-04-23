---
title: Sale Timesheet Billable
description: Auswahl-Filter für Auftragszeilen mit verrechenbaren Produkten auf Zeiterfassungseinträgen.
kind: howto
partner: Mint System
prev: ./sale-timesheet
forge: github.com
repo: Mint-System/Odoo-Apps-Sale-Workflow
versions:
  - "17.0"
name: sale_timesheet_billable
---

# Sale Timesheet Billable

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung wird die Auswahl der Auftragszeilen auf Zeiterfassungeinträge abhängig von der Aufgabe eingeschränkt. Ist eine Aufgabe als abrechenbar markiert, können nur Auftragspositionen mit einem Preis ausgewählt werden. Umgekehrt muss der Preis Null sein.
