---
tags:
- Best-Practice
prev: ./best-practice
---
# Änderung der Route während dem Einkaufsprozess

## Beispiel

Das Lager WH hat für den Empfang von Produkten die Einstellung *1 Schritt*. Jetzt werden beim Lieferanten Eisenwahren Huber AG 5 Stk des Produktes Rundrohr Typ 1 bestellt.

Daraus resultiert der Wareneingang WH/IN/00001 mit der folgenden vorbereiteten Lagerbewegung:

- Partner Locations/Vendors --> WH/Stock

Jetzt wird für das Lager WH bezüglich dem Empfang von Produkten die Einstellung *3 Schritte* eingestellt und beim Lieferanten Eisenwahren Huber AG nochmals 5 Stk des Produktes Rundrohr Typ 1 bestellt.

Daraus resultiert der Wareneingang WH/IN/00002 und die zwei internen Lagerbewegungen WH/INT/00001 und WH/INT/00002 mit den folgenden vorbereiteten Lagerbewegungen:

- Partner Locations/Vendors --> WH/Input
- WH/Input --> WH/Quality Control
- WH/Quality Control --> WH/Stock

::: tip
Wenn Routen für den Wareneingang während dem Einkaufsprozess geändert werden gilt die Einstellung, welche zum Zeitpunkt der Einkaufsbestätigung gültig war.
:::

