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

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Zahlungstransaktion zurücksetzen`\
Modell: `payment.transaction`\
Folgeaktion: `Python-Code ausführen`

```python
records.write({'state': 'draft', 'last_state_change': False})
```

## Geplante Aktionen

### Warenkörbe bereinigen

Diese Serveraktion entfernt Warenkörbe, die älter als 1 Woche sind, dem Benutzer *Public  user* gehören und im Status *Angebot* sind.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Warenkörbe bereinigen`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tag\
Nächstes Ausführungsdatum: `DD.MM.YYYY 03:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
last_week = datetime.datetime.now().date() - datetime.timedelta(days=7)

delete_cart_ids = env["sale.order"].search([
    ("partner_id", "=", "Public user"),
    ("date_order", "<=", last_week),
    ("state", "=", "draft"),
])
log("Delete sale order carts: %s" %  delete_cart_ids.mapped("name"), level='info')
delete_cart_ids.unlink()
```

## Automatisierte Aktionen

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



