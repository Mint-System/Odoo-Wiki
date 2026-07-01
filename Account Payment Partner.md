---
description: Zahlungsmodus auf Kontakt festlegen.
forge: github.com
kind: howto
name: account_payment_partner
partner: OCA
prev: ./accounting
repo: OCA/bank-payment
title: Account Payment Partner
versions:
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Account Payment Partner

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

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

## Automatische Aktionen

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
