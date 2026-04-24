---
description: Verkaufs-, Einkaufs- und Lieferbeschreibung auf Produktvarianten festlegen.
forge: github.com
kind: howto
name: product_variant_description
partner: Mint System
prev: ./product
repo: Mint-System/Odoo-Apps-Product-Attribute
title: Product Variant Description
versions:
- '17.0'
- '15.0'
---


# Product Variant Description

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Beschreibung auf Produktvariante festlegen

Mit dieser Erweiterungen können auf Produktvarianten Verkaufs-, Einkaufs- und Lieferbeschreibung festlegen. Navigieren Sie nach _Verkauf > Produkte > Produktvarianten_ und zeigen Sie eine Produktvariante an. Im Tab _Verkauf_ können Sie die _Verkaufsbeschreibung_ anpassen, ohne dass die Beschreibung der Produktvorlage überschrieben wird.

::: tip
Wenn für eine Produktvariante keine Verkaufsbeschreibung vorhanden ist, wird die Verkaufsbeschreibung der Produktvorlage verwendet.
:::
