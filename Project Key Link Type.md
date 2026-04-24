---
description: Projektnummer anhand Projekttyp erstellen.
forge: github.com
kind: howto
name: project_key_link_type
partner: Mint System
prev: ./project
repo: Mint-System/Odoo-Apps-Project
title: Project Key Link Type
versions:
- '17.0'
---


# Project Key Link Type

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Sequenz auf Projekttyp festlegen

Öffnen Sie einen Projekttyp unter _Projekt > Konfiguration > Project Types_ und legen Sie im Feld _Sequenz_ den die Sequenz fest.

### Projekt mit Projektnummer erstellen

Ist diese Erweiterung installiert wird beim Erstellen des Projekt anhand des Typs eine Projektnummer generiert. Beim Aktualisieren des Projekts wird die Projektnummer und Projektname als Anzeigename für die Kostenstelle festgelegt.

![Project Key Link Type](attachments/Project%20Key%20Link%20Type.gif)
