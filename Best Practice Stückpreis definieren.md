---
tags:
- Best-Practice
prev: ./best-practice
---

## Best-Practice Stückpreis definieren
Für die Definition des Stückpreises stehen verschiedene Funktionen zur Verfügung

## Fall 1: Neue Lieferantenbeziehung
Falls mit einem Beschaffungsauftrag zum ersten Mal bei einem bestimmten Lieferanten eingekauft wird, dann wird diese Lieferantenbeziehung beim Produkt im Abschnitt *Einkauf* eingetragen. Der Preis wird aus dem Beschaffungsauftrag übernommen und *Menge* und *Tage bis Auslieferung* auf 0 gesetzt.

![Einkauf Bestellung Beispiel](assets/Einkauf Bestellung Beispiel.png)


![Einkauf Bestellung Lieferantenbeziehung](assets/Einkauf Bestellung Lieferantenbeziehung.png)

::: warning
Weitere Bestellungen des selben Produkts beim selben Lieferanten haben keinen Einfluss auf die Listeneinträge im Abschnitt *Einkauf*
:::

## Fall 2: Mehrere Lieferanten stehen zur Wahl
Falls für eine neue Angebotsanfrage das Feld *Lieferant* noch nicht ausgefüllt ist, wird der Stückpreis des ersten Lieferanten der Produktinformationen in die Einkaufsliste übertragen.

![Einkauf Bestellung Beispiel 2](assets/Einkauf Bestellung Beispiel 2.png)


![Einkauf Bestellung Lieferantenbeziehung 2](assets/Einkauf Bestellung Lieferantenbeziehung 2.png)

Falls für die Angebotsanfrage ein Lieferant vorgegeben wird, dann erscheint in der Einkaufsliste der Stückpreis dieses Lieferanten.

![Einkauf Bestellung Beispiel 3](assets/Einkauf Bestellung Beispiel 3.png)

## Fall 3: Preisstaffelung
Falls in den Produktionformationen eine Preisstaffelung in Abhängigkeit zu Lieferant und Menge abgebildet ist, wird in der Einkaufsliste der passende Preis eingetragen.


![Einkauf Preisstaffelung Beispiel](assets/Einkauf Preisstaffelung Beispiel.png)


Beispiel Einkauf bei Liererant *Klingel AG*

![Einkauf Bestellung Beispiel 4](assets/Einkauf Bestellung Beispiel 4.png)

Beispiel Einkauf bei Liererant *Steinmann GmbH*

![Einkauf Bestellung Beispiel 4](assets/Einkauf Bestellung Beispiel 4.png)