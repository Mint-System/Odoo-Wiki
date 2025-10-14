---
title: Sync Mapper
description: Attribute von empfangenen Daten mappen.
kind: howto
partner: Thirdparty
prev: ./zebroo-sync
---

# Sync Mapper

![icons_odoo_thirdparty](attachments/icons_odoo_thirdparty.png)

{{ $frontmatter.description }}

Technischer Name: `zbsync_mapper`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync_mapper>

## Verwendung

### Mapper hinzufügen

Fügen Sie einen Worker einer ausgewählten Pipeline unter _Zebroo Sync > Pipelines_ hinzu. Wählen Sie für _Type_ den Eintrag _Mapper_ aus. Klicken Sie auf den so erstellten Worker.

Wählen Sie das Optionsfeld der Listenansicht an und blenden Sie die Felder _Active_ und _Is Key_ ein. Fügen Sie der Tabelle Einträge hinzu:

- **Active**: Das Mapping ist aktiv
- **Is Key**: Dieses Feld soll als Primär schlüssel verwendet werden
- **Source Field**: Feldname aus dem dem Grabber
- **Action**: Aktion für das Feld. Mit `=>` wird der Inhalt übertragen
- **Destination Field**: Feldname für den Dumper

### Mapping in Listenansicht anzeigen

Öffnen Sie _Zebroo Sync_ und zeigen Sie eine Pipeline an. Wählen Sie unter _Worker_ einen Mapper aus. Klicken Sie auf _Open in Tree_ um die Listenansicht der Mappings anzuzeigen. Wählen Sie das Optionsfeld der Listenansicht an und blenden Sie die Felder _Active_ und _Is Key_ ein.

### Mapping mit verschachtelten Attributen erstellen

Mit den Mapper-Aktionen können Sie JSON-Schemas mit verschalteten Attributen abbilden. Dazu ein Beispiel:

```json
{
  "id": 13486,
  "ref": "ST-569580",
  "author": {
    "id": 19572,
    "name": "Christian Bollinger"
  },
  "organisation": {
    "id": 958,
    "name": "Gemeinde Hünenberg"
  },
  "customer_organisation": {},
  "qualifications": ["Hochschulbildung", "Höhere Berufsbildung"],
  "working_areas": ["Altersarbeit", "Sozialraum / Soziokultur"]
}
```

Diese Struktur kann mit dem Mapper wie folgt abgebildet werden:

![](attachments/Sync%20Mapper%20Nested%20Attributes.png)

Die können die Struktur analog mit den Aktionen `[]` und `{}` abbilden.
