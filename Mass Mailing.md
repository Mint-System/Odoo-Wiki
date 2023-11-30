---
title: E-Mail-Marketing
description: E-Mail-Marketing leicht gemacht.
tags:
- HowTo
prev: ./
---
# E-Mail-Marketing
![icons_odoo_mass_mailing](attachments/icons_odoo_mass_mailing.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/email-marketing>

## Bereiche

| Bereich                                             | Beschreibung                           |
| --------------------------------------------------- | -------------------------------------- |
| [E-Mail-Marketing Aktionen](Mass%20Mailing%20Action.md) | Arbeitsflüsse in E-Mail-Marketing automatisieren. |

## Erweiterungen

| Erweiterung                                                         | Beschreibung                                   |
| ------------------------------------------------------------------- | ---------------------------------------------- |
| [Dynamic Mass Mailing Lists](Mass%20Mailing%20List%20Dynamic.md)    | Mailingiste mit Kontakt-Liste synchronisieren. |
| [Link partners with mass-mailing](Mass%20Mailing%20Partner.md)      | Mailinglisten-Kontakte und Kontakte verküpfen. |
| [Mass Mailing Contact Active](Mass%20Mailing%20Contact%20Active.md) | Mailkontakte und Abonnements archivieren.      |
| [Survey Send To List](Survey%20Send%20To%20List.md)                 | Versand Umfrage an Mailing-Liste.              |

## Abonnieren

### Wöchentliche Statistik abmelden

Odoo versendet jede Woche Übersicht zum Unternehmen. Wenn Sie diesen Newsletter deaktiveren möchten gehen Sie wie folgt vor: Navigieren im Entwicklermodus nach *Einstellunen > Technisch > E-Mail > Übersicht E-Mails*.

Öffnen Sie den Eintrag *Wöchentliche Statistiken in Odoo* und wählen sie, ob Sie sich selber abmelden möchte oder für alle den Versand beenden wollen.

![](attachments/E-Mail-Marketing%20Versand%20beenden.png)

## Einstellungen

### Mail-Provider Brevo konfigurieren

Wenn Sie [Brevo](https://www.brevo.com) als [ausgehender Mail-Server konfigurieren](Settings%20E-Mail.md#Ausgehender%20Mail-Server%20konfigurieren) verwenden Sie diese Angaben:

* **Beschreibung**: Brevo Outgoing
* **SMTP Server**: `smtp-relay.brevo.com`
* **SMTP Port**: 587
* **Verbindungssicherheit**: TLS

Die Zugangsdaten können Sie unter <https://app.brevo.com/settings/keys/smtp> abrufen. Erstellen Sie für das Passwort einen neuen SMTP-Schlüssel mit Bezeichnung *Odoo*.

* **Benutzername**: Ist das Feld *Login* aus den Angaben.
* **Passwort**: SMTP-Schlüssel mit Bezeichnung *Odoo*.
