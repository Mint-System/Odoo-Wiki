---
title: Sync Mapper
description: Attribute von empfangenen Daten mappen.
tags:
- HowTo
- Drittanbieter
prev: ./zebroo-zync
---
# Sync Mapper
![](attachments/icon_odoo_zbsync.jpg)

{{ $frontmatter.description }}

Technischer Name: `zbsync_mapper`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync_mapper>

## Verwendung

### Mapper hinzufügen

Fügen Sie einen Worker einer ausgewählten Pipeline unter *Zebroo Sync > Pipelines* hinzu. Wählen Sie für *Type* den Eintrag *Mapper* aus. Klicken Sie auf den so erstellten Worker.

Wählen Sie das Optionsfeld der Listenansicht an und blenden Sie die Felder *Active* und *Is Key* ein. Fügen Sie der Tabelle Einträge hinzu:

* **Active**: Das Mapping ist aktiv
* **Is Key**: Dieses Feld soll als Primär schlüssel verwendet werden
* **Source Field**: Feldname aus dem dem Grabber
* **Action**: Aktion für das Feld. Mit `=>` wird der Inhalt übertragen
* **Destination Field**: Feldname für den Dumper

### Mapping in Listenansicht anzeigen

Öffnen Sie *Zebroo Sync* und zeigen Sie eine Pipeline an. Wählen Sie unter *Worker* einen Mapper aus. Klicken Sie auf *Open in Tree* um die Listenansicht der Mappings anzuzeigen. Wählen Sie das Optionsfeld der Listenansicht an und blenden Sie die Felder *Active* und *Is Key* ein.