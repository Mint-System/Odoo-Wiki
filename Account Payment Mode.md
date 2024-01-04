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

## Konfiguration

### Zahlungsmodus erfassen

Navigieren Sie nach *Finanzen > Konfiguration > Verwaltung > Zahlungsmodi*. Erstellen Sie eine neuen ### Zahlungsmodus erfassen:

* **Name**: Name des Zahlungsmodus, beispielsweise *Manuell Bank*
* **Zahlungsmethode**: Zahlungsmethode auswählen, beispielsweise *\[manual\] Manuell (outbound)*
* **Verbindung zum Bankkonto**: Wählen Sie hier *Variable*
* **Erlaubte Banken Logbuch**: Wählen Sie hier ein bestimmtes Bankjournal aus

## Verwendung

### Zahlungsmodus auf Lieferantenrechnung festlegen

Navigieren Sie nach *Finanzen > Lieferanten > Rechnungen* und zeigen Sie eine Lieferantenrechnung an. Treffen Sie im Feld *Zahlungsmodus* eine Auswahl.

## Automatisierte Aktionen

### Zahlungsmethode von Rechnung auf Rechnung übertragen

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Zahlungsmethode von Rechnung auf Rechnung übertragen`\
Modell: `account.payment.register`\
Auslöser: *Auf Basis von Formularanpassungen*\
Auslöser-Felder: `journal_id`\
Folgeaktion: Python-Code ausführen\
Python-Code:

```python
# Get current move
move_id = record.line_ids.move_id[0]
# Set journal and method line if payment mode is set
if move_id and move_id.payment_mode_id:
  # Get journal from payment mode
  journal_id = move_id.payment_mode_id.variable_journal_ids[0]
  # Get payment method from mode
  method_id = move_id.payment_mode_id.payment_method_id
  # Filter available lines
  line_id = journal_id.outbound_payment_method_line_ids.filtered(lambda l: l.payment_method_id == method_id)[0]
  record.update({
    'journal_id': journal_id.id,
    'payment_method_line_id': line_id.id
  })
```