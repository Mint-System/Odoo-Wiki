---
description: Kriterien zur Gruppierung in der Rechnungstellung festlegen.
forge: github.com
kind: howto
name: sale_order_invoicing_grouping_criteria
partner: OCA
prev: ./invoicing
repo: OCA/account-invoicing
title: Sale Order Invoicing Grouping Criteria
versions:
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Sale Order Invoicing Grouping Criteria

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Gruppierungs-Kriterium für die Rechnungstellung erfassen

Zeigen Sie die _Einstellungen > Buchhaltung > Sales Order Invoicing_ an. Im Feld _Default Grouping Criteria_ können Sie ein Kriterium erfassen. Dazu zwei Beispiele:

- **Name**: Sammelrechnung
- **Grouping Fields**: `company_id`, `currency_id`, `partner_invoice_id`
- **Name**: Einzelrechnung
- **Grouping Fields**: `id`

## Verwendung

### Globales Gruppierungs-Kriterium für die Rechnungsstellung festlegen

Zeigen Sie die _Einstellungen > Buchhaltung > Sales Order Invoicing_ an und wählen Sie im Feld _Default Grouping Criteria_ ein Kriterium aus.

### Gruppierungs-Kriterium für die Rechnungsstellung auf Kontakt festlegen

Zeigen Sie einen Kontakt an und navigieren Sie zum Tab _Rechnungsstellung_. Im Feld _Sales Invoicing Grouping Criteria_ können Sie das Kriterium für diesen Kontakt festlegen.
