---
title: Verrechnung Spesen
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Verrechnung Spesen

Die Mitarbeitenden ihres Unternehmen können mit Odoo [Spesen erfassen](HR%20Expense.md#Spesen%20erfassen) und abrechnen lassen. Wenn Mitarbeitende auf Projekten arbeiten und dort ihre Aufwände erfassen, stellt sich die Frage wie angefallene Spesen weiter verrechnet werden können.

### Spesen mit Aussendienst verrechnen

Wenn Sie die App [Aussendienst](FSM%20Industry.md) aktiviert haben, können Sie Spesen direkt auf der Projektaufgabe erfassen.

Die Spesenprodukte müssen als Verbrauchsartikel erfasst werden.

![](attachments/Best%20Practice%20Spesen%20verrechnen%20Aussendienst.png)

Abhängig davon wie Sie die [Fakturierungsregel](Invoicing.md#Fakturierungsregel%20festlegen) der Auslagenprodukte festlegen, wird eine Lieferung zur Erledigung erstellt.

![](attachments/Best%20Practice%20Spesen%20verrechnen%20Lieferung.png)

Ansonsten werden die Auslagenprodukte dem Verkaufsauftrag hinzugefügt und können verrechnet werden.

![](attachments/Best%20Practice%20Spesen%20verrechnen%20Auftrag%20mit%20Menge.png)

Vorteile:
* Einfache Erfassung der Auslagenprodukte

Nachteil:
* Validierung der Spesen nur mit Lieferung möglich
* Verkaufsauftrag wird verändert

### Spesen mit Zeiterfassung erfassen

Damit Mitarbeitende die Spesen auf einem Projekt erfassen können, müssen die Auslagenprodukte auf dem Verkaufsvertrag hinzufgefügt werden.

Dazu ein Beispiel eines Dienstleistungsprojekt:

![](attachments/Best%20Practice%20Spesen%20verrechnen%20Auftragszeilen.png)

Die einzelnen Auslagenprodukte müssen als *Dienstleistung* konfiguriert sein.

In der Zeiterfassung gilt es die entsprechende Auftragsposition auszuwählen.

![](attachments/Best%20Practice%20Spesen%20verrechnen%20Zeiterfassung.png)

Die Abrechnung erfolgt wie alle Dienstleistungen.

![](attachments/Best%20Practice%20Spesen%20verrechnen%20Rechnung.png)

Vorteile:
* Wie alle Zeitnachweise, können auch die Spesen validiert werden
* Mitarbeiter erfassen die Zeit und Spesen auf die gleiche Art

Nachteil:
* Die gesamte Stundenzahl auf einer Aufgabe oder einem Auftrag wird verfälscht
