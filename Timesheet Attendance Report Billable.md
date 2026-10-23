---
title: Timesheet Attendance Report Billable
description: Addition of billable, non-billable and internal hours in standard timesheet attendance report.
kind: howto
tags:
  - Mint-System
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
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a><!--\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>-->

## Beschreibung

The standard timesheet/attendance report in the timesheet module is expanded with 3 fields that sum which timesheet entries are billable, non-billable or internal.

They are grouped by these conditions:
- With sale order and timesheet_invoice_type != non-billable -> Billable
- With sale order and timesheet_invoice_type == non-billable -> Non Billable
- Without sale order -> Internal
