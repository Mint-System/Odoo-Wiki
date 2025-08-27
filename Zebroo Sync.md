---
title: Zebroo Sync
description: Umfassende Synchronisationslösung basierend auf Odoo.
kind: howto
partner: Thirdparty
prev: ./
---
# Zebroo Sync
![icons_odoo_thirdparty](attachments/icons_odoo_thirdparty.png)

{{ $frontmatter.description }}

Technischer Name: `zbsync`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync>

## Erweiterungen

| Erweiterung                                               | Beschreibung                                 |
| --------------------------------------------------------- | -------------------------------------------- |
| [Odoo Sync Mapper](Odoo%20Sync%20Mapper.md)               | Odoo Attribute mappen.                       |
| [Odoo Sync](Odoo%20Sync.md)                               | Odoo nach Odoo synchronisieren.              |
| [SQL Sync](SQL%20Sync.md)                                 | Mit SQL-Abfragen Daten empfangen und senden. |
| [Sync Mapper Import](Sync%20Mapper%20Import.md)           | Mapper aus Grabber importieren.              |
| [Sync Mapper](Sync%20Mapper.md)                           | Attribute von empfangenen Daten mappen.      |
| [Sync Transformer Helper](Sync%20Transformer%20Helper.md) | Transformierung der Daten vereinfachen.      |
| [Sync Trigger Methods](Sync%20Trigger%20Methods.md)       | Bei Methoden-Aufruf einen Sync auslösen.     |
| [Web Sync](Web%20Sync.md)                                 | Daten mit Web-Requests empfangen und senden. |

## Verwendung

### Pipeline einrichten

Öffnen Sie *Zebroo Sync* und erstellen Sie einen neuen Eintrag. Geben Sie den Namen der Pipeline ein und speichern Sie den Eintrag. Odoo erstellt die Start- und Stop-Worker.

### Pipeline Test ausführen

Öffnen Sie *Zebroo Sync* und zeigen Sie eine Pipeline an. Wählen Sie die Aktion *Test Run*. Odoo erstellt eine Instanz der Pipeline. Klicken Sie auf *Heartbeat* um die einzelnen Worker-Schritte ausführen.

### Pipeline Normal ausführen

Öffnen Sie *Zebroo Sync* und zeigen Sie eine Pipeline an. Wählen Sie die Aktion *Start Normal*. Odoo erstellt eine Instanz der Pipeline und führt alle Worker-Schritte aus.

### Instanzen anzeigen

Öffnen Sie *Zebroo Sync > Pipelines > Instances*. Hier sehen Sie alle Instanzen von allen Pipelines. Wenn Sie eine Pipeline anzeigen können Sie mit *Show Instances* alle Instanzen dieser Pipeline anzeigen.

### Worker-Resultate anzeigen

Öffnen Sie eine Instanz *Zebroo Sync > Pipelines > Instances*. Klicken Sie in der Spalte *Batches* auf einen Worker.

### Cron-Job für Pipeline einrichten

Öffnen Sie *Zebroo Sync* und wählen Sie eine Pipeline. Zeigen Sie den Tab *Cronjobs* an und erstellen Sie einen neuen Eintrag. Geben Sie den Namen des Cron-Job ein und fügen Sie eine Zeile für den Intervall hinzu. Bestimmen Sie in welchem Intervall die Pipeline ausgeführt werden soll.
