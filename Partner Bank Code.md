---
description: Eindeutige Nummer auf Bank festlegen.
forge: github.com
kind: howto
name: partner_bank_code
partner: OCA
prev: ./contacts
repo: OCA/partner-contact
title: Partner Bank Code
versions:
- '16.0'
---


# Partner Bank Code

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Eindeutige Nummer auf Bank festlegen.

Navigieren Sie nach _Kontakte > Konfiguration > Bankverzeichnis_ und zeigen Sie einen Eintrag an. Im Feld _Bank Code_ können Sie eine eindeutige Nummer, beispielsweise die _SIC_, hinterlegen.

## Aktionen

### Bank verknüpfen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

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

Die Aktion speichern und mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen.

## Automatische Aktionen

### Bankkonto mit Bank verknüpfen

Mit dieser Aktion versucht Odoo anhand des _Bank Code_ in der IBAN eine passende Bank im Bank-Verzeichnis zu finden.

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierte Aktionen_ einen Eintrag mit diesen Werten:

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
