---
description: Lead Notizen von Vorlage aktualisieren.
forge: github.com
kind: howto
name: crm_lead_template
partner: Mint System
prev: ./crm
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: CRM Lead Template
versions:
- '19.0'
---


# CRM Lead Template

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiugraiton

### Lead-Vorlage erstellen

Navigiere nach _CRM > Konfiguration > Lead Templates_ und erstelle einen neuen Eintrag.

## Verwendung

### Lead aus Vorlage aktualisieren

Öffne einen bestehenden oder neuen Lead unter _CRM_. Wähle im Feld _Lead Template_ eine Vorlage aus. Speichere den Eintrag und die Felder aus der Vorlage werden übertragen.
