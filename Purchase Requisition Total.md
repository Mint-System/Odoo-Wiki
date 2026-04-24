---
description: Kaufvertrag mit Steuern, Zwischensummen und Total.
forge: github.com
kind: howto
name: purchase_requisition_total
partner: Mint System
prev: ./purchase-requisition
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Requisition Total
versions:
- '16.0'
---


# Purchase Requisition Total

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Kalkulation Kaufvertrag anzeigen

Mit dieser Erweiterung wird auf dem kaufvertrag der Netto- und Steuerbetrag sowie Total berechnet. Auf den Auftragspositionen können Sie die Einkaufssteuer festelgen. Für jede Zeile wird die Zwischensumme berechnet.

Listenansicht der Kaufverträge:

![](attachments/Purchase%20Requisition%20Total%20Liste.png)

Formularansicht der Kaufverträge:

![](attachments/Purchase%20Requisition%20Total%20Formular.png)
