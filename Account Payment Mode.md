---
title: Account Payment Mode
description: Bezahlmethoden definieren.
kind: howto
partner: OCA
prev: ./accounting
---

# Account Payment Mode

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `account_payment_mode`\
Repository: <https://github.com/OCA/bank-payment/tree/19.0/account_payment_mode>

## Beschreibung

Diese Erweiterung ermöglicht die Verwaltung von Zahlungsmodis.

## Konfiguration

### Zahlungsmodus erfassen

Navigieren Sie nach _Buchhaltung > Konfiguration > Verwaltung > Zahlungsmodi_. Erstellen Sie eine neuen _Zahlungsmodus_ erfassen:

- **Name**: Name des Zahlungsmodus, beispielsweise _Manuell Bank_
- **Zahlungsmethode**: Zahlungsmethode auswählen, beispielsweise _\[manual\] Manuell (outbound)_
- **Verbindung zum Bankkonto**: Wählen Sie hier _Variable_
- **Erlaubte Banken Logbuch**: Wählen Sie hier ein bestimmtes Bank-Journal aus

## Verwendung

### Zahlungsmodus auf Lieferantenrechnung festlegen

Navigieren Sie nach _Buchhaltung > Lieferanten > Rechnungen_ und zeigen Sie eine Lieferantenrechnung an. Treffen Sie im Feld _Zahlungsmodus_ eine Auswahl.

## Automatisierte Aktionen

### Zahlungsmethode von Rechnung auf Zahlung übertragen

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierte Aktionen_ einen Eintrag mit diesen Werten:

Name der Aktion: `Zahlungsmethode von Rechnung auf Zahlung übertragen`\
Modell: `account.payment.register`\
Auslöser: _Auf Basis von Formularanpassungen_\
Auslöser-Felder: `journal_id`\
Folgeaktion: Python-Code ausführen\
Python-Code:

```python
# Get current move
move_id = record.line_ids.move_id[0]
# raise UserError(move_id)

# Set journal and method line if payment mode is set
if move_id and move_id.payment_mode_id:
  # Get journal from payment mode
  if move_id.payment_mode_id.bank_account_link == 'variable':
    journal_id = move_id.payment_mode_id.variable_journal_ids[0]
  if move_id.payment_mode_id.bank_account_link == 'fixed':
    journal_id = move_id.payment_mode_id.fixed_journal_id
  # raise UserError(journal_id)

  # Get payment method from mode
  method_id = move_id.payment_mode_id.payment_method_id

  # Filter available lines
  if method_id.payment_type == 'outbound':
    line_id = journal_id.outbound_payment_method_line_ids.filtered(lambda l: l.payment_method_id == method_id)[0]
  if method_id.payment_type == 'inbound':
    line_id = journal_id.inbound_payment_method_line_ids.filtered(lambda l: l.payment_method_id == method_id)[0]
  # raise UserError([line_id, method_id])

  record.update({
    'journal_id': journal_id.id,
    'payment_method_line_id': line_id.id
  })
```
