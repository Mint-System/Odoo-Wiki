---
tags:
- Best-Practice
---
[🔗 Best Practice](Best%20Practice.md)
# Best Practice: Replenishment

## Beispiel

An den Kunden *Fahrrad-Traum AG* werden 10 Stk *Rahmen unbeschichtet* verkauft.

Als Liefertermin wird das als *Expected* vorgeschlagene Datum *Heute + 1 Tag* gesetzt. (Das gründet auf der Definition *Auslieferungszeit* = 1 Tag. Details zur Produktdefinition siehe [Definition Beispiel Fahrrad](Best%20Practice%20Definition%20Beispiel%20Fahrrad.md))

### Ablauf

Nach der Bestätigung des Auftrags erscheint der Vorschlag 8 Stk zu produzieren in der Liste von *Replenishment*.

![Best Practice Replenishment Übersicht Schritt 1](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%201.svg)

Der Auftrag wird mit *Order Once* bestätigt und damit der *WH/MO/00001* automatisch erstellt. Unmittelbar darauf erscheint die erweiterte Liste mit den folgenden neuen Vorschlägen.

![Best Practice Replenishment Übersicht Schritt 2](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%202.svg)

Mit dem Bestätigen des Auftrages *Kettenstrebe* wird der Auftrag *WH/MO/00002* erstellt, die  zusätzliche Position *Rundrohr Typ 2* erscheint und die Quantität des *Fettentferner A* wird um 8 ml erhöht.

![Best Practice Replenishment Übersicht Schritt 2B](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%202B.svg)

Mit der Beauftragung des Steuerrohrs wird der Auftrag *WH/MO/00003* erstellt und die Liste verändert sich bezüglich Quantitä des *Fettentferner A*.

![Best Practice Replenishment Übersicht Schritt 2C](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%202C.svg)

Sobald der Auftrag *Sitzrohr* bestätigt wird (automatischer Auftrag *WH/MO/00004*) erscheint die zusätzliche Position für das Produkt *Rundrohr Typ 1*. Die Position *Fettentferner A* wird bezüglich Quantität von 20 auf 31 ml erhöht:

![Best Practice Replenishment Übersicht Schritt 4](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%204.svg)

Mit der nächsten Bestätigung (automatischer Auftrag *WH/MO/00005*) werden die Quantitäten für die Positionen *Rundrohr Typ 2* und *Fettentferner A* erhöht und die Bestellvorschläge P00001 und P00002 erstellt. (P00001 hat zwei Positionen.)

![Best Practice Replenishment Übersicht Schritt 5](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%205.svg)

Anschliessend ist die Liste leer.

Die beiden Bestellvorschläge P00001 und P00002 werden nun bestätigt. Jetzt ist sämtliches Material bestellt.