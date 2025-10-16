---
title: Verschiebung Liefertermin
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Verschiebung Liefertermin

## Beispiel (Liefertermin A)

Wir erstellen ein Angebot für 10 Stk _Kettenstrebe_ an den Kunden _Fahrrad-Traum AG_. Der Liefertermin wird auf _Heute + 6 Tage_ gesetzt und das Angebot bestätigt. Die Warnfarbe bei _Menge_ ist rot. Wir haben also nicht genügend Ware an Lager.

Der Aufruf von _Replenishment_ zeigt nun eine leere Liste. Das ergibt sich daraus, dass die definierte _Durchlaufzeit der Fertigung_ von 4 Tagen (siehe [Lead Times](Best%20Practice%20Definition%20Example%20Bicycle.md#Lead%20Times)) noch keinen Fertigungsauftrag verlangt.

Der Bericht _Prognostizierter Bestand_ zeigt, dass wir in 6 Tagen -10 Stk _Kettenstreben_ an Lager haben.

Jetzt verschieben wir den Liefertermin auf _Heute + 3 Tage_. Dafür wird der Verkaufsauftrag zuerst mit den entsprechenden Funktionen abgebrochen und wieder in den Status _Angebot_ gesetzt.

::: warning Angebot abbrechen
Damit die Reservationen richtig durchgeführt werden, muss der Verkaufsauftrag mit der Funktion _Abbrechen_ und _Setze Auf Angebot_ neu initialisiert werden.
:::

Jetzt erscheint nach dem Aufruf von _Replenish_ der Artikel in der Liste. Das System schlägt vor, 10 Stk des Produktes zu produzieren. Mit dem Knopf _Order Once_ wird automatisch der entsprechende Fertigungsauftrag erstellt.

## Variante Liefertermin B

Falls in der Meldestandsregel die _Preferred Route_ auf _Einkaufen_ eingestellt wird, erscheint im _Replenishment_ bereits mit dem Liefertermin _Heute + 6 Tage_ ein Eintrag in der Liste. Das System schlägt vor, 10 Stk des Artikels _Kettenstrebe_ zu bestellen.

![Best Practice Definition Beispiel Fahrrad Lead Times Grafik](attachments/Best%20Practice%20Definition%20Beispiel%20Fahrrad%20Lead%20Times%20Grafik.svg)

## Variante Liefertermin C

Falls in der Definition _Einkauf_ für das Produkte _Kettenstrebe_ der Lieferant _Metall und Profile GmbH_ zu oberst steht, dann würde im _Replenishment_ unmittelbar ein Bestellvorschlag erscheinen, wenn der Liefertermin auf _Heute + 7 Tage_ gesetzt wird.
