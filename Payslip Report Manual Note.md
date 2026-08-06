---
title: Payslip Report Manual Note
description: Field in Payslip View that is transfered to the Swiss Payslip Report
kind: howto
tags:
  - Mint-System
prev: ./HR Payroll
forge: github.com
repo: Mint-System/Odoo-Apps-HR
versions:
- '18.0'
name: hr_payslip_report_manual_note
---

# Payslip Report Manual Note

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Dieser Modul  fügt ein Feld auf der Gehaltsabrechnung zu, welche direkt übertragen wird, unten auf der Gehaltsabrechnung PDF. Zum Beispiel, Details zu der Auszahlung können so eingetragen werden.
Funktioniert nur für der Schweizer Gehaltsabrechnung.
