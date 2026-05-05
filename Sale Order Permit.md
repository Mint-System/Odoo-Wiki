---
description: Verkauf von Patenten
forge: github.com
kind: howto
name: sale_order_permit
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Permit
versions:
- '18.0'
---


# Sale Order Permit

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

### Verwendung

Mit diesem Modul lassen sich zeitlich befristete Patente (Permits) verkaufen. Die Unterscheidung in Jahrespatent, Wochenpatent und Tagespatent wird durch den Wert der Variablen `duration` festgelegt. Neben der Laufzeit der Patente werden auch das Geburtsdatum und ein Passbild des Käufers gespeichert.
