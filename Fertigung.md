---
tags:
- HowTo
---
# Fertigung
![icons_odoo_mrp](assets/icons_odoo_mrp.png)

Eine moderne Lösung für ein altes Problem.

Erweiterungen:
* [Fertigung Stammdaten](Fertigung-Stammdaten.md)
* [Cancel Manufacturing Order](Cancel-Manufacturing-Order.md)
* [Product Barcode Generator](Product-Barcode-Generator.md)
* [Product Name Sequence](Product-Name-Sequence.md)
* [Product Sequence](Product-Sequence.md)
* [MRP Documents Share](MRP-Documents-Share.md)
* [Product Country of Origin](Product-Country-of-Origin.md)
* [Product Type Description](Product-Type-Description.md)

Videos:
* [Odoo Experience 2021 - What's New in MRP?](https://www.youtube.com/watch?v=xTXc_FV9kKU)

## BoM in Fertigungsauftrag neu laden

Mit dem Erstellen eines Fertigungsauftrags werden die Komponenten der Stückliste (BoM) als zu verwendendes Material übernommen. Falls die Stückliste zu einem späteren Zeitpunkt geändert wird, verändert sich der Fertigungsauftrag standardmässig nicht. Mit der folgend beschriebenen Funktion kann aber erreicht werden, dass der Fertigungsauftrag jederzeit mit der aktuellen Stückliste abgeglichen werden kann.

Die Server Aktion *Reload BoM* wird gemäss Beschreibung in [BoM Reload Aktion erstellen](Aktionen#BoM%20Reload%20Aktion%20erstellen) erstellt. Anschliessend kann über den Menupunkt *Reload BoM* die BoM jederzeit neu geladen werden.

![Fertigung Reload BoM](assets/Fertigung%20Reload%20BoM.png)

:::info
Falls eine Stückliste leer ist (keine Komponenten) erscheint ein über MTO automatisch generierter Fertigungsauftrag im Status *Entwurf*. Falls die Stückliste Komponenten enthält, dann erscheint er im Status *Bestätigt*.
:::