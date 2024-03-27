---
title: Eröffnung Buchhaltung
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Eröffnung Buchhaltung

In diesem Artikel wird anhand eines einfachen Beispiels erläutert wie man eine laufende Buchhaltung in Odoo eröffnet.

## Schlussbilanz

Per Ende der Buchhaltungsperiode, standardmässig der 31.12, muss eine Schlussbilanz in Odoo erstellt werden.

* **Referenz**: Schlussbilanz YYYY
* **Buchungsdatum**: 31.12.YYYY
* **Journal**: Sonstiges

| Konto                               | Buchungstext          |      Soll |     Haben |
| ----------------------------------- | --------------------- | ---------:| ---------:|
| 1024 Bank                           | Eröffnung             | 236250.00 |           |
| 1029 Festgelder                     | Eröffnung             | 400000.00 |           |
| 2000 Verbindlichkeiten              | Eröffnung             |           |     30000 |
| 2800 Grundkapital                   | Eröffnung             |           | 450000.00 |
| 2900 Gesetzliche Reserven           | Eröffnung             |           |  16250.00 |
| 999999 Unverteilte Gewinne/Verluste | Gewinnvortrag Vorjahr |           |   5000.00 |
| 999999 Unverteilte Gewinne/Verluste | Jahresgewinn Vorjahr  |           |  85000.00 |
| 999999 Unverteilte Gewinne/Verluste | Offene Debitoren      |           |  50000.00 |
|                                     |                       | 636250.00 | 636250.00 |
<!-- TBLFM: @>$3=sum(@I..@-1);%.2f -->
<!-- TBLFM: @>$4=sum(@I..@-1);%.2f -->

## Offene Debitoren

Die offenen Debitoren werden zur Abstimmung als einzelne Buchungszeilen angelegt.

* **Referenz**: Offene Debitoren
* **Buchungsdatum**: 31.12.YYYY
* **Journal**: Sonstiges

| Konto                               | Buchungstext          |     Soll |    Haben |
| ----------------------------------- | --------------------- | --------:| --------:|
| 1100 Forderungen                    | 32640                 | 10000.00 |          |
| 1100 Forderungen                    | 32693                 | 30000.00 |          |
| 1100 Forderungen                    | 32728                 |  7000.00 |          |
| 1100 Forderungen                    | 32582                 |  3000.00 |          |
| 999999 Unverteilte Gewinne/Verluste | Gewinnvortrag Vorjahr |          | 50000.00 |
|                                     |                       | 50000.00 | 50000.00 |
<!-- TBLFM: @>$3=sum(@I..@-1);%.2f -->
<!-- TBLFM: @>$4=sum(@I..@-1);%.2f -->

## Zuweisung gesetzliche Reserven

Im neuen Jahr werden aus den unverteilten Gewinne/Verluste die gesetzlichen Reserven zugeordnet.

* **Referenz**: Zuweisung gesetzliche Reserven
* **Buchungsdatum**: 01.01.YYYY
* **Journal**: Sonstiges

| Konto                                       |    Soll |   Haben |
| ------------------------------------------- | -------:| -------:|
| 2950 Gesetzliche Gewinnrücklagen (Reserven) |         | 4300.00 |
| 999999 Unverteilte Gewinne/Verluste         | 4300.00 |         |
|                                             | 4300.00 | 4300.00 |
<!-- TBLFM: @>$2=sum(@I..@-1);%.2f -->
<!-- TBLFM: @>$3=sum(@I..@-1);%.2f -->
