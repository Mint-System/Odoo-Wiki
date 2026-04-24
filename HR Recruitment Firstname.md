---
description: Vor- und Nachname auf Bewerbung.
forge: github.com
kind: howto
name: hr_recruitment_firstname
partner: Mint System
prev: ./hr-recruitment
repo: Mint-System/Odoo-Apps-HR
title: HR Recruitment Firstname
versions:
- '14.0'
---


# HR Recruitment Firstname

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Bewerbungsformular mit Vor- und Nachname anzeigen

Ist diese Erweiterung installiert, wird auf dem Bewerbungsformular und der Backendansicht ein Feld für Vor- und Nachname angezeigt.

Die Ansicht auf der Website:

![](attachments/HR%20Recruitment%20Firstname%20Website.png)

Die Ansicht im Backend:

![](attachments/HR%20Recruitment%20Firstname%20Backend.png)

::: tip
Die neuen Felder können Sie in der E-Mail-Vorlage mit dem Platzhalter `${object.firstname}` und `${object.lastname}` verwenden.
:::
