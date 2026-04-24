---
description: Verhindert das versenden von Nachrichten beim Erstellen einer Buchung.
forge: github.com
kind: howto
name: account_move_mail_thread
partner: Mint System
prev: ./discuss
repo: Mint-System/Odoo-Apps-Social
title: Account Move Mail Thread
versions:
- '17.0'
---


# Account Move Mail Thread

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Rechnung ohne Benachrichtigungen erstellen

Mit dieser Erweiterung wird das erstellen von Benachrichtigungen beim Erstellen einer Rechnung unterdrückt. Dazu ein Bespiel mit einer Rechnung generiert aus einem Verkaufsauftrag.

![Account Move Mail Thread](attachments/Account%20Move%20Mail%20Thread.gif)
