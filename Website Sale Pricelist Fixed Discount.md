---
description: Warenkorb mit Rabatten aus Preisliste mit Festpreis.
forge: github.com
kind: howto
name: website_sale_pricelist_fixed_discount
partner: Mint System
prev: ./website
repo: Mint-System/Odoo-Apps-Website
title: Website Sale Pricelist Fixed Discount
versions:
- '18.0'
- '16.0'
---


# Website Sale Pricelist Fixed Discount

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Preisliste mit Rabatt einrichten

Damit Rabatte auf aus der Preisliste auf den Warenkorb / Angebot übertragen werden, müssen Sie einen [Rabatt auf Preisregel mit Festpreise festlegen](Product%20Pricelist%20Fixed%20Discount.md#Rabatt%20auf%20Preisregel%20mit%20Festpreise%20festlegen). Dazu ein Beispiel:

![](attachments/Website%20Sale%20Pricelist%20Fixed%20Discount%20Preisliste.png)

::: warning
Die Anwendung von Rabatten funktioniert auch für wiederkehrende Produkte. Dazu müssen Sie die Produktpreise doppelt erfassen, einmal in den _Preisregeln_ und einmal in den _Time-based rules_.
:::
