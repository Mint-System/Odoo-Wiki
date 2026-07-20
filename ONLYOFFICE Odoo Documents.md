---
title: ONLYOFFICE Odoo Documents
description: Dokumente mit ONLYOFFICE bearbeiten.
kind: howto
tags:
  - Thirdparty
prev: ./onlyoffice
forge: github.com
repo: ONLYOFFICE/onlyoffice_odoo
versions:
- '19.0'
name: onlyoffice_odoo_documents
---

# ONLYOFFICE Odoo Documents

![icons_odoo_documents](attachments/icons_odoo_documents.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung können Sie Office-Dokumente wie .docx in der Dokument-App von Odoo bearbeiten.

## Verwendung

### Dokument hochalden

Zeigen Sie ein Office-Dokument im File-Explorer ihres Systems an. Rufen Sie _Dokumente_ in Odoo auf und navigieren Sie in den entsprechenden Ordner. Wählen Sie entwender _Neu > Hochladen_ oder laden Sie das Dokument per Drag'n Drop in den Ordner.

### Dokument bearbeiten

Markieren Sie ein Office-Dokument in der _Dokumente_ App von Odoo. Wählen Sie _Mehr > In ONLYOFFICE öffnen_. Es öffnet sich ein neuer Tab und Sie können das Dokument bearbeiten.

![](attachments/ONLYOFFICE%20Odoo%20Documents.png)

### Dokument teilen und bearbeiten

Wenn Sie ein [Dokument teilen](Documents.md#Dokument%20teilen) und einen öffentlichen Link mit Berechtigung _Bearbeiten_ im Browser öffnen, erhalten Sie eine Option _Öffnen in ONLYOFFICE_. 