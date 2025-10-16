---
title: Fertigungsplanung
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Fertigungsplanung

## Beispiel Fertigungsauftrag Rahmen unbeschichtet

Für die Details des Produktes siehe [Rahmen unbeschichtet](Best%20Practice%20Definition%20Example%20Bicycle.md#Rahmen%20unbeschichtet).

### Automatische Fertigungsaufträge

Es wird ein Fertigungsauftrag für 8 Stk _Rahmen unbeschichtet_ erstellt. Die Materialverfügbarkeit zeigt sich wie folgt:

![Best Practice Fertigungsauftrag Rahmen unbeschichtet Berechnung](attachments/Best%20Practice%20Fertigungsauftrag%20Rahmen%20unbeschichtet%20Berechnung.svg)

Der erste Auftrag erscheint wie folgt:

![Best Practice Fertigungsauftrag Schritt 1](attachments/Best%20Practice%20Fertigungsauftrag%20Schritt%201.svg)

Für die Produkte welche nicht in genügender Menge verfügbar sind, werden in der App Lager im Menu Vorgänge in der Übersicht Replenishment Vorschläge angezeigt.

![Best Practice Replenishment Schritt 1](attachments/Best%20Practice%20Replenishment%20Schritt%201.svg)

Die Angaben sind identisch mit der Ansicht _Benötigte Produkte_ im Register _Komponenten_ des Fertigungsauftrags WH/MO/00001

Nach dem Bestätigen der Aufträge zeigt sich die Liste der Fertigungsaufträge wie folgt:

![Best Practice Fertigungsauftrag Schritt 2](attachments/Best%20Practice%20Fertigungsauftrag%20Schritt%202.svg)

In der App Einkauf:

![Best Practice Angebotsanfrage Schritt 2](attachments/Best%20Practice%20Angebotsanfrage%20Schritt%202.svg)
