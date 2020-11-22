# Studio
![icons_odoo_web_studio](assets/icons_odoo_web_studio.png)

## Anpassungen dokumentieren
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Jede Änderung mit Odoo Studio an einer Odoo-Instanz muss dokumentiert werden. Die Entwickler von Odoo haben dafür die Menu-Option *Notizen* hinzugefügt.

![Studio Anpassungen dokumentieren](assets/Studio%20Anpassungen%20dokumentieren.gif)

## Dateianhang in Bericht anzeigen
Aufgabenträger: [Administrator](Rollen.md#Administrator)

::: tip
An jedem Odoo-Objekt kann ein Anhang vom Typ Datei oder URL hinzugefügt werden. Dieser Anhang kann im Portal oder Bericht angzeigt werden.
:::

In diesem Beispiel wurde mit Odoo Studio dem Modell *product.product* zwei Felder hinzugefügt:
* Name: x_studio_drawing
	* Typ: Many2One Produktionsdokument
	* Bezeichnung: Zeichnung

* Name: x_studio_step_file
	* Typ: Man2One Produktionsdokument
	* Bezeichnung: STEP-Datei

![](assets/Studio%20Produkt%20Variante%20zus%C3%A4tzliche%20Felder.png)

Diese Felder können im Beschaffungsauftrag angzeigt werden.

![](assets/Studio%20Beschaffungsauftrag%20XML%20Customization.png)

Für diese Art von Anpassung muss das XML der Ansicht bearbeit werden, dazu der X-Path-Edit:

```xml
<data>
  <xpath expr="/t/t/div/table/tbody/t[2]/tr/t[1]/td[1]/span" position="after">
    <t t-if="line.product_id.x_studio_drawing">
		<br/>
        <span>Zeichnung: </span>
		<a t-attf-href="{{line.product_id.x_studio_drawing.url}}">
      <span t-field="line.product_id.x_studio_drawing.display_name"/>
    	</a>
    </t>
    <t t-if="line.product_id.x_studio_step_file">
		<br/>
        <span>STEP-Datei: </span>
		<a t-attf-href="{{line.product_id.x_studio_step_file.url}}">
      <span t-field="line.product_id.x_studio_step_file.display_name"/>
    	</a>
    </t>
  </xpath>
</data>
```

## Feld entfernen

Möchten sie ein Feld aus einer Ansicht entfernen, öffnen sie zuerst die Ansicht in Odoo Studion. Anschliessend wählen sie das Feld aus und klicken in der linken Menu-Leiste auf *Aus Ansicht entfernen*

::: warning
Benutzerdefinierte Felder sowie Basisfelder werden nicht aus der Datenbank entfernt. Sie bestehen weiterhin und können der Ansicht wieder hinzugefügt werden.
:::

## Berechtigung auf verstecktem Feld festlegen

Bestimmte Felder und Buttons werden nur im Entwicklermodus also mit den erweiterten Berechtigungen angezeigt. Damit diese Felder und Buttons standardmässig angezeigt werden können, können sie mit Odoo Studion ganz einfach die Berechtigung festlegen.

Dazu ein Beispiel: Ein Arbeitsauftrag ist in Arbeit und bereits Bestände produziert, die man verbuchen kann.

![](assets/Studio%20Feld%20nicht%20angezeigt.png)

Nur im Entwicklermodus wird die entsprechende Aktion angezeigt:

![](assets/Studio%20Feld%20angzeigt.png)

Damit dieser Button standardmässig angzeigt wird, geht man wie folgt vor:

![Studio Berechtigungen auf verstecktem Feld festlegen](assets/Studio%20Berechtigungen%20auf%20verstecktem%20Feld%20festlegen.gif)