---
description: Lieferbedingungen auf Kaufverträgen festlegen.
forge: github.com
kind: howto
name: purchase_requisition_incoterm
partner: Mint System
prev: ./purchase-requisition
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Requisition Incoterm
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Purchase Requisition Incoterm

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Lieferbedingungen festlegen

Mit dieser Erweiterungen können Sie auf Kaufverträgen die Lieferbedingungen für Lieferanten festlegen. Zeigen Sie einen Kaufvertrag via _Einkauf > Aufträge > Kaufverträge_ an und bearbeiten Sie das Feld _Lieferbedingung_.

::: tip
Wenn Sie auf dem Lieferant eine Standard-Lieferbedingung hinterlegt haben, wird bei der Auswahl des Lieferanten im Kaufvertrag diese Lieferbedingung übernommen.
:::

::: tip
Wenn Sie eine Bestellung aus einem Kaufvertrag erstellen, wird die Lieferbedingungen aus dem Kaufvertrag übernommen.
:::
