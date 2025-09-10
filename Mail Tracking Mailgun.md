---
title: Mail Tracking Mailgun
description: Mailgun Events mit Webhook in Odoo empfangen.
kind: howto
partner: OCA
prev: ./dialog
---
# Mail Tracking Mailgun
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `mail_tracking_mailgun`\
Repository: <https://github.com/OCA/mail/tree/18.0/mail_tracking_mailgun>

## Konfiguration

### Mailgun-Webhooks aktivieren

Öffnen Sie die [Mailgun App](https://app.eu.mailgun.com) und erstellen Sie einen neuen API-Key mit Beschreibung *Odoo*. Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Diskussion* und aktivieren Sie die Option *Enable mail tracking with Mailgun*. Kopieren Sie den Schlüssel in das Feld *Mailgun API key*. Wenn ihre Mailgun-Domain in der EU liegt, müssen Sie zusätzlich diese Informationen eingeben:

* **Mailgun domain**: Mailgun-Domain `mg.example.com`
* **Mailgun API endpoint**:  API-Endpunkt `https://api.eu.mailgun.net`
* **Mailgun webhooks domain**: Odoo Url `https://odoo.exampe.com`

Wählen Sie *Register Mailgun webhooks*. Wenn die Aktion erfolgreich war, können Sie *Webhooks*-Seite in der Mailgun App anzeigen: `https://app.eu.mailgun.com/mg/sending/mg.example.com/webhooks`

![](attachments/Mail%20Tracking%20Mailgun%20Webhooks.png)

Wenn alles korrekt funktioniert hat, erscheinen hier die benötigten Webhook-Einträge.

### Mailgun-Webhooks deaktivieren

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Diskussion* und wählen Sie *Unregister Mailgun webhooks*.

## Verwendung

### Mailgun-Status synchronisieren

Wenn Sie den [Nachrichten-Status im Chatter anzeigen](Mail%20Tracking.md#Nachrichten-Status%20im%20Chatter%20anzeigen) finden Sie eine Aktion *Re-Sync Mailgun*.

## Troubleshooting

## Not found for url

**Problem**

Bei der Aktion *Register Mailgun webhooks* erscheint eine Fehlermeldung:

```
requests.exceptions.HTTPError: 404 Client Error: Not Found for url: https://api.mailgun.net/v3/domains/example.com/webhooks
```

**Lösung**

Wenn die Mail-Domain von der Odoo-Domain abweicht, geben Sie im Feld *Mailgun domain* die entsprechende Mail-Domain ein.
