---
description: Workflow mit Rahmenauftrag per E-Mail.
forge: github.com
kind: howto
name: sale_blanket_order_send
partner: Mint System
prev: ./sale-blanket-order
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Blanket Order Send
versions:
- '17.0'
---


# Sale Blanket Order Send

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Rahmenauftrag per E-Mail versenden

Öffnen Sie _Verkauf > Aufträge > Rahmenaufträge_ und wählen Sie einen Rahmenauftrag Im Status _Entwurf_ aus oder legen Sie einen an. Drücken Sie den Knopf _Send by Email_ und versenden Sie das E-Mail. Der Rahmenauftrag wechselt nun den Status.

![Sale Blanket Order Send](attachments/Sale%20Blanket%20Order%20Send.gif)
