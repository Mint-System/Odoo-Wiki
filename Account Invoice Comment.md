---
description: Kommentarfeld auf Rechnung.
forge: github.com
kind: howto
name: account_invoice_comment
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Invoice Comment
versions:
- '18.0'
- '17.0'
- '16.0'
- '14.0'
---


# Account Invoice Comment

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Option Kopieren Kommentar von Verkaufsauftrag aktivieren

Navigieren Sie nach _Einstellungen > Buchhaltung > Kundenrechnung_ und aktivieren Sie die Option _Kopieren Kommentar Verkaufsauftrag_.

## Verwendung

### Kommentar hinzufügen

Öffnen Sie eine Rechnung via _Buchhaltung > Kunden > Rechnungen_. Im Tab _Weitere Informationen_ finden Sie das Feld _Referenz_.

![](attachments/Account%20Invoice%20Comment.png)

Wenn Sie einen neuen Kommentar erfassen oder einen bestehenden Kommentar anpassen, wird das im Chatter protokolliert.
