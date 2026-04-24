---
description: Bankkonto anhand Währung auswählen.
forge: github.com
kind: howto
name: account_invoice_select_bank
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Invoice Select Bank
versions:
- '17.0'
---


# Account Invoice Select Bank

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Bankkonto anhand Währung auswählen

Beim Erstellen einer Rechnung oder beim Wechsel der Währung einer Rechnung, wird das Feld _Empfängerbank_ aktualisiert. Dabei wird die Währung des Bankkonto und der Rechnung berücksichtigt.

![Account Invoice Select Bank](attachments/Account%20Invoice%20Select%20Bank.gif)
