---
title: Sale Order Line Description
description: Nur Verkausbeschreibung im Feld Beschreibung übertragen.
kind: howto
partner: OCA
prev: ./sale
---

# Sale Order Line Description

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `sale_order_line_description`\
Repository: <https://github.com/OCA/sale-workflow/tree/16.0/sale_order_line_description>

## Konfiguration

### Übertragung Verkaufsbeschreibung aktivieren

Damit die Erweiterung für Unternehmen aktiv ist, navigieren Sie nach _Einstellungen > Verkauf > Angebote und Aufträge_ und aktivieren Sie die Option _Verkaufsbeschreibung des Produktes_.

### Übertragung Verkaufsbeschreibung für Benutzer aktivieren

Für Benutzer navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer wählen > Tab Zugriffsrechte_ und aktivieren Sie hier die Option _Nur die Verkaufsbeschreibung des Produktes in Auftragszeilen verwenden_.

## Verwendung

### Verkaufsbeschreibung ohne Produktname übertragen

Ist die Option aktiviert, wird beim Auswählen eines Produkts nur die Verkaufsbeschreibung übernommen.

![Sale Order Line Description](attachments/Sale%20Order%20Line%20Description.gif)

::: warning
Wenn die Verkaufsbeschreibung auf dem Produkt nicht gesetzt ist, wird der Produktname übernommen.
:::
