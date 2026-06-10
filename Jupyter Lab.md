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

## Verwendung

### Jupyter Lab erstellen

Klicken Sie auf _Jupyter Lab > Lab_ und erstellen Sie einen neuen Eintrag. Klicken Sie auf _Initialize_. Im lokalen Pfad wird die Umgebung eingerichtet und ein `main.ipynb` Notebook als Vorlage angelegt.

### Jupyter Lab starten und öffnen

Wenn Sie ein _Lab_ initalisiert haben, können Sie dieses anzeigen und mit der Aktion _Start_ starten.

![](attachments/Jupyter%20Lab%20Running.png)

Mit der Aktion _Open_ öffnet sich ein neuer Tab mit der Jupyter Lab Umgebung. 

![](attachments/Jupyter%20Lab%20Odoo%20Notebook.png)

Diese Umgebung direkten Zugriff auf Odoo.