---
title: Personalabrechnung Aktionen
description: Lohnabrechnung automatisieren.
tags:
- HowTo
- Aktionen
prev: ./hr-payroll
---
# Personalabrechnung Aktionen
![icons_odoo_hr_payroll](attachments/icons_odoo_hr_payroll.png)

{{ $frontmatter.description }}

## Aktionen

### Lohnabrechnung zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lohnabrechnung zurücksetzen`\
Modell: `hr.payslip`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for record in records:  
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Lohnbuchung erscheint nun in der Auswahl *Aktion* das Menu *Lohnabrechnung zurücksetzen*.

### Lohnabrechnung versenden

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lohnabrechnung versenden`\
Modell: `hr.payslip`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for record in records:  
  record._generate_pdf()
  record.write({'queued_for_pdf': False})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Lohnbuchung erscheint nun in der Auswahl *Aktion* das Menu *Lohnabrechnung versenden*.

### Batch zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Batch zurücksetzen`\
Modell: `hr.payslip.run`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for record in records:
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Batches erscheint nun in der Auswahl *Aktion* das Menu *Batch zurücksetzen*.

### Lohnbuchung zurücksetzen

Mit dieser Aktion wird die Buchung der Lohnabrechnung in den Entwurfstatus gesetzt. Die Aktion funktioniert nicht für Lohnabrechnungen, die mit einem Batch erstellt wurden.

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lohnbuchung zurücksetzen`\
Modell: `hr.payslip`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for rec in records.filtered(lambda r: not r.payslip_run_id):
  if rec.move_id:
	  rec.move_id.write({'name': '', 'state': 'draft', 'posted_before': False })
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Lohnabrechnung erscheint nun die Auswahl *Aktionen > Lohnbuchung zurücksetzen*.

### Lohnbuchung entfernen

Mit dieser Aktion wird die Buchung der Lohnabrechnung gelöscht und neu erstellt. Die Aktion funktioniert nicht für Lohnabrechnungen, die mit einem Batch erstellt wurden.

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lohnbuchung entfernen`\
Modell: `hr.payslip`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for rec in records.filtered(lambda r: not r.payslip_run_id):
  if rec.move_id:
	  rec.move_id.write({'name': '', 'state': 'draft', 'posted_before': False })
	  rec.move_id.unlink()
  # rec._action_create_account_move()
  # rec.move_id.action_post()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Lohnabrechnung erscheint nun die Auswahl *Aktionen > Lohnbuchung entfernen*.


## Automatisierte Aktionen

### Lohnstuktur zuweisen

Wenn Sie die Zuweisung der Lohnstruktur beim Erstellen der Lohnabrechnungen automatisieren möchten, richten Sie diese Aktione in.

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Automatische Aktionen* und erstellen Sie einen neuen Eintrag:

**Name**: `Lohnstuktur zuweisen`\
**Modell**: `hr.payslip`\
**Auslöser**: `Bei Erstellung`\
**Folgeaktion**: `Den Datensatz aktualisieren`

Zu schreibende Daten:
* **Feld**: `struc_id`
* **Bewertungstyp**: Python Ausdruck
* **Wert**: `record.contract_id.x_struct_id`

::: warning
Das Feld `x_struct_id` wurde mithilfe eines [Snippets](Development%20Snippets.md) erstellt.
:::