---
title: Website Aktionen
description: Automatisierung der Website-Vorgänge.
kind: howto
section: true
prev: ./website
partner: Mint System
---

# Website Aktionen

![icons_odoo_website](attachments/icons_odoo_website.png)

{{ $frontmatter.description }}

## Aktionen

### Zahlungstransaktion zurücksetzen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Zahlungstransaktion zurücksetzen`
- **Modell**: `payment.transaction`
- **Typ**: `Code ausführen`
- **Code**: 

```python
records.write({'state': 'draft', 'last_state_change': False})
```

## Geplante Aktionen

### Warenkörbe bereinigen

Diese Serveraktion entfernt Warenkörbe, die älter als 1 Woche sind, dem Benutzer _Public user_ gehören und im Status _Angebot_ sind.

Navigieren Sie nach _Einstellungen > Technisch > Automatisierungsregeln_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Warenkörbe bereinigen`
- **Modell**: `ir.actions.server`
- **Ausführen alle**: `1` Tag
- **Nächstes Ausführungsdatum**: `DD.MM.YYYY 03:00:00`
- **Anzahl der Anrufe**: `-1`
- **Typ**: `Code ausführen`
- **Code**:

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

## Automatisierungsregeln

### Website Zahlungsreferenz entfernen

Wenn Sie verhindern möchten, dass die Zahlungsreferenz auf Aufträgen erstellt und auf die Rechnung übernommen wird, können Sie diese automatische Aktion erstellen.

Navigieren Sie nach _Einstellungen > Technisch > Aktionen > Automatische Aktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Website Zahlungsreferenz entfernen`
- **Modell**: `sale.order`
- **Auslöser**: `Bei Erstellung und Aktualisierung`
- **Trigger-Felder**: `reference`
- **Folgeaktion**: `Den Datensatz aktualisieren`

Zu schreibende Daten:

- **Feld**: `reference`
- **Bewertungstyp**: Python Ausdruck
- **Wert**: `''`

### Website Bestellungen bestätigen

Aufträge mit Zahlungsanbieter Banküberweisung automatisch bestätigen.

Navigieren Sie nach _Einstellungen > Technisch > Aktionen > Automatische Aktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Website Bestellungen bestätigen`
- **Modell**: `sale.order`
- **Auslöser**: Bei Erstellung und Aktualisierung
- **Domain vor Aktualisierung**: `[("website_id", "!=", False)]`
- **Anzuwenden auf**: `[("state", "=", "sent")]`
- **Bei der Aktualisierung**: `state`
- **Folgeaktion**: Datensatz aktualisieren
	- **Aktion**: Berechnen
	- **Code**: `record.action_confirm()`

### Unternehmenstyp vom Strassennamen abtrennen

Dient dazu, die `company_type`-Information aus dem Web-Adressformular, die per "Huckepack-Verfahren" an das Feld `street2` gehängt wurde, abzutrennen und abzuspeichern. Die Huckepack-Methode ist im Snippet [Add Company Type](https://odoo.build/snippets/portal.html#add-company-type) als JavaScript eingerichtet. Sie sorgt dafür, dass das `street2`-Feld die Information zum company type angehängt bekommt als hidden input: `<Street2>###<Company Type>`

Navigieren Sie nach _Einstellungen > Technisch > Aktionen > Automatische Aktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Unternehmenstyp vom Strassennamen abtrennen`
- **Modell**: `res.partner`
- **Auslöser**: Bei Erstellung und Bearbeitung
- **Domain vor Aktualisierung**: `[]`
- **Anzuwenden auf**: `[]`
- **Bei der Aktualisierung**: `street2`
- **Folgeaktion**: Code ausführen

```python
for record in records:
    if record.street2 and '###' in record.street2:
        clean, _, ctype = record.street2.rpartition('###')
        if not record.parent_id:
            record.write({'street2': clean})
            continue
        record.write({
            'street2': clean,
            'is_company': ctype == 'company',
        })
```

::: tip
Hat der Kontakt kein Parent, wird der Unternehmenstyp nicht geändert; soll diese Einschränkung nicht gelten, lautet der Code:

```python
for record in records:
    if record.street2 and '###' in record.street2:
        clean, _, ctype = record.street2.rpartition('###')
        record.write({
            'street2': clean,
            'is_company': ctype == 'company',
        })
```
:::