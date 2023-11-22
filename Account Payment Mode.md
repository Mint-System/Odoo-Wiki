---
title: Account Payment Mode
description: Bezahlmethoden definieren.
tags:
- HowTo
- OCA
prev: ./account
---
# Account Payment Mode
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `account_payment_mode`\
Repository: <https://github.com/OCA/bank-payment/tree/16.0/account_payment_mode>

## Beschreibung

Diese Erweiterung ermöglicht die Verwaltung von Zahlungsmodis.

## Verwendung

### Zahlungsmodus erfassen

Navigieren Sie nach *Finanzen > Konfiguration > Verwaltung > Zahlungsmodi*. Erstellen Sie eine neuen ### Zahlungsmodus erfassen:

* **Name**: Name des Zahlungsmodus, beispielsweise *Kreditkarte (Bank)*
* **Zahlungsmethode**: Zahlungsmethode auswählen, beispielsweise *\[manual\] Manuell (outbound)*
* **Verbindung zum Bankkonto**: Wählen Sie hier *Variable*
* **Erlaubte Banken Logbuch**: Wählen Sie hier ein bestimmtes Bankjournal aus

## Automatisierte Aktionen

### Zahlungsmethode von Rechnung übertragen

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Zahlungsmethode von Rechnung übertragen`\
Modell: `account.payment.register`\
Auslöser: *Auf Basis von Formularanpassungen*\
Auslöser-Felder: `journal_id`\
Folgeaktion: Python-Code ausühren\
Python-Code:

```python
move_id = record.line_ids.move_id[0]
if move_id and move_id.payment_mode_id:
  mode_id = move_id.payment_mode_id
  record.update({'payment_method_line_id': mode_id.payment_method_id.id})
  journal_id = move_id.payment_mode_id.variable_journal_ids[0]
  if journal_id:
    record.update({'journal_id': journal_id.id})
```