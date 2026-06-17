---
title: Resource Attendance Time Type
description: Add an extra time_type to national holidays and make it visible in the list view
kind: howto
tags:
  - Mint-System
prev: ./hr-holidays
forge: github.com
repo: Mint-System/Odoo-Apps-HR
versions:
- '18.0'
- '17.0'
name: resource_attendance_time_type
---

# Resource Attendance Time Type

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit diesem Modul wird eine extra Möglichkeit für das Feld "time_type" bei gesetzlichen Feiertagen hinzugefügt. Das Feld wird auch in der Listenansicht angezeigt und kann geändert werden.

Der extra Typ macht es möglich, einen Unterschied zu machen zwischen gesetzlichen Feiertagen, die Soll-Stunden reduzieren müssen, aber nicht mitberechnet werden sollen in Abwesenheiten, und 'normalen' Feiertagen. NB: Der Typ "attendance" wird nur gebraucht im Modul "HR Contract Leaves Domain".

Ein konkretes Beispiel ist, wenn ein Kunde seinen Mitarbeitern eine Stunde freigibt vor einem Feiertag. Diese kann als gesetzlicher Feiertag eingetragen werden und muss einen time_type haben, der anders als "leave" ist. Dann werden die Soll-Stunden reduziert und wenn ein Mitarbeiter eine Ferien im gleichen Zeitraum bucht, wird der "1h-Feiertag" ignoriert. NB: Der Berechnung stimmt nur nicht, wenn die Ferien als Halbtage oder Stunden gebucht werden.

Wann zusätzlich "hr_contract" gebraucht wird, muss das Modul "HR Contract Leaves Domain" installiert werden für die richtige Berechnung von Soll-Stunden.

## Konfiguration

### 1 Stund frei vor Feiertag 

Für einen neuen Feiertag in der Liste der gesetzlichen Feiertage muss die Dauer auf eine Stunde eingerichtet werden, durch Start- und Enddatum. Der time_type muss auf ‘attendance’ oder ‘other’ gesetzt werden, um einen Unterschied zu machen mit den Standardfeiertagen (mit Type 'leave').
