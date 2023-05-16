---
description: Odoo Ansichten anpassen.
tags:
- HowTo
prev: ./development
---
# Entwicklung Ansichten
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

{{ $frontmatter.description }}

## Ansichten

### Formularansicht bearbeiten

Rufen Sie die Formularansicht des Geschäftsobjekts auf und wählen Sie *Entwicklertools > Ansicht bearbeiten: Formular*.

### Ansicht erstellen

Öffnen Sie *Einstellung > Technisch > Ansichten* und legen Sie einen neuen Eintrag an. Im folgenden Beispiel erstellen Sie eine Listenansicht (Tree) für das Datenmodell *Basisimportzuordnung*.

Ansichtsbezeichnung: `mint_system.base_import.mapping.tree`
Modell: `base_import.mapping`\
Ansichtstyp: `Baum`\
Sequenz: `16`\
Architektur:

```xml
<tree>
  <field name="column_name"/>
  <field name="res_model"/>
</tree>
```

So sollte es dann aussehen:

![](assets/Entwicklung%20Ansicht%20erstellen.png)

### Ansicht Anhänge erstellen

Damit Sie eine Übersicht der Anhänte erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Attachments`\
Objekt: `ir.attachments`\
Ansichtsmodus: `tree,form`\
Menü: `Anhänge`\
Obermenü: `Einstellungen/Technisch/Diskussion`\
Aktion: `ir.actions.act_window` `Einkaufszeilen`\
Nummernfolge: `10`

Das Ergebnis sollte so aussehen:

![](assets/Entwicklung%20Ansicht%20Anhänge.png)

### Ansichten verwalten

Alle Listen, Formulare und Berichte werden von Odoo in einer Tabelle verwaltet. Diese können Sie via *Einstellungen > Technisch > Benutzer-Interface > Ansichten* anzeigen. 

![](assets/Entwicklung%20Ansichten%20verwalten.png)

### Ansicht entfernen

Öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Ansichten* und suchen Sie die entsprechende Ansicht. Markieren Sie diese und wählen Sie *Aktion > Löschen* oder *Aktion > Archiv*.

::: warning
Diese Vorgang kann die Integrität und Verüfgbarkeit des Systems beeiträchitgen. Führen Sie die Aktion nur aus, wenn Sie sich den möglichen Auswirkungen bewusst sind.
:::

### Standard-Ansicht definieren

Beim Aufrufen einer Ansicht wird als erstes eine Aktion ausgeführt. Auf dieser Aktion ist definiert welche Ansicht (Liste, Kanban, Karte, ...) standardmässig angezeigt werden soll. Zum ändern rufen zeigen Sie eine Ansicht an und wählen *Entwicklertools > Aktion bearbeiten*. Scrollen Sie nach unten und ändern Sie die Reihenfolge der Ansichten.

![](assets/Ansicht%20Standard%20ändern.png)

### Sequenz der Standard-Ansichten festlegen

Zeiten Sie eine Aktion zum Aufrufen einer Ansicht via *Einstellungne > Technisch > Fenster öffnen/schliessen* auf und navigieren Sie zum Abschnitt *Ansichten*. Bearbeiten Sie die Reihenfolge der Ansichten.

![](assets/Entwicklung%20Ansichten%20Sequenz.png)

## Datenmodelle

### Verfügbare Felder anzeigen

Abhängig von der angezeigten Ansicht stehen Felder gemäss dem verknüpften Datenmodell zur Verfügung. Standardmässig werden nicht alle Felder angezeigt und bestimmte Felder müssen eingeblendet werden. Eine Übersicht der verfügbaren Felder erhalten Sie via *Entwicklertools > Felder anzeigen*.

![](assets/Entwicklung%20Ansichten%20Felder.png)

::: tip
Hier finden Sie zu jedem Feld den technischen Name *Feldname*. Diesen Namen verwendet Odoo für die Programmierung.
:::

### Feld in Ansicht anzeigen

Damit ein neues Feld ersichtlich ist, muss es auf der entsprechenden Ansicht hingefügt werden. Rufen Sie im Entwicklermodus die Ansicht auf und wählen Sie *Entwicklertools > Ansicht bearbeiten: Liste. Suchen Sie hier den Feldnamen unter dem das neue Feld angezeigt werden soll. In unserem Beispiel verwenden wir den Feldnamen `state`.

![](assets/Entwicklung%20Feld%20hinzufügen.png)

Navigieren Sie nun in den Tab *Vererbte Ansichten* und fügen Sie hier einen neuen Eintrag hinzu:

Ansichtsbezeichnung: Beginnt mit Prefix `mint_system.` anschlissend folgt die externe ID der Hauptansicht und anschliessend folgt `.BESCHREIBUNG` Beispiel: `mint_system.hr_holidays.hr_leave_view_tree.add_synced_field`

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

### Feld in Ansicht ausblenden

Wiederholen Sie den Vorgang [Feld in Ansicht anzeigen](#Feld%20in%20Ansicht%20anzeigen), jedoch wird das ausgesuchte Feld mit diesem Snippet ausgeblendet:

Ansichtsbezeichnung: `mint_system.hr_holidays.hr_leave_view_tree.remove_payslip`

```xml
<?xml version="1.0"?>
<data inherit_id="hr_holidays.hr_leave_view_tree">

  <xpath expr="//field[@name='payslip_status']" position="replace">
  </xpath>

</data>
```

## Suche

### Filter manuell anlegen

Wählen Sie auf der Listenansicht *Entwicklertools > Filter verwalten* und klicken Sie auf *Anlegen*. Geben Sie diese Informationen ein:

* **Filterbezeichnung**: Name des Filters ersichtlich unter Favoriten
* **Modell**: Datenmodell der Listenansicht
* **Aktion**: Verwende Ansicht zum Aufruf der Listenansicht
* **Domain**: Filterung der Daten
* **Kontext**: Definition der Auswertung: Gruppieren, Sortieren, Vergleichen, ...
* **Für Benutzer verfügbar**: Leer lassen damit Filter für alle Benutzer verfügbar ist
* **Standardfilter**: Aktivieren wenn Filter beim Aufruf der Aktion angwendet werden soll

### Benutzerdefinierter Filter für alle Benutzer freigeben

Rufen Sie die Übersicht der Filter auf *Entwicklertools > Filter verwalten* und entfernen Sie *Eigene Filter*. Bearbeiten Sie den Filter, welcher für alle Benutzer verfügbar sein soll. Entfernen Sie Einträge in *Für Benutzer verfügbar*.

### Benutzerdefinierter Filter fürStandardfilter freigeben

Rufen Sie die Übersicht der Filter auf *Entwicklertools > Filter verwalten* und entfernen Sie *Eigene Filter*. Bearbeiten Sie den Filter, welcher als Standard festgelegt werden soll. Markieren Sie die Option *Standardfilter*.

### Standard-Filter für auf Ansicht festlegen

Wenn Sie über Aktionen bestimmte Odoo-Ansichten aufrufen ist bereits ein Filter in der Suchmaske hinterlegt. Dieser Standard-Filter können Sie für alle Benutzer anpassen.

Wählen Sie auf der Ansicht mit dem Filter *Entwicklertools > Aktion bearbeiten*. Im Feld *Wert aus Kontext* können nicht nur Standardwerte für die anzuzeigende Ansicht hinterlegt werden, sondern auch der Status von Filtern.

![](assets/Entwicklung%20Standardfilter%20einrichten.png)

Der Name des Filters lautet in diesem Beispiel `my_quotation`. Angenommen Sie haben mittels Snippet diesen Filter hinzugefügt:

```xml
<filter string="Order Sent" name="sent" domain="[['state', '=', 'sent']]"/>
```

Können Sie entweder `my_question` mit `sent` im *Kontext Wert* der Aktion (*Entwicklertools > Aktion bearbeiten*) ersetzen oder den *Kontext Wert* mit `{'search_default_my_quotation': 1, 'search_default_sent': 1}` erweitern.

::: warning
Wenn Sie das Modul mit der Definition der Aktiona aktualisieren, wird das Feld *Wert aus Kontext* überschrieben und ihre Anpassungen gehen verloren. Falls das unter keinen Umständen passieren darf, müssen Sie Aktion duplizeren und in der Menüstruktur neu verknüpfen.
:::

### Domainfilter-Widget deaktivieren

Damit man für Filter dynamische Funktionen verwenden kann, muss die Ansicht zur Darstellung der Filter angepasst werden.

Liste mit Ansichten öffnen *Einstellungen > Technisch > Benutzer-Interface > Ansichten*. Anschliessend suchen Sie nach der Ansicht mit Bezeichnung *ir.filters form* und öffnen diese. Im Tab *Vererbte Ansichten* erstellen Sie einen neuen Eintrag:

Ansichtsbezeichnung: `$COMPANY_NAME.base.ir_filters_view_form.remove_domain_widget`  
Architektur:

```xml
<?xml version="1.0"?>
<data inherit_id="base.ir_filters_view_form" priority="50">

    <field name="domain" position="attributes">
        <attribute name="widget"/>
    </field>

</data>
```

### Filter mit dynamischen Datum erstellen

::: warning
Diese Aufgabe erfordert, dass Sie das [Domainfilter-Widget deaktivieren](#Domainfilter-Widget%20deaktivieren).
:::

Um einen Filter zu erstellen, der beispielsweise alle Aufgaben mit Frist Heute anzeigt, öffnen Sie als erstes die Aufgaben-Übersicht *Projekt > Alle Aufgaben*.

Erstellen Sie einen Filter für das Feld Frist mit dem heutigen Datum.

![](assets/Entwicklung%20Filter%20Frist.png)

Speichern Sie den Filter als Favorit und wählen *Entwicklertools > Filter verwalten*. Kopieren Sie den folgenden Ausdruck in das Feld *Domain*:

```python
[['date_deadline','<=',time.strftime('%Y-%m-%d')]]
```

Speichern Sie den Dialog. Beim Anzeigen des Filters werden nun alle Aufgaben mit einer Frist bis Heute aufgerufen.

Weitere Filter-Beispiele:

Frist erreicht und an eigenem Benutzer zugewiesen:

```python
[
"&",
["user_id", "=", uid],
["date_deadline", "<=", time.strftime('%Y-%m-%d')]
]
```

Frist bis in 5 Tagen erreicht und an eigenem Benutzer zugewiesen:

```python
[
"&",
["user_id", "=", uid], 
["date_deadline", "<=", (datetime.datetime.now() + datetime.timedelta(days=3)).strftime('%Y-%m-%d')]
]
```