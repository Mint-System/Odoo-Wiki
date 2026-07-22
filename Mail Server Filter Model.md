---
title: Mail Server Filter Model
description: Schränkt E-Mail-Versand über einen Server auf explizit erlaubte Modelle ein.
kind: howto
tags:
  - Mint-System
prev: ./base
forge: github.com
repo: Mint-System/Odoo-Apps-Server-Tools
versions:
- '19.0'
name: mail_server_filter_model
---

# Mail Server Filter Model

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung muss ein Mail-Server für ausgehende E-Mails explizit konfiguriert werden in Bezug auf das zugehörige Modell der zu versendenden E-Mail.

## Verwendung

Unter _Einstellungen_ > _Technisch_ > _Postausgangsserver_ werden einem Mail-Server explizit Datenmodelle zugewiesen, für die ein E-Mail-Versand möglich ist. Wird zum Beispiel das Modell _Kontakt_ hinzugefügt, können Mails aus der Kontakt-App heraus gesendet werden.
![](attachments/Pasted%20image%2020260722153736.png)
