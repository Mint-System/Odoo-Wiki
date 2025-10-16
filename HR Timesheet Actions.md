---
title: Zeiterfassung Aktionen
description: Arbeitsflüsse in der Zeiterfassung automatisieren.
kind: howto
prev: ./hr-timesheet
---

# Zeiterfassung Aktionen

![icons_odoo_hr_timesheet](attachments/icons_odoo_hr_timesheet.png)

## Aktionen

### Auftragselement von Aufgabe entfernen

_Gilt ab #Odoo14._

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Auftragselement von Aufgabe entfernen`\
Modell: `account.analytic.line`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld Pythoncode:

```python
for record in records:
	record.task_id.write({'sale_line_id': False})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Ansicht von Kostenstellen-Buchungen erscheint nun in der Auswahl _Aktion_ das Menu _Validierung zurücksetzen_.

### Validierung zurücksetzen

_Benötigt bis #Odoo18._

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Validierung zurücksetzen`\
Modell: `account.analytic.line`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld Pythoncode:

```python
records.write({'validated': False})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Ansicht von Kostenstellen-Buchungen erscheint nun in der Auswahl _Aktion_ das Menu _Validierung zurücksetzen_.
