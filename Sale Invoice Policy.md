---
description: Abrechnungsregel auf Produkt und Angebot festlegen.
forge: github.com
kind: howto
name: sale_invoice_policy
partner: OCA
prev: ./sale
repo: OCA/sale-workflow
title: Sale Invoice Policy
versions:
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Sale Invoice Policy

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Abrechnungsregel auf Produkt festlegen

Navigieren Sie nach _Verkauf > Produkte > Produkte_ und zeigen Sie ein Produkt an. Im Feld _Default Invoicing Policy_ wählen Sie die passende Abrechnungsregel aus.

::: warning
Diese Erweiterung ersetzt das Feld _Abrechnungspolitik_.
:::

### Abrechnungsregel auf Angebot festlegen

Navigieren Sie nach _Verkauf_ und zeigen Sie ein Angebot an. Im Feld _Invoice Policy_ wählen Sie die passende Abrechnungsregel aus.
