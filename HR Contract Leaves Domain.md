---
title: HR Contract Leaves Domain
description: Changes the method "_get_expected_attendances" in hr_contract/models/hr_employee.py to only take intervals with time_type 'leave' and 'attendance'. 
kind: howto
tags:
  - Mint-System
prev: ./hr-holidays
forge: github.com
repo: Mint-System/Odoo-Apps-HR
versions:
- '18.0'
- '17.0'
name: hr_contract_leaves_domain
---

# HR Contract Leaves Domain

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit hr_contract wird die Berechnung der Soll-Stunden ("\_get\_expected\_attendances") ohne "Domain" gemacht. Dann wird der Default von nur 'leave' als time_type gebraucht. Für den Use Case von einer Stunde Feiertag vor einem Feiertag können dann der time_type 'other' und 'attendance' (hinzugefügt in "Resource Attendance Time Type") nicht mehr gebraucht werden, um die Soll-Stunden zu reduzieren.

Dieses Modul ändert die Soll-Stunden Berechnung, damit die Soll-Stunden reduziert werden, wenn der Feiertag den time_type 'leave' oder 'attendance' hat. Der time_type 'other' wird für Abwesenheiten gebraucht, die keine Soll-Stunden reduzieren müssen. Zum Beispiel für Homeoffice-Einträge.

## Konfiguration

### 1 Stund frei vor Feiertag 

Für einen neuen Feiertag in der Liste der gesetzlichen Feiertage muss die Dauer auf eine Stunde eingerichtet werden, durch Start- und Enddatum. Der time_type muss auf ‘attendance’ gesetzt werden, um einen Unterschied zu machen mit den Standardfeiertagen (mit Type 'leave'). NB: der time_type darf nicht 'other' sein.

### Home Office Einträge

Für einen neuen Feiertag in der Liste der gesetzlichen Feiertage muss die Dauer auf eine Stunde eingerichtet werden, durch Start- und Enddatum. Der time_type muss auf ‘attendance’ gesetzt werden, um einen Unterschied zu machen mit den Standardfeiertagen (mit Type 'leave'). NB: Der time_type darf nicht 'other' sein.

NB: Wenn ein Mitarbeiter keinen 'gültigen' Vertrag hat, wird die Soll-Stunden-Berechnung gemacht, als ob hr_contract nicht aktiv ist. So werden die Feiertage mit allen time_types in die Berechnung einbezogen und es ist nicht möglich, Home-Office-Einträge zu machen, sowie hier beschrieben ist.
