---
description: Produkt und Inventar verknüpfen.
forge: github.com
kind: howto
name: maintenance_product
partner: OCA
prev: ./maintenance
repo: OCA/maintenance
title: Maintenance Product
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Maintenance Product

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Inventarkategorie und Produktkategorie verknüpfen

Navigieren Sie nach _Wartung > Konfiguration > Inventarkategorie_ und öffnen Sie einen Eintrag. Legen Sie auf _Product Category_ einen Wert fest.

## Verwendung

### Produkt und Inventar verküpfen

Mit dieser Erweiterung können Sie ein Produkt erstellen und ein Inventar verknüpfen. Navigieren Sie nach _Lager > Produkte > Produkte_ und erstellen Sie ein neues Produkt. Wählen Sie die Option _Can be Maintenance_ aus. Erstellen Sie ein neues Inventar und wählen Sie eine Inventarkategorie, die mit einer Produktkategorie verknüpft wurde. Im Feld _Product_ wählen Sie nun das vorher erstellte Produkt.
