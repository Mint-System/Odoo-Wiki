---
description: Generierung der QR-Rechnung ohne ISR-Nummer.
forge: github.com
kind: howto
name: l10n_ch_qr_iban
partner: Mint System
prev: ./l10n-ch
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Switzerland QR IBAN
versions:
- '15.0'
- '14.0'
---


# Switzerland QR IBAN

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

::: warning
Diese App ist veraltet und wird aufgrund von Aktualisierungen in Odoo nicht mehr benötigt.
#DEPRECATED
:::

## Verwendung

### QR-Rechnung generieren

Mit dieser Erweiterung muss keine ISR-Nummer in Bankddaten hinterlegt werden. Beim Bestätigen der Rechnung wird eine Zahlungsreferenz generiert und als Referenz in der QR-Rechnung hinterlegt.

![Switzerland QR IBAN](attachments/Switzerland%20QR%20IBAN.gif)
