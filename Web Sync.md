---
description: Daten mit Web-Requests empfangen und senden.
forge: github.com
kind: howto
name: zbsync_web
partner: Zebroo
prev: ./zebroo-sync
repo: Odoo-Ninjas/zync-stable
title: Web Sync
versions:
- '16.0'
---


# Web Sync

![icons_odoo_thirdparty](attachments/icons_odoo_thirdparty.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Web URL hinzufügen

Navigieren Sie nach _Zebroo Sync > Grabber > Web-URLs_ und erstellen Sie einen neuen Eintrag. Fügen Sie den Hostname der Web-API-Url in das Feld _URL_ ein. Der Pfad der Url geben Sie im Feld _Path_ ein. Ein Beispel für die Url `https://api.example.com/api/v1`:

- URL: `https://api.example.com`
- Path: `/api/v1`

Legen Sie den _Request Content Type_ und _Response Content Type_ fest und speichern Sie den Eintrag.

### Bearer-Token hinzufügen

Navigieren Sie nach _Zebroo Sync > Connections > Web-Authentications_ und erstellen Sie einen neuen Eintrag. Wählen Sie _Bearer Token_ als _Auth Type_ und geben Sie das Token im Feld _Token_ ein.

### Web Grabber / Dumper Worker hinzufügen

Fügen Sie einen Worker einer ausgewählten Pipeline unter _Zebroo Sync > Pipelines_ hinzu. Wählen Sie für _Type_ den Eintrag _Web Grabber / Dumper_ aus. Klicken Sie auf den so erstellten Worker. Wählen Sie eine _URL_ und _Method_ aus.

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

- URL: `https://edge.meilisearch.com`
- Method: POST
- Request Content Type: application/json
- Response Content Type: application/json
- Path: `/indexes/$INDEX_NAME/documents`

Ersetzen Sie `$INDEX_NAME` mit dem Namen des Meilisearch-Index und speichern Sie den Dumper.

### Meilisearch Dumper testen

Wenn Sie den Meilisearch Dumper ausführen. Können Sie prüfen, ob das Dokument im Index gespeichert wurde.

```bash
curl --location 'https://edge.meilisearch.com/indexes/$INDEX_NAME/documents/$DOCUMENT_ID' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer `3709c365b146b1c116599815ae6e967baa3652c04c7baad1eff56d6d0257ff52`'
```

Ersetzen Sie `$INDEX_NAME` mit dem Namen des Meilisearch-Index und `$DOCUMENT_ID`mit der ID des Dokuments.
