---
description: Log-Regeln für OCA Auditlog.
forge: github.com
kind: howto
name: mgmt_auditlog
partner: Mint System
prev: ./management-system
repo: Mint-System/Odoo-Apps-Management-System
title: Mmgt Auditlog
versions:
- '19.0'
- '18.0'
- '17.0'
---


# Mmgt Auditlog

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Auditlog-Regeln für Risk, Audit und Statement anzeigen

Die Auditlog-Regeln sind unter _Einstellungen > Technisch > Audit > Regeln_ verfügbar. Wenn das Modul installiert wird, wird eine Regel für Risk, Audit und Statement angelegt.

## Verwendung

### Auditlog-Protokolle anzeigen

Jede Bearbeitung von Risk, Audit und Statement wird unter _Einstellungen > Technisch > Audit > Log Lines_ protokolliert.
