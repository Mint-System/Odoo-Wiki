---
title: SQL Sync
description: Mit SQL-Abfragen Daten empfangen und senden.
kind: howto
partner: Thirdparty
prev: ./zebroo-sync
---

# SQL Sync

![icons_odoo_thirdparty](attachments/icons_odoo_thirdparty.png)

{{ $frontmatter.description }}

Technischer Name: `zbsync_sql`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync_sql>

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
