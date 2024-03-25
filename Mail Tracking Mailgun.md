---
title: Mail Tracking Mailgun
description: Mailgun Events mit Webhook in Odoo empfangen.
tags:
- HowTo
- OCA
prev: ./dialog
---
# Mail Tracking Mailgun
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `mail_tracking_mailgun`\
Repository: <https://github.com/OCA/social/tree/16.0/mail_tracking_mailgun>

## Konfiguration

### Mailgun-Webhooks aktivieren

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Dialog* und aktivieren Sie die Option *Enable mail tracking with Mailgun*. Öffnen Sie die [Mailgun App](https://app.eu.mailgun.com) und erstellen Sie einen neuen API-Key mit Beschreibung *Odoo*. Kopieren Sie den Schlüssel in das Feld *Mailgun API key* und wählen Sie *Register Mailgun webhooks*.

Wenn Sie einen Fehler erhalten und ihre Mailgun-Domain in der EU liegt, müssen Sie zusätzlich diese Informationen eingeben:

* **Mailgun domain**: Mailgun-Domain `mg.example.com`
* **Mailgun API endpoint**:  EU API-Endpunkt `https://api.eu.mailgun.net`

Wenn die Aktion erfolgreich war, können Sie *Webhooks*-Seite in der Maigun App neu laden.

![](attachments/Mail%20Tracking%20Mailgun%20Webhooks.png)

Odoo registriert alle benötigten Webhooks.

### Mailgun-Webhooks deaktivieren

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Dialog* und wählen Sie *Unregister Mailgun webhooks*.

## Verwendung

### Mailgun-Status von Nachricht anzeigen

Wenn Sie eine Nachricht versendet haben, wird der Mailgun-Status im Chatter angezeigt:

![](attachments/Mail%20Tracking%20Mailgun%20Status.png)

Klicken Sie auf das Icon um Details zu sehen.

### Status von verfolgten E-Mails anzeigen

Navigieren Sie nach *Einstellungen > Technisch > E-Mails > Tracking mails*. Hier erhalten Sie eine Liste der Statis aller verfolgten E-Mails.

### Events von von verfolgten E-Mails anzeigen

Navigieren Sie nach *Einstellungen > Technisch > E-Mails > Verfolge Vorkommnisse*. Hier erhalten Sie eine Liste der Events aller verfolgten E-Mails.