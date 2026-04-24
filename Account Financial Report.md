---
description: Finanzberichte der Odoo Community Assocation.
forge: github.com
kind: howto
name: account_financial_report
partner: Mint System
prev: ./accounting
repo: OCA/account-financial-reporting
title: Account Financial Report
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Account Financial Report

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Berichte

Mit dieser Erweiterung erhalten Sie Zugriff auf neue Finanzberichte und Dialoge zum Einrichten verschiedener Filter.

### Buchungen aus bestimmten Kontobereich anzeigen

Navigieren Sie nach _Rechnungsstellung > Berichtswesen > OCA Finanzberichte > Hauptbuch_. Es wird ein Dialog mit Filteroptionen angezeigt.

![](attachments/Account%20Financial%20Report%20Dialog.png)

Tragen Sie beim Feld _Nummer_ die Start- und End-Kontonummer ein. Klicken Sie auf _Ansehen_ um eine Vorschau des Berichts zu generieren.

![](attachments/Account%20Financial%20Report.png)
