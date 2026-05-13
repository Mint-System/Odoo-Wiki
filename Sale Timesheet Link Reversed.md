---
title: Sale Timesheet Link Reversed
description: Abgerechnete Zeiterfassungseinträge auf mit Gutschriften bezahlten Rechnungen beibehalten. 
kind: howto
tags:
  - Mint-System
prev: ./sale-timesheet
forge: github.com
repo: Mint-System/Odoo-Apps-Sale-Workflow
versions:
- '17.0'
name: sale_timesheet_link_reversed
---

# Sale Timesheet Link Reversed

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Bei der Abrechnung eines Verkaufsauftrags mit Zeiterfassung selektiert Odoo alle Einträge, die nicht mit einer Rechnung verlinkt sind oder deren Rechnung den Status _reversed_ hat. Wenn eine Rechnung mit einer Gutschrift bezahlt wird, dann erhält diese den Status _reversed_. Dies führt dazu, dass bei der nächsten Abrechnung alle Zeiterfassungseinträge dieser Rechnung nochmals abgerechnet werden.

Mit dieser Erweiterung wird sichergestellt, dass Odoo nur Zeiterfassungseinträge selektiert, die nicht mit einer Rechnung verbunden sind.