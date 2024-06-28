---
title: Meilisearch Base
description: Meilisearch Index mit Odoo Dokumenten synchronisieren.
tags:
- HowTo
- Drittanbieter
prev: ./website-e-commerce
---

# Meilisearch Base
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `meilisearch_base`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/16.0/meilisearch_base>

## Beschreibung

Diese Erweiterung bietet zwei Funktionalitäten. Sie können in Odoo Verbindungen zur Meilisearch-API und deren Indexes verwalten. Entwickler können mit einem Mixin ein ausgewähltes Datenmodell erweitern und automatisch mit Meilisearch synchronisieren.

## Entwicklung

### Meilisearch Document Mixin implementieren

Um ein Odoo Datenmodell mit Meilisearch zu synchronisieren, muss das *Meilisearch Document Mixin* in der entsprechende Klasse implementiert werden. Die Details sind hier verfügbar: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/16.0/meilisearch_base#configuration>

## Konfiguration

### Meilisearch-API-Verbindung einrichten

Navigieren Sie nach *Einstellungen > Technisch > Meilisearch APIs* und erstellen Sie einen neuen Eintrag. Geben Sie einen passenden Namen, die Base-URL inkl. Port und den API-Key ein.

### Meilisearch-Index erstellen

Navigieren Sie nach *Einstellungen > Technisch > Meilisearch Indexes* und erstellen Sie einen neuen Eintrag:

* **Name**: Geben eine Bezeichnung für den Index ein
* **API**: Wählen Sie die API-Verbindung für den Index aus
* **Database Filter**: Geben Sie optional den Namen der Datenbank ein für welche der Index aktiv sein soll
* **Model**: Wählen Sie das Odoo-Datenmodell aus

## Verwendung

### Indexierte Dokumente anzeigen

Navigieren Sie nach *Einstellungen > Technisch > Meilisearch Indexes* und wählen Sie einen Index aus. Klicken Sie auf den Smart-Button *View Documents*. Hier sehen Sie gruppiert nach Index-Status die Dokumente.

### Dokument aus Index abrufen

Navigieren Sie nach *Einstellungen > Technisch > Meilisearch Indexes* und wählen Sie einen Index aus. Klicken Sie auf den Smart-Button *View Documents*. Öffnen oder markieren Sie ein Dokument und wählen Sie *Aktion > Check Index Document*.