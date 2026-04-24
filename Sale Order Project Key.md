---
description: Angebotsname aus verlinkter Projektnummer generieren.
forge: github.com
kind: howto
name: sale_order_project_key
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Project Key
versions:
- '17.0'
---


# Sale Order Project Key

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Angebotsname aus verlinkter Projektnummer generieren

Gilt ab #Odoo17:

Mit dieser Erweiterung wird der Angebotsname aus der verlinkten Projektnummer generiert. Erstellen Sie ein Angebot und wählen Sie ein Projekt aus.

### Angebotsname von verlinkter Projektnummer übernehmen

Gilt bis #Odoo15:

Mit dieser Erweiterung können Sie beim Erstellen eines Angebots, direkt ein Projekt verlinken. Wird das Angebot erstellt, wird die Projektnummer als Anzeigenamen verwendet. Der Kunde des Angebots wird als Kunde auf dem Projekt eingetragen.

![Sale Order Project Key](attachments/Sale%20Order%20Project%20Key.gif)

Wenn das Angebot bestätigt wird, werden Dienstleistungen mit Aufgaben im verlinkten Projekt erstellt.

![Sale Order Project Key Confirmation](attachments/Sale%20Order%20Project%20Key%20Confirmation.gif)

::: tip
Die zugeordnete Kostenstelle beim Bestätigen vom Angebot auf das Projekt übertragen.
:::
