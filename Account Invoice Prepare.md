---
title: Account Invoice Prepare
description: Die PDF Rechnung im Anhang speichern und laden.
kind: howto
tags:
- Mint-System
prev: ./invoicing
---
# Account Invoice Prepare
![icon_oms_box](../attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `account_invoice_prepare`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Invoicing/tree/16.0/account_invoice_prepare>

## Verwendung

### PDF-Datei von Rechnung vorbereiten

Navigieren Sie nach *Buchhaltung > Kunden > Ausgangsrechnungen* und markieren Sie eine Rechnung. Wählen Sie *Aktion > PDF-Rechnung vorbereiten*.

## Geplante Aktionen

### PDF-Datei von Rechnungen erneuern

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `PDF-Datei von Rechnungen erneuern`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
invoices = env['account.move'].search([('attachment_ids','!=',False),('move_type','=','out_invoice')])

for invoice in invoices:
    # raise UserError([invoice.write_date, invoice.print_date])
    if invoice.write_date > invoice.print_date:
        invoice.action_prepare_pdf()
```