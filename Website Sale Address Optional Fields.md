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
- '18.0'
name: website_sale_address_optional_fields
---

# Website Sale Address Optional Fields

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung können in der Konfiguration einer Website Felder des Adressformulars im Webshop optional gemacht werden. Dazu geht man zu _Webseite > Konfiguration > Einstellungen > Shop - Checkout Process_ (Odoo 19: _eCommerce_) und wählt die entsprechenden Felder aus (voreingestellt: Name, E-mail, Phone für neue Websites). Die Konfiguration kann unabhängig für jede Webseite getroffen werden.
