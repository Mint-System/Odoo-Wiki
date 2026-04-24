---
description: Nur Verkausbeschreibung im Feld Beschreibung übertragen.
forge: github.com
kind: howto
name: sale_order_line_description
partner: OCA
prev: ./sale
repo: OCA/sale-workflow
title: Sale Order Line Description
versions:
- '17.0'
---


# Sale Order Line Description

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

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
