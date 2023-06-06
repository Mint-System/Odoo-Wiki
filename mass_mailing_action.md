---
title: E-Mail-Marketing Aktionen
description: Arbeitsflüsse in E-Mail-Marketing automatisieren.
tags:
- HowTo
- Aktionen
prev: ./mass_mailing
---
# E-Mail-Marketing Aktionen
![icons_odoo_mass_mailing](assets/icons_odoo_mass_mailing.png)

{{ $frontmatter.description }}

## Aktionen

### Anzeigen Unsubscribe URL

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Anzeigen Unsubscribe URL`\
Modell: `mailing.trace`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
url = record.mass_mailing_id._get_unsubscribe_url(record.email, 0)
raise Warning(url)
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Formularansicht der Mailing-Statistiken wählen Sie *Aktion > Anzeigen Unsubscribe URL*.