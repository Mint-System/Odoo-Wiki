---
title: Kundendienst Aktionen
description: Arbeitsflüsse im Kundendienst automatisieren.
kind: howto
prev: ./helpdesk
---
# Kundendienst Aktionen
![icons_odoo_helpdesk](attachments/icons_odoo_helpdesk.png)

{{ $frontmatter.description }}

## Automatisierte Aktionen

### Bei Verkaufsauftrag ein Ticket erstellen

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

* **Name der Aktion**: `Bei Verkaufsauftrag ein Ticket erstellen`
* **Modell**: `sale.order`
* **Auslöser**: Beim Aktualisieren
* **Tigger-Felder**: `state`
* **Anzuwenden auf**: `["&", ("state", "=", "sale"), ("subscription_child_ids", "=", False)]`
* **Folgeaktion**: Einen neuen Datensatz erzeugen
* **Ziel-Modell**: `helpdesk.ticket`
* **Zu schreibende Daten**:

| Feld      | Bewertungstyp     | Wert                           |
| --------- | ----------------- | ------------------------------ |
| `name`    | Python Expression | `'New Order: S' + record.name` |
| `team_id` | Referenz          | `$TEAM_ID`                     |
