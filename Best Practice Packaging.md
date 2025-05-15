---
title: Verpackungen
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---
# Verpackungen

Folgende zwei Bedeutungen sind im Zusammenhang mit dem Verpacken zu beachten:
- **Produktverpackungen**: Produkte nach Einheiten pro Paket verwalten und verpacken)
- **Versandverpackungen**: Produkte für interne Transfers in Pakete, Kisten usw. verpacken

## Produktverpackungen

Produktverpackungen werden auf Verkaufsaufträgen angezeigt um zu beschreiben, wie die zu liefernden Produkte für den Versand verpackt sind.

Folgende Option muss eingeschaltet sein (Verkauf > Produktkatalog):

![Lager Einstellungen Produktverpackungen](attachments/Lager%20Einstellungen%20Produktverpackungen.png)

Damit Produktverpackungen verfügbar sind, müssen diese erfasst werden: [Produktverpackung erfassen](Stock%20Packaging.md#Produktverpackung%20erfassen).

Den Produkten können im Register *Lager* die Produktverpackungen zugeordnet werden.

![Lager Produktverpackung Zuordnung Produkt](attachments/Lager%20Produktverpackung%20Zuordnung%20Produkt.png)

Für ein Angebot wird die Produktverpackung zum Beispiel wie folgt angezeigt:

![Lager Produktverpackung Angebot Beispiel](attachments/Lager%20Produktverpackung%20Angebot%20Beispiel.png)

::: tip
Wenn ein Produkt in einer im System definierten Verpackung angeliefert wird, kann mit dem Scannen der Verpackung automatisch die entsprechende Quantität erfasst werden.
:::

### Versandverpackungen

Folgende Option muss eingeschaltet sein:

![Lager Einstellungen Verpackungen](attachments/Lager%20Einstellungen%20Verpackungen.png)