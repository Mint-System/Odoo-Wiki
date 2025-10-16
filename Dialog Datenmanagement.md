---
title: Dialog Datenmanagement
description: Daten zu Dialog exportieren und importieren.
kind: howto
prev: ./dialog
---

# Dialog Datenmanagement

![icons_odoo_mail](attachments/icons_odoo_mail.png)

{{ $frontmatter.description }}

## Export

### Konversation exportieren

Wenn Sie eine Konversation zwischen zwei Personen, beispielsweise `Janik von Rotz` und `Kurt Gisler` exportieren möchten, rufen Sie als erstes _Einstellungen > Technisch > Nachrichten_ auf. Erstellen Sie die folgenden Filter:

- Zugehöriges Datenmodell ist `mail.channel
- Name des Nachrichtendatensates ist `Kurt Gisler, Janik von Rotz`

Der Name des Nachrichtendatensates müssen Sie vorgängig prüfen. Nun erstellen Sie einen Export:

Felder:

```
author_id
date
subject
body
```

File: `mail.message.csv`
