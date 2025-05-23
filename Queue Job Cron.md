---
title: Queue Job Cron
description: Cron Jobs asynchron ausführen.
kind: howto
tags:
- OCA
prev: ./development
---

# Queue Job Cron
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `queue_job_cron`\
Repository: <https://github.com/OCA/queue/tree/16.0/queue_job_cron>

## Verwendung

### Geplante Aktion als Job ausführen

Rufen Sie die geplante Aktion unter *Einstellungen > Technisch > Geplante Aktionen* auf. Aktivieren Sie die Option *als Warteschlangen-Job ausführen*. Wählen Sie Optional den Kanal aus.

### Ausführung als Job testen

Wenn Sie eine [Geplante Aktion als Job ausführen](#Geplante%20Aktion%20als%20Job%20ausführen) können Sie die Ausführung mit *Manuell Ausführen* auslösen. Zeige Sie die [Warteschlange](Queue%20Job.md#Warteschlange%20anzeigen) an. Sie sehen die Ausführung als Job.