---
title: Web Timeline
description: Die Timeline-Ansicht für alle Objekte.
kind: howto
partner: OCA
prev: ./development
---

# Web Timeline

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `web_timeline`\
Repository: <https://github.com/OCA/web/tree/17.0/web_timeline>

## Verwendung

### Timeline für Abwesenheiten anzeigen

Damit der Ansichtstyp _Timeline_ für die App _Abwesenheitszeiten_ angezeigt werden kann, müssen folgende Anpassungen vorgenommen werden:

Die Timeline-Ansicht für _hr.leave_ erfassen:

```xml
<?xml version='1.0' encoding='UTF-8' ?>
<odoo>
    <record id="mint_system.hr_holidays.hr_leave_view_timeline" model="ir.ui.view">
        <field name="name">hr.leave.view.timeline</field>
        <field name="model">hr.leave</field>
        <field name="type">timeline</field>
        <field name="arch" type="xml">
            <timeline
                date_start="date_from"
                date_stop="date_to"
                default_group_by="employee_id"
				event_open_popup="true"
            />
        </field>
    </record>
</odoo>
```

Für den Bericht _Alle Benutzer_ diese Timeline-Ansicht erfassen:

```xml
<?xml version='1.0' encoding='UTF-8' ?>
<odoo>
    <record id="mint_system.hr_holidays_calendar.hr_leave_report_calendar_timeline" model="ir.ui.view">
        <field name="name">hr.leave.report.calendar.timeline</field>
        <field name="model">hr.leave.report.calendar</field>
        <field name="type">timeline</field>
        <field name="arch" type="xml">
            <timeline
                date_start="start_datetime"
                date_stop="stop_datetime"
                default_group_by="employee_id"
				event_open_popup="true"
            />
        </field>
    </record>
</odoo>
```

Den `view_mode` mit `timeline` bei diesen Fenster-Aktionen `ir.actions.act_window` ergänzen:

- Abwesenheitsanträge `hr_holidays.hr_leave_action_my`
- Dashboard `hr_holidays.hr_leave_action_new_request`
- Alle Abwesenheiten `hr_holidays.action_hr_holidays_dashboard`
- Abwesenheiten `hr_holidays.hr_leave_action_all`

Das Resultat sieht etwa so aus:

![](attachments/Web%20Timeline%20Kalender.png)

## Timeline für Kalender anzeigen

Die Timeline-Ansicht für _calendar.event_ erfassen:

```xml
<?xml version='1.0' encoding='UTF-8' ?>
<odoo>
    <record id="mint_system.calendar.view_calendar_event_calendar_timeline" model="ir.ui.view">
        <field name="name">calendar.event.calendar.timeline</field>
        <field name="model">calendar.event</field>
        <field name="type">timeline</field>
        <field name="arch" type="xml">
            <timeline
                date_start="start"
                date_stop="stop"
                default_group_by="partner_id"
				event_open_popup="true"
            />
        </field>
    </record>
</odoo>
```

Den `view_mode` mit `timeline` bei diesen Fenster-Aktionen `ir.actions.act_window` ergänzen:

- Meetings `calendar.action_calendar_event`
