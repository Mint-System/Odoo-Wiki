---
description: Kaufverträge per E-Mail versenden.
forge: github.com
kind: howto
name: purchase_requisition_send
partner: Mint System
prev: ./purchase-requisition
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Requisition Send
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Purchase Requisition Send

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erweiterung konfigurieren

Damit die Bestelladresse als Empfängeradresse für die E-Mail übernommen wird, muss in der E-Mail-Vorlage im Feld _An (Partner)_ der Wert `${object.partner_order_id.id}` eingetragen sein. Zur Bearbeitung rufen Sie die entsprechende E-Mail-Vorlage unter _Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen_ auf.

### Kaufvertrag per E-Mail versenden

Mit dieser Erweiterungen können Sie Kaufverträge per E-Mail verschicken. Zeigen Sie einen Kaufvertrag via _Einkauf > Aufträge > Kaufverträge_ an und wählen Sie die Aktion _Per E-Mail Versenden_.

::: tip
Der Kaufvertrag wird nach dem Versenden in den Zustand _Gesendet_ versetzt, wenn dieser im Zustand _Entwurf_ oder _Bestätigt_ war.
:::
