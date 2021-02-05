# Verkäufe
![](././././././././icons_odoo_sale.png)

## Verkäufe Dashboard anzeigen
Öffnen sie die App *Verkäufe*. Hier sehen Sie alle offenen Angebote und Verkaufsaufträge.

## Angebot erstellen
[Verkäufer](////////rollen.html.html.html.html.html.html.html.html#verkaufer)

## Proforma-Rechnung anpassen

Mit Odoo [Studio](////////studio.html.html.html.html.html.html.html.html) können sie einfach die Proforma-Rechnung mit neuen Felder ergänzen oder den Bedürfnisse anpassen. Für komplizierte Fälle wie eine bedingungsbasierte Anzeige eines Feldes muss der Bericht im Entwicklermodus direkt bearbeitet werden. Dazu ein Bespiel einer Anpassung: 

```xml
<data>
  <xpath expr="/t/t/div/table/tbody/t[2]/tr/t[1]/td[1]/span" position="after">
    <t t-if="is_pro_forma">
      <t t-if="line.product_id.hs_code">
        <br/>
        <span>Zolltarifnummer: </span>
        <span t-field="line.product_id.hs_code"/>
      </t>
    </t>
  </xpath>
  <xpath expr="/t/t/div/p[2]" position="after">
    <t t-if="is_pro_forma">
        <span>
          <p>Der Unterzeichner erklärt, dass die in diesem Dokument aufgeführten Waren und Ursprungserzeugnisse der Schweiz sind und den Ursprungsregeln im Präferenzverkehr mit der EU entsprechen.<br/><br/></p>
          <p>Unterschrift: _______________________    Datum: _______________________<br/>                        Aersolution Interior AG<br/></p>
        </span>
    </t>
  </xpath>
</data>
```

<hr>

[📝 Edit on GitHub](///////https://github.com/mint-system/odoo-handbuch/blob/master/verkäufe.html.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//////https://github.com/mint-system/odoo-handbuch/blob/master/verkäufe.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/////https://github.com/mint-system/odoo-handbuch/blob/master/verkäufe.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](////https://github.com/mint-system/odoo-handbuch/blob/master/verkäufe.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](///https://github.com/mint-system/odoo-handbuch/blob/master/verkäufe.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//https://github.com/mint-system/odoo-handbuch/blob/master/verkäufe.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/https://github.com/mint-system/odoo-handbuch/blob/master/verkäufe.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](https://github.com/Mint-System/Odoo-Handbuch/blob/master/verkäufe.md)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>