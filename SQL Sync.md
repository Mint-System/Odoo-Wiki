---
description: Mit SQL-Abfragen Daten empfangen und senden.
forge: github.com
kind: howto
name: zbsync_sql
partner: Zebroo
prev: ./zebroo-sync
repo: Odoo-Ninjas/zync-stable
title: SQL Sync
versions:
- '16.0'
---


# SQL Sync

![icons_odoo_thirdparty](attachments/icons_odoo_thirdparty.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### SQL-Verbindung hinzufügen

Navigieren Sie nach _Zebroo Sync > Connections > SQL_ und erstellen Sie einen neuen Eintrag.

- **Type**: Typ des Datenbankssystems
- **DBName**: Name der Datenbank
- **Host**: Hostname des Datenbankservers
- **Port**: Port abhängig vom Typ
- **Username**: Login von Datenbank-Benutzer
- **Passwort**: Passwort von Datenbank-Benutzer

### SQL-Grabber einrichten

Öffnen Sie eine Pipeline via _Zebroo Sync_ und fügen Sie einen Worker hinzu. Wählen Sie _SQL Grabber_ als _Type_ aus. Anschliessend wählen Sie die SQL-Verbindung in _Connection_ aus. Im Feld _SQL_ fügen Sie die SQL-Abfrage hinzu. Erstellen Sie unter _Domain_ einen Eintrag mit diesem Wert `[('write_date','>=',last_execution_date)]`.

::: tip
Der SQL-Tabellenname der Odoo-Datenmodelle ist gleich dem Name des Datenmodells ohne Punkte: `SELECT * FROM job_portal_joboffer`
:::
