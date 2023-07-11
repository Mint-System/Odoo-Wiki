---
title: HR Activity Date
description: Plannungstypen mit Aktivitätsdatum basierend auf Arbeitsverträgen.
tags:
- HowTo
- Drittanbieter
prev: ./hr
---
# HR Activity Date
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `hr_activity_date`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/14.0/hr_activity_date>

## Verwendung

### Aktivitätsdatum Input festlegen

Mit dieser Erweiterung können Sie auf Planungstypen *Personal > Konfiguration > Planungstypen > Planungstyp auswählen* festlegen, ob das Aktiviätsdatum basierend auf dem *Eintrittsdatum* oder des *Austrittsdatum* des Arbeitsvertrag angelegt werden soll. Zusätzlich kann im Feld *Aktivitätsdatum Verschiebung Tage* in Tagen (-/+) eine Verschiebung des Aktivitätsdatum angegeben werden.

![](attachments/HR%20Activity%20Date.png)

::: warning
Wenn ein Plan für einen Mitarbeitenden ohne aktiven Arbeitsvertrag erstellt wird, erscheint ein Fehler.
:::