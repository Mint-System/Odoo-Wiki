---
description: Kopiert das geplante Datum der Rahmenauftragszeile in das Lieferdatum
  der Verkaufsauftragszeile.
forge: github.com
kind: howto
name: sale_blanket_order_commitment_date
partner: Mint System
prev: ./sale-blanket-order
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Blanket Order Commitment Date
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Sale Blanket Order Commitment Date

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Lieferdatum kopieren

Beim Erstellen eines Verkaufsauftrag aus einem Rahmenauftrag wird mit dieser Erweiterung das _Geplantes Datum_ der Rahmenauftragszeile in das _Lieferdatum_ der Verkaufsauftragszeile kopiert.

Rahmenauftragszeile:

![](attachments/Sale%20Blanket%20Order%20Commitment%20Date%20Date%20Schedule.png)

Verkaufsautragszeile:

![](attachments/Sale%20Blanket%20Order%20Commitment%20Date.png)
