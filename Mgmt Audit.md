---
description: Auditieren Sie ihr Unternehmen.
forge: github.com
kind: howto
name: mgmt_audit
partner: Mint System
prev: ./management-system
repo: Mint-System/Odoo-Apps-Management-System
title: Mgmt Audit
versions:
- '19.0'
- '18.0'
- '17.0'
---


# Mgmt Audit

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguratin

### Audit-Stufen verwalten

Navigieren Sie nach _Management System > Configuration > Audit Stages_. Passen Sie die Stufen gemäss ihren Anforderungen an.

## Verwendung

### Audit erstellen

Zeigen Sie _Management System > Audit > Audits_ an. Erstellen Sie einen neuen Eintrag und füllen Sie die Felder im ersten Tab aus. Im Tab _Statements_ können Sie die zu prüfenden Risikos hinzufügen.

### Audit für ausgewählte Risiken erstellen

Rufen Sie die Risiken via _Management System > Evaluation > Risks_ an und wechseln Sie in die Listenansicht. Filter und markieren Sie die Risiken und wählen Sie _Aktionen > Create Audit with Risk Statements_.

### Nonconformities anzeigen

Die erfassten Nonconformities sind unter _Management System > Evaluation > Non-Conformities_ aufgelistet.

### Recommendations anzeigen

Die Recommendations sind unter _Management System > Evaluation > Recommendations_ verfügbar.
