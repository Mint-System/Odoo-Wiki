---
title: Account Payment Partner
description: Zahlungsmodus auf Kontakt festlegen.
kind: howto
partner: OCA
prev: ./accounting
---

# Account Payment Partner

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `account_payment_partner`\
Repository: <https://github.com/OCA/bank-payment/tree/18.0/account_payment_partner>

## Konfiguration

### Zahlungsmodus für Empfängerbank erstellen

Navigieren Sie nach _Buchhaltung > Konfiguration > Zahlungsmethoden_ und zeigen Sie den Eintrag _Manuell (inbound)_ an. Aktivieren Sie die Option _Bankkonto erforderlich_.

Navigieren Sie nach _Buchhaltung > Konfiguration > Zahlungsmodi_ und erstellen Sie einen neuen Eintrag:

- **Name**: Name des Bank-Journals
- **Zahlungsmethode**: _Manuell (inbound)_
- **Verbindung zum Bankkonto**: fixed
- **Fixed Bank Journal**: Name des Bank-Journals

## Verwendung

### Zahlungsmodus auf Kontakt festlegen

Navigieren Sie nach _Kontakte_ und zeigen Sie einen Eintrag an. Im Tab _Verkauf & Einkauf_ finden Sie das Feld _Zahlungsmethode des Lieferanten_. Legen Sie hier den Standard-Zahlungsmodus fest.

## Automatisierte Aktionen

### Zahlungsmodus auf Kundenrechnung festlegen

Mit dieser automatischen Aktion wird auf der Kundenrechnung der Zahlungsmodus automatisch festgelegt.

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierte Aktionen_ einen Eintrag mit diesen Werten:

Name der Aktion: `Zahlungsmodus auf Kundenrechnung festlegen`\
Modell: `account.move`\
Auslöser: Beim Erstellen\
Domain vor Aktualisierung: `[("partner_id.address_checked", "!=", True)]`\
Anzuwenden auf: `[("move_type", "=", "out_invoice")]`\
Folgeaktion: Den Datensatz aktualisieren\
Zu schreibende Daten:

- Feld: `payment_mode_id`
- Bewertungstyp: Referenz
- Wert: _PostFinance_
