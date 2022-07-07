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
  record.write({'state': 'verify'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Batches erscheint nun in der Auswahl *Aktion* das Menu *Batch zurücksetzen*.