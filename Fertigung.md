---
tags:
- HowTo
---
[🔗 Home](/)
# Fertigung
![icons_odoo_mrp](assets/icons_odoo_mrp.png)

Eine moderne Lösung für ein altes Problem.

| Bereich                                         | Beschreibung                                   |
| ----------------------------------------------- | ---------------------------------------------- |
| [Fertigung Stammdaten](Fertigung%20Stammdaten.md) | Produkte und Dienstleistungen zentral pflegen. |

| Erweiterung                                                                 | Beschreibung                                                                 |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [Cancel Manufacturing Order](Cancel%20Manufacturing%20Order.md)                 | Fertigungsauftrag rückgängig machen.                                         |
| [Product Barcode Generator](Product%20Barcode%20Generator.md)                   | Autogenerate EAN13 product barcodes.                                         |
| [Product Name Sequence](Product%20Name%20Sequence.md)                           | Generate product names based on a sequence.                                  |
| [Product Sequence](Product%20Sequence.md)                                     | Produkreferenzen anhand einer Sequenz generieren lassen.                     |
| [MRP Documents Share](MRP%20Documents%20Share.md)                               | Teilen sie Zeichnungen und Step-Dateien zu ihren Produkten als URL-Dokument. |
| [Product Country of Origin](Product%20Country%20of%20Origin.md)                   | Bestimmen sie für jedes Produkt ein Herkunftsland                            |
| [Product Type Description](Product%20Type%20Description.md)                     | Zu jedem Produkt ein Beschreibungsfeld.                                      |
| [Secondary Product Type Description](Secondary%20Product%20Type%20Description.md) | Zu jedem Produkt ein zweites Beschreibungsfeld.                              |
| [Product Feeder ID](Product%20Feeder%20ID.md)                                   | Feeder-Textfeld auf dem Produkt.                                             |

| Video                                                                                    |
| ---------------------------------------------------------------------------------------- |
| [Odoo Experience 2021 - What's New in MRP?](https://www.youtube.com/watch?v=xTXc_FV9kKU) |

## BoM in Fertigungsauftrag neu laden

Mit dem Erstellen eines Fertigungsauftrags werden die Komponenten der Stückliste (BoM) als zu verwendendes Material übernommen. Falls die Stückliste zu einem späteren Zeitpunkt geändert wird, verändert sich der Fertigungsauftrag standardmässig nicht. Mit der folgend beschriebenen Funktion kann aber erreicht werden, dass der Fertigungsauftrag jederzeit mit der aktuellen Stückliste abgeglichen werden kann.

Die Server Aktion *Reload BoM* wird gemäss Beschreibung in [BoM Reload Aktion erstellen](Entwicklung%20Aktionen.md#BoM%20Reload%20Aktion%20erstellen) erstellt. Anschliessend kann über den Menupunkt *Reload BoM* die BoM jederzeit neu geladen werden.

![Fertigung Reload BoM](assets/Fertigung%20Reload%20BoM.png)

::: tip
Falls eine Stückliste leer ist (keine Komponenten) erscheint ein über MTO automatisch generierter Fertigungsauftrag im Status *Entwurf*. Falls die Stückliste Komponenten enthält, dann erscheint er im Status *Bestätigt*.
:::

## Hauptproduktionszeitplan anwenden

Öffnen sie *Fertigung > Planung > Hauptproduktionszeitplan* und fügen sie ein Produkt und ein Kompenenten-Produkt hinzu. Im Filter *Zeilen* wählen sie:

* Anfangslagerbestand
* Tatsächliche Nachfrage
* Prognostizierter indirekter Bedarf
* Aufzufüllen
* Prognostizierter Bestand

In der Zeile *Tatsächliche* sehen sie die nachgefragte Menge. Geben sie in der Zeile *Vorschlag Auffüllung* die zu produzierende Menge ein.

Für das Komponenten-Produkt wird nun der *prognostizierter indirekter Bedarf* berechnet. Erstellen sie für dieses Produkt ebenfalls einen Vorschlag.

![](assets/Hauptproduktionszeitplan.png)

Wählen sie für jedes Produkt *Aufstocken* um einen Auftrag gemäss hinterlegter Route zu erstellen.


