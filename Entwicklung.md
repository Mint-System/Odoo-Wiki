# Entwicklung
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

## Feld als Unique definieren

## In Portal-Ansicht neue Felder anzeigen

Die Anpassung [Dateianhang in Bericht anzeigen](Studio.md#Dateianhang%20in%20Bericht%20anzeigen) ist auch für das Kundenportal möglich.

![](assets/Entwicklung%20Portal%20neues%20Feld%20hinzuf%C3%BCgen.png)

Dazu ergänzt man die Ansicht `purchase.portal_my_purchase_order` mit folgender XML-Struktur.

```xml
<div id="product_name" class="col-lg-5">
	<span t-esc="ol.name"/>
		<t t-if="ol.product_id.x_studio_zeichnung">
			<br/>
			<span>Zeichnung: </span>
		  	<a t-attf-href="{{ol.product_id.x_studio_zeichnung.url}}">
			  <span t-field="ol.product_id.x_studio_zeichnung.display_name"/>
		 	</a>
	  	</t>
	  	<t t-if="ol.product_id.x_studio_step_datei_1">
			<br/>
			<span>STEP-Datei: </span>
			<a t-attf-href="{{ol.product_id.x_studio_step_datei_1.url}}">
		  		<span t-field="ol.product_id.x_studio_step_datei_1.display_name"/>
			</a>
	  	</t>
```
