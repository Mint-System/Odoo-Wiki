---
title: Sale Renting Line Period
description: Start- und Enddatum der Miete auf Auftragszeile festlegen.
kind: howto
tags:
  - Mint-System
prev: ./sale-renting
forge: github.com
repo: Mint-System/Odoo-Apps-Sale-Workflow
versions:
- '19.0'
name: sale_renting_line_period
---

# Sale Renting Line Period

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Standardmässig können Sie auf Mietaufträgen das Start- und Enddatum nur auf dem Auftrag festlegen. Mit dieser Erweiterung können Sie für jede Zeile unterschiedliche Vermietungszeiträume definieren. Die Beschreibung und Preis werden entsprechend aktualisiert.