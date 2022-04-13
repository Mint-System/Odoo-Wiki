---
tags:
- HowTo
prev: ./entwicklung
---
# Entwicklung QWeb-Berichte
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Eigene Berichte mit QWeb erstellen.

## Benutzerdefinierter Bericht erstellen

Öffnen Sie *Einstellungen > Technisch > Berichtswesen > Berichte* und erstellen Sie einen neuen Bericht mit diesen Attributen:

* Name: `Barcodes $COMPANY (PDF)`
* Modellname: `stock.picking`
* Papierformat: `A4`
* Berichtstyp: `PDF`

Navigieren Sie nun nach *Einstellungen > Technisch > Benutzer-Interface > Ansichten*, suchen Sie eine bestehende Ansicht und duplizieren Sie diese.

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

Nun exportieren Sie die Ansicht um eine *XML ID* zu generieren.

![QWeb-Berichte XML ID generieren](assets/QWeb-Berichte%20XML%20ID%20generieren.gif)

Setzen Sie als *Ansichtsbezeichnung* die *XML ID*, ersetzen Sie dabei `__export__` mit einer anderen Bezeichner beispielsweise `mint_system`. Öffnen Sie den Bericht und setzen Sie als *Vorlagenname* die *XML ID* ein.

![](assets/QWeb-Berichte%20Vorlagenname%20setzen.png)

Wurde das Kontext-Menü mit der Aktion *Zum Druckmenü hinzufügen* erstellt, kann der Bericht entsprechend erstellt werden.

![](assets/QWeb-Berichte%20Drucken.png)

::: tip
Odoo verlinkt das Ansichts- und Berichtsobjekt über die externe ID bzw. XML ID.
:::

## Berichte als HTML anzeigen

Alle von Odoo generierten Berichte können unter einer bestimmten URL als HTML angezeigt werden. Diese URL besteht aus dem technischen Berichtsnamen und der ID des anzuzeigenden Geschäftsobjekt. Dazu ein Beispiel anhand des Lieferscheins.

Öffnen Sie einen Lieferschein via *Lager > Vorgänge > Transfers* und merken Sie sich die folgenden Elemente der angezeigeigten URL: /web#**id=3**&action=348&**model=stock.picking**&view_type=form&cids=1&menu_id=208

Navigieren Sie nun zu **Einstellungen > Technisch > Aktionen > Berichte**. Filtern Sie die Liste nach dem *Name* des Berichts oder dem *Modellname*.

![](assets/Entwicklung%20Berichte%20filtern.png)

Wählen Sie den Bericht aus und notieren Sie den *Vorlagenname* des Berichts.

![](assets/Entwicklung%20Bericht%20Vorlagenname.png)

Nun haben Sie alle Elemente um den Bericht als HTML anzuzeigen. Geben Sie die folgende URL ein: /report/html/**stock.report_deliveryslip**/**3**

![](assets/Entwicklung%20Bericht%20angezeigt.png)

Hierzu eine Übersicht der wichtigsten Berichte und deren URL:

| Name                      | URL                                                       |
| ------------------------- | --------------------------------------------------------- |
| Angebot / Auftrag         | `/report/html/sale.report_saleorder/$ID`                  |
| Packvorgänge              | `/report/html/stock.report_picking/$ID`                   |
| Lieferschein              | `/report/html/stock.report_deliveryslip/$ID`              |
| Rechnungen mit Zahlung    | `/report/html/account.report_invoice_with_payments/$ID`   |
| Rechnungen                | `/report/html/account.report_invoice/$ID`                 |
| Vorschau interner Bericht | `/report/html/web.preview_internalreport/$ID`             |
| Vorschau externer Bericht | `/report/html/web.preview_externalreport/$ID`             |
| Rahmenauftrag             | `/report/html/sale_blanket_order.report_blanketorder/$ID` |
| QR-Rechnung               | `/report/html/l10n_ch.qr_report_main/$ID`                 |
| Barcodes (PDF)            | `/report/html/stock.label_transfer_template_view_pdf/$ID`                                                          |

::: tip
Bestimmte Bericht können mehere Dokumente anzeigen. Für die HTML-Anzeige können Sie die Dokument-IDs Komma-getrennt übergeben: /report/html/**stock.report_deliveryslip**/**3,4,5**
:::