---
description: Die Anzahl Tage in Abwesenheiten relativ zu den Arbeitszeiten des Unternehmens
  berechnen.
forge: github.com
kind: howto
name: resource_calendar_get_days
partner: Mint System
prev: ./hr
repo: Mint-System/Odoo-Apps-HR
title: Resource Calendar Get Days
versions:
- '15.0'
---


# Resource Calendar Get Days

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Tage in Abwesenheit relativ zu Arbeitsstunden berechnen

Es wird angenommen, dass Sie Mitarbeitende mit einen Arbeitspensum <100% haben. Navigieren Sie nach _Abwesenheit_ und erfassen Sie für einen Mitarbeitenden eine Abwesenheit. Mit dieser Erweiterung berechnet Odoo die Anzahl Tage des Mitarbeitenden relativ zu den Arbeitsstunden des Unternehmens. Dazu ein Beispiel eines Mitarbeitenden mit einem 40%-Pensum:

Der/die Mitarbeitende arbeitet am Dienstag 4 Stunden am Vormittag und gibt für diesen Tag eine bezahlte Abwesenheit ein:

![](attachments/Resource%20Calendar%20Get%20Days%201%20Tag.png)

Das System berechnet für die Abwesenheit 0.5 Tage und zieht diese von den verfügbaren Tagen ab:

![](attachments/Resource%20Calendar%20Get%20Days%20Guthaben.png)
