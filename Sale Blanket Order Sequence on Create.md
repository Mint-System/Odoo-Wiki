---
title: Sale Blanket Order Sequence on Create
description: Legt den Namen des Auftrags beim Erzeugen an gemäss Sequenz.
kind: howto
tags:
  - Mint-System
prev: ./sale-blanket-order
forge: github.com
repo: Mint-System/Odoo-Apps-Sale-Workflow
versions:
- '17.0'
name: sale_blanket_order_sequence_on_create
---

# Sale Blanket Order Sequence on Create

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>

## Beschreibung

Mit dieser Erweiterung wird der Name des Auftrags gemäss Sequenz bei der Erzeugung angelegt und nicht bei der Bestätigung.
