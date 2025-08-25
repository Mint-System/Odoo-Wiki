---
title: E-Mail-Marketing
description: E-Mail-Marketing leicht gemacht.
kind: howto
prev: ./
---
# E-Mail-Marketing
![icons_odoo_mass_mailing](attachments/icons_odoo_mass_mailing.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/email-marketing>

## Bereiche

| Bereich                                                 | Beschreibung                                      |
| ------------------------------------------------------- | ------------------------------------------------- |
| [E-Mail-Marketing Aktionen](Mass%20Mailing%20Action.md) | Arbeitsflüsse in E-Mail-Marketing automatisieren. |

## Erweiterungen

| Erweiterung                                                                              | Beschreibung                                                      |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [Dynamic Mass Mailing Lists](Mass%20Mailing%20List%20Dynamic.md)                         | Mailingiste mit Kontakt-Liste synchronisieren.                    |
| [Link partners with mass-mailing](Mass%20Mailing%20Partner.md)                           | Mailinglisten-Kontakte und Kontakte verküpfen.                    |
| [Mail Tracking Helpdesk Bounce Ticket ](Mail%20Tracking%20Helpdesk%20Bounce%20Ticket.md) | Für E-Mails mit dem Status Bounced ein Helpdesk-Ticket erstellen. |
| [Mail Tracking Mailgun](Mail%20Tracking%20Mailgun.md)                                    | Mailgun Events mit Webhook in Odoo empfangen.                     |
| [Mail Tracking](Mail%20Tracking.md)                                                      | Tracking-Status für jede versendete E-Mail.                       |
| [Mail tracking for mass mailing](Mail%20tracking%20for%20mass%20mailing.md)              | Mail-Statistik basierend auf Mail-Tracking.                       |
| [Mass Mailing Contact Active](Mass%20Mailing%20Contact%20Active.md)                      | Mailkontakte und Abonnements archivieren.                         |
| [Survey Send To List](Survey%20Send%20To%20List.md)                                      | Versand Umfrage an Mailing-Liste.                                 |

## Konfiguration

### Dedizierter Mail-Server festlegen

Zum Versenden der Marketing-Mails sollten Sie einen separate Mail-Domain verwenden. Zur Konfiguration des dedizierten Mail-Server navigieren Sie nach *Einstellungen > E-Mail-Marketing* und aktivieren die Option *Dedizierter Server*. Erstellen oder wählen Sie einen ausgehenden Mail-Server aus.

### Mail-Provider Brevo konfigurieren

Wenn Sie [Brevo](https://www.brevo.com) als [ausgehender Mail-Server konfigurieren](Settings%20E-Mail.md#Ausgehender%20Mail-Server%20konfigurieren) verwenden Sie diese Angaben:

* **Beschreibung**: Brevo Outgoing
* **SMTP Server**: `smtp-relay.brevo.com`
* **SMTP Port**: 587
* **Verbindungssicherheit**: TLS

Die Zugangsdaten können Sie unter <https://app.brevo.com/settings/keys/smtp> abrufen. Erstellen Sie für das Passwort einen neuen SMTP-Schlüssel mit Bezeichnung *Odoo*.

* **Benutzername**: Ist das Feld *Login* aus den Angaben.
* **Passwort**: SMTP-Schlüssel mit Bezeichnung *Odoo*.

## Verwendung

### Mailing erstellen

Klicken Sie auf *E-Mail-Marketing* und erstellen Sie einen Eintrag. Geben Sie einen Namen ein und bestimmen Sie den Empfänger des Mailings. Im Tab *E-Mail-Text* wählen Sie eine Vorlage für den Inhalt aus. 

### Mailing versenden

Rufen Sie das Mailing, dass Sie versenden möchten, unter *E-Mail-Marketing* auf. Wählen Sie die Aktion *Senden* aus und bestätigen Sie den Dialog. Das Mailing wird in die Warteschlange gestellt und wartet auf den Versand.

### Test-Mail versenden

Rufen Sie das Mailing, dass Sie testen möchten, unter *E-Mail-Marketing* auf. Klicken Sie auf *Testbetrieb* und geben Sie im Dialog eine Mail-Adresse ein. Klicken Sie auf *Senden* um das Mailing an diese Adressse zu senden.

### Wöchentliche Statistik abmelden

Odoo versendet jede Woche Übersicht zum Unternehmen. Wenn Sie diesen Newsletter deaktiveren möchten gehen Sie wie folgt vor: Navigieren im Entwicklermodus nach *Einstellungen > Technisch > E-Mail > Übersicht E-Mails*.

Öffnen Sie den Eintrag *Wöchentliche Statistiken in Odoo* und wählen sie, ob Sie sich selber abmelden möchte oder für alle den Versand beenden wollen.

![](attachments/E-Mail-Marketing%20Versand%20beenden.png)


