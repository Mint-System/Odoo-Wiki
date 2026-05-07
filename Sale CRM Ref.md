---
title: Sale CRM Ref
description: Name von Lead als Referenz für Angebot übertragen.
kind: howto
tags:
  - Mint-System
prev: ./crm
forge: github.com
repo: Mint-System/Odoo-Apps-Sale-Workflow
versions:
- '19.0'
name: sale_crm_ref
---

# Sale CRM Ref

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Erweitert [Sale Order Ref](Sale%20Order%20Ref.md) damit beim Erstellen eines Angebots aus einem Lead die Referenz dem Namen des Leads entspricht.