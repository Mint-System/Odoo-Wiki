---
description: Zusätzliche Header und Footer Notizen kopiert von Verkaufsauftrag.
forge: github.com
kind: howto
name: account_invoice_notes
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Invoice Notes
versions:
- '17.0'
---


# Account Invoice Notes

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Notizen hinzufügen

Mit dier Erweiterung haben Sie auf Rechnungen zwei zusätzliche Notizfelder _Buchhaltung > Kunden / Lieferante > Rechnungen > Rechnung auswählen_ im Tab _Notes_. Wird eine Rechnung aus dem Verkaufsauftrag generiert, werden die Notizfelder kopiert.

![Account Invoice Notes](attachments/Account%20Invoice%20Notes.gif)
