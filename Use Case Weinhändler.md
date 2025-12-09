---
title: Use Case Weinhändler
description: Automatische Bestandsbewertung für Weine.
kind: explain
prev: ./best-practice
---

# Use Case Weinhändler

Mit Odoo Lager und Buchhaltung können Sie die Bestandsbewertung automatisieren. Im folgenden ein Beispiel eines Weinhändler. 

## Einstellungen

In den Odoo-Einstellungen müssen mehrere Optionen aktiviert werden:

- [Lagerorte aktivieren](Stock.md#Lagerorte%20aktivieren)
- [Automatische Buchung für Bestandsbewertung aktivieren](Lager%20Bewertung.md#Automatische%20Buchung%20für%20Bestandsbewertung%20aktivieren)
- [Angelsächsische Buchhaltung aktivieren](Lager%20Bewertung.md#Angelsächsische%20Buchhaltung%20aktivieren)

## Produkt

Unser Weinhändler hat ein Produkt *Wein* und kauft dieses beim Lieferanten *Deco Addict* ein.

- **Verkaufspreis**: 100 CHF
- **Einkaufspreis**: 50 CHF

Auf der Produktkategorie *All* wurde Bestandsbewertung auf *Automatisch* festgelegt. Odoo macht die folgenden Kontenkonfiguration:

- **Bestandskonto**: 1001 Bargeld
- **Bestandsjournal**: Kundenrechnungen
- **Bestandseingangskonto**: 1208 Akonto auf Güter / Handelswaren (Handel)
- **Warenversand Konto**: 4200 Materialkosten (Handel)

## Einkauf

Der Weinhändler erstellt eine Bestellung *P00001* beim Lieferanten *Deco Addict*. Das Produkt wird mit dem Wareneingang *WH/IN/00001* geliefert und eingebucht. 

Odoo erstellt die folgende Journalbuchung:

| Konto                                         |   Soll |  Haben |
| --------------------------------------------- | ------:| ------:|
| 1208 Akonto auf Güter / Handelswaren (Handel) |        | 50 CHF |
| 1001 Bargeld                                  | 50 CHF |        |

Aus der Bestellung wird eine Rechnung generiert *BILL/2025/12/0001*:

| Konto                                                             |   Soll |  Haben |
| ----------------------------------------------------------------- | ------:| ------:|
| 1208 Akonto auf Güter / Handelswaren (Handel)                     | 50 CHF |        |
| 2000 Verbindlichkeiten aus Lieferungen und Leistungen (Gläubiger) |        | 50 CHF |

## Verkauf

Der Weinhändler erstellt ein Verkaufsauftrag *S00001* für den Kunden *Azure Interior* . Das Produkt wird mit dem Warenausgang *WH/OUT/00001* geliefert.

Odoo erstellt die folgende Journalbuchung:

| Konto                        |   Soll |  Haben |
| ---------------------------- | ------:| ------:|
| 1001 Bargeld                 |        | 50 CHF |
| 4200 Materialkosten (Handel) | 50 CHF |        |

Aus dem Verkaufsauftrag wird eine Rechnung generiert *INV/2025/00001*:

| Konto                                                       |    Soll |   Haben |
| ----------------------------------------------------------- | -------:| -------:|
| 3200 Warenverkauf (Handel)                                  |         | 100 CHF |
| 4200 Materialkosten (Handel)                                |         |  50 CHF |
| 4200 Materialkosten (Handel)                                |  50 CHF |         |
| 1100 Forderungen aus Lieferungen und Leistungen (Debitoren) | 100 CHF |         |

## Bilanz und Erfolgsrechnungen

Am Ende des Jahres sehen die betroffenen Bilanzkonten so aus:

| Konto                                                             |   Saldo |
| ----------------------------------------------------------------- | -------:|
| 1100 Forderungen aus Lieferungen und Leistungen (Debitoren)       | 100 CHF |
| 1208 Akonto auf Güter / Handelswaren (Handel)                     |   0 CHF |
| 2000 Verbindlichkeiten aus Lieferungen und Leistungen (Gläubiger) |  50 CHF |

In der Erfolgsrechnungen sehen wir diese relevanten Konten:

| Konto                        |   Saldo |
| ---------------------------- | -------:|
| 3200 Warenverkauf (Handel)   | 100 CHF |
| 4200 Materialkosten (Handel) | -50 CHF |
