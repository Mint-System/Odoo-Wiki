# Materialbezug in Vorgängen

In der Bearbeitung von Stücklisten bietet die Funktion *Flexible Consumption* im Register *Sonstiges* die folgenden drei Optionen:
* Erlaubt
* Allowed with warning
* Blockiert

Als Beispiel wird das Produkt *[M1010] Sattel* produziert. Die Stückliste sieht wie folgt aus:
![Fertigung Materialbezug Stückliste](assets/Best%20Practice%20Materialbezug%20in%20Vorg%C3%A4ngen%20St%C3%BCckliste.png)

Der Fertigungsauftrag *WH/MO/00007* für 2 Stk wird erstellt.

Wenn der Auftrag mit *Bestätigen* gestartet wird, erscheint der erste Vorgang *Stütze montieren* am Arbeitsplatz *Montage*. Die folgende Abbildung zeigt einen Ausschnitt aus dem Dashbaord:

![Fertigung Materialbezug Dashboard](assets/Best%20Practice%20Materialbezug%20in%20Vorg%C3%A4ngen%20Dashboard.png)

![Fertigung Materialbezug Vorgang 1](assets/Best%20Practice%20Materialbezug%20in%20Vorg%C3%A4ngen%20Vorgang%201.png)

Jetzt lassen sich die drei Vorgänge auf der Tablet-Ansicht abarbeiten und jeweils 2 Stk der benötigten Materialien über *Validate" abbuchen.

![Fertigung Materialbezug Vorgang 1 Tablet](assets/Best%20Practice%20Materialbezug%20in%20Vorg%C3%A4ngen%20Vorgang%201%20Tablet.png)

Das Verfahren kann abgekürzt werden indem der Fertigungsauftrag direkt mit *Als Erledigt Markieren* geschlossen wird. Falls nicht zuerst mit *Verfügbarkeit Prüfen* Material reserviert wurde, wird nur das Produkt *Sattel* als Lagerzugang gebucht. (Der Materialbezug der Einzelkomponenten wird in diesem Fall ignoriert.)

Falls z.B. 3 statt 2 Stk Sattelüberzüge bezogen werden, erscheint dies farblich markiert im Fertigungsauftrag.

![Fertigung Materialbezug reservierte Produkte](assets/Best%20Practice%20Materialbezug%20in%20Vorg%C3%A4ngen%20%20reservierte%20Produkte.png)

## Allowed with warning

Nach dem Ausführen von *Als Erledigt Markieren* erscheint die folgende Warnmeldung:

![Fertigung Materialbezug Consumption Warning](assets/Best%20Practice%20Materialbezug%20in%20Vorg%C3%A4ngen%20Consumption%20Warning.png)

Mit dem Knopf *Review Consumption* verlässt man den Dialog ohne dass eine Buchung durchgeführt wird. Mit *Bestätigen* wird das Material gebucht. Der zusätzliche Bezug erscheint als weitere Zeile in der Liste der Komponenten.

![Fertigung Materialbezug gebuchte Produkte](assets/Best%20Practice%20Materialbezug%20in%20Vorg%C3%A4ngen%20%20gebuchte%20Produkte.png)

## Erlaubt

Nach dem Ausführen von *Als Erledigt Markieren* erscheint keine Meldung und die Buchung wird direkt durchgeführt.

## Blockiert

Nach dem Ausführen von *Als Erledigt Markieren* erscheint die folgende Warnmeldung:

![Fertigung Materialbezug Consumption Warning 2](assets/Best%20Practice%20Materialbezug%20in%20Vorg%C3%A4ngen%20Consumption%20Warning%202.png)

Mit dem Knopf *Review Consumption* verlässt man den Dialog ohne dass eine Buchung durchgeführt wird. 
Mit dem Knopf *Force* wird die Buchung durchgeführt.
