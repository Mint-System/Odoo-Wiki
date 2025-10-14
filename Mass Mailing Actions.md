---
title: E-Mail-Marketing Aktionen
description: Arbeitsflüsse in E-Mail-Marketing automatisieren.
kind: howto
tags:
  - Actions
prev: ./mass_mailing
---

# E-Mail-Marketing Aktionen

![icons_odoo_mass_mailing](attachments/icons_odoo_mass_mailing.png)

{{ $frontmatter.description }}

## Aktionen

### Anzeigen Unsubscribe URL

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Anzeigen Unsubscribe URL`\
Modell: `mailing.trace`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
url = record.mass_mailing_id._get_unsubscribe_url(record.email, 0)
raise Warning(url)
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Formularansicht der Mailing-Statistiken wählen Sie _Aktionen > Anzeigen Unsubscribe URL_.
