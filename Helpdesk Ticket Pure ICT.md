---
title: Helpdesk Ticket Pure ICT
description: Change Management relatierte Felder zum Ticket hinzufügen.
kind: howto
partner: Mint-System
prev: ./helpdesk
forge: github.com
repo: Mint-System/Odoo-Apps-Helpdesk
versions:
  - '17.0'
  - '18.0'
name: helpdesk_ticket_pureict
---

# Helpdesk Ticket Pure ICT

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a><!--\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>-->

## Beschreibung

Der Bereich „Change-Management“ im Ticketformular enthält die Felder, die zur Beschreibung einer Änderung erforderlich sind: Kategorie, Grund, Risiko, Auswirkungen, Implementierungsplan, Rollback-Plan, Testplan sowie das geplante Ausführungsdatum.
