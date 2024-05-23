---
title: SQL Sync
description: Mit SQL-Abfragen Daten empfangen und senden.
tags:
- HowTo
- Drittanbieter
prev: ./zebroo-sync
---
# SQL Sync

{{ $frontmatter.description }}

Technischer Name: `zbsync_sql`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync_sql>

## Verwendung

### SQL-Verbindung hinzufügen

Navigieren Sie nach *Zebroo Sync > Connections > SQL* und erstellen Sie einen neuen Eintrag. 

* **Type**: Typ des Datenbankssystems
* **DBName**: Name der Datenbank
* **Host**: Hostname des Datenbankservers
* **Port**: Port abhängig vom Typ
* **Username**: Login von Datenbank-Benutzer
* **Passwort**: Passwort von Datenbank-Benutzer

### SQL-Grabber einrichten

Öffnen Sie eine Pipeline via *Zebroo Sync* und fügen Sie einen Worker hinzu. Wählen Sie *SQL Grabber* als *Type* aus. Anschliessend wählen Sie die SQL-Verbindung in *Connection* aus. Im Feld *SQL* fügen Sie die SQL-Abfrage hinzu. Erstellen Sie unter *Domain* einen Eintrag mit diesem Wert `[('write_date','>=',last_execution_date)]`. 

::: tip
Der SQL-Tabellenname der Odoo-Datenmodelle ist gleich dem Name des Datenmodells ohne Punkte: `SELECT * FROM job_portal_joboffer`
:::
