---
title: Sale Subscription Disable Unpaid Closing
description: Verhindert, dass Abonnements mit offenen Rechnungen geschlossen werden.
kind: howto
tags:
  - Mint-System
prev: ./subscription
forge: github.com
repo: Mint-System/Odoo-Apps-Sale-Workflow
versions:
- '18.0'
name: sale_subscription_disable_unpaid_closing
---

# Sale Subscription Disable Unpaid Closing

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Die geplante Aktion "Verkaufsabonnement: Ablauf des Abonnements" sorgt normalerweise dafür, dass Verkaufsaufträge mit wiederkerendem Plan (Abonnements) automatisch geschlossen werden beim Ausführen der Aktion.

Mit dieser Erweiterung wird dieses Verhalten unterdrückt, d.h. es werden generell keine Abonnements mit offenen Rechnungen geschlossen.
