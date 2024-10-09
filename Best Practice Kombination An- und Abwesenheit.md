---
title: Kombination An- und Abwesenheit
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---

# Kombination An- und Abwesenheit

Hier werden verschiedene Szenarion erläutert, die zeigen wie Odoo die An- und Abwesenheit kombiniert.

Es wird angenommen, dass ein Mitarbeitende mit einem 80% Pensum 7h Stunden arbeitet und am selben Tag für 1h einen Arztbesuch hat. Der Arztbesuch soll als gearbeitete Zeit angerechnet werden. 

## Abwesenheit als Anwesenheit

In diesem Szenario wird die Abwesenheit deckungsgleich mit einer Anwesenheit erfasst.

[Arbeitszeit erstellen](HR.md#Arbeitszeit%20erstellen): Die Sollarbeitszeit 80% wird als Arbeitszeit festgehalten. Die *Durchschnittliche Stunden pro Tag* müssen 06:24 sein.

| Tageszeitraum | Arbeitszeit von | Arbeitszeit bis |
| ------------- | --------------- | --------------- |
| Vormittag     | 08:00           | 11:12           |
| Nachmittag    | 13:00           | 16:12           |

[Anwesenheit manuell erfassen](HR%20Attendance.md#Anwesenheit%20manuell%20erfassen): Anstatt 7h gearbeitete Zeit wird 8h als Anwesenheit erfasst. Diese Einträge können auch aufgeteilt werden, beispielsweise  Start 08:00 / Ende 15:00 und Start 16:00 / Ende 17:00.

[Abwesenheit erstellen](HR%20Holidays.md#Abwesenheit%20erstellen): Der 1h Arztbesuch wird als Abwesenheit mit Einheit Stunden, beispielsweise von 16:00 bis 17:00, erfasst. 

Odoo nimmt keine speziellen Berechnungen für dieses Szenario vor. Die erfasste Abwesenheit hat keine Auswirkung auf die Berechnung der Überstunden.

## Abwesenheit ohne Anwesenheit

In diesem Szenario überschneidet sich die Abwesenheit mit der Arbeitszeit.

[Arbeitszeit erstellen](HR.md#Arbeitszeit%20erstellen): Die Sollarbeitszeit 80% wird als Arbeitszeit festgehalten. Die *Durchschnittliche Stunden pro Tag* müssen 06:24 sein.

| Tageszeitraum | Arbeitszeit von | Arbeitszeit bis |
| ------------- | --------------- | --------------- |
| Vormittag     | 08:00           | 11:12           |
| Nachmittag    | 13:00           | 16:12           |

[Anwesenheit manuell erfassen](HR%20Attendance.md#Anwesenheit%20manuell%20erfassen): Die gearbeiteten stunden werden als Anwesenheitseintrag, beispielsweise Start 08:00 / Ende 15:00, erfasst.

[Abwesenheit erstellen](HR%20Holidays.md#Abwesenheit%20erstellen): Der 1h Arztbesuch wird als Abwesenheit mit Einheit Stunden, beispielsweise von 16:00 bis 17:00, erfasst. 

Odoo berechnet 00:48 Überstunden. Diese berechnet sich aus der gearbeiteten Zeit 07:00 - 06:25 = 00:36 und der Differenz der Startzeit der Abwesenheit und Bis-Arbeitszeit 16:12 - 16:00 = 00:12.