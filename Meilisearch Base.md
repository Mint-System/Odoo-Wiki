---
title: Meilisearch Base
description: Meilisearch Index mit Odoo Dokumenten synchronisieren.
kind: howto
partner: Mint-System
prev: ./website-e-commerce
---

# Meilisearch Base

![](attachments/icons_odoo_meiliserch_base.png)

{{ $frontmatter.description }}

Technischer Name: `meilisearch_base`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/18.0/meilisearch_base>

## Beschreibung

Diese Erweiterung bietet zwei Funktionalitäten. Sie können in Odoo Verbindungen zur Meilisearch-API und deren Indexes verwalten. Entwickler können mit einem Mixin ein ausgewähltes Datenmodell erweitern und automatisch mit Meilisearch synchronisieren.

## Entwicklung

### Meilisearch Document Mixin implementieren

Um ein Odoo Datenmodell mit Meilisearch zu synchronisieren, muss das _Meilisearch Document Mixin_ in der entsprechende Klasse implementiert werden. Die Details sind hier verfügbar: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/16.0/meilisearch_base#configuration>

## Konfiguration

### Meilisearch-API-Verbindung einrichten

Navigieren Sie nach _Einstellungen > Integration_ und aktivieren Sie die Option _Meilisearch_. Geben Sie die entsprechenden Werte in _Meilisearch API Url_ und _Meilisearch API Key_ ein.

### Meilisearch-Index erstellen

Navigieren Sie nach _Meilisearch > Indexes_ und erstellen Sie einen neuen Eintrag:

- **Name**: Geben eine Bezeichnung für den Index ein
- **API**: Wählen Sie die API-Verbindung für den Index aus
- **Database Filter**: Geben Sie optional den Namen der Datenbank ein für welche der Index aktiv sein soll
- **Model**: Wählen Sie das Odoo-Datenmodell aus

## Verwendung

### Indexierte Dokumente anzeigen

Navigieren Sie nach _Meilisearch > Indexes_ und wählen Sie einen Index aus. Klicken Sie auf den Smart-Button _Index Documents_. Hier sehen Sie gruppiert nach Index-Status die Dokumente.

### Dokument aus Index abrufen

Navigieren Sie nach _Meilisearch > Indexes_ und wählen Sie einen Index aus. Klicken Sie auf den Smart-Button _Index Documents_. Öffnen oder markieren Sie ein Dokument und wählen Sie _Aktionen > Check Index Document_.

::: tip
Wenn das Dokument aus dem Index abgerufen werden konnte, wechselt der Index-Status des Dokuments auf _Indexed_. In der _Index-Response_ wird das Dokument aus dem Index gespeichert. Dieses sollte mit dem _Index Document_ von Odoo übereinstimmen.
:::
