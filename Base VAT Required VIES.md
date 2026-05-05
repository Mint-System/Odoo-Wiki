---
description: Die VIES-VAT-Prüfung als obligatorisch festlegen.
forge: github.com
kind: howto
name: base_vat_required_vies
partner: Mint System
prev: ./database
repo: Mint-System/Odoo-Apps-Server-Tools
title: Base VAT Required VIES
versions:
- '16.0'
---


# Base VAT Required VIES

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung kann eine MwSt.-Nummer auf einem Unternehmen nur erfasst werden, wenn diese die [VIES-Prüfung](https://ec.europa.eu/taxation_customs/vies/#/vat-validation) besteht.
