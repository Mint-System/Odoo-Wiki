---
description: Brückenmodul für Fahrzeugflotte und Fahrzeuganfrage.
forge: github.com
kind: howto
name: fleet_hr_vehicle_request
partner: Mint System
prev: ./hr
repo: Mint-System/Odoo-Apps-HR
title: Fleet HR Vehicle Request
versions:
- '14.0'
---


# Fleet HR Vehicle Request

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Fahrzeug-Retoure auf Fahrzeug loggen

Wenn Sie ein [Fahrzeug retournieren](HR%20Vehicle%20Request.md#Fahrzeug%20retournieren) wird mit dieser Erweiterung der Kilometerstand auf das Fahrzeug übertragen und die Fahrt entsprechend geloggt.

![Fleet Employee Vehicle Request](attachments/Fleet%20HR%20Vehicle%20Request.gif)
