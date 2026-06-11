---
description: Rechtsberatungen mit Kunden und Experten abwickeln.
forge: github.com
kind: howto
name: legal_advice_base
partner: Mint System
prev: ./
repo: Sozialinfo/Odoo-Apps-Sozialinfo
title: Legal Advice Base
versions:
- '16.0'
---


# Legal Advice Base

![](attachments/icons_odoo_legal_advice_base.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

```mermaid
flowchart TD
   Start --> New
   New --> |Assign| InProgress
   New --> |Answered| Answered
   New --> |Close| Closed
   InProgress --> |Answered| Answered
   InProgress --> |Close| Closed
   Answered --> |Reopen| Reopened
   Closed --> |Reopen| Reopened

   New["New"]
   InProgress["In Progress"]
   Answered["Answered"]
   Closed["Closed"]
   Reopened["Reopened"]
```
