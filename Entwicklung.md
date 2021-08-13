---
tags:
- HowTo
---
# Entwicklung
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Odoo mühelos anpassen und erweitern.

* [Aktionen](Aktionen.md)
* [Web Timeline](Web-Timeline.md)
* [Mass Editing](Mass-Editing.md)
* [BI SQL Editor](BI-SQL-Editor.md)

## Domainfilter-Widget deaktivieren

Damit man für Filter dynamische Funktionen verwenden kann, muss die Ansicht zur Darstellung der Filter angepasst werden.

Liste mit Ansichten öffnen *Einstellungen > Technisch > Benutzer-Interface > Ansichten*. Anschliessend suchen sie nach der Ansicht mit Bezeichung *ir.filters form* und öffnen diese. Im Tab *Vererbte Ansichten* erstellen sie einen neuen Eintrag:

Ansichtsbezeichnung: `ir.filters form custom`  
Architektur:

```xml
<xpath expr="//field[@name='domain']" position="replace">
    <field name="domain"/>
</xpath>
```

## Filter mit dynamischen Datum erstellen

::: warning
Diese Aufgabe erfordert, dass sie das [Domainfilter-Widget deaktivieren](#Domainfilter-Widget%20deaktivieren).
:::

Um einen Filter zu erstellen, der beispielsweise alle Aufgaben mit Frist Heute anzeigt, öffnen sie als erstes die Aufgaben-Übersicht *Projekt > Alle Aufgaben*.

Erstellen sie einen Filter für das Feld Frist mit dem heutigen Datum.

![](assets/Entwicklung%20Filter%20Frist.png)

Speichern sie den Filter als Favorit und wählen *Entwicklertools > Filter verwalten*. Kopieren sie den folgenden Ausdruck in das Feld *Code-Editor*:

```py
[('date_deadline','<=',time.strftime('%Y-%m-%d'))]
```

Speichern sie den Dialog. Beim Anzeigen des Filters werden nun alle Aufgaben mit einer Frist bis Heute aufgerufen.

Weitere Filter-Beispiele:

Frist erreicht und an eigenem Benutzer zugewiesen:

```py
["&", ("user_id", "=", uid), 
("date_deadline", "<=", time.strftime('%Y-%m-%d'))]
```

Frist bis in 5 Tagen erreicht und an eigenem Benutzer zugewiesen:

```py
[
"&",
("user_id", "=", uid), 
("date_deadline", "<=", (datetime.datetime.now() + datetime.timedelta(days=3)).strftime('%Y-%m-%d'))
]
```

## In Portal-Ansicht neue Felder anzeigen
Aufgabenträger: [Entwickler](Rollen.md#Entwickler)

Die Anpassung [Dateianhang in Bericht anzeigen](Studio.md#Dateianhang%20in%20Bericht%20anzeigen) ist auch für das Kundenportal möglich.

![](assets/Entwicklung%20Portal%20neues%20Feld%20hinzuf%C3%BCgen.png)

Dazu ergänzt man die Ansicht `purchase.portal_my_purchase_order` mit folgender Erweiterung:

**Portal: My Purchase Order with File Links**

```xml
<xpath expr='//span[@t-esc='ol.name']' position='after'>
	<t t-if="ol.product_id.x_studio_drawing">
		<br/>
		<span>Zeichnung: </span>
		<a t-attf-href="{{ol.product_id.x_studio_drawing.url}}">
		  <span t-field="ol.product_id.x_studio_drawing.display_name"/>
		</a>
	</t>
	<t t-if="ol.product_id.x_studio_step_file">
		<br/>
		<span>STEP-Datei: </span>
		<a t-attf-href="{{ol.product_id.x_studio_step_file.url}}">
			<span t-field="ol.product_id.x_studio_step_file.display_name"/>
		</a>
	</t>
</xpath>
```

## Developer API Key generieren

Damit Software von Dritten Zugriff auf die Daten von Odoo hat, ohne dass dabei das Passwort eines Benutzers geteilt werden muss, kann man einen Zugriffsschlüssel bereitstellen.

Öffenen sie die Sicherheitseinstellungen des eingeloggten Benutzers *Menu > Mein Profil > Tab Acccount Security* und klicken auf *New API Key*.

## Menüeinträge umbennen

Im Entwicklermodus können sie ganz einfach Menüeinträge umbennen. Angenommen sie möchten diesen Punkt umbennen:

![](assets/Entwicklung%20Men%C3%BCeintr%C3%A4ge%20umbennen.png)

Gehen sie wie folgt vor. Navigieren sie nach *Einstellungen > Technisch >  Benutzer-Interface > Menüeinträge* und suchen sie nach *Alle Angestellte*. Bearbeiten sie den Eintrag und setzen sie für das Feld *Menü* einen neuen Wert.

![](assets/Einstellungen%20Men%C3%BCeintrag%20bearbeiten.png)

Nachdem sie den Browser-Tab aktualisiert haben, ist der Menüeintrag umbenannt.

## Fenster umbennen

Um den angezeigten Namen eines Fenster anzuspassen, navigieren sie nach *Eisntellungen > Technisch > Aktionen > Fesnter öffnen/schliessen ...*. Suchen sie im Feld *Name der Aktion* nach dem Fensternamen und passen sie den Namen an.

![Einstellungen Fenster umbennen](assets/Einstellungen%20Fenster%20umbennen.gif)

## Neues Feld hinzufügen

An jedem Objekt kann an einfach ein Feld hinzugefügt werden. Öffnen sie eine Ansicht im Entwicklermodus und wählen sie *Entwicklertools > Felder anzeigen*. Wählen sie *+ Anlegen* und geben sie folgende Informationen ein:

* Feldname: Beginnt mit `x_` und darf keine Leerschläge enthalten und sollte kleingeschrieben und auf Englisch sein.
* Feldbezeichnung: Passender Name in der angezeigten Sprache.
* Typfeld-Text: Auswahls den Felddatentyps.

Dazu ein Beispiel mit [Abwesenheitszeiten](Abwesenheitszeiten.md):

![](assets/Entwicklung%20Neues%20Feld%20auf%20Abwesenheitszeiten.png)

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

Wiederholen sie den Vorgang [Neues Feld hinzufügen](#Neues%20Feld%20hinzufügen), jedoch wird das ausgesuchte Feld mit diesem Snippet ausgeblendet:

Ansichtsbezeichnung: `mint_system.hr_holidays.hr_leave_view_tree.remove_payslip`

```xml
<?xml version="1.0"?>
<data inherit_id="hr_holidays.hr_leave_view_tree">

  <xpath expr="//field[@name='payslip_status']" position="replace">
  </xpath>

</data>
```

## Berichte als HTML anzeigen

Alle von Odoo generierten Berichte können unter einer bestimmten URL als HTML angezeigt werden. Diese URL besteht aus dem technischen Berichtsnamen und der ID des anzuzeigenden Geschäftsobjekt. Dazu ein Beispiel anhand des Lieferscheins.

Öffnen sie einen Lieferschein via *Lager > Vorgänge > Transfers* und merken sie sich die folgenden Elemente der angezeigeigten URL: /web#**id=3**&action=348&**model=stock.picking**&view_type=form&cids=1&menu_id=208

Navigieren sie nun zu **Einstellungen > Technisch > Aktionen > Berichte**. Filtern sie die Liste nach dem *Name* des Berichts oder dem *Modellname*.

![](assets/Entwicklung%20Berichte%20filtern.png)

Wählen sie den Bericht aus und notieren sie den *Vorlagenname* des Berichts.

![](assets/Entwicklung%20Bericht%20Vorlagenname.png)

Nun haben sie alle Elemente um den Bericht als HTML anzuzeigen. Geben sie die folgende URL ein: /report/html/**stock.report_deliveryslip**/**3**

![](assets/Entwicklung%20Bericht%20angezeigt.png)