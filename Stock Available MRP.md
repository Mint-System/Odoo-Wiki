---
description: Verfügbare Bestände zur Produktion berechnen.
forge: github.com
kind: howto
name: stock_available_mrp
partner: OCA
prev: ./warehouse
repo: OCA/stock-logistics-warehouse
title: Consider the production potential is available to promise
versions:
- '15.0'
---


# Consider the production potential is available to promise

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Produktionskapzitäten für Produkt anzeigen

Zeigen Sie das Produkt unter _Fertigung > Produkte > Produkte_ an. In der Formularansicht wird ein Smart-Button angezeigt, welcher das Produktionspotenzial berechnet.

![](attachments/Stock%20Available%20MRP.png)
