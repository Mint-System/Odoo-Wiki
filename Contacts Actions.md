---
title: Kontakte Aktionen
description: Arbeitsflüsse mit Kontakte automatisieren.
kind: howto
section: true
prev: ./contacts
partner: Mint System
---

# Kontakte Aktionen

![icons_odoo_website_sale_options](attachments/icons_odoo_website_sale_options.png)

{{ $frontmatter.description }}

## Aktionen

### Kontakt als Privat festlegen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Kontakt als Privat festlegen`\
Modell: `res.partner`\
Folgeaktion: Den Datensatz aktualiseren
Im Tab _Zu schreibende Daten_:

- **Feld**: Adresstyp
- **Bewertungstyp**: Wert
- **Wert**: `private`

Im Tab _Zu schreibende Daten_:

- **Gruppenname**: Technisch / Zugriff auf private Adressen

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen.

### Kontakt als Kontakt festlegen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Kontakt als Kontakt festlegen`\
Modell: `res.partner`\
Folgeaktion: Den Datensatz aktualiseren
Im Tab _Zu schreibende Daten_:

- **Feld**: Adresstyp
- **Bewertungstyp**: Wert
- **Wert**: `contact`

Im Tab _Zu schreibende Daten_:

- **Gruppenname**: Technisch / Zugriff auf private Adressen

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen.

### Stichwort hinzufügen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name der Aktion:** `Stichwort hinzufügen`\
- **Modell**: `res.partner`\
- **Type**: Code ausführen
- **Code**:

```python
invite_category = env.ref("smartme_portal_mass_invite.portal_mass_invite_partner_category")
records.write({
    "category_id": [Command.link(invite_category.id)],
})
```

Dieser Eintrag mit Aktion _Kontextuelle Aktion erstellen_ bestätigen.

### Stichwort entfernen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name der Aktion:** `Stichwort entfernen`\
- **Modell**: `res.partner`\
- **Type**: Code ausführen
- **Code**:

```python
category1 = env.ref("smartme_portal_mass_invite.portal_mass_invite_partner_category")
category2 = env.ref("__custom__.tag_shopify")

records.write({
    "category_id": [
        Command.unlink(category1.id),
        Command.unlink(category2.id)
    ],
})
```

Dieser Eintrag mit Aktion _Kontextuelle Aktion erstellen_ bestätigen.

### Massen-Einladungen für Portal-Zugriff versenden

Mit dieser Server-Aktion können Sie Massen-Einladungen für den Portal-Zugriff versenden. Erstellen Sie ein Stichwort mit der XML-ID `portal_mass_invite.portal_mass_invite_partner_category`. Die Aktion berücksichtigt nur Kontakte mit diesem Stichwort.

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name der Aktion:** `Massen-Einladungen für Portal-Zugriff versenden`\
- **Modell**: `res.partner`\
- **Type**: Code ausführen
- **Code**:

```python
invite_category = env.ref("portal_mass_invite.portal_mass_invite_partner_category")
partners_to_invite = records.filtered_domain([("category_id", "in", invite_category.id)])

wizard = env["portal.wizard"].create({"partner_ids": partners_to_invite.ids})
users_already_granted = wizard.user_ids.filtered(lambda user: user.is_portal or user.is_internal)
users_to_grant = wizard.user_ids.filtered(lambda user: not user.is_portal and not user.is_internal and user.email_state == "ok")
for user in users_to_grant:
    user.action_grant_access()

(users_to_grant + users_already_granted).partner_id.write({
    "category_id": [Command.unlink(invite_category.id)],
})

nb_granted = len(users_to_grant.partner_id)
nb_already_granted = len(users_already_granted.partner_id)
nb_skipped = len(partners_to_invite) - nb_granted - nb_already_granted
action = {
    "type": "ir.actions.client",
    "tag": "display_notification",
    "params": {
        "message": env._("Granted portal access to %d contacts. %d contacts skipped because they already have portal access. %d contacts skipped because their email is not valid.", nb_granted, nb_already_granted, nb_skipped),
        "type": "success",
        "sticky": True,
        "next": {"type": "ir.actions.act_window_close"},
    },
}
```

Dieser Eintrag mit Aktion _Kontextuelle Aktion erstellen_ bestätigen.

## Geplante Aktionen

### Kontakte mit geplanter Aktivität archivieren

Erfassen Sie einen [neuen Aktivitätstyp](Discuss%20Activities.md#Neuer%20Aktivitätstyp%20erfassen). Mit dieser geplanten Aktion können Sie Kontakte, welche diese Aktivität haben archivieren lassen.

Navigieren Sie nach _Einstellungen > Technisch > Geplante Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Kontakte mit geplanter Aktivität archivieren`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
name = 'Zur Archivierung und Requalifikation'

type_id = env['mail.activity.type'].search( [('name', '=', name)], limit=1)

activity_ids = env['mail.activity'].search( [('activity_type_id', '=', type_id.id), ('date_deadline', '<=', datetime.date.today())] )

partner_ids = env['res.partner'].search( [('id', 'in', activity_ids.mapped('res_id'))] )

# raise UserError(partner_ids)

partner_ids.write({'active': False})
if partner_ids:
  log('Archived partners with planned activity: %s' % ', '.join(partner_ids.mapped('display_name')))
```

::: tip
Die Aktivität auf dem Kontakt wird im Archivierungsvorgang gelöscht.
:::

## Automatische Aktionen

###  Unternehmen (company_id) bei neuem Kontakt entfernen

- Name der Aktion: `Unternehmen (company_id) bei neuem Kontakt entfernen`
- Modell: `Kontakt`
- Auslöser: `Bei Erstellung`
- Domain: `[("company_id", "!=", False)]`
- Folgeaktion: `Datensatz aktualisieren`
- Feld: `Unternehmen (company_id)`
- Wert: `False`

