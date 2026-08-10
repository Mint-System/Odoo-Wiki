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

Die geplante Aktion _Verkaufsabonnement: Ablauf des Abonnements_ sorgt normalerweise dafür, dass Verkaufsaufträge mit wiederkerendem Plan (Abonnements) automatisch geschlossen werden beim Ausführen der Aktion.

Grundsätzlich schliesst Odoo folgende drei Gruppen an Abonnements:
1) Abonnenments, deren Enddatum erreicht wurde (_domain_close_),
2) Abonnements mit unbezahlten Rechnungen (_unpaid_),
3) Abonnemnts, deren nächste Rechnung unter Berücksichtigung einer Auto-Close-Frist in der Vergangenheit liegt (_expired_), d.h. Abonnement wurde nicht verlängert

Mit dieser Erweiterung können Abonnements, die in Gruppe 2 oder 3 fallen, vom automatischen Schliessen ausgenommen werden. Mithilfe der beiden Systemparameter
- `sale_subscription_disable_unpaid_closing.skip_unpaid_subscription_close`
- `sale_subscription_disable_unpaid_closing.skip_expired_subscription_close`
kann dieses Verhalten deaktiviert werden, indem sie auf den Wert _True_ gesetzt werden.
