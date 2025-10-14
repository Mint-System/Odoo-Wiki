---
title: Replenishment
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Replenishment

## Beispiel

An den Kunden _Fahrrad-Traum AG_ werden 10 Stk _Rahmen unbeschichtet_ verkauft.

Als Liefertermin wird das als _Expected_ vorgeschlagene Datum _Heute + 1 Tag_ gesetzt. (Das gründet auf der Definition _Auslieferungszeit_ = 1 Tag. Details zur Produktdefinition siehe [Definition Beispiel Fahrrad](Best%20Practice%20Definition%20Example%20Bicycle.md))

### Ablauf

Nach der Bestätigung des Auftrags erscheint der Vorschlag 8 Stk zu produzieren in der Liste von _Replenishment_.

![Best Practice Replenishment Übersicht Schritt 1](attachments/Best%20Practice%20Replenishment%20Übersicht%20Schritt%201.svg)

Der Auftrag wird mit _Order Once_ bestätigt und damit der _WH/MO/00001_ automatisch erstellt. Unmittelbar darauf erscheint die erweiterte Liste mit den folgenden neuen Vorschlägen.

![Best Practice Replenishment Übersicht Schritt 2](attachments/Best%20Practice%20Replenishment%20Übersicht%20Schritt%202.svg)

Mit dem Bestätigen des Auftrages _Kettenstrebe_ wird der Auftrag _WH/MO/00002_ erstellt, die zusätzliche Position _Rundrohr Typ 2_ erscheint und die Quantität des _Fettentferner A_ wird um 8 ml erhöht.

![Best Practice Replenishment Übersicht Schritt 2B](attachments/Best%20Practice%20Replenishment%20Übersicht%20Schritt%202B.svg)

Mit der Beauftragung des Steuerrohrs wird der Auftrag _WH/MO/00003_ erstellt und die Liste verändert sich bezüglich Quantitä des _Fettentferner A_.

![Best Practice Replenishment Übersicht Schritt 2C](attachments/Best%20Practice%20Replenishment%20Übersicht%20Schritt%202C.svg)

Sobald der Auftrag _Sitzrohr_ bestätigt wird (automatischer Auftrag _WH/MO/00004_) erscheint die zusätzliche Position für das Produkt _Rundrohr Typ 1_. Die Position _Fettentferner A_ wird bezüglich Quantität von 20 auf 31 ml erhöht:

![Best Practice Replenishment Übersicht Schritt 4](attachments/Best%20Practice%20Replenishment%20Übersicht%20Schritt%204.svg)

Mit der nächsten Bestätigung (automatischer Auftrag _WH/MO/00005_) werden die Quantitäten für die Positionen _Rundrohr Typ 2_ und _Fettentferner A_ erhöht und die Bestellvorschläge P00001 und P00002 erstellt. (P00001 hat zwei Positionen.)

![Best Practice Replenishment Übersicht Schritt 5](attachments/Best%20Practice%20Replenishment%20Übersicht%20Schritt%205.svg)

Anschliessend ist die Liste leer.

Die beiden Bestellvorschläge P00001 und P00002 werden nun bestätigt. Jetzt ist sämtliches Material bestellt.
