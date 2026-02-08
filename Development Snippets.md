---
title: Entwicklung Snippets
description: Einfache Anpassungen mit den Mint System Snippets umsetzen.
kind: howto
section: true
prev: ./development
---

# Entwicklung Snippets

![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Verwaltung

### Snippets-Übersicht anzeigen

Zeigen Sie die Website <https://odoo.build/snippets.html> an. Hier finden Sie eine umfassende Snippets-Sammlung.

### Snippet hinzufügen

Unter <https://odoo.build/snippets.html> finden Sie verschiedene Snippets um Ansichten und Berichte von Odoo anzupassen. Anhand der Referenz aus dem Attribut`inherit_id` können Sie das Snippet auf der Odoo Umgebung installieren.

Navigieren Sie nach _Einstellungen > Technisch > Ansichten_ und Suchen Sie nach der Ansicht wobei _Schlüssel_ gleich `inherit_id` ist. Öffnen Sie die Ansicht und erstellen Sie im Tab _Vererbte Ansichten_ einen neuen Eintrag mit diesen Werten:

- **Ansichtsbezeichnung**: ID des Snippet
- **Nummernfolge**: Priorität des Snippet anhand Attribut `priority`
- **Architektur**: XML-Code des Snippet

![](attachments/Entwicklung%20Snippet%20hinzufügen.gif)

### Snippet-Inhalte übersetzen

Öffnen Sie ein Snippet via _Einstellungen > Technisch > Benutzer-Interface > Ansichten_. Klicken Sie im Tab _Architektur_ auf _ Übersetzungen bearbeiten_.

![](attachments/Snippet%20Übersetzung.png)

## Entwicklung

### Text als Systemparameter definieren

In bestimmten Fällen möchte man Texte in Berichten direkt anpassen. Damit Anwender nicht den Code im Bericht anpassen müssen, können Sie den Text im Bericht als Systemparameter definieren. Fügen Sie im Bericht diesen Platzhalter ein:

```xml
<t t-set="footer" t-value="request.env['ir.config_parameter'].sudo().get_param('stock.report_bordero.basis57.footer')"/>
<t t-if="footer">
  <p><t t-raw="footer"/></p>
</t>
```

Unter _Einstellungen > Technisch > Systemparameter_ erstellen Sie einen neuen Eintrag mit Schlüssel `stock.report_bordero.basis57.footer` und diesem Wert:

```txt
Bitte die Gebinde beim Kunden sofort zurücknehmen und beim Abholen in Erstfeld die Gebinde retournieren.<br/>
<br/>
<strong>Chaffeur Achtung!</strong> Abholadresse: Gotthardstrasse 189, 6472 Erstfeld<br/>
<br/>
Vielen Dank
```

Beim Erstellen des Bericht wird der Platzhalter mit dem konfigurierten Wert des Systemparamters ersetzt:

![](attachments/Entwicklung%20Snippets%20Bericht%20mit%20Systemparameter.png)

### Text als Begriff parametrisieren

In bestimmten Fällen möchte man Texte in Berichten direkt anpassen. Damit Anwender nicht den Code im Bericht anpassen müssen, können Sie den Text im Bericht als Begriff parametrisieren. Fügen Sie im Bericht diesen Platzhalter ein:

```xml
<t t-set="footer" t-value="docs.env['ir.translation'].search([('src', '=', 'stock.report_bordero.basis57.footer')], limit=1)"/>
<t t-if="footer">
  <p><t t-raw="footer.value"/></p>
</t>
```

Unter _Einstellungen > Übersetzungen > Übersetzte Begriffe_ erstellen Sie einen neuen Eintrag mit diesen Werten:

- **Interne Quelle**: `stock.report_bordero.basis57.footer`
- **Übersetzungswert**:

```txt
Bitte die Gebinde beim Kunden sofort zurücknehmen und beim Abholen in Erstfeld die Gebinde retournieren.<br/>
<br/>
<strong>Chaffeur Achtung!</strong> Abholadresse: Gotthardstrasse 189, 6472 Erstfeld<br/>
<br/>
Vielen Dank
```

- **Übersetztes Feld**: `snippet`
- **Sprache**: German (CH) / Deutsch (CH)

![](attachments/Entwicklung%20Snippets%20Begriff.png)

Beim Erstellen des Bericht wird der Platzhalter mit dem _Übersetzungswert_ ersetzt.

### Feld oder Button nur in Entwicklermodus anzeigen

Mit einem Snippet könne Sie die das Attribut `groups` eines Elements auf einer Listen- oder Formularansicht anpassen. Mit dem Gruppenzugehörigkeit wird auch die Anzeige im Entwicklermodus gesteuert. Verwenden Sie die Definition `groups="base.group_no_one"`, wenn Sie das Feld oder Button nur im Entwicklermodus anzeigen möchtne.
