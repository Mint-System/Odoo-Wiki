---
title: Auswertung Auftragszeilen
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
partner: Mint System
---

# Auswertung Auftragszeilen

Statt die Aufträge oder den Verkaufsbericht zu verwenden, empfehlen wir die Auftragszeilen auswertungen. Damit sind beispielsweise solche Auswertungen möglich:

![](attachments/Best%20Practice%20Auftragszeilen%20auswerten.png)

Standardmässig sind Auftragszeilen nicht sichtbar, Sie müssen dazu das HowTo [Auftragszeilen anzeigen](Sale.md#Auftragszeilen%20anzeigen) ausführen.

In der entsprechenden Ansicht können Sie einen [Filter manuell anlegen](Development%20Views.md#Filter%20manuell%20anlegen). Diese Filter bzw. Auswertungen sind unter den Favoriten verfügbar. Mit [Ansicht zu Dashboard hinzufügen](Dashboards.md#Ansicht%20zu%20Dashboard%20hinzufügen) kann die gefilterte Ansicht zum Dashboard hinzgefügt werden.

Als Einstieg können Sie diese Auswertungen erstellen:

### Verkauf nach Produktgruppen

| Feld              | Wert                                                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Filterbezeichnung | Verkauf nach Produktgruppen pro Monat 🗓️                                                                                                      |
| Modell            | Sale Order Line                                                                                                                               |
| Aktion            | Auftragszeilen                                                                                                                                |
| Domain            | `[["untaxed_amount_invoiced",">",0],["state", "=", "sale"]]`                                                                                  |
| Kontext           | `{'pivot_measures': ['price_subtotal'], 'pivot_column_groupby': ['x_date_order:month'], 'pivot_row_groupby': ['x_categ_id'], 'group_by': []}` |

### Vorjahresvergleich Produktgruppen

| Feld              | Wert                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Filterbezeichnung | Vorjahresvergleich 22/21 Produktgruppen 📊                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Modell            | Sale Order Line                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Aktion            | Auftragszeilen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Domain            | `[["state", "=", "sale"]]`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Kontext           | `{'graph_measure': '__count__', 'graph_mode': 'bar', 'graph_groupbys': ['x_categ_id'], 'group_by': ['x_categ_id'], 'comparison': {'comparisonId': 'previous_year', 'fieldName': 'x_date_order', 'fieldDescription': 'Auftragsdatum', 'range': '["&", ["x_date_order", ">=", "2021-12-31 23:00:00"], ["x_date_order", "<=", "2022-12-31 22:59:59"]]', 'rangeDescription': '2022', 'comparisonRange': '["&", ["x_date_order", ">=", "2020-12-31 23:00:00"], ["x_date_order", "<=", "2021-12-31 22:59:59"]]', 'comparisonRangeDescription': '2021'}}` |

### Verkauf nach Kundengruppe und Rabatt

| Feld              | Wert                                                                                                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Filterbezeichnung | Verkauf nach Kundengruppe und Rabatt pro Monat im 2023 🗓️                                                                                                              |
| Modell            | Sale Order Line                                                                                                                                                        |
| Aktion            | Auftragszeilen                                                                                                                                                         |
| Domain            | `["&","&",["x_date_order",">=","2022-12-31 23:00:00"],["x_date_order","<=","2023-12-31 22:59:59"],["price_subtotal",">",0]]`                                           |
| Kontext           | `{'pivot_measures': ['untaxed_amount_invoiced'], 'pivot_column_groupby': ['x_date_order:month'], 'pivot_row_groupby': ['x_pricelist_id', 'discount'], 'group_by': []}` |
