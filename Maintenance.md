---
title: Wartung
description: Wartungs-Software für moderne Hersteller.
tags:
- HowTo
prev: ./
---
# Wartung
![icons_odoo_maintenance](attachments/icons_odoo_maintenance.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/maintenance>

## Erweiterungen

| Erweiterung                                                                 | Beschreibung                                        |
| --------------------------------------------------------------------------- | --------------------------------------------------- |
| [Maintenance Equipment Image](Maintenance%20Equipment%20Image.md)           | Bild auf Inventar hinzufügen.                       |
| [Maintenance Equipments Hierarchy](Maintenance%20Equipments%20Hierarchy.md) | Inventar hierarchisch gliedern.                     |
| [Maintenance Plan Activity](Maintenance%20Plan%20Activity.md)               | Wartungspläne mit Aktivitäten erstellen.            |
| [Maintenance Plan Request Name](Maintenance%20Plan%20Request%20Name.md)     | Name von Wartungsplan in Wartungsanfrage übernehmen |
| [Maintenance Plan](Maintenance%20Plan.md)                                   | Wartungspläne für Inventar erstellen.               |
| [Maintenance Product](Maintenance%20Product.md)                             | Produkt und Inventar verknüpfen.                    |
| [Maintenance Request Repair](Maintenance%20Request%20Repair.md)             | Reparatur aus Wartung erstellen.                    |
| [Stock Barcode Maintenance](Stock%20Barcode%20Maintenance.md)               | Barcode scannen und Inventar anzeigen.              |

## Verwendung

### Wartungsstufen verwalten

Zeigen Sie *Wartung > Konfiguration > Wartungsstufen* an. Hier können Sie bestehende Stufen anpassen und neue Stufen erfassen.

### Inventar erfassen

Navigieren Sie nach *Wartung > Inventar* und erstellen Sie einen neuen Eintrag. Füllen Sie mindestens *Inventarbezeichnung* und *Wartungsteam* aus.

### Wartungsanfrage manuell erstellen

Navigieren Sie nach *Wartung > Wartung > Wartungsanfragen* und erstellen Sie einen neuen Eintrag. 

## Entwicklung

### Ansicht Prüf- und Messmittel erstellen

Erstellen Sie eine neue Ansicht gemäss [Ansicht erstellen](Development%20Views.md#Ansicht%20erstellen) mit diesen Attributen:

**Ansichtsbezeichnung**: `mint_system.maintenance.hr_equipment_view_tree.calibration_overview`
**Modell**: `maintenance.equipment`\
**Sequenz**: `50`\
**Ansichtstyp**: `tree`\
**Architektur**:

```xml
<tree>
	<field name="name"/>
	<field name="owner_user_id" string="Owner" invisible="1"/>
	<field name="x_lead_time_recovery_work" optional="show"/>
	<field name="x_calibrated_until"/>
	<field string="Action required on" name="x_date_action_required" widget="badge" optional="show"/>
	<field name="x_schedule_date" widget="date" optional="show"/>
	<field name="x_next_maintenance_request" optional="show"/>
	<field name="x_maintenance_kind_id" optional="show"/>
	<field name="x_stage_id" optional="show"/>
	<field string="Responsible" name="technician_user_id"/>
</tree>
```


Folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Prüf- und Messmittel`\
Objekt: `maintenance.equipment`\
Ansichtsmodus: `tree,form`\
Menü: `Prüf- und Messmittel`\
Obermenü: `Verkauf/Aufträge`\
Aktion: `ir.actions.act_window` `Prüf- und Messmittel`\
Nummernfolge: `10`\
Ansichten: `tree` `mint_system.maintenance.hr_equipment_view_tree.calibration_overview`