---
tags:
- HowTo
prev: ./verkauf
---
# Verkauf Stammdaten
![icons_odoo_sale](assets/icons_odoo_sale.png)

Produkte, Preislisten und Varianten zentral pflegen.

## Erweiterungen

| Erweiterung       | Beschreibung                            |
| ----------------- | --------------------------------------- |
| [Packaging UOM](Packaging%20UOM.md) | Mengeneinheit für Produktverpackung festlegen. |

## Produktattribut erstellen

Öffnen Sie *Verkäufe > Konfiguration > Produkte > Attribute* und wählen Sie *Anlegen*. Geben den Attributnamen an und legen Sie den Anzeigetyp fest. Für das Feld *Variants Creation Mode* haben Sie diese Optionen:
* **Instantly**: Alle möglichen Produkvarianten werden angelegt.
* **Dynamically**: Produktvarianten werden nur angelegt, wenn diese explizit konfiguriert werden.
* **Niemals**: Mögliche Produktvarianten werden für dieses Attribut nicht angelegt.
Zuletzt tragen Sie Werte für das Attribut ein.

![](assets/Verkauf%20Stammdaten%20Produktattributte.png)

## Erweiterte Preisregeln aktivieren

Navigieren Sie nach *Verkauf > Konfiguration > Preiskalkulation* und aktivieren Sie die Option *Preislisten* mit der Unteroption *Erweiterte Preisregeln*.