---
title: Legal Advice Base
description: Rechtsberatungen mit Kunden und Experten abwickeln.
tags:
- HowTo
- Drittanbieter
prev: ./
---
# Legal Advice Base
![](attachments/icons_odoo_legal_advice_base.png)

{{ $frontmatter.description }}

Technischer Name: `legal_advice_base`\
Repository: <https://github.com/Sozialinfo/Odoo-Apps-Sozialinfo/tree/16.0/legal_advice_base>

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