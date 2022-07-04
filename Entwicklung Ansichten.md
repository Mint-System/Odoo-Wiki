---
tags:
- HowTo
prev: ./entwicklung
---
## Entwicklung Ansichten
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Odoo Ansichten anpassen.

## Ansichten verwalten

Alle Listen, Formulare und Berichte werden von Odoo in einer Tabelle verwaltet. Diese können Sie via *Einstellungen > Technisch > Benutzer-Interface > Ansichten* anzeigen. 

![](assets/Entwicklung%20Ansichten%20verwalten.png)

## Verfügbare Felder anzeigen

Abhängig von der angezeigten Ansicht stehen Felder gemäss dem verknüpften Datenmodell zur Verfügung. Standardmässig werden nicht alle Felder angezeigt und bestimmte Felder müssen eingeblendet werden. Eine Übersicht der verfügbaren Felder erhalten Sie via *Entwicklertools > Felder anzeigen*.

![](assets/Entwicklung%20Ansichten%20Felder.png)

::: tip
Hier finden Sie zu jedem Feld den technischen Name *Feldname*. Diesen Namen verwendet Odoo für die Programmierung.
:::

## Feld in Ansicht anzeigen

Damit ein neues Feld ersichtlich ist, muss es auf der entsprechenden Ansicht hingefügt werden. Rufen Sie im Entwicklermodus die Ansicht auf und wählen Sie *Entwicklertools > Ansicht bearbeiten: Liste. Suchen Sie hier den Feldnamen unter dem das neue Feld angezeigt werden soll.

In unserem Beispiel nehmen wir `state`.

![](assets/Entwicklung%20Feld%20hinzufügen.png)

Navigieren Sie nun in den Tab *Vererbte Ansichten* und fügen Sie hier einen neuen Eintrag hinzu:

Ansichtsbezeichnung: Beginnt mit Prefix `mint_system.` anschlissend folgt die externe ID der Hauptansicht und anschliessend folgt `.BESCHREIBUNG`

Beispiel: `mint_system.hr_holidays.hr_leave_view_tree.add_synced_field`

Im Tab *Architektur* geben Sie die Anweisung zum Hinzufügen des Feldes ein:

```xml
<?xml version="1.0"?>
<data inherit_id="hr_holidays.hr_leave_view_tree">

  <xpath expr="//field[@name='state']" position="after">
    <field name="x_synced" widget="toggle_button"/>
  </xpath>

</data>
```

Speichern Sie die Ansicht und laden Sie die aktuelle Ansicht neu.

## Feld in Ansicht ausblenden

Wiederholen Sie den Vorgang [Feld in Ansicht anzeigen](#Feld%20in%20Ansicht%20anzeigen), jedoch wird das ausgesuchte Feld mit diesem Snippet ausgeblendet:

Ansichtsbezeichnung: `mint_system.hr_holidays.hr_leave_view_tree.remove_payslip`

```xml
<?xml version="1.0"?>
<data inherit_id="hr_holidays.hr_leave_view_tree">

  <xpath expr="//field[@name='payslip_status']" position="replace">
  </xpath>

</data>
```

## Ansicht entfernen

Öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Ansichten* und suchen Sie die entsprechende Ansicht. Markieren Sie diese und wählen Sie *Aktion > Löschen* oder *Aktion > Archiv*.

::: warning
Diese Vorgang kann die Integrität und Verüfgbarkeit des Systems beeiträchitgen. Führen Sie die Aktion nur aus, wenn Sie sich den möglichen Auswirkungen bewusst sind.
:::

## Standard-Ansicht definieren

Beim Aufrufen einer Ansicht wird als erstes eine Aktion ausgeführt. Auf dieser Aktion ist definiert welche Ansicht (Liste, Kanban, Karte, ...) standardmässig angezeigt werden soll. Zum ändern rufen zeigen Sie eine Anischt an und wählen *Entwicklertools > Aktion bearbeiten*. Scrollen Sie nach unten und ändern Sie die Reihenfolge der Ansichten.

![](assets/Ansicht%20Standard%20ändern.png)