---
title: Definition Stückpreis
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---

# Definition Stückpreis

Für die Definition des Stückpreises stehen verschiedene Funktionen zur Verfügung

## Fall 1: Neue Lieferantenbeziehung

Falls mit einem Beschaffungsauftrag zum ersten Mal bei einem bestimmten Lieferanten eingekauft wird, dann wird diese Lieferantenbeziehung beim Produkt im Abschnitt *Einkauf* eingetragen. Der Preis wird aus dem Beschaffungsauftrag übernommen und *Menge* und *Tage bis Auslieferung* auf 0 gesetzt.


![Einkauf Bestellung Beispiel](attachments/Einkauf%20Bestellung%20Beispiel.png)

![Einkauf Bestellung Lieferantenbeziehung](attachments/Einkauf%20Bestellung%20Lieferantenbeziehung.png)

::: warning
Weitere Bestellungen des selben Produkts beim selben Lieferanten haben keinen Einfluss auf die Listeneinträge im Abschnitt *Einkauf*
:::

## Fall 2: Mehrere Lieferanten stehen zur Wahl

Falls für eine neue Angebotsanfrage das Feld *Lieferant* noch nicht ausgefüllt ist, wird der Stückpreis des ersten Lieferanten der Produktinformationen in die Einkaufsliste übertragen.

![Einkauf Bestellung Beispiel 2](attachments/Einkauf%20Bestellung%20Beispiel%202.png)

![Einkauf Bestellung Lieferantenbeziehung 2](attachments/Einkauf%20Bestellung%20Lieferantenbeziehung%202.png)

Falls für die Angebotsanfrage ein Lieferant vorgegeben wird, dann erscheint in der Einkaufsliste der Stückpreis dieses Lieferanten.

![Einkauf Bestellung Beispiel 3](attachments/Einkauf%20Bestellung%20Beispiel%203.png)

## Fall 3: Preisstaffelung

Falls in den Produktionformationen eine Preisstaffelung in Abhängigkeit zu Lieferant und Menge abgebildet ist, wird in der Einkaufsliste der passende Preis eingetragen.

![Einkauf Preisstaffelung Beispiel](attachments/Einkauf%20Preisstaffelung%20Beispiel.png)

Beispiel Einkauf bei Liererant *Klingel AG*

![Einkauf Bestellung Beispiel 4](attachments/Einkauf%20Bestellung%20Beispiel%204.png)20Beispiel%204.png)]

Beispiel Einkauf bei Liererant *Steinmann GmbH*

![Einkauf Bestellung Beispiel 5](attachments/Einkauf%20Bestellung%20Beispiel%205.png)