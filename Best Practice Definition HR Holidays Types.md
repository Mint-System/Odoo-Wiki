---
title: Definition Abwesenheitsarten
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Definition Abwesenheitsarten

## Urlaub als Abwesenheitsypen abbilden

Wir empfehlen, dass Sie für jedes jährliche Urlaubssaldo einen [Abwesenheitsart erfassen](HR%20Holidays.md#Abwesenheitsarten%20erfassen).

| Name        | Von        | Bis        |
| ----------- | ---------- | ---------- |
| Ferien 2021 | 01.01.2021 | 31.12.2021 |
| Ferien 2022 | 01.01.2022 | 31.12.2022 |
| Ferien 2023 | 01.01.2023 | 31.12.2023 |
| Ferien 2024 | 01.01.2024 | 31.12.2024 |

Am Ende des Jahres können Sie die [verbleibenden Urlaubsansprüche anzeigen](HR%20Holidays%20Remaining%20Leaves.md#Verbleibende%20Urlaubsansprüche%20anzeigen)
und die [Urlaubsansprüche exportieren](HR%20Holidays%20Data%20Management.md#Urlaubsansprüche%20exportieren). Passen Sie die exportierte Datei an und importieren Sie diese Urlaubsansprüche für das neue Jahr.

## Vorlage für Abwesenheitsarten

Damit Mitarbeitende ihre Abwesenheiten sauber erfassen können, empfehlen wir diese Typen als Standard:

| Name                   | Genehmigung Abwesenheit     | Genehmigung Anspruch |
| ---------------------- | --------------------------- | --------------------- |
| Ausgleichstage         | Genehmiger des Mitarbeiters | Abwesenheitsmanager   |
| Berufschule            | Genehmiger des Mitarbeiters | Keine                 |
| Bezahlte Absenz        | Genehmiger des Mitarbeiters | Keine                 |
| Ferien 20XX            | Genehmiger des Mitarbeiters | Abwesenheitsmanager   |
| Home Office            | Genehmiger des Mitarbeiters | Keine                 |
| Kompensation / Gleiten | Keine                       | Keine                 |
| Krankheit              | Genehmiger des Mitarbeiters | Keine                 |
| Kundentermin           | Genehmiger des Mitarbeiters | Keine                 |
| Messe                  | Genehmiger des Mitarbeiters | Keine                 |
| Militär / Zivilschutz  | Genehmiger des Mitarbeiters | Keine                 |
| Mutterschutz           | Genehmiger des Mitarbeiters | Keine                 |
| Unbezahlter Urlaub     | Genehmiger des Mitarbeiters | Keine                 |
| Unfall                 | Genehmiger des Mitarbeiters | Keine                 |
| Vaterschaft            | Genehmiger des Mitarbeiters | Keine                 |
| Weiterbildung          | Genehmiger des Mitarbeiters | Keine                 |
| Überstundensaldo       | Keine                       | Abwesenheitsmanager   |

## Feiertagssaldo

Wenn Sie für Mitarbeitende unterschiedliche [Arbeitszeiten festlegen](HR.md#Arbeitszeiten%20festlegen) wird die Situation bezl. Ferien- und Feiertage etwas schwieriger. 
Wir empfehlen einerseits einen Feiertagskalender zu führen (siehe [Feiertage einrichten](HR%20Holidays%20Public.md#Feiertage%20einrichten)) und andererseits einen Abwesenheitsart *Feiertage 20XX* für jedes Jahr bereitzustellen. Damit können Feiertage als Urlaubsansprüche geltend gemacht werden. 











