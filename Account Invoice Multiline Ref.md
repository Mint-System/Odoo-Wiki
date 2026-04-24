---
description: Kundenreferenz auf Verkaufsauftrag und Rechnung mit mehreren Zeilen.
forge: github.com
kind: howto
name: account_invoice_multiline_ref
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Invoice Multiline Ref
versions:
- '17.0'
- '15.0'
---


# Account Invoice Multiline Ref

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Mehrzeilige Kundenreferenz erfassen

Navigieren Sie nach _Verkauf_, zeigen Sie ein Angebot an und Öffnen Sie den Tab _Weitere Informationen_. Im Feld _Kundenreferenz_ können Sie nun mehrere Zeile erfassen.

::: tip
Wenn Sie eine Rechnung erstellen wird das Feld übertragen. Im Anzeigenamen der Rechnungen werden die Zeilenumbrüche Kundenreferenz mit Leerschlägen ersetzt.
:::

::: warning
Die Referenz wird im Anzeigennamen nur für nicht-ausgehende Rechnung angezeigt.
:::
