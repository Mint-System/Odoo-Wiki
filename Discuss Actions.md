---
title: Discuss Aktionen
description: Arbeitsflüsse für Dialog automatisieren.
kind: howto
prev: ./discuss
---

# Discuss Aktionen

![icons_odoo_mail](attachments/icons_odoo_mail.png)

{{ $frontmatter.description }}

## Aktionen

### Alle Follower entfernen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Alle Follower entfernen`\
Modell: `project.task` (oder ein anderes Datenmodell)\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
for record in records:
  record.message_follower_ids.unlink()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Auf der Listenansicht des Datenmodell markieren Sie ausgewählte Einträge und wählen _Aktionen > Alle Follower entfernen_.

### Als Follower hinzufügen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Als Follower hinzufügen`\
Modell: `project.task` (oder ein anderes Datenmodell)\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
records._message_subscribe([user.partner_id.id])
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und speichern.

## Geplante Aktionen

### E-Mail: E-Mail-Manager für Warteschlange

Diese geplante Serveraktion prüft die Liste der Mails. Mails, die im Status _Ausgehend_ sind, werden versendet.
