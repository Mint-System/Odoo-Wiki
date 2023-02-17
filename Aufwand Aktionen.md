---
tags:
- HowTo
prev: ./anwesenheit
---
# Aufwand Aktionen
![icons_odoo_hr_expense](assets/icons_odoo_hr_expense.png)

Aktionen für Aufwand App einrichten.

## Aktionen

### Aufwand zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Aufwand zurücksetzen`\
Modell: `hr.expense.sheet`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for rec in records:  
  rec.action_unpost()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern. In der Ansicht der Auslagenberichte können Sie *Aktion > Aufwand zurücksetzen* anwählen.