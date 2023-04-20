---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- OCA
prev: ./verkauf
---
# Sale Order Line Description
![icon_oca_app](assets/icon_oca_app.png)

Nur Verkausbeschreibung im Feld Beschreibung übertragen.

Technischer Name: `sale_order_line_description`\
Repository: <https://github.com/OCA/sale-workflow/tree/15.0/sale_order_line_description>

## Konfiguration

### Übertragung Verkausbeschreibung aktivieren

Damit die Erweiterung für Unternehmen aktiv ist, navigieren Sie nach *Einstellungen > Verkauf > Angebote und Aufträge* und aktivieren Sie die Option *Verkaufsbeschreibung des Produktes*.

### Übertragung Verkaufsbeschreibung für Benutzer aktivieren

Für Benutzer navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer wählen > Tab Zugriffsrechte* und aktivieren Sie  hier die Option *Nur die Verkaufsbeschreibung des Produktes in Auftragszeilen verwenden*.

## Verwendung

### Verkaufsbeschreibung ohne Produkname übertragen

Ist die Option aktiviert, wird beim Ausfwählen eines Produkts nur die Verkaufsbeschreibung übernommen.

![Sale Order Line Description](assets/Sale%20Order%20Line%20Description.gif)

::: warning
Wenn die Verkaufsbeschreibung auf dem Produk nicht gesetzt ist, wird der Produkname übernommen.
:::