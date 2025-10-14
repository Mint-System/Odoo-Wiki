---
title: Material Reservierung
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Material Reservierung

Das Beispiel der Fertigung von [Rahmen unbeschichtet](Best%20Practice%20Production%20Planning.md#Beispiel%20Fertigungsauftrag%20Rahmen%20unbeschichtet) zeigt eine dreistufige Produktionsplanung.

![Theorie Material Reservierung](attachments/Best%20Practice%20Material%20Reservierung.svg)

::: tip
Die Fertigungsaufträge der zweiten Stufe könnten gestartet werden, wenn das benötigte Produkt Fettentferner nicht schon für den Auftrag der ersten Stufe reserviert wäre.
:::

Mit der Funktion _Reservierung Abbrechen_ wird die Zuordnung des Materials für den Auftrag der Stufe 1 aufgelöst. Anschliessend kann das Material mit der Funktion _Verüfgbarkeit prüfen_ für jeden einzelnen Auftrag der Stufe 2 reserviert werden.

## Prüfung der Materialverfügbarkeit

Die Übersicht zur aktuellen Materialverfügbarkeit bezüglich der Aufträge zeigt die Liste _Fertigungsaufträge_. Das Attribut _Materialverfügbarkeit_ zeigt ob das für die Fertigung notwendige Material im Lager vorhanden ist (_Bereit_) oder nicht (_Warteliste_).

Für die Aktualisierung dieser Information wird jeder Fertigungsauftrag der Warteliste aufgerufen und mit der Funktion _Verfügbarkeit Prüfen_ abgefragt, wie viel Material reserviert werden kann.

Im besten Fall kann soviel reserviert werden wie notwendig ist. Dann ändert die Zeilenfarbe von rot auf grün. Wenn alle Zeilen grün sind, wechselt der Status der Materialverfügbarkeit auf _Bereit_. (Und die Funktion _Verfügbarkeit Prüfen_ steht nicht mehr zur Verfügung.)
