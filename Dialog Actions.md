---
title: Dialog Aktionen
description: Arbeitsflüsse für Dialog automatisieren.
kind: howto
prev: ./dialog
---
# Dialog Aktionen
![icons_odoo_mail](attachments/icons_odoo_mail.png)

{{ $frontmatter.description }}

## Aktionen

### Alle Follower entfernen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Alle Follower entfernen`\
Modell: `project.task` (oder ein anderes Datenmodell)\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:  
  record.message_follower_ids.unlink()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Auf der Listenansicht des Datenmodell markieren Sie ausgewählte Einträge und wählen *Aktionen > Alle Follower entfernen*.

### Als Follower hinzufügen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Als Follower hinzufügen`\
Modell: `project.task` (oder ein anderes Datenmodell)\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
records._message_subscribe([user.partner_id.id])
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

## Geplante Aktionen

### E-Mail: E-Mail-Manager für Warteschlange

Diese geplante Serveraktion prüft die Liste der Mails. Mails, die im Status *Ausgehend* sind, werden versendet.