---
tags:
- Best-Practice
prev: ./best-practice
---
# Best Practice: Mengeneinheiten

## Bedingung für Transfer der Mengenheit

Mengenheiten können zwischeneinander umgerechnet werden solange sie in der selben "Mengeneinheit-Kategorie" sind.

## Einheit für Aufstocken (Replenishment)

Für das *Aufstocken* kann pro Produkt individuell eine Mengenenheit gewählt werden.

![Best Practice Mengenenheiten Beispiel](assets/Best%20Practice%20Mengenenheiten%20Beispiel.png)

## Beispiel Metallblech

In der Fertigung werden Metallbleche in der Einheit mm2 verbaut. Eingekauft werden sie in der Einheit m2. Der Lieferant bietet seine Bleche in Standardgrössen an (z.B. 0.5 m2 Bleche).

![Best Practice Mengeneinheiten](assets/Best%20Practice%20Mengeneinheiten.svg)


## Mengeneinheit Pack

Damit man Packweise mit nur einer Etikette Material einbuchen kann, aber beim Konsumieren nicht das gesamte Pack konsumieren muss, erstellt man eine neue Mengeneinheit.

![](assets/pBest%20Practice%20Mengeneinheiten%20Pack%2050.png)

Das Material wird zur Mengenheinheit *Pack 50* gelagert. Konsumiert man eine Teilmenge, stellt man die Mengenheit auf *Unit* um. Dadurch wird der entsprechende Faktor (hier 50) angewendet.

![](assets/Best%20Practice%20Mengeneinheiten%20Teilmenge.png)