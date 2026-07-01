---
title: Web Chatter Sort
description: Chatter-Nachrichten gemäss Datum sortieren.
kind: howto
tags:
prev: ./discuss
forge: github.com
repo: Mint-System/Odoo-Apps-Social
versions:
- '18.0'
name: web_chatter_sort
partner: Mint System
---

# Web Chatter Sort

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Odoo sortiert Chatter-Nachrichten standardmässig nach der Datebbank-ID, sprich unabhängig vom Datum der Nachricht. Diese Erweiterung stellt sicher, dass immer die neuste Nachricht an der ersten Stelle erscheint.
