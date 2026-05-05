---
description: Zugriff auf Anwesenheiten für Benutzer steuern.
forge: github.com
kind: howto
name: hr_attendance_user_acl
partner: Mint System
prev: ./hr-holidays
repo: Mint-System/Odoo-Apps-HR
title: HR Attendance User ACL
versions:
- '18.0'
- '16.0'
---


# HR Attendance User ACL

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Diese Erweiterung stellt eine neeu Gruppe "Anwesenheiten / Benutzer" zur verfügung. Benutzer dieser Gruppe können 

Gilt ab #Odoo18: Die Absenzen-Kontrolle wird nur für Benutzer dieser Gruppe ausgeführt. 

## Verwendung

### Anwesenheit manuell erfassen

Gilt bis #Odoo16.

Mit dieser Erweiterung können Benutzer der Gruppe _Anwesenheiten / Benutzer_ ihre Anwesenheiten manuell und nachträglich erfassen. Navigieren Sie nach _Anwesenheiten > Anwesenheiten_ und klicken Sie auf _Neu_.

### Anwesenheit löschen

Gilt bis #Odoo16.

Im Weiteren können Benutzer ihre Anwesenheits-Einträge löschen. Navigieren Sie nach _Anwesenheiten > Anwesenheiten_, markieren Sie die zu löschenden Einträge und wählen Sie _Aktionen > Löschen_.

### Erfassung Anwesenheit erlauben

Gilt ab #Odoo18.

Mit dieser Erweiterung können Benutzer der Gruppe _Anwesenheiten / Benutzer_ ihre Anwesenheit erfassen.
