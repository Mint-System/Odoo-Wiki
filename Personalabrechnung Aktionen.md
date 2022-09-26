---
tags:
- HowTo
- Aktionen
prev: ./personalabrechnung
---
# Personalabrechnung Aktionen
![icons_odoo_hr_payroll](assets/icons_odoo_hr_payroll.png)

Lohnabrechnung automatisieren.

## Aktion "Lohnabrechnung zurücksetzen" hinzufügen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lohnabrechnung zurücksetzen`\
Modell: `hr.payslip`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Lohnbuchung erscheint nun in der Auswahl *Aktion* das Menu *Lohnabrechnung zurücksetzen*.

## Aktion "Batch zurücksetzen" hinzufügen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Batch zurücksetzen`\
Modell: `hr.payslip.run`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Batches erscheint nun in der Auswahl *Aktion* das Menu *Batch zurücksetzen*.

### Automatische Aktion "Lohnstuktur zuweisen" erstellen

Wenn Sie die Zuweisung der Lohnstruktur beim Erstellen der Lohnabrechnungen automatisieren möchten, richten Sie diese Aktione in.

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Automatische Aktionen* und erstellen Sie einen neuen Eintrag:

**Name**: `Lohnstuktur zuweisen`\
**Modell**: `hr.payslip`\
**Triggerbedingung**: `Bei Erstellung`\
**Folgeaktion**: `Den Datensatz aktualisieren`

Zu schreibende Daten:
* **Feld**: `struc_id`
* **Bewertungstyp**: Python Ausdruck
* **Wert**: `record.contract_id.x_struct_id`

::: warning
Das Feld `x_struct_id` wurde mithilfe eines [Snippets](Entwicklung%20Snippets.md) erstellt.
:::