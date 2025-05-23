---
title: Buchung Gewinn-/Verlustvortrag
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---
# Buchung Gewinn-/Verlustvortrag

In diesem Artikel wird anhand eines einfachen Beispiels erläutert wie man den Gewinn-/Verlustvortrag mit #Odoo15 verbucht.

## Bilanz altes Jahr

Es wird angenommen das Unternehmen hat im Jahr 2022 mit einem Eigenkapital von 20'000 CHF gestartet ist und einen Gewinn von 15'000.00 CHF gemacht hat. Dazu die Buchungen: 

* **Referenz**: Gründung
* **Buchungsdatum**: 01.01.2022
* **Journal**: Sonstige Operationen

| Konto             |       Soll |      Haben |
| ----------------- | ----------:| ----------:|
| 2800 Grundkapital |            | 20'000 CHF |
| 1024 Bank         | 20'000 CHF |            |


* **Referenz**: Lohnzahlung
* **Buchungsdatum**: 01.07.2022
* **Journal**: Sonstige Operationen

| Konto                   |       Soll |      Haben |
| ----------------------- | ----------:| ----------:|
| 5000 Löhne und Gehälter | 15'000 CHF |            |
| 1024 Bank               |            | 15'000 CHF |

Am Ende des Jahres sieht die Bilanz wie folgt aus:

![](attachments/Best%20Practice%20Bilanz1.png)

Der Jahresverlust wird aus der Erfolgsrechnung übertragen.

## Bilanz aktuelles Jahr

Am Ende des Jahres, muss der Gewinn-/Verlust verbucht werden. Dies geschieht mit einem Konto, das ausserhalb der Bilanz ist:

* **Code**: >= 9000 (Erscheint nicht in der Bilanz)
* **Kontentyp**: Jahresüberschuss/Jahresfehlbetrag

Dazu die Buchungen:

* **Referenz**: Verlust
* **Buchungsdatum**: 31.12.2022
* **Journal**: Sonstige Operationen

| Konto                                |       Soll |      Haben |
| ------------------------------------ | ----------:| ----------:|
| 999999 Unverteilte Gewinne/Verluste  |            | 15'000 CHF |
| 2979 Jahresgewinn oder Jahresverlust | 15'000 CHF |            |

Im neuen Jahr wir der Gewinn/Verlust als Vortrag verbucht.

* **Referenz**: Vortrag
* **Buchungsdatum**: 01.01.2023
* **Journal**: Sonstige Operationen

| Konto                                |       Soll |      Haben |     |
| ------------------------------------ | ----------:| ----------:| --- |
| 2979 Jahresgewinn oder Jahresverlust |            | 15'000 CHF |     |
| 2970 Gewinnvortrag / Verlustvortrag  | 15'000 CHF |            |     |

Der Jahresverlust ist auf 0.00 CHF und das Eigenkapital angepasst.

![](attachments/Best%20Practice%20Bilanz2.png)

## Bilanz aktuelles Jahr mit Aufwänden

Verbuchen Sie im neuen Jahr wieder Aufwände:

* **Referenz**: Lohnzahlung
* **Buchungsdatum**: 01.02.2023
* **Journal**: Sonstige Operationen

| Konto                   |      Soll |     Haben |
| ----------------------- | ---------:| ---------:|
| 5000 Löhne und Gehälter | 5'000 CHF |           |
| 1024 Bank               |           | 5'000 CHF |

Werden diese wieder als Jahresgewinn oder Jahresverlust aufgeführt.

![](attachments/Best%20Practice%20Bilanz3.png)