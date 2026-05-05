---
title: Personalabrechnung Aktionen
description: Gehaltsabrechnung automatisieren.
kind: howto
section: true
prev: ./hr-payroll
---

# Personalabrechnung Aktionen

![icons_odoo_hr_payroll](attachments/icons_odoo_hr_payroll.png)

{{ $frontmatter.description }}

## Aktionen

### Gehaltsabrechnung zurücksetzen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Gehaltsabrechnung zurücksetzen`\
Modell: `hr.payslip`\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for record in records:
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Im Formular der Lohnbuchung erscheint nun in der Auswahl _Aktion_ das Menu _Gehaltsabrechnung zurücksetzen_.

### Gehaltsabrechnung versenden

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Gehaltsabrechnung versenden`\
Modell: `hr.payslip`\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for record in records:
  record._generate_pdf()
  record.write({'queued_for_pdf': False})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Im Formular der Lohnbuchung erscheint nun in der Auswahl _Aktion_ das Menu _Gehaltsabrechnung versenden_.

### Stapel zurücksetzen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Batch zurücksetzen`\
Modell: `hr.payslip.Stapel`\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for record in records:
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Im Formular der Batches erscheint nun in der Auswahl _Aktion_ das Menu _Batch zurücksetzen_.

### Lohnbuchung zurücksetzen

Mit dieser Aktion wird die Buchung der Lohnabrechnung in den Entwurfstatus gesetzt. Die Aktion funktioniert nicht für Lohnabrechnungen, die mit einem Batch erstellt wurden.

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lohnbuchung zurücksetzen`\
Modell: `hr.payslip`\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for rec in records.filtered(lambda r: not r.payslip_run_id):
  if rec.move_id:
	  rec.move_id.write({'name': '', 'state': 'draft', 'posted_before': False })
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Im Formular der Lohnabrechnung erscheint nun die Auswahl _Aktionen > Lohnbuchung zurücksetzen_.

### Lohnbuchung entfernen

Mit dieser Aktion wird die Buchung der Lohnabrechnung gelöscht und neu erstellt. Die Aktion funktioniert nicht für Lohnabrechnungen, die mit einem Batch erstellt wurden.

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lohnbuchung entfernen`\
Modell: `hr.payslip`\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for rec in records.filtered(lambda r: not r.payslip_run_id):
  if rec.move_id:
	  rec.move_id.write({'name': '', 'state': 'draft', 'posted_before': False })
	  rec.move_id.unlink()
  # rec._action_create_account_move()
  # rec.move_id.action_post()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Im Formular der Lohnabrechnung erscheint nun die Auswahl _Aktionen > Lohnbuchung entfernen_.

## Automatische Aktionen

### Lohnstuktur zuweisen

Gilt bis #Odoo17.

Wenn Sie die Zuweisung der Lohnstruktur beim Erstellen der Lohnabrechnungen automatisieren möchten, richten Sie diese Aktione in.

Navigieren Sie nach _Einstellungen > Technisch > Aktionen > Automatische Aktionen_ und erstellen Sie einen neuen Eintrag:

**Name**: `Lohnstuktur zuweisen`\
**Modell**: `hr.payslip`\
**Auslöser**: `Bei Erstellung`\
**Folgeaktion**: `Den Datensatz aktualisieren`

Zu schreibende Daten:

- **Feld**: `struc_id`
- **Bewertungstyp**: Python Ausdruck
- **Wert**: `record.contract_id.x_struct_id`

::: warning
Das Feld `x_struct_id` wurde mithilfe eines [Snippets](Development%20Snippets.md) erstellt.
:::
Gehaltsabrechnung