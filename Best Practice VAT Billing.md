---
title: VAT-Abrechnung
description: Wie Sie am einfachsten die VAT abrechnen.
tags:
- Best-Practice
prev: ./best-practice
---

# VAT-Abrechnung

Wenn Sie 

Damit Sie die Steuersätze der EU-Länder erhalten, müssen Sie die [Mehrwertsteuer für EU-Ausland aktivieren](Finance%20Tax.md#Mehrwertsteuer%20für%20EU-Ausland%20aktivieren). Zusätzlich werden damit [Steuerzurodnung](Finance%20Tax.md#Steuerzurodnung%20anzeigen) erstellt.

Damit die Leistungen im Ausland korrekt im Schweizer Steuerbericht angezeigt wird, muss der Steuertag `221` und das VAT-Abrechnungskonto auf den EU-Steuersätzen festgelegt werden. Dazu können Sie die [Steuersätze anpassen](Finance%20Tax.md#Steuersatz%20anpassen) anhand dieses Beispiel anpassen:

* **Verteilung für Rechnungen**:

|      % | Basiert auf | Konto                        | Steuerraster |
| ------:| ----------- | ---------------------------- | ------------ |
|        | Basis       |                              | +221         |
| 100.00 | der Steuer  | 2202 Geschuldete VAT Ausland |              |

* **Verteilung für Gutschriften**:

|      % | Basiert auf | Konto                        | Steuerraster |
| ------:| ----------- | ---------------------------- | ------------ |
|        | Basis       |                              | -221         |
| 100.00 | der Steuer  | 2202 Geschuldete VAT Ausland |              |


Wenn Sie den [Steuerbericht anzeigen](Finance%20Reports.md#Steuerbericht%20anzeigen), erhalten Sie alle Informationen zur Abrechnung mit der Eidgenösischen Steuerverwaltung.

Wenn Sie den [Steuerbericht nach Steuersatz anzeigen](Finance%20Reports.md#Steuerbericht%20nach%20Steuersatz%20anzeigen), erhalten Sie alle Informationen für die VAT-Deklaration.