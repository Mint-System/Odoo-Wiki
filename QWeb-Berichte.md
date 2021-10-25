---
tags:
- HowTo
---
# QWeb-Berichte
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Eigene Berichte mit QWeb erstellen.

## Benutzerdefinierter Bericht erstellen

Öffnen sie *Einstellungen > Technisch > Berichtswesen > Berichte* und erstellen sie einen neuen Bericht mit diesen Attributen:

* Name: `Barcodes $COMPANY (PDF)`
* Modellname: `stock.picking`
* Papierformat: `A4`
* Berichtstyp: `PDF`

Navigieren sie nun nach *Einstellungen > Technisch > Benutzer-Interface > Ansichten*, suchen sie eine bestehende Ansicht und duplizieren sie diese.

* Ansichtsbezeichnung: `label_transfer_template_view_$COMPANY`
* Architektur:

```xml
<t t-name="stock.label_transfer_template_view_$COMPANY">
    <t t-call="web.basic_layout">
        <t t-foreach="docs" t-as="picking">
            <t t-foreach="picking.move_lines" t-as="move">

                <t t-foreach="move.move_line_ids" t-as="move_line">
                    <div class="page">
                        <div class="label">
                            <span class="text-uppercase" t-esc="move.product_id.name"/>
                        </div>
                        <p style="page-break-before:always;" />
                    </div>
                </t>

            </t>
        </t>
    </t>
</t>
```

Nun exportieren sie die Ansicht um eine *XML ID* zu generieren.

![QWeb-Berichte XML ID generieren](assets/QWeb-Berichte%20XML%20ID%20generieren.gif)

Setzen sie als *Ansichtsbezeichnung* die *XML ID*. Öffnen sie den Bericht und setzen sie als *Vorlagenname* die *XML ID* ein.

![](assets/QWeb-Berichte%20Vorlagenname%20setzen.png)

Wurde das Kontext-Menü mit der Aktion *Zum Druckmenü hinzufügen* erstellt, kann der Bericht entsprechend erstellt werden.

![](assets/QWeb-Berichte%20Drucken.png)

::: tip
Odoo verlinkt das Ansichts- und Berichtsobjekt über die externe ID bzw. XML ID.
:::

## Berichte als HTML anzeigen

Alle von Odoo generierten Berichte können unter einer bestimmten URL als HTML angezeigt werden. Diese URL besteht aus dem technischen Berichtsnamen und der ID des anzuzeigenden Geschäftsobjekt. Dazu ein Beispiel anhand des Lieferscheins.

Öffnen sie einen Lieferschein via *Lager > Vorgänge > Transfers* und merken sie sich die folgenden Elemente der angezeigeigten URL: /web#**id=3**&action=348&**model=stock.picking**&view_type=form&cids=1&menu_id=208

Navigieren sie nun zu **Einstellungen > Technisch > Aktionen > Berichte**. Filtern sie die Liste nach dem *Name* des Berichts oder dem *Modellname*.

![](assets/Entwicklung%20Berichte%20filtern.png)

Wählen sie den Bericht aus und notieren sie den *Vorlagenname* des Berichts.

![](assets/Entwicklung%20Bericht%20Vorlagenname.png)

Nun haben sie alle Elemente um den Bericht als HTML anzuzeigen. Geben sie die folgende URL ein: /report/html/**stock.report_deliveryslip**/**3**

![](assets/Entwicklung%20Bericht%20angezeigt.png)

Hierzu eine Übersicht der wichtigsten Berichte und deren URL:

| Name              | URL                                      |
| ----------------- | ---------------------------------------- |
| Angebot / Auftrag | `/report/html/sale.report_saleorder/$ID` |
|                   |                                          |