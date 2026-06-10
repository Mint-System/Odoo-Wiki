---
title: Jupyter Notebook Run
description: Jupyter Notebooks aus Odoo parametrieren und ausführen.
kind: howto
tags:
  - Mint-System
prev: ./data-management
forge: github.com
repo: Mint-System/Odoo-Apps-Data-Analytic
versions:
- '18.0'
name: juypter_notebook_run
---

# Jupyter Notebook Run

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

In Odoo können Sie ein [Jupyter Notebook](https://docs.jupyter.org/en/latest/#what-is-a-notebook) anzeigen und ausführen lassen. Der Dialog zur Ausführung erlaubt die Übergabe von Prametern und das Hochladen von Dateien. Das Resultat jeder Ausführung ist in ersichtlich und kann bei Bedarf neu gestartet werden. 