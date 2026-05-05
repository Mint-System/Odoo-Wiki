---
description: Offene Aufgaben von Kunde anzeigen.
forge: github.com
kind: howto
name: project_partner_open_tasks
partner: Mint System
prev: ./project
repo: Mint-System/Odoo-Apps-Project
title: Project Partner Open Tasks
versions:
- '16.0'
---


# Project Partner Open Tasks

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Offene Aufgaben von Kunde anzeigen

Zeigen Sie _Kontakte_ an und öffnen Sie einen Kunden. Klicken Sie auf den Smart-Button _X Aufgaben_. Sie werden auf die Listenansicht mit den gefilterten Aufgaben umgeleitet.

::: tip
Für Odoo sind Aufgaben erledigt, wenn die Aufgabe einer Aufgabenphase mit der Option _In Kanban eingeklappt_ zugeordnet ist.
:::
