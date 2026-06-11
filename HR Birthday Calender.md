---
description: Kalenderansicht aller Geburtstage.
forge: github.com
kind: howto
name: hr_birthday_calendar
partner: Mint System
prev: ./hr
repo: Mint-System/Odoo-Apps-HR
title: HR Birthday Calender
versions:
- '14.0'
---


# HR Birthday Calender

![](attachments/icon_hr_birthday_calendar.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Geburtstagskalender anzeigen

Navigieren Sie nach _Personal > Mitarbeiterverzeichnis_ und klicken Sie auf die Kalender-Ansicht. Nun erscheinen alle eingetragenen Geburtstage ohne Jahreszahl.

![](attachments/Kalender-Symbol.png)

## Entwicklung

### Menü-Eintrag für Geburtstags-Kalender erstellen

Damit Sie einen direkten Zugriff auf den Geburtstags-Kalender erhalten, führen Sie [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) aus und verwenden diese Werte:

Name der Aktion: `Geburtstage`\
Objekt: `hr.employee.public`\
Ansichtsmodus: `calendar`\
Menü: `Geburtstage`\
Obermenü: `Personal`\
Aktion: `ir.actions.act_window` `Geburtstage`\
Nummernfolge: `100`

Das Ergebnis sollte so aussehen:

![](attachments/Einkauf%20Einkaufszeilen.png)
