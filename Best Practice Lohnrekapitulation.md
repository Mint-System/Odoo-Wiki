---
title: Lohnrekapitulation
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---

# Lohnrekapitulation

Für die Lohndeklaration können Sie eine Auswertung basierend auf den Lohnabrechnungszeilen erstellen.

Standardmässig sind Lohnabrechnungszeilen nicht sichtbar, Sie müssen dazu das HowTo [Lohnabrechnungszeilen anzeigen](HR%20Payroll.md#Lohnabrechnungszeilen%20anzeigen) ausführen.

In der entsprechenden Ansicht können Sie diesen [Filter manuell anlegen](Develpment%20Views.md#Filter%20manuell%20anlegen):

| Feld              | Wert                                                                                                                                          |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Filterbezeichnung | Lohnrekapitulation 🗓️                                                                                                      |
| Modell            | Payslip Line                                                                                                                               |
| Aktion            | Lohnabrechnungszeilen                                                                                                                                              |
| Domain            | `[]`                                                                                                                  |
| Kontext           | `{'pivot_measures': ['total'], 'pivot_column_groupby': ['date_from:year'], 'pivot_row_groupby': ['employee_id', 'x_code_name'], 'group_by': []}` |

Diese Filter bzw. Auswertungen sind unter den Favoriten verfügbar. Mit [Ansicht zu Dashboard hinzufügen](Dashboards.md#Ansicht%20zu%20Dashboard%20hinzufügen) kann die gefilterte Ansicht zum Dashboard hinzgefügt werden.