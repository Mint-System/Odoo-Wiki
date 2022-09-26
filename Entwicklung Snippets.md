---
tags:
- HowTo
prev: ./entwicklung
---
# Entwicklung Snippets
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Einfache Anpassungen mit den Mint System Snippets umsetzen.

## Snippets-Übersicht anzeigen

Zeigen Sie die Website <https://odoo.build/snippets.html> an. Hier finden Sie eine umfassende Snippets-Sammlung.

## Snippet hinzufügen

Unter <https://odoo.build/snippets> finden Sie verschiedene Snippets um Ansichten und Berichte anzupassen. Anhand der Referenz auf den Bericht und dem Link auf das Snippet können Sie das Snippet installieren.

![](assets/Entwicklung%20Snippet%20hinzufügen.gif)

## Snippet-Inhalte übersetzen

Öffnen Sie ein Snippet via *Einstellungen > Technisch > Benutzer-Interface > Ansichten*. Klicken Sie im Tab *Architektur* auf * Übersetzungen bearbeiten*.

![](assets/Snippet%20Übersetzung.png)

## Text als Systemparameter definieren

In bestimmten Fällen möchte man Texte in Berichten direkt anpassen. Damit Anwender nicht den Code im Bericht anpassen müssen, können Sie den Text im Bericht als Systemparameter definieren. Fügen Sie im Bericht diesen Platzhalter ein:

```xml
<t t-set="footer" t-value="request.env['ir.config_parameter'].sudo().get_param('stock.report_bordero.basis57.footer')"/>
<t t-if="footer">
  <p><t t-raw="footer"/></p>
</t>
```

Unter *Einstellungen > Technisch > Systemparameter* erstellen Sie einen neuen Eintrag mit Schlüssel `stock.report_bordero.basis57.footer` und diesem Wert:

```txt
Bitte die Gebinde beim Kunden sofort zurücknehmen und beim Abholen in Erstfeld die Gebinde retournieren.<br/>
<br/>
<strong>Chaffeur Achtung!</strong> Abholadresse: Gotthardstrasse 189, 6472 Erstfeld<br/>
<br/>
Vielen Dank
```

Beim Erstellen des Bericht wird der Platzhalter mit dem konfigurierten Wert des Systemparamters ersetzt:

![](assets/Entwicklung%20Snippets%20Bericht%20mit%20Systemparameter.png)

## Text als Begriff parametrisieren

In bestimmten Fällen möchte man Texte in Berichten direkt anpassen. Damit Anwender nicht den Code im Bericht anpassen müssen, können Sie den Text im Bericht als Begriff parametrisieren. Fügen Sie im Bericht diesen Platzhalter ein:

```xml
<t t-set="footer" t-value="docs.env['ir.translation'].search([('src', '=', 'stock.report_bordero.basis57.footer')], limit=1)"/>
<t t-if="footer">
  <p><t t-raw="footer.value"/></p>
</t>
```

Unter *Einstellungen > Übersetzungen > Übersetzte Begriffe* erstellen Sie einen neuen Eintrag mit diesen Werten:

* **Interne Quelle**: `stock.report_bordero.basis57.footer`
* **Übersetzungswert**:

```txt
Bitte die Gebinde beim Kunden sofort zurücknehmen und beim Abholen in Erstfeld die Gebinde retournieren.<br/>
<br/>
<strong>Chaffeur Achtung!</strong> Abholadresse: Gotthardstrasse 189, 6472 Erstfeld<br/>
<br/>
Vielen Dank
```

* **Übersetztes Feld**: `snippet`
* **Sprache**: German (CH) / Deutsch (CH)

![](assets/Entwicklung%20Snippets%20Begriff.png)

Beim Erstellen des Bericht wird der Platzhalter mit dem *Übersetzungswert* ersetzt.