# Studio
![icons_odoo_web_studio](assets/icons_odoo_web_studio.png)

## Anpassungen dokumentieren
Aufgabenträger: ![Administrator](Rollen.md#Administrator)

Jede Änderung mit Odoo Studio an einer Odoo-Instanz muss dokumentiert werden. Die Entwickler von Odoo haben dafür die Menu-Option *Notizen* hinzugefügt.

![Studio Anpassungen dokumentieren](assets/Studio%20Anpassungen%20dokumentieren.gif)

## Dateianhang in Bericht anzeigen
Aufgabenträger: ![Administrator](Rollen.md#Administrator)

?> An jedem Odoo-Objekt kann ein Anhang vom Typ Datei oder URL hinzugefügt werden. Dieser Anhang kann im Portal oder Bericht angzeigt werden.

In diesem Beispiel wurde mit Odoo Studio dem Modell *product.product* zwei Felder hinzugefügt:
* x_studio_zeichnung
* x_studio_step_datei_1

![](assets/Studio%20Produkt%20Variante%20zus%C3%A4tzliche%20Felder.png)

Diese Felder können im Beschaffungsauftrag angzeigt werden.

![](assets/Studio%20Beschaffungsauftrag%20XML%20Customization.png)

Für diese Art von Anpassung muss das XML der Ansicht bearbeit werden, dazu der X-Path-Edit:

```xml
<data>
  <xpath expr="/t/t/div/table/tbody/t[2]/tr/t[1]/td[1]/span" position="after">
    <t t-if="line.product_id.x_studio_zeichnung">
		<br/>
        <span>Zeichnung: </span>
		<a t-attf-href="{{line.product_id.x_studio_zeichnung.url}}">
      <span t-field="line.product_id.x_studio_zeichnung.display_name"/>
    	</a>
    </t>
    <t t-if="line.product_id.x_studio_step_datei_1">
		<br/>
        <span>STEP-Datei: </span>
		<a t-attf-href="{{line.product_id.x_studio_step_datei_1.url}}">
      <span t-field="line.product_id.x_studio_step_datei_1.display_name"/>
    	</a>
    </t>
  </xpath>
</data>
```
