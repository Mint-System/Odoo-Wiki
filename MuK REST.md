---
title: MuK REST API for Odoo
description: Stellt eine REST API für den Odoo Server bereit.
kind: howto
partner: Mint-System
prev: ./iot
---

# MuK REST API for Odoo

![](attachments/odoo_icon_muk_rest.png)

{{ $frontmatter.description }}

Technischer Name: `muk_rest`\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/16.0/muk_rest>\
Odoo App Store: <https://apps.odoo.com/apps/modules/16.0/muk_rest/>\

## Verwendung

### API-Dokumentation anzeigen

Klicken Sie auf _Einstellungen > API > Documentation > Endpoints_. Es wird ein neuer Tab geöffnet mit dem Pfad `/rest/docs`. Auf dieser Seite werden die REST APIs des Odoo Server beschrieben.

### API-Verbindung authorisieren

Klicken Sie auf _Einstellungen > API > Documentation > Endpoints_ und wählen Sie _Authorize_. Geben Sie ihre Anmeldeinformationen ein und wählen Sie _Authorize_. Bestätigen Sie den Vorgang mit _Close_.

### API-Pfad testen

Um Anfragen auszuführen, mmüssen Sie die [API-Verbindung authorisieren](#API-Verbindung%20authorisieren). Danach rufen Sie den Eintrag mit Pfad `/api/v2/read` auf und klicken auf _Try it out_. Passen Sie optional die Parameter an und verschicken Sie den GET-Request mit _Execute_. Sie erhalten eine Antwort mit Datensätzen aus der Tabelle `res.partner`.

## Berichte

### Traffic-Log anzeigen

Navigieren Sie nach _Einstellungen > API > Overview > Traffic_ und zeigen Sie die Listenansicht an. Hier sehen Sie alle Zugriffe auf die REST-API des Odoo Servers. Für Details wählen Sie einen Eintrag an.

## Entwicklung

### Benutzerdefinierten Endpoint mit Python-Code anlegen

Zeigen Sie _Einstellungen > API > Configuration > Endpoints_ an und wählen Sie _Neu_. Im folgenden die wichtigsten Parameter zur Erstellung eines Endpoint, welcher die Anfrage-Parameter in einem Python-Skript ausführt:

- **Name**: Name des Endpoints, beispielsweise _Create new product_
- **Custom Endpoint**: Pfad des Enpoints, beispielsweise `product/create`
- **HTTP Method**: Wählen Sie passende Methode aus
- **Model**: Wählen Sie das Datenmodell aus, für welches die Anfrage ausgeführt werden soll
- **Evaluation Type**: Wählen Sie _Execute Python Code_
- **Code Settings**:

```python
result = model.name_create(params.get('name'))
```

**Parameters** (Docs):

```json
[
    {
        "name": "name",
        "in": "query",
        "description": "Product Name",
        "schema": { "type": "string" }
    }
]
```

Um den benutzerdefinierten Endpoint zu testen, wählen Sie _Open Docs_ und zeigen den Abschnitt mit Pfad `/api/v2/custom/product/create` an. Führen Sie die Anfrage gemäss [API-Pfad testen](#API-Pfad%20testen) aus.
