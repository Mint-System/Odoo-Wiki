---
title: Sales Order Invoicing Grouping Criteria
description: Kriterien zur Gruppierung in der Rechnungstellung festlegen.
tags:
- HowTo
- OCA
prev: ./finance
---
# Sales Order Invoicing Grouping Criteria
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `sale_order_invoicing_grouping_criteria`\
Repository: <https://github.com/OCA/account-invoicing/tree/16.0/sale_order_invoicing_grouping_criteria>

## Konfiguration

### Gruppierungs-Kriterium für die Rechnungstellung erfassen

Zeigen Sie die *Einstellungen > Finanzen > Sales Order Invoicing* an. Im Feld *Default Grouping Criteria* können Sie ein Kriterium erfassen. Dazu zwei Beispiele:

* **Name**: Default
* **Grouping Fields**: `company_id`, `currency_id`, `partner_invoice_id`
* **Name**: Unique
* **Grouping Fields**: `id`

## Verwendung

### Globales Gruppierungs-Kriterium für die Rechnungsstellung festlegen

Zeigen Sie die *Einstellungen > Finanzen > Sales Order Invoicing* an und wählen Sie im Feld *Default Grouping Criteria* ein Kriterium aus.

### Gruppierungs-Kriterium für die Rechnungsstellung auf Kontakt festlegen

Zeigen Sie einen Kontakt an und navigieren Sie zum Tab *Rechnungsstellung*. Im Feld *Sales Invoicing Grouping Criteria* können Sie das Kriterium für diesen Kontakt festlegen.