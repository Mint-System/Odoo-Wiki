---
description: Kontoauszug basierend auf Buchungszeilen erstellen.
forge: github.com
kind: howto
name: account_journal_items_report
partner: Mint System
prev: ./accounting
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Journal Items Report
versions:
- '14.0'
---


# Account Journal Items Report

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Bericht

### Kontoauszug für Buchungszeilen drucken

Navigieren Sie nach _Buchhaltung > Buchhaltung > Buchungszeilen_. Markieren Sie die alle Buchungszeilen, welche auf dem Bericht _Kontoauszug_ erscheinen sollen. Wählen Sie _Drucken > Kontoauszug_ um die PDF-Datei zu erstellen.

![](attachments/Account%20Journal%20Items%20Report%20Beispiel.png)

::: warning
Die Erstellung des Berichts für 7500 Buchungszeilen dauert ~60 Sekunden.
:::
