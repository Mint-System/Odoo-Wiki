---
description: Verrechnungsintervalle auf Kontakte und Verkaufsaufträge.
forge: github.com
kind: howto
name: sale_invoice_frequency
partner: OCA
prev: ./invoicing
repo: OCA/sale-workflow
title: Sale Invoice Frequency
versions:
- '19.0'
---


# Sale Invoice Frequency

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Verrechnungsintervalle verwalten

Rufen Sie _Verkauf > Konfiguration > Invoicing frequency_ auf. Hier verwalten Sie die Auswahl der Verrechnungsintervalle.

## Verwendung

### Verrechnungsintervall auf Kontakt festlegen

Zeigen Sie den Tab _Verkauf & Einkauf_ eines Kontakts an. Legen Sie im Feld _Invoicing frequency_ den Verrechnungsintervall fest.

### Verrechnungsintervall auf Verkaufsauftrag festlegen

Beim Erstellen eines Verkaufsauftrags wird der Verrechnungsintervall vom Kunden übernommen. Sie können den Verrechnungsintervall im Tab _Weitere Informationen_ im Feld _Invoicing frequency_ festlegen.

### Verkaufsaufträge nach Verrechnungsintervall gruppieren

Navigieren Sie nach _Verkauf > Abzurechnen_ und wählen Sie _Gruppieren nach > Invoicing frequency_
