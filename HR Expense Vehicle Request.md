---
description: Brückenmodul für Fahrzeuganfrage und Auslage.
forge: github.com
kind: howto
name: hr_expense_vehicle_request
partner: Mint System
prev: ./hr-expense
repo: Mint-System/Odoo-Apps-HR
title: HR Expense Vehicle Request
versions:
- '14.0'
---


# HR Expense Vehicle Request

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Aus Fahrzeuganfrage eine Auslage erstellen

Mit dieser Erweiterung wird beim Retournieren einer privaten Fahrzeuganfrage eine Auslage erstellt.

![HR Expense Vehicle Request](attachments/HR%20Expense%20Vehicle%20Request.gif)

Wenn Sie eine [Spesenabrechnung erstellen](HR%20Expense.md#Spesenabrechnung%20erstellen) wird der Manager des Fahrzeugs als Verantwortlicher für die Spesenabrechnung eingetragen.
