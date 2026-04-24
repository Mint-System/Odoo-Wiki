---
description: Steuerzuordnung von Rahmenauftrag auf den Verkaufsauftrag kopieren.
forge: github.com
kind: howto
name: sale_blanket_order_fiscal
partner: Mint System
prev: ./sale-blanket-order
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Blanket Order Fiscal
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Sale Blanket Order Fiscal

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `sale_blanket_order_fiscal.copy_fiscal` können Sie festlegen, ob die Steuerzuordnung vom Rahmenauftrag kopiert werden soll. Setzen Sie den Wert auf `True` damit der Wert kopiert wird.

### Steuerzuordnung festlegen

Mit dieser Erweiterung können Sie auf dem Verkaufsauftrag die _Steuerzuordnung_ festlegen.

![](attachments/Sale%20Blanket%20Order%20Extended.png)
