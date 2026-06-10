---
title: Jupyter Lab
description: Starte Jupyter Lab Projekte mit direktem Zugriff auf Odoo.
kind: howto
tags:
  - Mint-System
prev: ./data-management
forge: github.com
repo: Mint-System/Odoo-Apps-Data-Analytic
versions:
- '18.0'
name: jupyter_lab
---

# Jupyter Lab

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung können Sie in Odoo ein [Jupyter Lab](https://jupyter.org/) Projekt erstellen und starten. Das Jupyter Lab läuft mit den Privilegien des Benutzers, der das Lab gestartet hat.
