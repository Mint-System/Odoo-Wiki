---
description: Lieferdatum pro Position.
forge: github.com
kind: howto
name: sale_order_line_date
partner: OCA
prev: ./sale
repo: OCA/sale-workflow
title: Sale Order Line Date
versions:
- '19.0'
---


# Sale Order Line Date

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Lieferdatum pro Position festlegen

In einem Verkaufsangebot unter _Verkauf_ können Sie pro Position ein Lieferdatumfestlegen.

![](attachments/Sale%20Order%20Line%20Date%20Delivery%20Date.png)

Lagertransfers werden auf dieses Datum terminiert.
