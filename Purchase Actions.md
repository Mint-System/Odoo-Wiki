---
title: Einkauf Aktionen
description: Arbeitsflüsse in Einkauf automatisieren.
tags:
- HowTo
prev: ./
---
# Einkauf Aktionen
![icons_odoo_purchase](attachments/icons_odoo_purchase.png)

{{ $frontmatter.description }}

## Automatische Aktionen

### Bestellfrist festlegen

Mit Aktionen können Felder mit einem bestimmten Default-Wert beschrieben werden. Im folgenden Beispiel wird das Feld *Order Deadline* auf Angebotsanfragen auf das Datum *heute + 5 Tage* gesetzt.

Navigieren Sie nach *Einstellungen > Technisch > Automation > Automatische Aktionen* und erstellen Sie den folgenden Eintrag:

* Name der Aktion: `Bestellfrist festlegen`
* Modell: `Beschaffungsauftrag`
* Auslöser: `Bei Erstellung`
* Folgeaktion: `Den Datensatz aktualisieren`
* Feld: `Order Deadline (purchase.order)`
* Wert: `datetime.datetime.today() + datetime.timedelta(days=5)`
