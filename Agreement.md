---
title: Agreement
description: Basismodul für Vereinbarungen.
kind: howto
tags:
  - OCA
prev: ./documents
forge: github.com
repo: OCA/agreement
versions:
- '19.0'
name: agreement
---

# Agreement

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>

## Beschreibung

Mit diesem Modul können Sie Vereinbarungen bzw. Verträge mit ihren Kunden und Lieferanten erfassen. Es dient als Basismodul für Erweiterungsmodule.
