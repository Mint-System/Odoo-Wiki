---
title: Base External Mssql
description: Verbindung zu externer MSSQL-Datenbank herstellen.
tags:
- HowTo
prev: ./development
---
# Base External Mssql
![](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `base_external_mssql`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/17.0/base_external_mssql>

## Verwendung

### Datenbank-Verbindung erstellen

Navigieren Sie nach *Einstellungen > Technisch > Ext. Datenbank* und erstellen Sie einen neuen Eintrag.
Angegeben werden müssen Server, Name, User und Passwort der externen Datenbank.

Als Python-Interfaces stehen `pymssql` (default) und `pyodbc` zur Verfügung. 


### Datenbank-Verbindung testen

Sie können die Verbindung über den Button `Test connection` testen. Bei erfolgreicher Verbindung erscheint ein entsprechender Hinweis.

Sollte keine Verbindung zustande kommen, überprüfen Sie Ihre Einstellungen und stellen Sie sicher, dass der externe Datenbank-Server ubnd die Datenbank verfügbar sind.


### Datenbank-Verbindung setzen

Haben Sie die Datenbank-Verbindung erfolgreich getestet, können Sie sie für die Verwendung auswählern.

Es kann immer nur eine externe Datenbank ausgewählt werden.