---
description: Bestehendes Projekt mit Angebot verlinken.
forge: github.com
kind: howto
name: sale_project_link
partner: Mint System
prev: ./sale-timesheet
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Project Link
versions:
- '17.0'
- '16.0'
---


# Sale Project Link

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>
