---
description: Benutzerdefinierte Anzahl Stunden auf Abwesenheit eintragen.
forge: github.com
kind: howto
name: hr_holidays_custom_hours
partner: OCA
prev: ./hr-holidays
repo: Mint-System/Odoo-Apps-HR
title: HR Holidays Custom Hours
versions:
- '16.0'
---


# HR Holidays Custom Hours

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Benutzerdefinierte Stunden für Abwesenheitsart erlauben

Zeigen Sie _Abwesenheiten > Konfiguration > Abwesenheitsarten_ an und öffnen Sie eine ausgewählte Abwesenheitsart. Aktivieren Sie die Option _Benutzerdefinierte Stunden Erlauben_.

## Verwendung

### Benutzerdefinierte Anzahl Stunden auf Abwesenheit eintragen

Öffnen Sie _Abwesenheiten_ und erstellen Sie einen neuen Eintrag. Wählen Sie die Abwesenheitsart aus, die eine benutzerdefinierte Anzahl Stunden erlaubt. Tragen Sie im Feld _Benutzerdefinierte Stunden_ die effektiven Stunden ein.

::: tip
Eine positive Differenz der benutzerdefinierten Anzahl Stunden zu Anzahl Stunden der Abwesenheit werden als Überstunden hinzugefügt.
:::
