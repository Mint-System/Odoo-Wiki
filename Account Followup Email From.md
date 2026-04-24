---
description: Mahnbericht von definierter E-Mail-Adresse verschicken.
forge: github.com
kind: howto
name: account_followup_email_from
partner: Mint System
prev: ./invoicing-followup
repo: Mint-System/Odoo-Apps-Account-Financial-Reporting
title: Account Followup Email From
versions:
- '17.0'
---


# Account Followup Email From

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Absenderadresse für E-Mail Mahnbericht definieren

Mit dem Systemparameter `account_followup_email_from.email_from` können Sie eine alternative E-Mail-Adresse als Absender von Mahnberichten festlegen. Legen Sie als Wert die E-Mail-Adresse im Format `invoice@example.com` fest.
