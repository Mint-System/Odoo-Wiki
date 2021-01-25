# Entwicklung
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

## Filter mit dynamischen Datum erstellen

Um einen Filter zu erstellen, der beispielsweise alle Aufgaben mit Frist heute, anzeigt, öffnen sie als erstes die Aufgaben-Übersicht *Projekt > Alle Aufgaben*.

Erstellen sie einen Filter für das Feld Frist mit dem heutigen Datum.

![](assets/Entwicklung%20Filter%20Frist.png)

Speichern sie den Filter als Favorit und wählen *Entwicklertools > Filter verwalten*. Kopieren sie den folgenden Ausdruck in das Feld *Code-Editor*:

```
[('date_deadline','<=',time.strftime('%Y-%m-%d'))]
```

Speichern sie den Dialog. Beim Anzeigen des Filters werden nun alle Aufgaben mit einer Frist bis heute aufgerufen.

## Feld als Unique definieren

#FIXME

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
