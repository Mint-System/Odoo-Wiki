---
tags:
- Best-Practice
prev: ./best-practice
---
# Best Practice: Berücksichtigung Lead Time

## Beispiel 1

An den Kunden *Velomarkt Plus GmbH* werden 30 Stk des Produktes *Sattel* verkauft. Der Liefertermin ist *Heute + 30 Tage*.

Das Produkt *Sattel* ist ein Fertigungsprodukt mit *Durchlaufzeit der Fertigung* 6 Tage.
Aktueller Lagerbestand: 11 Stk

Stückliste:
- 1 Stk Sattelstütze (Einkaufprodukt, Lead Time 2 Tage)
- 1 Stk Sattelüberzug (Einkaufprodukt, Lead Time 30 Tage)
- 1 Stk Sattelschelle (Einkaufprodukt, Lead Time 3 Tage)

### Replenishment

Die Übersicht *Replenishment* zeigt keinen Handlungsbedarf. Das System bestimmt den spätesten Zeitpunkt an dem die Fertigung gestartet werden muss. Das ist in diesem Fall in 30 - 6 Tagen.

Die Übersicht *Prognostizierter Bestand* zeigt, dass der Lagerbestand des Produktes *Sattel* in 30 Tagen von 11 auf -19 fällt.

![Best Practice lange Lead Time 1](assets/Best%20Practice%20lange%20Lead%20Time%201.svg)

## Beispiel 2

Für das Produkt *Sattel* wird die *Durchlaufzeit der Fertigung* auf 30 Tage gesetzt.
Jetzt wird ein neuer Verkaufsauftrag von 30 Stk des Produktes *Sattel* für den Kunden *Velomarkt Plus GmbH* mit Liefertermin *Heute + 30 Tage* erstellt und bestätigt.

Im *Replenishment* erscheint der Vorschlag 19 Stk des Produktes *Sattel* zu beauftragen.

Die Übersicht *Prognostizierter Bestand* zeigt, dass der Lagerbestand des Produktes *Sattel* in 30 Tagen von 11 auf -19 fällt.

Mit *Order Once* wird der Fertigungsauftrag WH/MO/00001 generiert. Im *Replenishment* erscheinen als Nächstes drei Bestellvorschläge für die Produkte *Sattelstütze*, *Sattelüberzug* und *Sattelschelle*.

::: warning Liefertermin kann nicht gehalten werden
Falls eine der Komponenten eine Lead Time > 30 Tage hat, kann der Liefertermin für das Produkt *Sattel* nicht eingehalten werden. Um Planungssicherheit zu haben muss also die *Durchlaufzeit der Fertigung* unter Berücksichtigung der Lead Time zur Beschaffung aller darunterliegenden Komponenten definiert werden.
:::

![Best Practice lange Lead Time 2](assets/Best%20Practice%20lange%20Lead%20Time%202.svg)