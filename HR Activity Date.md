---
title: HR Activity Date
description: Plannungstypen mit Aktivitätsdatum basierend auf Arbeitsverträgen.
kind: howto
partner: Mint-System
prev: ./hr
---

# HR Activity Date

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_activity_date`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/14.0/hr_activity_date>

## Verwendung

### Aktivitätsdatum Input festlegen

Mit dieser Erweiterung können Sie auf Planungstypen _Personal > Konfiguration > Planungstypen > Planungstyp auswählen_ festlegen, ob das Aktiviätsdatum basierend auf dem _Eintrittsdatum_ oder des _Austrittsdatum_ des Arbeitsvertrag angelegt werden soll. Zusätzlich kann im Feld _Aktivitätsdatum Verschiebung Tage_ in Tagen (-/+) eine Verschiebung des Aktivitätsdatum angegeben werden.

![](attachments/HR%20Activity%20Date.png)

::: warning
Wenn ein Plan für einen Mitarbeitenden ohne aktiven Arbeitsvertrag erstellt wird, erscheint ein Fehler.
:::
