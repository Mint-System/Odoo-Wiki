---
title: Materialbezug in Vorgängen
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Materialbezug in Vorgängen

In der Bearbeitung von Stücklisten bietet die Funktion _Flexible Consumption_ im Register _Sonstiges_ die folgenden drei Optionen:

- Erlaubt
- Allowed with warning
- Blockiert

Als Beispiel wird das Produkt _[M1010] Sattel_ produziert. Die Stückliste sieht wie folgt aus:
![Fertigung Materialbezug Stückliste](attachments/Best%20Practice%20Materialbezug%20in%20Vorgängen%20Stückliste.png)

Der Fertigungsauftrag _WH/MO/00007_ für 2 Stk wird erstellt.

Wenn der Auftrag mit _Bestätigen_ gestartet wird, erscheint der erste Vorgang _Stütze montieren_ am Arbeitsplatz _Montage_. Die folgende Abbildung zeigt einen Ausschnitt aus dem Dashbaord:

![Fertigung Materialbezug Dashboard](attachments/Best%20Practice%20Materialbezug%20in%20Vorgängen%20Dashboard.png)

![Fertigung Materialbezug Vorgang 1](attachments/Best%20Practice%20Materialbezug%20in%20Vorgängen%20Vorgang%201.png)

Jetzt lassen sich die drei Vorgänge auf der Tablet-Ansicht abarbeiten und jeweils 2 Stk der benötigten Materialien über \*Validate" abbuchen.

![Fertigung Materialbezug Vorgang 1 Tablet](attachments/Best%20Practice%20Materialbezug%20in%20Vorgängen%20Vorgang%201%20Tablet.png)

Das Verfahren kann abgekürzt werden indem der Fertigungsauftrag direkt mit _Als Erledigt Markieren_ geschlossen wird. Falls nicht zuerst mit _Verfügbarkeit Prüfen_ Material reserviert wurde, wird nur das Produkt _Sattel_ als Lagerzugang gebucht. (Der Materialbezug der Einzelkomponenten wird in diesem Fall ignoriert.)

Falls z.B. 3 statt 2 Stk Sattelüberzüge bezogen werden, erscheint dies farblich markiert im Fertigungsauftrag.

![Fertigung Materialbezug reservierte Produkte](attachments/Best%20Practice%20Materialbezug%20in%20Vorgängen%20reservierte%20Produkte.png)

## Allowed with warning

Nach dem Ausführen von _Als Erledigt Markieren_ erscheint die folgende Warnmeldung:

![Fertigung Materialbezug Consumption Warning](attachments/Best%20Practice%20Materialbezug%20in%20Vorgängen%20Consumption%20Warning.png)

Mit dem Knopf _Review Consumption_ verlässt man den Dialog ohne dass eine Buchung durchgeführt wird. Mit _Bestätigen_ wird das Material gebucht. Der zusätzliche Bezug erscheint als weitere Zeile in der Liste der Komponenten.

![Fertigung Materialbezug gebuchte Produkte](attachments/Best%20Practice%20Materialbezug%20in%20Vorgängen%20gebuchte%20Produkte.png)

## Erlaubt

Nach dem Ausführen von _Als Erledigt Markieren_ erscheint keine Meldung und die Buchung wird direkt durchgeführt.

## Blockiert

Nach dem Ausführen von _Als Erledigt Markieren_ erscheint die folgende Warnmeldung:

![Fertigung Materialbezug Consumption Warning 2](attachments/Best%20Practice%20Materialbezug%20in%20Vorgängen%20Consumption%20Warning%202.png)

Mit dem Knopf _Review Consumption_ verlässt man den Dialog ohne dass eine Buchung durchgeführt wird.
Mit dem Knopf _Force_ wird die Buchung durchgeführt.
