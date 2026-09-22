---
title: Purchase Blanket Order Sequence on Create
description: Legt den Namen des Vertrags beim Erzeugen an gemäss Sequenz.
kind: howto
tags:
  - Mint-System
prev: ./purchase
forge: github.com
repo: Mint-System/Odoo-Apps-Purchase-Workflow
versions:
- '17.0'
name: purchase_blanket_order_sequence_on_create
---

# Purchase Blanket Order Sequence on Create

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>

## Beschreibung

Mit dieser Erweiterung wird der Name des Rahmenvertrags gemäss Sequenz bei der Erzeugung angelegt und nicht bei der Bestätigung.
