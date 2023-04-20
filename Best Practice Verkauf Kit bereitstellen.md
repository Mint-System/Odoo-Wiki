---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Kit bereitstellen

## Allgemein

Ein *Kit* (oder *Bausatz*) ist ein Produkt das aus einer Stückliste mit verschiedenen Komponenten besteht aber ohne Fertigungsauftrag geliefert wird.
Zum Beispiel könnte ein Reparatur Kit namens *Bike Reparatur Set* mit den Komponenten *Schlauch*, *Kettensatz* und *Fettentferner* verkauft werden. Dieses Produkt entsteht zum Zeitpunkt der Lieferung indem die zugehörigen Komponenten aus dem Lager geholt und für den Versand bereitgestellt werden.
Die wesentlichen Aspekte sind:
- Das Kit ist von der Produktart *Verbrauchsartikel*
- Die zugeordnete Stückliste ist vom Typ *Bausatz* und hat keine Vorgänge
- Die Apps *Lager* und *Fertigung* müssen installiert sein

## Beispiel Produkt "Bike Reparatur Set"

![Best Practive Verkauf Kit bereitstellen Produkt Definition](assets/Best%20Practive%20Verkauf%20Kit%20bereitstellen%20Produkt%20Definition.png)

Die zugeordnete Stückliste sieht wie folgt aus:

![Best Practice Verkauf Kit bereitstellen Stückliste](assets/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Stückliste.png)

Über die Verkaufsbeschreibung kann der Inhalt des Kit erläutert werden:

![Best Practice Verkauf Kit bereitstellen Verkaufstext](assets/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Verkaufstext.png)

Die folgenden Abbildungen zeigen den Verkaufsauftrag, den Lieferschein und die Rechnung. (Verkauft und verrechnet wird das Produkt *Bike Reparatur Set*. Die Lagerbewegungen erfolgen aber für die Komponenten und werden auf dem Lieferschein sichtbar.)

![Best Practice Verkauf Kit bereitstellen Verkaufsauftrag](assets/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Verkaufsauftrag.png)

![Best Practice Verkauf Kit bereitstellen Lieferschein](assets/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Lieferschein.png)

![Best Practice Verkauf Kit bereitstellen Rechnung](assets/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Rechnung.png)