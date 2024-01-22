---
title: Verkauf Treue
description: Kundentreue mit Rabatten, Coupons und Geschenkkarten belohnen.
tags:
- HowTo
prev: ./sale
---
# Verkauf Treue
![](attachments/odoo_icon_website_loyalty.png)

{{ $frontmatter.description }}

## Verwendung

Diese App gibt es ab #Odoo16.

### Gutschein für Verkaufsauftrag erstellen

Navigieren Sie nach *Verkauf > Produkte > Rabatt & Treue* und klicken Sie auf *Gutscheine für nächsten Einkauf*.

### Rabatt bei Mindestbestellung von Produkt erstellen

Zeigen Sie *Verkauf > Produkte > Rabatt & Treue* an und erstellen Sie einen neuen Eintrag.

* **Programmname**: Rabatt
* **Programmart**: Promos

Im Tab *Rules & Rewards* bearbeiten Sie die *Conditional rules*:

* **Minimalbestand**: Geben Sie die Mindestbestellmenge ein
* **Produkte**: Wählen Sie die Produkte aus, die den Rabatt erhalten

Für *Boni* bearbeiten Sie dein Eintrag wie folgt:

* **Rabatt**: Bestimmen Sie den Rabatt
* **Rabattierte Produkte**: Wählen Sie hier dasselbe Produkt aus
* **Description on order**: Legen Sie eine Bezeichnung für den Warenkorb / Auftrag fest.