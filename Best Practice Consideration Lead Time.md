---
title: Berücksichtigung Lead Time
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Berücksichtigung Lead Time

## Beispiel 1

An den Kunden _Velomarkt Plus GmbH_ werden 30 Stk des Produktes _Sattel_ verkauft. Der Liefertermin ist _Heute + 30 Tage_.

Das Produkt _Sattel_ ist ein Fertigungsprodukt mit _Durchlaufzeit der Fertigung_ 6 Tage.
Aktueller Lagerbestand: 11 Stk

Stückliste:

- 1 Stk Sattelstütze (Einkaufprodukt, Lead Time 2 Tage)
- 1 Stk Sattelüberzug (Einkaufprodukt, Lead Time 7 Tage)
- 1 Stk Sattelschelle (Einkaufprodukt, Lead Time 3 Tage)

### Replenishment

Die Übersicht _Replenishment_ zeigt keinen Handlungsbedarf. Das System bestimmt den spätesten Zeitpunkt an dem die Fertigung gestartet werden muss. Das ist in diesem Fall in 30 - 6 Tagen.

Die Übersicht _Prognostizierter Bestand_ zeigt, dass der Lagerbestand des Produktes _Sattel_ in 30 Tagen von 11 auf -19 fällt.

![Best Practice lange Lead Time 1](attachments/Best%20Practice%20lange%20Lead%20Time%201.svg)

## Beispiel 2

Für das Produkt _Sattel_ wird die _Durchlaufzeit der Fertigung_ auf 30 Tage gesetzt.
Jetzt wird ein neuer Verkaufsauftrag von 30 Stk des Produktes _Sattel_ für den Kunden _Velomarkt Plus GmbH_ mit Liefertermin _Heute + 30 Tage_ erstellt und bestätigt.

Im _Replenishment_ erscheint der Vorschlag 19 Stk des Produktes _Sattel_ zu beauftragen.

Die Übersicht _Prognostizierter Bestand_ zeigt, dass der Lagerbestand des Produktes _Sattel_ in 30 Tagen von 11 auf -19 fällt.

Mit _Order Once_ wird der Fertigungsauftrag WH/MO/00001 generiert. Im _Replenishment_ erscheinen als Nächstes drei Bestellvorschläge für die Produkte _Sattelstütze_, _Sattelüberzug_ und _Sattelschelle_.

::: warning Lead Time der Komponenten beachten
Falls eine der Komponenten eine Lead Time > 30 Tage hat, kann der Liefertermin für das Produkt _Sattel_ nicht eingehalten werden. Um Planungssicherheit zu haben muss also die _Durchlaufzeit der Fertigung_ unter Berücksichtigung der Lead Time zur Beschaffung aller benötigten Komponenten definiert werden.
:::

![Best Practice lange Lead Time 2](attachments/Best%20Practice%20lange%20Lead%20Time%202.svg)
