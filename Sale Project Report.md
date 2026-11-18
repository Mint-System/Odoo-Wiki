---
title: Sale Project Report
description: Adds project report for sold and recorded hours analysis.
kind: howto
partner: Mint-System
prev: ./sale
forge: github.com
repo: Mint-System/Odoo-Apps-Sale-Workflow
versions:
  - '17.0'
name: sale_project_report
---

# Sale Project Report

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a><!--\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>-->

## Beschreibung

Dieses Modul fügt einen neuen Bericht hinzu unter Projekt -> Berichtswesen -> Projektanalyse.

Der Bericht zeigt eine Stundenübersicht für Projekte mit folgenden Feldern:

| Feld                                           | Beschreibung                                                                                         |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Geplante Stunden                               | Die gesamte Stundenanzahl aus der Spalte 'Menge' in dem verknüpften Verkaufsauftrag.                 |
| Freigegebene Stunden                           | Die gesamte Stundenanzahl eingetragen im Feld 'Zugewiesene Zeit' bei der Auftrag für diese Projekte. |
| Zeiterfassungsstunden                          | Die gesamte Zeiterfassungsstunden für diese Projekte.                                                |
| Verrechnete Stunden                            | Die gesamte Zeiterfassungsstunden für diese Projekte, die mit einer Rechnung verbunden sind.         |
| Anteil freigegebene von geplanten Stunden      | Prozentsatz freigegebene von geplanten Stunden                                                       |
| Anteil Zeiterfassung von freigegebenen Stunden | Prozentsatz Zeiterfassungsstunden von freigegebenen Stunden                                          |
| Anteil Zeiterfassung von geplanten Stunden     | Prozentsatz Zeiterfassungsstunden von geplanten Stunden                                              |










