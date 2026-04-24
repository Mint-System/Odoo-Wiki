---
description: Formatiert Floats nach Anzahl der Dezimalstellen.
forge: github.com
kind: howto
name: float_align_at_decimal
partner: Mint System
prev: ./development
repo: Mint-System/Odoo-Apps-Server-Tools
title: Float align at decimal
versions:
- '16.0'
---


# Float align at decimal

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Diese Erweiterung stellt ein Widget `decimal_align` zur Verfügung, mit dem sich Dezimalzahlen (Floats) für die Verwendung in QWeb-Reports formatieren und ausrichten lassen, z.B. in Tabellen.

Das Widget wird wie andere Widgets auch als QWeb-Option in Form eines Dictonaries eingebunden, zum Beispiel `t-options="{'widget': 'decimal_align', 'decimals': 2}"`
