---
title: Sync Mapper
description: Attribute von empfangenen Daten mappen.
tags:
- HowTo
- Drittanbieter
prev: ./zebroo-sync
---
# Sync Mapper

{{ $frontmatter.description }}

Technischer Name: `zbsync_mapper`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync_mapper>

## Verwendung

### Mapper hinzufügen

Fügen Sie einen Worker einer ausgewählten Pipeline unter *Zebroo Sync > Pipelines* hinzu. Wählen Sie für *Type* den Eintrag *Mapper* aus. Klicken Sie auf den so erstellten Worker.

Wählen Sie die Optionsfeld auf Listenansicht und blenden Sie das Feld *Is Key* ein. Fügen Sie der Tabelle Einträge hinzu:

* **Is Key**: Dieses Feld soll als Primär schlüssel verwendet werden
* **Source Field**: Feldname aus dem dem Grabber
* **Action**: Aktion für das Feld. Mit `=>` wird der Inhalt übertragen
* **Destination Field**: Feldname für den Dumper