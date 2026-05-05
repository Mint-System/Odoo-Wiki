---
description: Projekte über Navigation aufrufen.
forge: github.com
kind: howto
name: project_menu
partner: Mint System
prev: ./project
repo: Mint-System/Odoo-Apps-Project
title: Project Menu
versions:
- '16.0'
---


# Project Menu

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Diese Erweiterung stellt sicher, dass für jedes Projekt ein Menü-Eintrag unter _Projekt > Projekte_ erstellt wird. Diese Einträgen erlauben den Aufruf eines Projekts über die Navigation.

![](attachments/Project%20Menu.png)
