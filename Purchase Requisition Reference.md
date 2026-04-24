---
description: Feld Lieferantenreferenz auf Kaufvertrag hinzufügen.
forge: github.com
kind: howto
name: purchase_requisition_reference
partner: Mint System
prev: ./purchase-requisition
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Requisition Reference
versions:
- '17.0'
---


# Purchase Requisition Reference

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `purchase_requisition_reference.copy_reference` können Sie festlegen, ob die Lieferantenreferenz vom Einkaufsvertrag kopiert werden soll. Setzen Sie den Wert auf `True` damit der Wert kopiert wird.

### Feld Lieferantenreferenz auf Kaufvertrag hinzufügen

Mit diesem Modul erhält der Kaufvertrag ein Feld _Lieferantenreferenz_.

![](attachments/Purchase%20Requisition%20Reference.png)
