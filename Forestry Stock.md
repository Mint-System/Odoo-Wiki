---
description: Erweiterung Lager für die Holzwirtschaft.
forge: github.com
kind: howto
name: forestry_stock
partner: Mint System
prev: ./forestry-base
repo: Mint-System/Odoo-Apps-Vertical-Forestry
title: Holzwirtschaft Lager
versions:
- '15.0'
---


# Holzwirtschaft Lager

![icons_odoo_forestry_base](attachments/icons_odoo_forestry_base.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Bewegungen anzeigen

Navigieren Sie nach _Lager > Produkte > Produkte_ und öffnen Sie ein _Polter_.

### Lagerbuchungen validieren

Wenn Sie die Zeiterfassungseinträge validieren, wird unter folgenden Bedingungen eine Lagerbuchung erstellt:

- Der Zeiterfassungseintrag ist mit einer Aufgabe verknüpft
- Das verlinkte Produkt ist gelagert
- Die vorhandene Menge ist nicht negativ

Hier ein Bespiel des Prozesses:

![Forestry Stock](attachments/Forestry%20Stock.gif)
