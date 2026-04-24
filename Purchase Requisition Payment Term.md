---
description: Kaufverträge mit Zahlungsbedingungen.
forge: github.com
kind: howto
name: purchase_requisition_payment_term
partner: OCA
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Requisition Payment Term
versions:
- '17.0'
---


# Purchase Requisition Payment Term

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Zahlungsbedingungen auf Kaufvertrag festlegen

Mit dieser Erweiterung können Sie auf Kaufverträge Zahlungsbedingungen definieren. Bei der Auswahl eines Lieferanten wird dessen Standardbedingungen auf den Kaufvertrag übertragen.

![](attachments/Purchase%20Requisition%20Payment%20Term.png)

::: tip
Wenn Sie auf dem Lieferant eine Standard-Zahlungsbedingung hinterlegt haben, wird bei der Auswahl des Lieferanten im Kaufvertrag diese Zahlungsbedingung übernommen.
:::

::: tip
Wenn Sie eine Bestellung aus einem Kaufvertrag erstellen, wird die Zahlungsbedingung aus dem Kaufvertrag übernommen.
:::
