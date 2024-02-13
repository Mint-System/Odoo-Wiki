---
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

### Angebot bestätigen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Angebot bestätigen`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:  
  rec.action_confirm()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

### Verkaufsauftrag bestätigen und Rechnung erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Verkaufsauftrag bestätigen`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:  
  rec.action_confirm()
  rec._create_invoices()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Verkaufsaufträge können Sie die Einträge markieren und *Aktion > Verkaufsauftrag bestätigen* auswählen.

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

### Beschaffung starten

Mit dieser Serveraktion können Sie die Beschaffungsregeln auf den Autragszeilen für einen Verkaufsauftrag manuell auslösen.

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Beschaffung starten`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:  
  rec.order_line._action_launch_stock_rule()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

### Steuersätze aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Steuersätze aktualisieren`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for line in records.order_line:
	line._compute_tax_id()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

## Automatisierte Aktionen

### Angebot bestätigen und Rechnungen erstellen

Mit dieser automatischen Aktion wird ein Angebot mit einem bestimmten Attribut (Beispiel: `x_as4import`) automatisch bestätigt. Rechnungen werden erstellt und ebenfalls bestätigt.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

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

### Abonnemente auf Angebot entfernen

Name der Aktion: `Abonemente auf Angebot entfernen`\
Modell: `sale.order`\
Auslöser: Bei Erstellung und Aktualisierung\
Python Code:

```python
for rec in records:
  allow_ids = rec.team_id.member_ids.partner_id
  unsubscribe_ids = rec.message_partner_ids.filtered(lambda p: p not in allow_ids)
  if unsubscribe_ids:
    rec.message_unsubscribe(unsubscribe_ids.ids)
```

### Angebot bestätigen

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Angebot bestätigen`\
Modell: `sale.order`\
Auslöser: Beim Aktualisieren\
Trigger-Felder: `x_as4import`\
Abgrenzung vor Aktualisierung: `[("x_as4import", "!=", True)]`\
Anzuwenden auf: `[("x_as4import", "=", True)]`\
Python Code:

```python
records.action_confirm()
records._compute_amounts()
```

### Rechnung erstellen

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Rechnung erstellen`\
Modell: `sale.order`\
Auslöser: Beim Aktualisieren\
Trigger-Felder: `x_as4import`\
Abgrenzung vor Aktualisierung: `[("invoice_status", "!=", "invoiced")]`\
Anzuwenden auf: `["&", ("x_as4import", "=", True), ("invoice_status", "=", "to invoice")]`\
Python Code:

```python
records._create_invoices()
for invoice in records.invoice_ids:
  if invoice.state != 'posted':
    invoice.action_post()
records._compute_invoice_status()
```