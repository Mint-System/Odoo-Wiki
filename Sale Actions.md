****---
title: Verkauf Aktionen
description: Arbeitsflüsse in Verkauf automatisieren.
tags:
- HowTo
- Aktionen
prev: ./sale
---
# Verkauf Aktionen
![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

## Aktionen

### Auf Erledigt setzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Auf Erledigt setzen`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:
	record.write({
	  'state': 'done'
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

### Als Anzahlung markieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Als Anzahlung markieren`\
Modell: `sale.order.line`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:
  rec.update({'is_downpayment': True })
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

### Verkaufsauftrag abbrechen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Verkaufsauftrag abbrechen`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:  
  rec.write({'state': 'cancel'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Verkaufsaufträge können Sie die Einträge markieren und *Aktion > Verkaufsauftrag abbrechen* auswählen.

## Automatische Aktionen

### Angebot automatisch bestätigen

Mit dieser automatischen Aktion wird ein Angebot mit einem bestimmten Attribut (Beispiel: `partner_id.address_checked`) automatisch bestätigt.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatische Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Angebot automatisch bestätigen`\
Modell: `sale.order`\
Auslöser: Bei Erstellung und Aktualisierung\
Trigger-Felder: `partner_id`\
Abgrenzung vor Aktualisierung: `[("partner_id.address_checked", "!=", True)]`\
Anzuwenden auf: `[("partner_id.address_checked", "=", True)]`\
Python Code:

```python
for rec in records:
  rec.action_confirm()
  rec.message_post(body="Die Kundenadresse ist geprüft, der Verkaufsauftrag wurde automatisch bestätigt.")
```

### Angebot bestätigen und Rechnungen erstellen

Mit dieser automatischen Aktion wird ein Angebot mit einem bestimmten Attribut (Beispiel: `x_as4import`) automatisch bestätigt. Rechnungen werden erstellt und ebenfalls bestätigt.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatische Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Angebot bestätigen und Rechnungen erstellen`\
Modell: `sale.order`\
Auslöser: Bei Erstellung und Aktualisierung\
Trigger-Felder: `x_as4import`\
Abgrenzung vor Aktualisierung: `[("x_as4import", "!=", True)]`\
Anzuwenden auf: `[("x_as4import", "=", True)]`\
Python Code:

```python
records.action_confirm()
records._compute_amounts()
records._create_invoices()
for invoice in records.invoice_ids:
  invoice.action_post()
```
