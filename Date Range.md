---
description: Verwaltung von Datums-Bereichen zur Filterung von Daten.
forge: github.com
kind: howto
name: date_range
partner: OCA
prev: ./development
repo: OCA/server-ux
title: Date Range
versions:
- '19.0'
---


# Date Range

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Datumsbereich anlegen

Zeigen Sie _Rechnungsstellung > Konfiguration > Date Ranges > Date Ranges_.

- **Name**: Name des Bereichs, beispielsweise `Jahr 2025`.
- **Typ**: Typs des Bereichs, beispielsweise `Jahr`.
- **Anfangsdatum**: Startdatum des Bereichs.
- **Enddatum**: Enddatum des Bereichs.
