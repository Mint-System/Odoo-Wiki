---
description: Datum aus Vertragszeile in Rechnung anzeigen und formatieren.
forge: github.com
kind: howto
name: contract_format_date_marker
partner: Mint System
prev: ./contract
repo: Mint-System/Odoo-Apps-Contract
title: Contract Format Date Marker
versions:
- '17.0'
---


# Contract Format Date Marker

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Abrechnungszeitrum in Rechnungszeile anzeigen

Mit dieser Erweiterung wird beim Erstellen einer Rechnung aus Verträgen im Feld _Beschreibung_ der jeweiligen Rechnungszeile, der Abrechnungszeitrum angefügt.

![](attachments/Contract%20Format%20Date%20Marker.png)

::: tip
Die Monate werden in der Sprache des Kunden vom Vertrag angezeigt.
:::
