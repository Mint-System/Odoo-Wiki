---
description: Fügen Sie Dokumentation zu Ihren Requirements hinzu.
forge: github.com
kind: howto
name: mgmt_requirement_knowledge
partner: Mint System
prev: ./management-system
repo: Mint-System/Odoo-Apps-Management-System
title: Mgmt Requirement Knowledge
versions:
- '19.0'
---


# Mgmt Requirement Knowledge

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>


## Verwendung

### Dokumentation erfassen

Requirements können via Paragraphen mit Dokumentationen verknüpft werden. Diese können Urls oder Einträge aus der Wissensdatenbank (Wiki) sein.

Öffen Sie einen Paragraphen und fügen Sie unter _Dokumentationen_ einen neuen Verweis hinzu.
Wählen Sie zunächst den Typ aus: _Url_ oder _Wiki_ und geben Sie dann die entsprechende Referenz ein.

### Backlinks anzeigen

Haben Sie einen Wiki-Eintrag als Dokumentation hinzugefügt, werden auf diesem Eintrag die zugehörigen Paragraphen als Backlinks angezeigt.

