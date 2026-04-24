---
description: Berechnung Dauer anhand Start- und Endzeit.
forge: github.com
kind: howto
name: hr_timesheet_from_until
partner: Mint System
prev: ./hr-timesheet
repo: Mint-System/Odoo-Apps-HR
title: HR Timesheet From Until
versions:
- '17.0'
---


# HR Timesheet From Until

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Start- und Endzeit eingeben

Mit dieser Erweiterung wir die Dauer auf einem Stundenzettel anhand der End- und Startzeit berechnet. Navigieren Sie nach _Zeiterfassung_ und wählen Sie die Listenansicht aus. Erstellen Sie einen neuen Eintrag und geben Sie Start- und Endzeit in den entsprechenden Felder ein.

::: tip
Für eine schnelle Eingabe der Uhrzeit, können Sie eine Ganzzahl oder Kommazahl in eine Uhrzeit umwandeln lassen:

Eingabe `815` ergibt `08:15`.\
Eingabe `1045` ergibt `10:45`.\
Eingabe `0930` ergibt `09:30`.\
Eingabe `1170` ergibt `12:10`.\
Eingabe `8.25` ergibt `08:15`.\
Eingabe `8.5`ergibt `08:30`.\
Eingabe `8.75` ergibt `08:45`.
:::

![HR Timesheet From Until](attachments/HR%20Timesheet%20From%20Until.gif)
