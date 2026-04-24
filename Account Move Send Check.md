---
description: Zeigt Hinweis ob Rechnung versendet wird oder wurde in Senden-Dialog.
forge: github.com
kind: howto
name: account_move_send_check
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Move Send Check
versions:
- '18.0'
---


# Account Move Send Check

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung wird in der Liste der Ausgangsrechnung das Feld _Wird gesendet_ sichtbar. Im Weiteren wird im Dialog _Drucken & senden_ ein Hinweis zum Versandstatus der Rechnung eingeblendet.
