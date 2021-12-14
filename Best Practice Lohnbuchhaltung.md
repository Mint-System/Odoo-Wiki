---
tags:
- Best-Practice
---
[🔗 Best Practice](Best%20Practice.md)
# Best Practice: Lohnbuchhaltung

## Lohnstrukturen

Lohnstrukturen sind eine Sammlung von Lohnarten. Grundsätzlich sollte man mindestens zwei Lohnstrukturen anlegen:

* Lohnabrechnung: Normale monatliche Lohnabrechnung
* 13. Monatslohn: 13er Monatslohn

## Lohnarten

In der Tabelle unten sind die Lohnarten und die Finanzkonten für eine Buchhaltung hinterlegt.

| Kategorie                  | Name                                  | Sollkonto                          | Habenkonto                              |
| -------------------------- | ------------------------------------- | ---------------------------------- | --------------------------------------- |
| Basisstufe                 | Vertragslohn                          | 5000 - Löhne                       | 1091 - Lohndurchlaufkonto               |
| Zuwendung                  | Anteil 13. Monatslohn                 | 5000 - Löhne                       | 1091 - Lohndurchlaufkonto               |
| Zuwendung                  | Bonus                                 | 5000 - Löhne                       | 1091 - Lohndurchlaufkonto               |
| Zuwendung                  | Ferienentschädigung                   | 5000 - Löhne                       | 1091 - Lohndurchlaufkonto               |
| Zuwendung                  | Feiertagszuschlag                     | 5000 - Löhne                       | 1091 - Lohndurchlaufkonto               |
| Freie Zuwendung            | KiZu - Grundschule bis Sekundarschule | 2176 - KK Kinderzulagen            | 1091 - Lohndurchlaufkonto               |
| Freie Zuwendung            | AuZu - Studium                        | 2176 - KK Kinderzulagen            | 1091 - Lohndurchlaufkonto               |
| Privatanteil Geschäftsauto | Privatanteil Geschäftsfahrzeug        | 5000 - Löhne                       | 1091 - Lohndurchlaufkonto               |
| Zuwendung                  | Reisespesen                           | 5820 - Reisespesen                 | 1091 - Lohndurchlaufkonto               |
| Brutto                     | Bruttolohn                            | KEINE BUCHUNG                      | KEINE BUCHUNG                           |
| Abzüge                     | AHV/IV/EO                             | 1091 - Lohndurchlaufkonto          | 5700 - AHV, IV, EO, ALV, FAK            |
| Arbeitgeberanteile         | AHV/IV/EO AN und AG                   | 5700 - AHV, IV, EO, ALV, FAK       | 2170 - Verb. ggn. Vorsorgeeinrichtungen |
| Abzüge                     | ALV                                   | 1091 - Lohndurchlaufkonto          | 5700 - AHV, IV, EO, ALV, FAK            |
| Arbeitgeberanteile         | ALV AN und AG                         | 5700 - AHV, IV, EO, ALV, FAK       | 2170 - Verb. ggn. Vorsorgeeinrichtungen |
| Abzüge                     | ALV 2                                 | 1091 - Lohndurchlaufkonto          | 5700 - AHV, IV, EO, ALV, FAK            |
| Arbeitgeberanteile         | ALV 2 AN und AG                       | 5700 - AHV, IV, EO, ALV, FAK       | 2170 - Verb. ggn. Vorsorgeeinrichtungen |
| Abzüge                     | BVG AN                                | 1091 - Lohndurchlaufkonto          | 5720 - Vorsorgeeinrichtungen            |
| Arbeitgeberanteile         | BVG AG                                | 5720 - Vorsorgeeinrichtungen       | 2172 - Verbindlichkeiten BVG            |
| Abzüge                     | NBU                                   | 1091 - Lohndurchlaufkonto          | 2173 - Verbindlichkeiten BU             |
| Arbeitgeberanteile         | BU                                    | 5730 - Unfallversicherung          | 2173 - Verbindlichkeiten BU             |
| Abzüge                     | UVG Zuschlag                          | 1091 - Lohndurchlaufkonto          | 5730 - Unfallversicherung               |
| Arbeitgeberanteile         | UVG Zuschlag AN und AG                | 5730 - Unfallversicherung          | 2174 - Verbindlichkeiten UVGZ           |
| Abzüge                     | UVG Zuschlag 2                        | 1091 - Lohndurchlaufkonto          | 5730 - Unfallversicherung               |
| Arbeitgeberanteile         | UVG Zuschlag 2 AN und AG              | 5730 - Unfallversicherung          | 2174 - Verbindlichkeiten UVGZ           |
| Abzüge                     | KTG w                                 | 1091 - Lohndurchlaufkonto          | 5740 - Krankentagegeldversicherung      |
| Arbeitgeberanteile         | KTG w AN und AG                       | 5740 - Krankentagegeldversicherung | 2175 - Verbindlichkeiten KTG            |
| Abzüge                     | KTG m                                 | 1091 - Lohndurchlaufkonto          | 5740 - Krankentagegeldversicherung      |
| Arbeitgeberanteile         | KTG m AN und AG                       | 5740 - Krankentagegeldversicherung | 2175 - Verbindlichkeiten KTG            |
| Abzüge                     | Abzug Privatanteil Geschäftsfahrzeug  | 1091 - Lohndurchlaufkonto          | 6270 - Privatanteil Fahrzeugaufwand     |
| Abzüge                     | Quellensteuer                         | 1091 - Lohndurchlaufkonto          | 2179 - Verbindlichkeiten Quellensteuer  |
| Abzüge                     | Grenzgängersteuer                     | 1091 - Lohndurchlaufkonto          | 2179 - Verbindlichkeiten Quellensteuer  |
| Zuwendung                  | Vorschuss                             | KEINE BUCHUNG                      | KEINE BUCHUNG                           |
| Freie Zuwendung            | Repräsentationskosten                 | 5820 - Reisespesen                 | 1091 - Lohndurchlaufkonto               |
| Abzüge                     | Betreibungsamt                        | KEINE BUCHUNG                      | KEINE BUCHUNG                           |
| Netto                      | Nettolohn                             | 1021 Ausstehende Zahlungen         | 1091 - Lohndurchlaufkonto               |
| Arbeitgeberanteile         | Familienausgleichskasse               | 5700 - AHV, IV, EO, ALV, FAK       | 2170 - Verb. ggn. Vorsorgeeinrichtungen |
| Reiner Arbeitgeberanteil   | Verwaltungskosten                     | 5700 - AHV, IV, EO, ALV, FAK       | 2170 - Verb. ggn. Vorsorgeeinrichtungen |
