---
description: Individuelle Mengenheit für Produkte festlegen.
forge: github.com
kind: howto
name: product_logistics_uom
partner: OCA
prev: ./stock
repo: OCA/product-attribute
title: Product Logistics UoM
versions:
- '17.0'
---


# Product Logistics UoM

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Mengenheit Logistik festlegen

Mit dieser Erweiterung können Sie auf Produkten die Mengeneinheit für Produkt festlegen. Öffnen Sie ein Produkt via _Lager > Produkte > Produkte_ und zeigen Sie den Tab _Lager_ an. Legen Sie Mengeneinheit neben dem Eingabefeld für das Gewicht oder Volumen fest.

![](attachments/Product%20Logistics%20UoM.png)

::: warning
Ihr Benutzer muss die Berechtigung _Multiple Mengeneinheiten verwalten_ haben.
:::
