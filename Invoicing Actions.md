---
title: Rechnungsstellung Aktionen
description: Neue Aktionen für Rechnungstellung und Mahnungen.
kind: howto
section: true
prev: ./accounting
partner: Mint System
---

# Rechnungsstellung Aktionen

![icons_odoo_account](attachments/icons_odoo_account.png)

{{ $frontmatter.description }}

## Aktionen

### Auf Entwurf zurücksetzen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Auf Entwurf zurücksetzen`
- **Modell**: `account.move`
- **Typ**: `Code ausführen`
- **Code**:

```python
for record in records:
  record.button_draft()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun die Auswahl _Aktionen > Auf Entwurf zurücksetzen_.

### Als gesendet markieren

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Als gesendet markieren`
- **Modell**: `account.move`
- **Typ**: `Code ausführen`
- **Code**: 

```python
for record in records:
	record.write({ 'is_move_sent': True })
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun in der Auswahl _Aktion_ das Menu _Als gesendet markieren_.

### Als ungebucht markieren

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Als ungebucht markieren`
- **Modell**: `account.move`
- **Typ**: `Code ausführen`
- **Code**: 

```python
for record in records:
	if record.state != 'cancel':
		UserError('Can only unpost entry if it is cancelled.')
	record.write({ 'posted_before': False })
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun in der Auswahl _Aktion_ das Menu _Als ungebucht markieren_.

### Als gebucht markieren

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Als gebucht markieren`
- **Modell**: `account.move`
- **Typ**: `Code ausführen`
- **Code**:

```python
for record in records:
  record.write({'state': 'posted'})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun in der Auswahl _Aktion_ das Menu _Als gebucht markieren_.

### Mahngebühren hinzufügen

Mit dieser Aktion wird einer gebuchten Rechnung eine Mahngebühr hinzugefügt. Damit diese Aktion funktioniert, müssen Sie ein [Produkt Mahngebühren einrichten](Invoicing%20Followup.md#Produkt%20Mahngebühren%20einrichten).

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Mahngebühren hinzufügen`
- **Modell**: `account.move`
- **Typ**: `Code ausführen`
- **Code**:

```python
product_templ_id = env.ref("__custom__.product_follwup_fees")
if not product_templ_id:
	raise UserError("No product for follwup fees found.")
for rec in records:
	date_maturity = datetime.datetime.now() + datetime.timedelta(days=30)
	rec.write({
		'line_ids': [(0, 0, {'product_id': product_templ_id.product_variant_id.id, 'date_maturity': date_maturity })]
	})

```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

### Steuersätze aktualisieren

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Steuersätze aktualisieren`
- **Modell**: `account.move`
- **Typ**: `Code ausführen`
- **Code**:

```python
for line in records.invoice_line_ids:
	line._compute_tax_ids()
```

Gilt bis <Badge type="info" text="Odoo15" vertical="middle" />:

```python
for rec in records:
	for line in rec.line_ids.filtered(lambda l: l.product_id):
		line.write({'tax_ids': [line.product_id.taxes_id.id]})
```

Die Aktion speichern und mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen.

### Steuersatz entfernen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Steuersatz entfernen`
- **Modell**: `account.move.line`
- **Typ**: `Code ausführen`
- **Code**:

```python
records.write({'tax_ids': False})
```

Die Aktion speichern und mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen.

### Anhang entfernen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Anhang entfernen`
- **Modell**: `account.move`
- **Typ**: `Code ausführen`
- **Code**:

```python
records.attachment_ids.unlink()
```

Die Aktion speichern und mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen.

### Empfänger für Mahnungen ausgeben

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Empfänger für Mahnungen ausgeben`
- **Modell**: `account.move`
- **Typ**: `Code ausführen`
- **Code**:

```python
raise UserError(record._get_all_followup_contacts())
```

Die Aktion speichern und mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen.

### PDF-Datei vorbereiten

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `PDF-Datei vorbereiten`
- **Modell**: `account.move`
- **Typ**: `Code ausführen`
- **Code**:

```python
invoices_report = env.ref('account.account_invoices')
for rec in records:
	env['ir.actions.report']._render_qweb_pdf(invoices_report, res_ids=[rec.id])
```

### Zahlung als Bezahlt festlegen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Zahlung als Bezahlt festlegen`
- **Modell**: `account.payment`
- **Typ**: `Den Datensatz aktualisieren`
- **Aktionsdetails**: Aktualisieren _Status_ zu _Bezahlt_

## Geplante Aktionen

### Rechnungen automatisch senden

Diese geplante Aktion versendet alle Rechnungen, die ...

- gebucht sind
- noch nicht versendet wurden

Im Versandprozess wird die PDF-Datei erstellt. Wenn Rechnungen als E-Mail versendet werden, dann wird abhängig vom Rechnungstyp die E-Mail-Vorlage ausgewählt.

- **Ausgangsrechnung**: Rechnung: Senden
- **Ausgehende Rückerstattung**: Versand an Kunden mit der Gutschrift im Anhang
- **Eingangsrechnungen**: Selbst-fakturierte Rechnung: Versand
- **Eingehende Rückerstattung**: Selbst-fakturierte Gutschrift: Versand

### PDF-Datei von Kundenrechnungen vorbereiten

Diese geplante Aktion erstellt die PDF-Dateien von Kundenrechnungen, die noch keinen Anhang haben.

Navigieren Sie nach _Einstellungen > Technisch > Automatisierungsregeln_ und erstellen Sie einen neuen Eintrag:

- **Name**: `PDF-Datei von Kundenrechnungen vorbereiten`
- **Modell**: `ir.actions.server`
- **Ausführen alle**: `1` Woche
- **Nächstes Ausführungsdatum**: `DD.MM.YYYY 06:00:00`
- **Anzahl der Anrufe**: `-1`
- **Typ**: `Code ausführen`
- **Code**:

```python
invoices_report = env.ref('account.account_invoices')
invoices = env['account.move'].search([('attachment_ids','=',False),('move_type','=','out_invoice'),('id','=',28)])

log('Create pdf files for invoices: %s' % invoices)

for invoice in invoices:
  content, _content_type = env['ir.actions.report']._render_qweb_pdf(invoices_report, res_ids=[invoice.id])
```

## Automatisierungsregeln

### Standard-Bargeldrundungsmethode festlegen

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierungsregeln_ einen Eintrag mit diesen Werten:

- **Name**: `Standard-Bargeldrundungsmethode festlegen`
- **Modell**: `account.move`
- **Auslöser**: Bei Erstellung
- **Anzuwenden auf**:

```python
[("move_type", "=", "out_invoice")]
```

- **Folgeaktion**: Daten aktualisieren
- **Journalbuchung aktualisieren**: Bargeldrundungsmethode = Rundung auf 5 Rappen

### Follower aus Auftrag auf Kundenrechnung entfernen

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierungsregeln_ einen Eintrag mit diesen Werten:

- **Name**: `Follower aus Auftrag auf Kundenrechnung entfernen`
- **Modell**: `account.move`
- **Auslöser**: Bei Erstellung und Bearbeitung
- **Domain vor Aktualisierung**: `[]`
- **Anwenden auf**: `[("move_type", "=", "out_invoice")]`
- **Bei der Aktualisierung**: `[]`
- **Folgeaktion**: Code ausführen

```python
for rec in records:
  unsubscribe_ids = rec.invoice_line_ids.sale_line_ids.order_id.user_id.partner_id
  if unsubscribe_ids:
    rec.message_unsubscribe(unsubscribe_ids.ids)
```
