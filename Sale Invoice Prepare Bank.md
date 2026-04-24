---
description: Bankkonto anhand Währung auswählen.
forge: github.com
kind: howto
name: sale_invoice_prepare_bank
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Sale Invoice Prepare Bank
versions:
- '17.0'
---


# Sale Invoice Prepare Bank

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Bankkonto anhand Währung auswählen

Beim Erzeugen einer Rechnung aus einem Verkaufsauftrag wird mit dieser Erweiterung automatisch das Feld _Empfängerbank_ in der Rechnung ausgefüllt. Anhand der Währung des Verkaufsauftrags wird das passende Konto des Unternehmens ausgewählt.
