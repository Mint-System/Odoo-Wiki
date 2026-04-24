---
description: Länder-Liste manuell sortieren.
forge: github.com
kind: howto
name: base_country_sequence
partner: Mint System
prev: ./contacts
repo: Mint-System/Odoo-Apps-Partner-Contact
title: Base Country Sequence
versions:
- '18.0'
- '16.0'
---


# Base Country Sequence

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Länder manuell sortieren

Navigieren Sie nach _Kontakte > Konfiguration > Länder_. Sortieren Sie die Länder mit Drag and Drop oder öffnen Sie ein bestimmtes Land und passen Sie den Wert in _Sequence_ an.

#### Länder-Sortierung zurücksetzen

Navigieren Sie nach _Kontakte > Konfiguration > Länder_ und markieren Sie ein Land. Wählen Sie _Aktionen > Reset sequence_.

::: warning
Umlauten werden im Sortiervorgang an die letzte Position geschoben. Passen Sie die Sequenz für Länder wie beispielsweise _Österreich_ manuell an.
:::
