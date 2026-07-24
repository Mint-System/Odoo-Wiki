---
title: Certificate Planner Export Pdm
description: Exportiert Zertifikate und Teile in PDM-XML-Format
kind: howto
tags:
  - Mint-System
prev: ./
forge: github.com
repo: Mint-System/Odoo-Apps-Certificate-Planner
versions:
- '14.0'
name: certificate_planer_export_pdm
---

# Certificate Planner Export Pdm

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>

## Beschreibung

Mit dieser Erweiterung können zertifizierte Bauteile als XML-Datensatz exportiert werden. Die XML-Syntax ist so gewählt, dass ein automatischer Import in ein PDM-System  aufgesetzt werden kann.
