---
description: Verfügbare Bestände zur Zusage berechnen.
forge: github.com
kind: howto
name: stock_available
partner: OCA
prev: ./warehouse
repo: OCA/stock-logistics-warehouse
title: Stock available to promise
versions:
- '15.0'
- '14.0'
---


# Stock available to promise

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Warenzugänge für Lieferversprechen ignorieren

Navigieren Sie nach _Einstellungen > Lager > Bestand für Lieferversprechen verfügbar_. Aktivieren Sie die Option _Warenzugänge ausschließen_.

::: tip
Die Aktivierung der Option installiert die Erweiterung [Stock Available Immediately](Stock%20Available%20Immediately.md).
:::

### Produktionspotenzial in Lieferverprechen berücksichtigen

Navigieren Sie nach _Einstellungen > Lager > Bestand für Lieferversprechen verfügbar_. Aktivieren Sie die Option _Include the production potential_.

::: tip
Die Aktivierung der Option installiert die Erweiterung [Stock Available MRP](Stock%20Available%20MRP.md).
:::
