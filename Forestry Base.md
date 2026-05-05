---
description: Odoo für die Holzwirtschaft.
extensions: true
forge: github.com
kind: howto
name: forestry_base
partner: Mint System
prev: ./
repo: Mint-System/Odoo-Apps-Vertical-Forestry
title: Holzwirtschaft
versions:
- '15.0'
---


# Holzwirtschaft

![icons_odoo_forestry_base](attachments/icons_odoo_forestry_base.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Erweiterungen

| Erweiterung                                             | Beschreibung                                          |
| ------------------------------------------------------- | ----------------------------------------------------- |
| [Holzwirtschaft Lager](Forestry%20Stock.md)             | Erweiterung Lager für die Holzwirtschaft.             |
| [Holzwirtschaft Projekt](Forestry%20Project.md)         | Erweiterung Projektmanagement für die Holzwirtschaft. |
| [Holzwirtschaft Zeiterfassung](Forestry%20Timesheet.md) | Erweiterung Zeiterfassung für die Holzwirtschaft.     |

## Verwendung

### Kontakt als Ort markieren

Zeigen Sie einen Kontakt via _Kontakte_ an und aktivieren Sie die Checkbox _Ort_.

### Lagerort-Link auf Kontakt einfügen

Zeigen Sie einen Kontakt via _Kontakte_ an und fügen Sie den Link im Feld _Lagerort-Link_ ein.

### Details auf Polter erfassen

Zeigen Sie eine Polter via _Lager > Produkte > Produkte_ an und erfassen Sie Details im unteren Bereich vom Tab _Allgemeine Informationen_.
