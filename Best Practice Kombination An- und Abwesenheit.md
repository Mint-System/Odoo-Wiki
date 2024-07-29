---
title: Ferien- und Überstundensaldo
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---

## Anwesenheiten mit Abwesenheit erfassen

Es wird angenommen, dass ein Mitarbeitende mit einem 80% Pensum 7h Stunden arbeitet und am selben Tag für 1h einen Arztbesuch hat. Der Arztbesuch soll als gearbeitete Zeit angerechnet werden. Dieses Szenario wird in Odoo wie folgt abgebildet.

[Arbeitszeit erstellen](HR.md#Arbeitszeit%20erstellen): Die Sollarbeitszeit 80% wird als Arbeitszeit festgehalten. Die *Durchschnittliche Stunden pro Tag* müssen 06:24 sein.

[Anwesenheit manuell erfassen](HR%20Attendance.md#Anwesenheit%20manuell%20erfassen): Anstatt 7h gearbeitete Zeit wird 8h als Anwesenheit erfasst. Diese Eintäge können auch aufgeteilt werden, beispielsweise  Start 08:00 / Ende 15:00 und tart 16:00 / Ende 17:00.

[Abwesenheit erstellen](HR%20Holidays.md#Abwesenheit%20erstellen): Der 1h Arztbesuch wird als Abwesenheit mit Einheit Stunden, beispielsweise von 16:00 bis 17:00, erfasst. 

Odoo nimmt keine speziellen Berechnungen für dieses Szenario vor. Die erfasste Abwesenheit hat  keine Auswirkung auf die Berechnung der Überstunden.
