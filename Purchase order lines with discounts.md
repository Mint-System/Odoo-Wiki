---
description: Rabatte auf Einkaufspositionen festlegen.
forge: github.com
kind: howto
name: purchase_discount
partner: OCA
prev: ./purchase
repo: OCA/purchase-workflow
title: Purchase order lines with discounts
versions:
- '16.0'
---


# Purchase order lines with discounts

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Rabatt auf Preisliste festlegen

Öffnen Sie _Einkauf > Konfiguration > Lieferanten-Preislisten_ und zeigen Sie eine Preisliste an. Im Feld _Rabatt (%)_ können Sie Standardrabatte der Preisliste hinzufügen.

### Rabatt auf Lieferant festlegen

Öffnen Sie _Einkauf > Aufträge > Lieferanten_ und zeigen Sie einen Lieferant an. Im Tab _Verkauf & Einkauf_ finden Sie das Feld _Standardlieferantenrabatt (%)_. Dort können Sie den Standardrabatt für den Lieferant festlegen.

### Rabatt auf Einkaufsposition festlegen

Öffnen Sie _Einkauf > Aufträge > Bestellungen_ und wählen Sie eine Bestellung aus. Im Tab _Produkte_ finden Sie eine Spalte _Rabatt (%)_. Legen Sie dort den Rabatt fest.
