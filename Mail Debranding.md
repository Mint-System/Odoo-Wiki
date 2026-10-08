---
title: Mail Debranding
description: Odoo Promotion aus E-Mail-Vorlagen entfernen.
kind: howto
tags:
  - OCA
prev: ./discuss-e-mail
forge: github.com
repo: OCA/server-brand
versions:
- '19.0'
name: mail_debranding
---

# Mail Debranding

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>

## Beschreibung

Dieses Modul entfernt die Marke Odoo aus den E-Mail-Vorlagen. Spezifisch der "Powered by Odoo"-Link entfernt. 
