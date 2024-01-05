---
title: Account Payment Partner
description: Zahlungsmodus auf Kontakt festlegen.
tags:
- HowTo
- OCA
prev: ./contacts
---
# Account Payment Partner
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `account_payment_partner`\
Repository: <https://github.com/OCA/bank-payment/tree/16.0/account_payment_partner>

## Konfiguration

### Zahlungsmodus für Empfängerbank erstellen

Navigieren Sie nach *Finanzen > Konfiguration > Zahlungsmethoden* und zeigen Sie den Eintrag *Manuell (inbound)* an. Aktivieren Sie die Option *Bankkonto erforderlich*.

Navigieren Sie nach *Finanzen > Konfiguration > Zahlungsmodi* und erstellen Sie einen neuen Eintrag:

* **Name**: Name des Bankjournals
* **Zahlungsmethode**: *Manuell (inbound)*
* **Verbindung zum Bankkonto**: fixed
* **Fixed Bank Journal**: Name des Bankjournals

## Verwendung

### Zahlungsmodus auf Kontakt festlegen

Navigieren Sie nach *Kontakte* und zeigen Sie einen Eintrag an. Im Tab *Verkauf & Einkauf* finden Sie das Feld *Zahlungsmethode des Lieferanten*. Legen Sie hier den Standard-Zahlungsmodus fest.

## Automatisierte Aktionen

### Zahlungsmodus auf Kundenrechnung festlegen

Mit dieser automatischen Aktion wird auf der Kundenrechnung der Zahlungsmodus automatisch festgelegt.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Zahlungsmodus auf Kundenrechnung festlegen`\
Modell: `account.move`\
Auslöser: Beim Erstellen\
Abgrenzung vor Aktualisierung: `[("partner_id.address_checked", "!=", True)]`\
Anzuwenden auf: `[("move_type", "=", "out_invoice")]`\
Folgeaktion: Den Datensatz aktualisieren\
Zu schreibende Daten:
* Feld: `payment_mode_id`
* Bewertungstyp: Referenz
* Wert: *PostFinance*