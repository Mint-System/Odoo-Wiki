---
description: Bestellvorschläge für Kompontenten aus Stücklisten anhand Lageroperationen
  und Prognosen generieren lassen.
forge: github.com
kind: howto
name: ''
partner: Mint System
prev: ./stock
repo: Mint-System/Demand-Planner
title: Demand Planner
versions:
- '16.0'
---


# Demand Planner

![](attachments/odoo_icon_demand_planner.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Nachfragekalkulation für Vorgangstyp aktivieren

Damit Bestellvorschläge generiert werden, muss dies explizit auf dem Vorgangstyp festgelegt werden. Navigieren Sie nach _Lager > Konfiguration > Vorgangstyp_ und wählen Sie den entsprechenden Typen aus. Aktivieren Sie die Option _Calculate demand for orders of this type_.

### Bestellvorschläge anzeigen

Öffnen Sie _Lager > Berichtswesen > Demand Planner_ und klicken Sie auf _Refresh_. Für Aufträge von aktivierten Vorgangstypen werden nun Bestellvorschläge generiert und angezeigt.
