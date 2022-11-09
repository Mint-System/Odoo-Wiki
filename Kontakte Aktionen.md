---
tags:
- HowTo
prev: ./kontakte
---
# Kontakte Aktionen
![icons_odoo_website_sale_options](assets/icons_odoo_website_sale_options.png)

Arbeitsflüsse mit Kontakte automatisieren.

## Geplante Aktionen

### Geplante Aktion "Kontakte mit geplanter Aktivität archivieren" erstellen

Erfassen Sie einen [neuen Aktivitätstyp](Diskussion%20Aktivitäten.md#Neuer%20Aktivitätstyp%20erfassen). Mit dieser geplanten Aktion können Sie Kontakte, welche diese Aktivität haben archivieren lassen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Kontakte mit geplanter Aktivität archivieren`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Settings
scope_days = 7

# Get confirmed outgoing pickings
# pickings_out = en