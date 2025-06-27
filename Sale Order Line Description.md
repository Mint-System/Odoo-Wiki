---
title: Sale Order Line Description
description: Nur Verkausbeschreibung im Feld Beschreibung übertragen.
kind: howto
tags:
- OCA
prev: ./sale
---
# Sale Order Line Description
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `sale_order_line_description`\
Repository: <https://github.com/OCA/sale-workflow/tree/15.0/sale_order_line_description>

## Konfiguration

### Übertragung Verkaufsbeschreibung aktivieren

Damit die Erweiterung für Unternehmen aktiv ist, navigieren Sie nach *Einstellungen > Verkauf > Angebote und Aufträge* und aktivieren Sie die Option *Verkaufsbeschreibung des Produktes*.

### Übertragung Verkaufsbeschreibung für Benutzer aktivieren

Für Benutzer navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer wählen > Tab Zugriffsrechte* und aktivieren Sie  hier die Option *Nur die Verkaufsbeschreibung des Produktes in Auftragszeilen verwenden*.

## Verwendung

### Verkaufsbeschreibung ohne Produktname übertragen

Ist die Option aktiviert, wird beim Auswählen eines Produkts nur die Verkaufsbeschreibung übernommen.

![Sale Order Line Description](attachments/Sale%20Order%20Line%20Description.gif)

::: warning
Wenn die Verkaufsbeschreibung auf dem Produkt nicht gesetzt ist, wird der Produktname übernommen.
:::