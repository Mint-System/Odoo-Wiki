---
description: Smart Button für abhängige Aufgaben.
forge: github.com
kind: howto
name: project_task_dependency_counter
partner: Mint System
prev: ./project
repo: Mint-System/Odoo-Apps-Project
title: Project Task Dependency Counter
versions:
- '15.0'
---


# Project Task Dependency Counter

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Abhängige Aufgaben anzeigen

Öffnen Sie eine Aufgabe mit abhängigken Aufgaben über _Projekt > Alle Aufgaben > Aufgabe wählen_. Oben rechts finden Sie einen Smart Button mit der Anzahl der abhängigen Aufgaben.

![](attachments/Project%20Task%20Dependency%20Counter%20Button.png)

Mit einem Klick darauf werden die abhängigen Aufgaben in der Kanban-Ansicht angezeigt.
