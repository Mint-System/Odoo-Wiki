# Studio Beispiele

## IBAN und Bank auf Rechnung anzeigen

Standardmässig werden die Zahlungsinformationen nur bei konfigurierten ISR- und QR-Code-Einstellungen angzeigt. Falls sie die der Rechnung hinterlegten Kontoinformationen anzeigen möchten können sie das mit Studio einrichten.

Bearbeiten sie den Rechnungsbericht und fügen sie folgenden Code ein:

```xml
<data>
  <xpath expr="/t/t/div/p[2]" position="after">
    <t t-if="o.currency_id.name=='CHF'">
        <t t-set="account" t-value="o.company_id.bank_ids.browse(13)"/>
    </t>
    <t t-if="o.currency_id.name=='EUR'">
        <t t-set="account" t-value="o.company_id.bank_ids.browse(14)"/>
    </t>
    <t t-if="o.currency_id.name=='USD'">
        <t t-set="account" t-value="o.company_id.bank_ids.browse(15)"/>
    </t>
    <div class="row">
      <div class="col">
        <span>IBAN: </span>
        <span t-field="account.acc_number"/>
        <br/>
        <span>Bank/BIC: </span>
        <span t-field="account.bank_id.display_name"/>
        <br/>
        <br/>
      </div>
    </div>
  </xpath>
</data>
```

Das Ergebnis sieht so aus:

![](assets/Odoo%20Studio%20IBAN%20und%20Bank%20auf%20Rechnung.png)

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