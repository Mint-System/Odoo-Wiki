---
title: Odoo Sync
description: Odoo nach Odoo synchronisieren.
kind: howto
partner: Thirdparty
prev: ./zebroo-sync
---

# Odoo Sync

![icons_odoo_thirdparty](attachments/icons_odoo_thirdparty.png)

{{ $frontmatter.description }}

Technischer Name: `zbsync_odoo`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync_odoo>

## Verwendung

### Odoo Verbindung hinzufügen

Navigieren Sie nach _Zebroo Sync > Connections > Odoo-Connections_ und erstellen Sie einen neuen Eintrag, beispielsweise _Remote Odoo_. Geben Sie die Verbindungsinformationen ein.

::: tip
Geben Sie den Hostnamen ohne `https://` ein. Wählen Sie _SSL_ und _Port_ 443 aus, wenn Odoo über HTTPS erreichbar ist.
:::

### Odoo Grabber hinzufügen

Navigieren Sie nach _Zebroo > Grabbers > Odoo_ und erstellen Sie einen neuen Eintrag. Geben Sie einen passenden Namen, beispielsweise _Remote Odoo Contacts_, ein und wählen Sie bei _Connection_ eine Verbindung aus. Geben Sie im Feld _Model_ den Namen des Datenmodells ein. Im Fall der Kontakte ist es `res.partner`. Erstellen Sie unter _Domain_ einen Eintrag mit Wert `[('write_date','>=',last_execution_date)]`. Damit werden nur Einträge verarbeitet, die seit dem letzten Sync geändert wurden.

::: tip
Um die Pipeline zu testen können Sie eine Domain `[('id','=',$ID)]` it _Usage: Test_ erstellen und so einen bestimmten Datenbank-Eintrag synchronisieren. Ersetzen Sie `$ID` mit der Datenbank-ID des Eintrags.
:::

### Odoo zu Odoo Synchronisation einrichten

Im folgenden Beispiel möchten wir die Tabelle mit Kontakten `res.partner` von einem Remote-Odoo-System ins Lokale-Odoo-System synchronsieren.

Für das Remote-System müssen Sie eine [Odoo Verbindung hinzufügen](#Odoo%20Verbindung%20hinzufügen).

Öffnen Sie _Zebroo Sync_ und erstellen Sie eine neu Pipeline _Odoo2Odoo_. Nun erweitern Sie den Workflow, klicken Sie dazu auf _Add Worker_ und wählen Sie _Odoo Grabber_ im Feld _Type_ aus.

Nun richten Sie Grabber für die Odoo-Quelle ein. Klicken Sie auf den Workflow _Odoo Grabber-0-Odoo2Odoo_. Wählen Sie im Feld _Connection_ die Remote-Verbindung aus.

Anschliessend geben Sie im Feld _Model_ den Wert `res.partner` ein und speichern und schliessen den Vorgang.
