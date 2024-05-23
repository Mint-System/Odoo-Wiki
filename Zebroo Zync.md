---
title: Zebroo Zync
description: Umfassende DSynchronisationslösung basierend auf Odoo.
tags:
- HowTo
- Drittanbieter
prev: ./
---
# Zebroo Zync

{{ $frontmatter.description }}

Technischer Name: `zbsync`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync>

## Erweiterungen

| Erweiterung                                 | Beschreibung                                 |
| ------------------------------------------- | -------------------------------------------- |
| [Odoo Sync Mapper](Odoo%20Sync%20Mapper.md) | Odoo Attribute mappen.                       |
| [Odoo Sync](Odoo%20Sync.md)                 | Odoo nach Odoo synchronisieren.              |
| [SQL Sync](SQL%20Sync.md)                   | Mit SQL-Abfragen Daten empfangen und senden. |
| [Sync Mapper](Sync%20Mapper.md)             | Attribute von empfangenen Daten mappen.      |
| [Web Sync](Web%20Sync.md)                   | Daten mit Web-Requests empfangen und senden. |

## Verwendung

### Pipeline einrichten

Öffnen Sie *Zebroo Sync* und erstellen Sie einen neuen Eintrag. Geben Sie den Namen der Pipeline ein und speichern Sie den Eintrag. Odoo erstellt die Start- und Stop-Worker.

### Pipeline Test ausführen

Öffnen Sie *Zebroo Sync* und zeigen Sie eine Pipeline an. Wählen Sie die Aktion *Test Run*. Odoo erstellt eine Instanz der Pipeline. Klicken Sie auf *Heartbeat* um die einzelnen Worker-Schritte ausführen.

### Instanzen anzeigen

Öffnen Sie *Zebroo Sync > Pipelines > Instances*. Hier sehen Sie alle Instanzen von allen Pipelines. Wenn Sie eine Pipeline anzeigen können Sie mit *Show Instances* alle Instanzen dieser Pipeline anzeigen.

### Worker-Resultate anzeigen

Öffnen Sie eine Instanz *Zebroo Sync > Pipelines > Instances*. Klicken Sie in der Spalte *Batches* ein einen Worker.
 
### Cron-Job für Pipeline einrichten

Öffnen Sie *Zebroo Sync* und wählen Sie eine Pipeline. Zeigen Sie den Tab *Cronjobs* an und erstellen Sie einen neuen Eintrag. Geben Sie den Namen des Cron-Job ein und fügen Sie eine Zeile für den Intervall hinzu. Bestimmen Sie in welchem Intervall die Pipeline ausgeführt werden soll.