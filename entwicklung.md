# Entwicklung
![](././././././././icons_odoo_website_twitter.png)

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
Diese Aufgabe erfordert, dass sie das [Domainfilter-Widget deaktivieren](////////entwicklung.html.html.html.html.html.html.html.html#domainfilter-widget-deaktivieren).
:::

Um einen Filter zu erstellen, der beispielsweise alle Aufgaben mit Frist Heute anzeigt, öffnen sie als erstes die Aufgaben-Übersicht *Projekt > Alle Aufgaben*.

Erstellen sie einen Filter für das Feld Frist mit dem heutigen Datum.

![](././././././././entwicklung-filter-frist.png)

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
`````

## Feld als Unique definieren

#FIXME

## In Portal-Ansicht neue Felder anzeigen
Aufgabenträger: [Entwickler](////////rollen.html.html.html.html.html.html.html.html#entwickler)

Die Anpassung [Dateianhang in Bericht anzeigen](////////studio.html.html.html.html.html.html.html.html#dateianhang-in-bericht-anzeigen) ist auch für das Kundenportal möglich.

![](././././././././entwicklung-portal-neues-feld-hinzufugen.png)

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


<hr>

[📝 Edit on GitHub](///////https://github.com/mint-system/odoo-handbuch/blob/master/entwicklung.html.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//////https://github.com/mint-system/odoo-handbuch/blob/master/entwicklung.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/////https://github.com/mint-system/odoo-handbuch/blob/master/entwicklung.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](////https://github.com/mint-system/odoo-handbuch/blob/master/entwicklung.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](///https://github.com/mint-system/odoo-handbuch/blob/master/entwicklung.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//https://github.com/mint-system/odoo-handbuch/blob/master/entwicklung.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/https://github.com/mint-system/odoo-handbuch/blob/master/entwicklung.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](https://github.com/Mint-System/Odoo-Handbuch/blob/master/entwicklung.md)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>