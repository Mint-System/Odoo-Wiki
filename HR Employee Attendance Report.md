---
description: Stundenzettel mit Anwesenheit, Abwesenheiten und Überstunden.
forge: github.com
kind: howto
name: hr_employee_attendance_report
partner: Mint System
prev: ./hr-holidays
repo: Mint-System/Odoo-Apps-HR
title: HR Employee Attendance Report
versions:
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# HR Employee Attendance Report

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Bericht Anwesenheit letzter Monat drucken

Klicken Sie auf das Account-Menü und wählen Sie _Mein Profil_. Wählen Sie nun _Drucken > Bericht Anwesenheit_.

Sie erhalten eine Aufstellung der gearbeiteten Stunden und Berechnung der Überstunden:

![](attachments/HR%20Employee%20Attendance%20Report%20Attendances.png)

Eine Zusammenfassung des Monats:

![](attachments/HR%20Employee%20Attendance%20Report%20Summary.png)

Eine Übersicht der Urlaubsansprüche:

![](attachments/HR%20Employee%20Attendance%20Report%20Allocations.png)

### Bericht Anwesenheit für ausgewählte Periode drucken

Klicken Sie auf das Account-Menü und wählen Sie _Mein Profil_. Wählen Sie nun _Drucken > Dialog Bericht Anwesenheit_. Wählen Sie ein Start- und Enddatum ais und drucken Sie den Bericht mit _Drucken_.

::: tip
Die Aktion _Herunterladen_ auf dem Dialog erlaubt das Herunterladen des Berichts, wenn die Erweiterung [Printnode Base](Printnode%20Base.md) installiert ist.
:::

### Bericht Anwesenheiten für bestimmte Mitarbeitende drucken

Navigieren Sie nach _Personal_ und wählen Sie die Listen-Ansicht. Markieren Sie die Mitarbeitenden für welche Sie den Bericht erstellen wollen und klicken Sie auf _Aktionen > Bericht Anwesenheiten_.
