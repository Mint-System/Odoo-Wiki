---
description: Warenkörbe nach einer bestimmten Zeit automatisch abbrechen.
forge: github.com
kind: howto
name: website_sale_cart_expire
partner: OCA
prev: ./website-sale
repo: OCA/e-commerce
title: Website Sale Cart Expire
versions:
- '16.0'
---


# Website Sale Cart Expire

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Anzahl Stunden für automatisches Abbrechen von verlassenen Warenkörben festlegen

Navigieren Sie nach _Einstellungen > Website > E-Mail & Marketing_. Geben Sie bei _Expire Carts_ die Anzahl Stunden ein.

::: tip
Standardwert für die automatische Versendung des Erinnerungsmails für verlassene Warenkörbe ist 10 Stunden.
:::
