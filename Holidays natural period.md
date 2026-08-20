---
title: Holidays natural period
description: Abwesenheit an Tagen ohne Soll-Arbeitszeit erfassen.
kind: howto
tags:
  - OCA
prev: ./hr-holidays
forge: github.com
repo: OCA/hr-holidays
versions:
- '19.0'
name: hr_holidays_natural_period
---

# Holidays natural period

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>

## Beschreibung

Mit diesem Modul erhalten Sie bei den Auswahl der Einheit einer Abwesenheit zwei neue Optionen "Natural day" und "Natural day (Half Day)". Abwesenheiten mit diesen Einheiten können an Tagen erfasst werden, wo keine Soll-Arbeitszeit besteht, beispielsweise Wochenende oder Vertrauensarbeitszeit.