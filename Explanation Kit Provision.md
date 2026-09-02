---
title: Kit Bereitstellung
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./explanation
partner: Mint System
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

![Erläuterung Verkauf Kit bereitstellen Produkt Definition](attachments/Explanation%20Verkauf%20Kit%20bereitstellen%20Produkt%20Definition.png)

Die zugeordnete Stückliste sieht wie folgt aus:

![Erläuterung Verkauf Kit bereitstellen Stückliste](attachments/Explanation%20Verkauf%20Kit%20bereitstellen%20Stückliste.png)

Über die Verkaufsbeschreibung kann der Inhalt des Kit erläutert werden:

![Erläuterung Verkauf Kit bereitstellen Verkaufstext](attachments/Explanation%20Verkauf%20Kit%20bereitstellen%20Verkaufstext.png)

Die folgenden Abbildungen zeigen den Verkaufsauftrag, den Lieferschein und die Rechnung. (Verkauft und verrechnet wird das Produkt _Bike Reparatur Set_. Die Lagerbewegungen erfolgen aber für die Komponenten und werden auf dem Lieferschein sichtbar.)

![Erläuterung Verkauf Kit bereitstellen Verkaufsauftrag](attachments/Explanation%20Verkauf%20Kit%20bereitstellen%20Verkaufsauftrag.png)

![Erläuterung Verkauf Kit bereitstellen Lieferschein](attachments/Explanation%20Verkauf%20Kit%20bereitstellen%20Lieferschein.png)

![Erläuterung Verkauf Kit bereitstellen Rechnung](attachments/Explanation%20Verkauf%20Kit%20bereitstellen%20Rechnung.png)
