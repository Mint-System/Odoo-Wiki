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

## Preisliste mit Rabatt erstellen

Wenn Sie die [Erweiterte Preisregeln aktivieren](#Erweiterte%20Preisregeln%20aktivieren) können Sie eine Preisliste erstellen, die auf einer bestehenden Preisliste Rabatt gewährt.

Navigieren Sie nach *Verkauf > Prdukte > Preislisten* und erstellen Sie einen neuen Eintrag mit dem Prozentsatz im Namen. Fügen Sie im Tab *Preisregeln* folgende Regeln hinzu:

* **Anzuwenden auf**: Alle Produkte
* **Stardatum**: Gemäss Laufzeit
* **Enddatum**: Gemäss Laufzeit
* **Ermittle Preis**: Formel
* **Basiert auf**: Amdere Preisliste
* **Stardatum**: Preisliste auswählen
* **Rabatt**: Rabatt in Prozent

Dazu ein Beispiel:

![](assets/Verkauf%20Preisregel%20Rabat.png)

Beim Auswahl der Preisliste im Angebot wird anschliessend der Preis mit Rabatt berechnet und eingetragen.