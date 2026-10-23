---
title: Timesheet Attendance Report Billable
description: Addition of billable, non-billable and internal hours in standard timesheet attendance report.
kind: howto
partner: Mint System
prev: ./hr-timesheet
forge: github.com
repo: Mint-System/Odoo-Apps-HR
versions:
  - '17.0'
name: hr_timesheet_attendance_report_billable
---

# Timesheet Attendance Report Billable

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Der Standardbericht _Analyse von Zeiterfassung/Anwesenheiten_ in Zeiterfassung wurde um drei Felder erweitert, die die jeweiligen Zeiterfassungsstunden nach den Kategorien "abrechenbar", "nicht abrechenbar" oder "intern" zusammenfassen. 

Die Gruppierung erfolgt anhand der folgenden Kriterien:

- Mit Verkaufsauftrag und `timesheet_invoice_type` != "nicht abrechenbar" -> Abrechenbar 
- Mit Verkaufsauftrag und `timesheet_invoice_type` == "nicht abrechenbar" -> Nicht abrechenbar 
- Ohne Verkaufsauftrag -> Intern
