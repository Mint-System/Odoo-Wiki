---
title: Diskussion Aktivitäten
description: Arbeitsflüsse für Diskussion automatisieren.
tags:
- HowTo
prev: ./discuss
---
# Diskussion Aktivitäten
![icons_odoo_mail](assets/icons_odoo_mail.png)

{{ $frontmatter.description }}

## Aktionen

### Alle Abonnenten entfernen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Alle Abonnenten entfernen`\
Modell: `project.task` (oder ein anderes Datenmodell)\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:  
  record.message_follower_ids.unlink()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Auf der Listenansicht des Datenmodell markieren Sie ausgewählte Einträge und wählen *Aktion > Alle Abonnenten entfernen*.
