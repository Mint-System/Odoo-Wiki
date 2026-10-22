---
title: Website Sale Address Optional Fields
description: Legt optionale Felder im Adressformular via Setting fest.
kind: howto
tags:
  - Mint-System
prev: ./website-sale
forge: github.com
repo: Mint-System/Odoo-Apps-Website
versions:
  - '19.0'
  - '18.0'
name: website_sale_address_optional_fields
---

# Website Sale Address Optional Fields

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung können in der Konfiguration einer Website Felder des Adressformulars im Webshop optional gemacht werden. Die Konfiguration kann unabhängig für jede Webseite getroffen werden.

## Konfiguration

### Optionale Felder festlegen

Gehen Sie auf _Webseite > Konfiguration > Einstellungen > Shop - Checkout Process_ (Odoo 19: _eCommerce_) und wählen sie bei _Optional Address Fields_ die entsprechenden Felder aus.

::: tip
Auf eneun Websites ist Name, E-mail und Phone als Standard hinterlegt.
:::