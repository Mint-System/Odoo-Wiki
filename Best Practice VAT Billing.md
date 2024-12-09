---
title: VAT-Abrechnung
description: Wie Sie am einfachsten die VAT abrechnen.
tags:
- Best-Practice
prev: ./best-practice
---

# VAT-Abrechnung

Damit Sie die Steuersätze der EU-Länder erhalten, müssen Sie die [Mehrwertsteuer für EU-Ausland aktivieren](Accounting%20Tax.md#Mehrwertsteuer%20für%20EU-Ausland%20aktivieren). Zusätzlich werden damit [Steuerzurodnung](Accounting%20Tax.md#Steuerzurodnung%20anzeigen) erstellt.

Damit die Leistungen im Ausland korrekt im Schweizer Steuerbericht angezeigt wird, muss der Steuertag `221` und das VAT-Abrechnungskonto auf den EU-Steuersätzen festgelegt werden. Dazu können Sie die [Steuersätze anpassen](Accounting%20Tax.md#Steuersatz%20anpassen) anhand dieses Beispiel anpassen:

* **Verteilung für Rechnungen**:

|      % | Basiert auf | Konto                        | Steuerraster |
| ------:| ----------- | ---------------------------- | ------------ |
|        | Basis       |                              | +OSSa, +221         |
| 100.00 | der Steuer  | 2202 Geschuldete VAT Ausland | +OSSb             |

* **Verteilung für Gutschriften**:

|      % | Basiert auf | Konto                        | Steuerraster |
| ------:| ----------- | ---------------------------- | ------------ |
|        | Basis       |                              | -OSSa, -221   |
| 100.00 | der Steuer  | 2202 Geschuldete VAT Ausland | -OSSb         |


Wenn Sie den [Steuerbericht anzeigen](Accounting%20Reports.md#Steuerbericht%20anzeigen), erhalten Sie alle Informationen zur Abrechnung mit der Eidgenössischen Steuerverwaltung.

Wenn Sie den [Steuerbericht nach Steuersatz anzeigen](Accounting%20Reports.md#Steuerbericht%20nach%20Steuersatz%20anzeigen), erhalten Sie alle Informationen für die VAT-Deklaration.