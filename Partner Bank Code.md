---
title: Partner Bank Code
description: Eindeutige Nummer auf Bank festlegen.
kind: howto
tags:
- OCA
prev: ./contacts
---
# Partner Bank Code
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `partner_bank_code`\
Repository: <https://github.com/OCA/partner-contact/tree/16.0/partner_bank_code>

## Verwendung

### Eindeutige Nummer auf Bank festlegen.

Navigieren Sie nach *Kontakte > Konfiguration > Bankverzeichnis* und zeigen Sie einen Eintrag an. Im Feld *Bank Code* können Sie eine eindeutige Nummer, beispielsweise die *SIC*,  hinterlegen.

## Aktionen

### Bank verknüpfen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Bank verknüpfen`\
Modell: `res.partner.bank`\
Folgeaktion: `Python-Code ausführen`\
Python-Code:

```python
	for rec in records:
	  bank_code = rec.sanitized_acc_number[4:9]
	  bank = env['res.bank'].search([('bank_code', '=ilike', bank_code+'%')], limit=1)
	  if bank:
	    rec['bank_id'] = bank.id
```

Die Aktion speichern und mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen.

## Automatisierte Aktionen

### Bankkonto mit Bank verknüpfen

Mit dieser Aktion versucht Odoo anhand des *Bank Code* in der IBAN eine passende Bank im Bank-Verzeichnis zu finden.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Bankkonto mit Bank verknüpfen`\
Modell: `res.partner.bank`\
Auslöser: Bei Erstellung und Aktualisierung\
Trigger-Felder: `acc_number`\
Domain vor Aktualisierung: `[("sanitized_acc_number", "!=", False)]`\
Anzuwenden auf: `[("bank_id", "=", False)]`\
Folgeaktion: Python-Code ausführen\
Python Code:

```python
for rec in records:
  bank_code = rec.sanitized_acc_number[4:9]
  bank = env['res.bank'].search([('bank_code', '=ilike', bank_code+'%')], limit=1)
  if bank:
    rec['bank_id'] = bank.id
```