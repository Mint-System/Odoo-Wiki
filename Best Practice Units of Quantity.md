---
title: Mengeneinheiten
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Mengeneinheiten

## Bedingung für Transfer der Mengenheit

Mengenheiten können zwischeneinander umgerechnet werden solange Sie in der selben "Mengeneinheit-Kategorie" sind.

## Einheit für Aufstocken (Replenishment)

Für das *Aufstocken* kann pro Produkt individuell eine Mengenenheit gewählt werden.

![Best Practice Mengenenheiten Beispiel](attachments/Best%20Practice%20Mengenenheiten%20Beispiel.png)

## Beispiel Metallblech

In der Fertigung werden Metallbleche in der Einheit mm2 verbaut. Eingekauft werden Sie in der Einheit m2. Der Lieferant bietet seine Bleche in Standardgrössen an (z.B. 0.5 m2 Bleche).

![Best Practice Mengeneinheiten](attachments/Best%20Practice%20Mengeneinheiten.svg)


## Mengeneinheit Pack

Damit man Packweise mit nur einer Etikette Material einbuchen kann, aber beim Konsumieren nicht das gesamte Pack konsumieren muss, erstellt man eine neue Mengeneinheit.

![](attachments/pBest%20Practice%20Mengeneinheiten%20Pack%2050.png)

Das Material wird zur Mengenheinheit *Pack 50* gelagert. Konsumiert man eine Teilmenge, stellt man die Mengenheit auf *Unit* um. Dadurch wird der entsprechende Faktor (hier 50) angewendet.

![](attachments/Best%20Practice%20Mengeneinheiten%20Teilmenge.png)