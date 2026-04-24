---
description: Gegenkontos auf Buchungszeilen anzeigen.
forge: github.com
kind: howto
name: account_move_line_contra_accounts
partner: Mint System
prev: ./accounting
repo: Mint-System/Odoo-Apps-Account-Financial-Reporting
title: Account Move Line Contra Accounts
versions:
- '17.0'
---


# Account Move Line Contra Accounts

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Gegenkontos von Buchungszeile anzeigen

Mit dieser Erweiterung wird auf jeder Buchungszeile eine Liste der Gegenkontos aus dem Buchungssatz geführt. Navigieren Sie nach _Buchhaltung > Buchhaltung > Buchungszeilen_ und öffnen Sie eine Buchungszeile. Im Feld _Gegenkontos_ sehen Sie eine Liste der Gegenkontos.

![](attachments/Account%20Move%20Line%20Contra%20Accounts.png)

::: tip
Das Feld _Gegenkontos_ erscheint auch in den Listenansichten der Buchungszeilen.
:::
