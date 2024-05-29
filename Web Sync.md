---
title: Web Sync
description: Daten mit Web-Requests empfangen und senden.
tags:
- HowTo
- Drittanbieter
prev: ./zebroo-zync
---
# Web Sync
![](attachments/icon_odoo_zbsync.jpg)

{{ $frontmatter.description }}

Technischer Name: `zbsync_web`\
Repository: <https://github.com/Odoo-Ninjas/zync-stable/tree/16.0/zbsync_web>

## Verwendung

### Web URL hinzufügen

Navigieren Sie nach *Zebroo Sync > Grabber > Web-URLs* und erstellen Sie einen neuen Eintrag. Fügen Sie den Hostname der Web-API-Url in das Feld *URL* ein. Der Pfad der Url geben Sie im Feld *Path* ein. Ein Beispel für die Url `https://api.example.com/api/v1`:

* URL: `https://api.example.com`
* Path: `/api/v1`

Legen Sie den *Request Content Type* und *Response Content Type* fest und speichern Sie den Eintrag. 

### Bearer-Token hinzufügen

Navigieren Sie nach *Zebroo Sync > Connections > Web-Authentications* und erstellen Sie einen neuen Eintrag. Wählen Sie *Bearer Token* als *Auth Type* und geben Sie das Token im Feld *Token* ein.

### Web Grabber / Dumper Worker hinzufügen

Fügen Sie einen Worker einer ausgewählten Pipeline unter *Zebroo Sync > Pipelines* hinzu. Wählen Sie für *Type* den Eintrag *Web Grabber / Dumper* aus. Klicken Sie auf den so erstellten Worker. Wählen Sie eine *URL* und *Method* aus.

### Meilisearch Dumper einrichten

Der folgende Curl-Befehl fügt ein Dokument einem Meilisearch-Index hinzu. Diesen Befehl können Sie mit einem Dumper abbilden.

```bash
curl --location 'https://edge.meilisearch.com/indexes/$INDEX_NAME/documents' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer `3709c365b146b1c116599815ae6e967baa3652c04c7baad1eff56d6d0257ff52`' \
--data '[
    {
        "id": 287947,
        "name": "Generic Name"
    }
]'
```

Zur Autorisierung können Sie das [Bearer-Token hinzufügen](#Bearer-Token%20hinzufügen). Die Adresse fügen Sie als [Web URL hinzu](#Web%20URL%20hinzufügen).

Anschliessend können Sie einen [Web Grabber / Dumper Worker hinzufügen](#Web%20Grabber%20/%20Dumper%20Worker%20hinzufügen). Wählen Sie erstellte Url aus und machen Sie folgende Angaben.

* URL: `https://edge.meilisearch.com`
* Method: POST
* Request Content Type: application/json
* Response Content Type: application/json
* Path: `/indexes/$INDEX_NAME/documents`

Ersetzen Sie `$INDEX_NAME` mit dem Namen des Meilisearch-Index und speichern Sie den Dumper.

### Meilisearch Dumper testen

Wenn Sie den Meilisearch Dumper ausführen. Können Sie prüfen, ob das Dokument im Index gespeichert wurde.

```bash
curl --location 'https://edge.meilisearch.com/indexes/$INDEX_NAME/documents/$DOCUMENT_ID' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer `3709c365b146b1c116599815ae6e967baa3652c04c7baad1eff56d6d0257ff52`'
```

Ersetzen Sie `$INDEX_NAME` mit dem Namen des Meilisearch-Index und `$DOCUMENT_ID`mit der ID des Dokuments.