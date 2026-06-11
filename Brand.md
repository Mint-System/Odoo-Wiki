---
description: Mehrere Marken für ihr Unternehmen präsentieren.
extensions: true
forge: github.com
kind: howto
name: brand
partner: OCA
prev: ./
repo: OCA/brand
title: Marke
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Marke

![](attachments/icons_odoo_brand.png)

{{ $frontmatter.description }}

Website: <https://github.com/OCA/brand>\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Erweiterungen

| Erweiterung                                                           | Beschreibung                          |
| --------------------------------------------------------------------- | ------------------------------------- |
| [Brand Account](Brand%20Account.md)                                   | Rechnung mit Marke verknüpfen.        |
| [Brand External Report Layout](Brand%20External%20Report%20Layout.md) | Dokument-Layout mit Marke verknüpfen. |

## Konfiguration

### Verwendung von Marken aktivieren

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Unternehmen_ und wählen Sie eine Option im Feld _Brand Use Level_ aus. Speichern Sie den Vorgang.

## Verwendung

### Marke anlegen

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Marken_ und erstellen Sie hier einen neuen Eintrag.
