---
title: Struktur Lohnabrechnung
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Struktur Lohnabrechnung

## Lohnstrukturen

Lohnstrukturen sind eine Sammlung von Lohnarten. Grundsätzlich sollte man mindestens zwei Lohnstrukturen anlegen:

* Monatsabrechnung: Normale monatliche Lohnabrechnung
* Stundenabrechnung: Lohnabrechnung auf Stundenbasis

## Schweizer Lohnarten

Bis #Odoo16:

Sie können in Odoo mit der entsprechenden App die [Schweizer Lohnarten aktivieren](Gio%20Payroll%20Custom.md#Schweizer%20Lohnarten%20aktivieren). Damit erhalten Sie Zugriff auf vorgefertigte Lohnarten und können die Lohnabrechnung nach Schweizer Standard schneller in Betrieb nehmen.

Ab #odoo17:

Die Schweizer Lohnarten stehen als Lokalisierungs-Modul für die Personalabrechnung zur Verfügung.

## Einfache Lohnarten

Für ein kleines Unternehmen, braucht es keine komplexe Lohnabrechnung. Für jeden Mitarbeitenden kann eine Lohnstruktur mit den folgenden Lohnarten erfasst werden.

| Name                          | Code  | Kategorie          | Berechnungsart | Prozent basierend auf | Prozent (%) | Menge | Python Code                                                                       |
| ----------------------------- | ----- | ------------------ | -------------- | --------------------- | ----------- | ----- | --------------------------------------------------------------------------------- |
| Bruttolohn                    | BASIC | Basisstufe         | Python Code    |                       | 0           | 1.0   | `result = payslip.paid_amount + (inputs.BASIC13.amount if inputs.BASIC13 else 0)` |
| AHV/IV/EO-Beiträge            | AHVAN | Abzüge             | Prozent (%)    | BASIC                 | 5.275       | -1.0  |                                                                                   |
| AHV/IV/EO-Beiträg Arbeitgeber | AHVAG | Arbeitgeberanteile | Prozent (%)    | BASIC                 | 5.275       | -1.0  |                                                                                   |
| ALV-Beiträge                  | ALVAN | Abzüge             | Prozent (%)    | BASIC                 | 1.1         | -1.0  |                                                                                   |
| ALV-Beiträge Arbeitgeber      | ALVAG | Arbeitgeberanteile | Prozent (%)    | BASIC                 | 1.1         | -1.0  |                                                                                   |
| UVG/NBU-Beiträge              | UVGAN | Abzüge             | Prozent (%)    | BASIC                 | 1.057       | -1.0  |                                                                                   |
| UVG/NBU-Beiträge Arbeitgeber  | UVGAG | Arbeitgeberanteile | Prozent (%)    | BASIC                 | 1.057       | -1.0  |                                                                                   |
| PK/BVG-Beiträge               | BVGAN | Abzüge             | Fester Betrag  | BASIC                 | 2.04        | -1.0  |                                                                                   |
| PK/BVG-Beiträge Arbeitgeber   | BVGAG | Arbeitgeberanteile | Fester Betrag  |                       | 0           | -1.0  |                                                                                   |
| Kinderzulagen                 | KIZU  | Zuwendung          | Fester Betrag  |                       | 0           | 1.0   |                                                                                   |
| Nettolohn                     | NET   | Netto              | Python Code    |                       | 0           | 1.0   | `result = categories.BASIC + categories.ALW + categories.DED`                     |

## Lohnbuchhaltung

In der Tabelle unten sind die Lohnarten und die Finanzkonten für eine Schweizer Lohnbuchhaltung hinterlegt.

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
