---
description: Asset-Verwaltung für das Management-System.
forge: github.com
kind: howto
name: mgmt_asset
partner: Mint System
prev: ./management-system
repo: Mint-System/Odoo-Apps-Management-System
title: Mmgt Asset
versions:
- '19.0'
- '18.0'
- '17.0'
---


# Mmgt Asset

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Asset erfassen

Navigieren Sie nach _Management System > Inventory > Assets_. Klicken Sie auf _Neu_ und wählen Sie als erstes im Feld _Reference_ ein Datenmodell aus. Für das ausgewählte Datenmodell wählen Sie einen Eintrag aus. Der Titel des Assets wird generiert. Speichern Sie den Eintrag.
