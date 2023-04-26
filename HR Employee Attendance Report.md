---
description: Stundenzettel mit Anwesenheit, Abwesenheiten und Überstunden.
tags:
- HowTo
- Drittanbieter
prev: ./abwesenheit
---
# HR Employee Attendance Report
![icon_oms_box](assets/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `hr_employee_attendance_report`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/15.0/hr_employee_attendance_report>

## Verwendung

### Bericht Anwesenheit letzter Monat drucken

Klicken Sie auf das Account-Menü und wählen Sie *Mein Profil*. Wählen Sie nun *Drucken > Bericht Anwesenheit*.

Sie erhalten eine Aufstellung der gearbeiteten Stunden und Berechnung der Überstunden:

![](assets/HR%20Employee%20Attendance%20Report%20Attendances.png)

Eine Zusammenfassung des Monats:

![](assets/HR%20Employee%20Attendance%20Report%20Summary.png)

Eine Übersicht der Abwesenheitsansprüche:

![](assets/HR%20Employee%20Attendance%20Report%20Allocations.png)

### Bericht Anwesenheit für ausgewählte Periode drucken

Klicken Sie auf das Account-Menü und wählen Sie *Mein Profil*. Wählen Sie nun *Drucken > Dialog Bericht Anwesenheit*. Wählen Sie ein Start- und Endatum ais und drucken Sie den Bericht mit *Drucken*.

::: tip
Die Aktion *Herunterladen* auf dem Dialog erlaubt das Herunterladen des Berichts, wenn die Erweiterung [Printnode Base](Printnode%20Base.md) installiert ist.
:::

### Bericht Anwesenheit für bestimmte Mitarbeitende drucken

Navigieren Sie nach *Personal* und wählen Sie die Listen-Ansicht. Markieren Sie die Mitarbeitnden für welche Sie den Bericht erstellen wollen und klicken Sie auf *Aktion > Bericht Anwesenheit*.