---
title: Kit Bereitstellung
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Kit Bereitstellung

## Allgemein

Ein _Kit_ (oder _Bausatz_) ist ein Produkt das aus einer Stückliste mit verschiedenen Komponenten besteht aber ohne Fertigungsauftrag geliefert wird.
Zum Beispiel könnte ein Reparatur Kit namens _Bike Reparatur Set_ mit den Komponenten _Schlauch_, _Kettensatz_ und _Fettentferner_ verkauft werden. Dieses Produkt entsteht zum Zeitpunkt der Lieferung indem die zugehörigen Komponenten aus dem Lager geholt und für den Versand bereitgestellt werden.
Die wesentlichen Aspekte sind:

- Das Kit ist von der Produktart _Verbrauchsartikel_
- Die zugeordnete Stückliste ist vom Typ _Bausatz_ und hat keine Vorgänge
- Die Apps _Lager_ und _Fertigung_ müssen installiert sein

## Beispiel Produkt "Bike Reparatur Set"

![Best Practive Verkauf Kit bereitstellen Produkt Definition](attachments/Best%20Practive%20Verkauf%20Kit%20bereitstellen%20Produkt%20Definition.png)

Die zugeordnete Stückliste sieht wie folgt aus:

![Best Practice Verkauf Kit bereitstellen Stückliste](attachments/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Stückliste.png)

Über die Verkaufsbeschreibung kann der Inhalt des Kit erläutert werden:

![Best Practice Verkauf Kit bereitstellen Verkaufstext](attachments/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Verkaufstext.png)

Die folgenden Abbildungen zeigen den Verkaufsauftrag, den Lieferschein und die Rechnung. (Verkauft und verrechnet wird das Produkt _Bike Reparatur Set_. Die Lagerbewegungen erfolgen aber für die Komponenten und werden auf dem Lieferschein sichtbar.)

![Best Practice Verkauf Kit bereitstellen Verkaufsauftrag](attachments/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Verkaufsauftrag.png)

![Best Practice Verkauf Kit bereitstellen Lieferschein](attachments/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Lieferschein.png)

![Best Practice Verkauf Kit bereitstellen Rechnung](attachments/Best%20Practice%20Verkauf%20Kit%20bereitstellen%20Rechnung.png)
