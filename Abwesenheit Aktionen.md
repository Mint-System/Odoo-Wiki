---
tags:
- HowTo
prev: ./abwesenheit
---
# Abwesenheit Aktionen
![icons_odoo_hr_holidays](assets/icons_odoo_hr_holidays.png)

Aktionen für Abwesenheit App einrichten.

## Aktionen

### Ablehnen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Ablehnen`\
Modell: `hr.leave`\
Folgeaktion: `Python-Code ausführen`

```python
for rec in records:  
  rec.action_refuse()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Abwesenheitszeiten erscheint nun in der Auswahl *Aktion* das Menu *Ablehnen*.

![](assets/Aktionen%20Abwesenheitszeiten%20Ablehnen.png)
