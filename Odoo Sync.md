---
title: Odoo Sync
description: Odoo nach Odoo synchronisieren.
tags:
- HowTo
- Drittanbieter
prev: ./zebroo-sync
---
# Odoo Sync

{{ $frontmatter.description }}

Technischer Name: `zbsync_odoo`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync_odoo>

## Verwendung

### Odoo Verbindung einrichten

Navigieren Sie nach *Zebroo Sync > Connections > Odoo-Connections* und erstellen Sie einen neuen Eintrag, beispielsweise *Remote Odoo*. Geben Sie die Verbindungsinformationen ein.

::: tip
Geben Sie den Hostnamen ohne `https://` ein. Wählen Sie die *SSL* wenn Odoo über HTTPS erreichbar ist.
:::

### Odoo Grabber erstellen

Navigieren Sie nach *Zebroo > Grabbers > Odoo* und erstellen Sie einen neuen Eintrag. Geben Sie einen passenden Namen, beispielsweise *Remote Odoo Contacts*, ein und wählen Sie bei *Connection* eine Verbindung aus. Geben Sie im Feld *Model* den Namen des Datenmodells ein. Im Fall der Kontakte ist es `res.partner`.

### Odoo zu Odoo Synchronisation einrichten

Im folgenden Beispiel möchten wir die Tabelle mit Kontakten `res.partner` von einem Remote-Odoo-System ins Lokale-Odoo-System synchronsieren.

Für das Remote-System müssen Sie eine [Odoo Verbindung einrichten](#Odoo%20Verbindung%20einrichten). 

Öffnen Sie *Zebroo Sync* und erstellen Sie eine neu Pipeline *Odoo2Odoo*. Nun erweitern Sie den Workflow, klicken Sie dazu auf *Add Worker* und wählen Sie *Odoo Grabber* im Feld *Type* aus. 

Nun richten Sie Grabber für die Odoo-Quelle ein. Klicken Sie auf den Workflow *Odoo Grabber-0-Odoo2Odoo*. Wählen Sie im Feld *Connection* die Remote-Verbindung aus.

Anschliessend geben Sie im Feld *Model* den Wert `res.partner` ein und speichern und schliessen den Vorgang.