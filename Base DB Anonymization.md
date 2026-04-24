---
description: Inhalt von ausgewählten Datenbank-Felder anonmyisieren.
forge: github.com
kind: howto
name: base_db_anonymization
partner: Mint System
prev: ./database
repo: Mint-System/Odoo-Apps-Server-Tools
title: Base DB Anonymization
versions:
- '16.0'
---


# Base DB Anonymization

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Anonymisierte Felder konfigurieren

Navigieren Sie nach _Einstellungen > Technisch > Fields Anonymize_. Erstellen und verwalten Sie hier die Anonymisierungs-Einträge.

- **Model**: Auswahl Datenbankmodell um Auswahl Felder zu filtern
- **Field**: Ausgewähltes Feld, dessen Inhalt anonymisiert werden soll
- **Anonymize Strategy**: Methode um Feldinhalt zu anonymisieren
- **Domain**: Filter zur Auswahl der Datenbank-Einträge
- **Output New Value**: Aktivieren falls der neue Feldinhalt bei der Anonymisierung im Server-Log ausgegeben werden soll
- **Is Anonymized**: Ist aktiviert wenn Anonymisierung für dieses Feld durchgeführt wurde

::: warning
Wenn das Feld **Is Anonymized** gesetzt ist, wird der Anonymisierungs-Eintrag ignoriert.
:::

## Verwendung

### Datenbank-Felder anonymisieren

Navigieren Sie nach _Einstellungen > Technisch > Fields Anonymize_ und markieren Sie die Anonymisierungs-Einträge, die Sie ausführen möchten. Wählen Sie die Aktion _Anonymize Records_.
