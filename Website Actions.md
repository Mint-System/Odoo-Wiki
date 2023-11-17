---
title: Website Aktionen
description: Automatisierung der Website-Vorgänge.
tags:
- HowTo
prev: ./website
---
# Website Aktionen
![icons_odoo_website](attachments/icons_odoo_website.png)

{{ $frontmatter.description }}

## Aktionen

### Zahlungstransaktion zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Zahlungstransaktion zurücksetzen`\
Modell: `payment.transaction`\
Folgeaktion: `Python-Code ausführen`

```python
records.write({'state': 'draft', 'last_state_change': False})
```


## Automatische Aktionen

### Website Zahlungsreferenz entfernen

Wenn Sie verhindern möchten, dass die Zahlungsreferenz auf Aufträgen erstellt und auf die Rechnung übernommen wird, können Sie diese automatische Aktion erstellen.

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Automatische Aktionen* und erstellen Sie einen neuen Eintrag:

**Name**: `Website Zahlungsreferenz entfernen`\
**Modell**: `sale.order`\
**Auslöser**: `Bei Erstellung und Aktualisierung`\
**Trigger-Felder**: `reference`
**Folgeaktion**: `Den Datensatz aktualisieren`

Zu schreibende Daten:
* **Feld**: `reference`
* **Bewertungstyp**: Python Ausdruck
* **Wert**: `''`



