---
title: Discuss Aktionen
description: Arbeitsflüsse für Dialog automatisieren.
kind: howto
section: true
prev: ./discuss
partner: Mint System
---

# Discuss Aktionen

![icons_odoo_mail](attachments/icons_odoo_mail.png)

{{ $frontmatter.description }}

## Aktionen

### Alle Follower entfernen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Alle Follower entfernen`\
Modell: `project.task` (oder ein anderes Datenmodell)\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
for record in records:
  record.message_follower_ids.unlink()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Auf der Listenansicht des Datenmodell markieren Sie ausgewählte Einträge und wählen _Aktionen > Alle Follower entfernen_.

### Als Follower hinzufügen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Als Follower hinzufügen`\
Modell: `project.task` (oder ein anderes Datenmodell)\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
records._message_subscribe([user.partner_id.id])
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und speichern.

## Geplante Aktionen

### E-Mail: E-Mail-Manager für Warteschlange

Diese geplante Serveraktion prüft die Liste der Mails. Mails, die im Status _Ausgehend_ sind, werden versendet.

### Standard-Follower bei Versand von Nachricht entfernen

Mit dieser automatischen Aktion wird der Standard-Follower (`partner_id` auf Dokument) beim Versand einer Nachricht aus der Liste der Follower gelöscht.

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierte Aktionen_ einen Eintrag mit diesen Werten:

Name der Aktion: `Standard-Follower bei Versand von Nachricht entfernen`\
Modell: `mail.message`\
Auslöser: Bei Erstellung\
Anzuwenden auf:

```python
[("message_type", "=", "comment")]
```

Folgeaktion: Code ausführen\
Python Code:

```python
for rec in records.filtered(lambda r: r.model == "helpdesk.ticket"):
    record_id = env[rec.model].browse(rec.res_id)
    if record_id:
        record_id.message_unsubscribe([record_id.partner_id.id])
```
