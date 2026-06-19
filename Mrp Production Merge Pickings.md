---
title: Mrp Production Merge Pickings
description: Ermöglicht das Zusammenführen von Pickings mehrerer Fertigungsaufträge.
kind: howto
tags:
  - Mint-System
prev: ./manufacture
forge: github.com
repo: Mint-System/Odoo-Apps-Manufacture
versions:
- '19.0'
name: mrp_production_merge_pickings
---

# Mrp Production Merge Pickings

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung können die validierten Kommissionierungen (Pickings) von mehreren Fertigungsaufträgen zu einem gemeinsamen Picking zusammengeführt werden. Dazu markiert man in der Übersicht der Fertigungsaufträge diejenigen, deren Pickings zusammengeführt werden sollen, und ruft die Aktion "Pickings zusammenführen" auf. 
Dabei werden Bewegungen, die sich auf das gleiche Produkt (mit gleicher Serien/Chargennummer und gleichem Lagerort) beziehen, ebenfalls zusammengeführt.
