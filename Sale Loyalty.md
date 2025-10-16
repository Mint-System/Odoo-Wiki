---
title: Verkauf Treue
description: Kundentreue mit Rabatten, Coupons und Geschenkkarten belohnen.
kind: howto
prev: ./sale
---

# Verkauf Treue

![](attachments/odoo_icon_website_loyalty.png)

{{ $frontmatter.description }}

## Verwendung

Diese App gibt es ab #Odoo16.

### Gutschein für Verkaufsauftrag erstellen

Navigieren Sie nach _Verkauf > Produkte > Rabatt & Treue_ und klicken Sie auf _Gutscheine für nächsten Einkauf_.

### Rabatt bei Mindestbestellung von Produkt erstellen

Zeigen Sie _Verkauf > Produkte > Rabatt & Treue_ an und erstellen Sie einen neuen Eintrag.

- **Programmname**: Rabatt
- **Programmart**: Promos

Im Tab _Rules & Rewards_ bearbeiten Sie die _Conditional rules_:

- **Minimalbestand**: Geben Sie die Mindestbestellmenge ein
- **Produkte**: Wählen Sie die Produkte aus, die den Rabatt erhalten

Für _Boni_ bearbeiten Sie dein Eintrag wie folgt:

- **Rabatt**: Bestimmen Sie den Rabatt
- **Rabattierte Produkte**: Wählen Sie hier dasselbe Produkt aus
- **Description on order**: Legen Sie eine Bezeichnung für den Warenkorb / Auftrag fest.
