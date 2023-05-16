---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- OCA
prev: ./warehouse
---
# Stock available to promise
![icon_oca_app](assets/icon_oca_app.png)

Verfügbare Bestände zur Zusage berechnen.

Technischer Name: `stock_available`\
Repository: <https://github.com/OCA/stock-logistics-warehouse/tree/14.0/stock_available>

## Konfiguration

### Warenzugänge für Lieferversprechen ignorieren

Navigieren Sie nach *Einstellungen > Lager > Bestand für Lieferversprechen verfügbar*. Aktivieren Sie die Option *Warenzugänge ausschließen*.

::: tip
Die Aktivierung der Option installiert die Erweiterung [Stock Available Immediately](Stock%20Available%20Immediately.md).
:::

### Produktionspotenzial in Lieferverprechen berücksichtigen

Navigieren Sie nach *Einstellungen > Lager > Bestand für Lieferversprechen verfügbar*. Aktivieren Sie die Option *Include the production potential*.

::: tip
Die Aktivierung der Option installiert die Erweiterung [Stock Available MRP](Stock%20Available%20MRP.md).
:::
