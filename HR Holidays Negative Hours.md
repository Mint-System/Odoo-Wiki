---
description: Abwesenheitsart zur Kompensierung von Überstunden.
forge: github.com
kind: howto
name: hr_holidays_negative_hours
partner: OCA
prev: ./hr-holidays
repo: Mint-System/Odoo-Apps-HR
title: HR Holidays Negative Hours
versions:
- '18.0'
- '16.0'
---


# HR Holidays Negative Hours

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung erhalten Sie eine neue Option _Kompensierung Überstunden_ auf der Abwesenheitsart. Eine Abwesenheit von einer Abwesenheitsart mit aktiver Option, darf das Überstunden-Saldo vorziehen und überziehen.

## Konfiguration

### Abwesenheitsart Kompensation einrichten

Zeigen Sie _Abwesenheiten > Konfiguration > Abwesenheitsarten_ an und öffnen Sie die Abwesenheitsart _Kompensation_.
