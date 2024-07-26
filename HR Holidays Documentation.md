---
title: Abwesenheit Dokumentation
description: Mehr zur Funktionsweise der App Abwesenheit.
tags:
- HowTo
prev: ./hr-holidays
---
# Abwesenheit Dokumentation
![icons_odoo_hr_holidays](attachments/icons_odoo_hr_holidays.png)

{{ $frontmatter.description }}

## Funktional

### Anwesenheiten und Abwesenheiten kombinieren

Es wird angenommen, dass ein Mitarbeitende mit einem 80% Pensum 7h Stunden arbeitet und am selben Tag für 1h einen Arztbesuch hat. Der Arztbesuch soll als gearbeitete Zeit angerechnet werden. Dieses Szenario wird in Odoo wie folgt abgebildet.

[Arbeitszeit erstellen](HR.md#Arbeitszeit%20erstellen): Die Sollarbeitszeit 80% wird als Arbeitszeit festgehalten. Die *Durchschnittliche Stunden pro Tag* müssen 06:24 sein.

[Awesenheit manuell erfassen](HR%20Attendance.md#Awesenheit%20manuell%20erfassen): Die 7h gearbeitete Zeit wird als Anwesenheit, beispielsweise mit Start 26.07.2024 08:00:00 und Ende 26.07.2024 15:00:00, erfasst.

[Abwesenheitsart erfassen](HR%20Holidays.md#Abwesenheitsart%20erfassen): Die Abwesenheitsart Arztbesuch muss vom Typ *Gearbeitete Zeit* sein.

[Abwesenheit erstellen](HR%20Holidays.md#Abwesenheit%20erstellen): Der 1h Arztbesuch wird als Abwesenheit mit Stunden, beispielsweise von 16:00 bis 17:00, erfasst. 
