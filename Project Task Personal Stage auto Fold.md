---
title: Project Task Personal Stage auto Fold
description: Aufgabe in eingekappter Stufe in die entsprechende persönliche Stufe verschieben.
kind: howto
partner: OCA
prev: ./project
forge: github.com
repo: OCA/project
versions:
  - '16.0'
name: project_task_personal_stage_auto_fold
---

# Project Task Personal Stage auto Fold

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>

## Beschreibung

Um eine Aufgabe zu erledigen verschiebt man diese in eine eingeklappte Stufe auf dem Projekt-Dashboard. Wenn Sie für die Aufgabenplanung die persönlichen Aufgabenstufen verwenden, dann muss die Verschiebung zwei mal gemacht werden. Mit dieser Erweiterung erübrigt sich das. Wenn die eingeklappte Stufe den gleichen Namen wie eine persönliche eingeklappte Stufe hat, dann wir die Aufgabe automatisch in die persönliche Stufe verschoben.

