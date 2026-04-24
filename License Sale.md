---
description: Lizenz aus Verkaufsauftrag generieren.
forge: github.com
kind: howto
name: license_sale
prev: ./license
repo: Mint-System/Odoo-Apps-Vertical-SaaS
title: License Sale
versions:
- '16.0'
---


# License Sale

![odoo_icons_license](attachments/odoo_icons_license.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Lizenzprodukt konfigurieren

Zeigen Sie _Verkauf > Produkte > Produkte_ an und öffnen Sie ein Produkt, das Sie als Lizenzprodukt konfigurieren möchten. Aktivieren Sie die Option _License_ und wählen Sie unter _License Policy_ eine Option aus. Sie können zusätzlich zur _Produktkategorie_ einen _License Type_ für das Lizenzprodukt festlegen.
