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

### Odoo zu Odoo Synchronisation einrichten

Im folgenden Beispiel möchten wir die Tabelle mit den Kontakten `res.partner` von einem Remote-Odoo-System ins Lokale-Odoo-System synchronsieren.

Öffnen Sie *Zebroo Sync* und erstellen Sie eine neu Pipeline *Odoo2Odoo*. Nun erweitern Sie den Workflow, klicken Sie dazu auf *Add Worker* und wählen Sie *Odoo Grabber* im Feld *Type* aus. Wiederholen Sie den Vorgang und wählen Sie dieses Mal *Odoo Dumper* aus.

Nun richten Sie Grabber für die Odoo-Quelle ein. Klicken Sie auf den Workflow *Odoo Grabber-0-Odoo2Odoo*. Erstellen Sie im Feld *Connection* einen neuen Eintrag *Remote Odoo*. Geben Sie die Verbindungsinformationen ein. 

::: tip
Geben Sie den Hostnamen ohne `https://` ein. Wählen Sie die *SSL* wenn Odoo über HTTPS erreichbar ist.
:::

Anschliessen geben Sie im Feld *Model* den Wert `res.partner` ein. Speichern und schliessen Sie den Grabber.