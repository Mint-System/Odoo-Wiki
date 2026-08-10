---
title: Kundendienst Aktionen
description: Arbeitsflüsse im Kundendienst automatisieren.
kind: howto
section: true
prev: ./discuss
partner: Mint System
---

# Kundendienst Aktionen

![icons_odoo_helpdesk](attachments/icons_odoo_helpdesk.png)

{{ $frontmatter.description }}

## Aktionen

### Ticket an Team weiterleiten

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name der Aktion**: `Ticket an Team weiterleiten`
- **Modell**: `helpdesk.ticket`
- **Typ**: `Code ausführen`
- **Code**: 

```python
team_id = env.ref("__custom__.team_smartred_info")
stage_id = env.ref("__custom__.stage_new_smartred")
action = env.ref("helpdesk.helpdesk_ticket_action_main_tree").sudo().read()[0]

for rec in records:
    rec.message_unsubscribe([rec.user_id.partner_id.id])
    rec.sudo().write({
        'user_id': False,
        'team_id': team_id.id,
        'stage_id': stage_id.id,
    })
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

## Automatische Aktionen

### Bei Verkaufsauftrag ein Ticket erstellen

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierte Aktionen_ einen Eintrag mit diesen Werten:

- **Name der Aktion**: `Bei Verkaufsauftrag ein Ticket erstellen`
- **Modell**: `sale.order`
- **Auslöser**: Beim Aktualisieren
- **Tigger-Felder**: `state`
- **Anzuwenden auf**: `["&", ("state", "=", "sale"), ("subscription_child_ids", "=", False)]`
- **Folgeaktion**: Einen neuen Datensatz erzeugen
- **Ziel-Modell**: `helpdesk.ticket`
- **Zu schreibende Daten**:

| Feld      | Bewertungstyp     | Wert                           |
| --------- | ----------------- | ------------------------------ |
| `name`    | Python Expression | `'New Order: S' + record.name` |
| `team_id` | Referenz          | `$TEAM_ID`                     |
