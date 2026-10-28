---
title: Project Update List
description: Mehrere Projektaktualisierungen aus Listen-Ansicht vorbereiten.
kind: howto
partner: Mint-System
prev: ./project
forge: github.com
repo: Mint-System/Odoo-Apps-Project
versions:
  - '16.0'
name: project_update_list
---

# Project Update List

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit diesem Modul erhalten Sie eine Listenansicht für Projektaktualisierungen. In der Listen-Ansicht der Projekte können Sie mehere Projekt markieren und mit einer Aktion die Projektaktualisierungen vorbereiten. Es wird eine Batch-Name vorgeschlagen um die Aktualisierungen zu bündeln.