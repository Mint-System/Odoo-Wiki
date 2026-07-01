---
description: Plannungstypen mit Aktivitätsdatum basierend auf Arbeitsverträgen.
forge: github.com
kind: howto
name: hr_activity_date
partner: Mint System
prev: ./hr
repo: Mint-System/Odoo-Apps-HR
title: HR Activity Date
versions:
- '14.0'
---


# HR Activity Date

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Aktivitätsdatum Input festlegen

Mit dieser Erweiterung können Sie auf Planungstypen _Personal > Konfiguration > Planungstypen > Planungstyp auswählen_ festlegen, ob das Aktiviätsdatum basierend auf dem _Eintrittsdatum_ oder des _Austrittsdatum_ des Arbeitsvertrag angelegt werden soll. Zusätzlich kann im Feld _Aktivitätsdatum Verschiebung Tage_ in Tagen (-/+) eine Verschiebung des Aktivitätsdatum angegeben werden.

![](attachments/HR%20Activity%20Date.png)

::: warning
Wenn ein Plan für einen Mitarbeitenden ohne aktiven Arbeitsvertrag erstellt wird, erscheint ein Fehler.
:::
