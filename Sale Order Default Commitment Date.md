---
description: Standardlieferdatum festlegen.
forge: github.com
kind: howto
name: sale_order_default_commitment_date
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Default Commitment Date
versions:
- '14.0'
---


# Sale Order Default Commitment Date

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Standardlieferdatum generieren

Beim erstellen eines neuen Verkaufsangebot wird der _Liefertermin_ nach der folgenden Regel überschrieben:

- Vor 12 Uhr wird der Liefertermin auf den aktuellen Tag + 1 Tag gesetzt.
- Nach 12 Uhr wird der Liefertermin auf den aktuellen Tag + 2 Tage gesetzt.
- Die Stunde und Minute werden auf einen bestimmten Wert gesetzt.

![](attachments/Sale%20Order%20Default%20Commitment%20Date%20Beispiel.png)
