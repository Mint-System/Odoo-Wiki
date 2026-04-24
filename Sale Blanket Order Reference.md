---
description: Kundenreferenz von Rahmenauftrag auf den Verkaufsauftrag kopieren.
forge: github.com
kind: howto
name: sale_blanket_order_reference
partner: Mint System
prev: ./sale-blanket-order
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Blanket Order Reference
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Sale Blanket Order Reference

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `sale_blanket_order_reference.copy_ref` können Sie festlegen, ob die die Kundenreferenz vom Rahmenauftrag kopiert werden soll. Setzen Sie den Wert auf `True` damit der Wert kopiert wird.
