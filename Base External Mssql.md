---
description: Verbindung zu externer MSSQL-Datenbank herstellen.
forge: github.com
kind: howto
name: base_external_mssql
prev: ./development
repo: Mint-System/Odoo-Apps-Server-Tools
title: Base External Mssql
versions:
- '18.0'
- '17.0'
---


# Base External Mssql

![](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Datenbank-Verbindung erstellen

Navigieren Sie nach _Einstellungen > Technisch > Ext. Datenbank_ und erstellen Sie einen neuen Eintrag.
Angegeben werden müssen Server, Name, User und Passwort der externen Datenbank.

Als Python-Interfaces stehen `pymssql` (default) und `pyodbc` zur Verfügung.

### Datenbank-Verbindung testen

Sie können die Verbindung über den Button `Test connection` testen. Bei erfolgreicher Verbindung erscheint ein entsprechender Hinweis.

Sollte keine Verbindung zustande kommen, überprüfen Sie Ihre Einstellungen und stellen Sie sicher, dass der externe Datenbank-Server ubnd die Datenbank verfügbar sind.

### Datenbank-Verbindung setzen

Haben Sie die Datenbank-Verbindung erfolgreich getestet, können Sie sie für die Verwendung auswählern.

Es kann immer nur eine externe Datenbank ausgewählt werden.
