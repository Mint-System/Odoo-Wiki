---
tags:
- HowTo
prev: ./entwicklung
---
# Entwicklung Ansichten
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Odoo Ansichten anpassen.

## Feld in Ansicht anzeigen

Damit ein neues Feld ersichtlich ist, muss es auf der entsprechenden Ansicht hingefügt werden. Rufen sie im Entwicklermodus die Ansicht auf und wählen sie *Entwicklertools > Ansicht bearbeiten: Liste. Suchen sie hier den Feldnamen unter dem das neue Feld angezeigt werden soll.

In unserem Beispiel nehmen wir `state`.

![](assets/Entwicklung%20Feld%20hinzufügen.png)

Navigieren sie nun in den Tab *Vererbte Ansichten* und fügen sie hier einen neuen Eintrag hinzu:

Ansichtsbezeichnung: Beginnt mit Prefix `mint_system.` anschlissend folgt die externe ID der Hauptansicht und anschliessend folgt `.BESCHREIBUNG`

Beispiel: `mint_system.hr_holidays.hr_leave_view_tree.add_synced_field`

Im Tab *Architektur* geben sie die Anweisung zum Hinzufügen des Feldes ein:

```xml
<?xml version="1.0"?>
<data inherit_id="hr_holidays.hr_leave_view_tree">

  <xpath expr="//field[@name='state']" position="after">
    <field name="x_synced" widget="toggle_button"/>
  </xpath>

</data>
```

Speichern sie die Ansicht und laden sie die aktuelle Ansicht neu.

## Feld in Ansicht ausblenden

Wiederholen sie den Vorgang [Feld in Ansicht anzeigen](#Feld%20in%20Ansicht%20anzeigen), jedoch wird das ausgesuchte Feld mit diesem Snippet ausgeblendet:

Ansichtsbezeichnung: `mint_system.hr_holidays.hr_leave_view_tree.remove_payslip`

```xml
<?xml version="1.0"?>
<data inherit_id="hr_holidays.hr_leave_view_tree">

  <xpath expr="//field[@name='payslip_status']" position="replace">
  </xpath>

</data>
```

## Ansicht entfernen

Öffnen sie *Einstellungen > Technisch > Benutzer-Interface > Ansichten* und suchen sie die entsprechende Ansicht. Markieren sie diese und wählen sie *Aktion > Löschen* oder *Aktion > Archiv*.

::: warning
Diese Vorgang kann die Integrität und Verüfgbarkeit des Systems beeiträchitgen. Führen sie die Aktion nur aus, wenn sie sich den möglichen Auswirkungen bewusst sind.
:::

## Standard-Ansicht definieren

Beim Aufrufen einer Ansicht wird als erstes eine Aktion ausgeführt. Auf dieser Aktion ist definiert welche Ansicht (Liste, Kanban, Karte, ...) standardmässig angezeigt werden soll. Zum ändern rufen zeigen sie eine Anischt an und wählen *Entwicklertools > Aktion bearbeiten*. Scrollen sie nach unten und ändern sie die Reihenfolge der Ansichten.

![](assets/Ansicht%20Standard%20ändern.png)