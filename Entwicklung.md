# Entwicklung
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

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
