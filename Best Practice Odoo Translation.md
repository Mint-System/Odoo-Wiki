---
title: Odoo übersetzen
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Odoo übersetzen

Odoo wird in 50 Sprachen übersetzt. Der Prozess von der Übersetzung eines Begriffs bis zur Anzeige auf der Benutzeroberfläche kann lange dauern.

Als Anwender von Odoo treffen Sie immer wieder fehlende Übersetzungen oder falsch übersetzte Begriffe an. Sie können die Übersetzung anpassen, jedoch wird diese nicht automatisch der Odoo-Community bereitgestellt.

Mit jedem Update von Odoo erhalten Sie neue Übersetzungen. Odoo verwendet das Übersetzungs-System Transifex. Dort sind alle Begriff mit Übersetzungen gespeichert. Nicht dazu gehören die Übersetzungen von nicht-Standard Modulen.

Wenn Sie Odoo übersetzen wollen, haben Sie zwei Optionen. Entweder passen Sie den Begriff direkt in ihrer Odoo-Instanzen an oder Sie machen eine Übersetzung auf Transifex und warten auf die Aktualisierung.

Als Anwendungsfall wollen wir den Begriff *Abschaltung* anpassen. Der Quellbegriff ist *Cut-Off* und worde nicht korrekt übersetzt:

![](attachments/Best%20Practice%20Odoo%20übersetzen%20Abschaltung.png)

## Transifex

Odoo verwaltet alle Übersetzungen auf Transifex: <https://app.transifex.com/odoo/>. Zu jedem Odoo-Module finden Sie dort einen gleichnamigen Ordner. Unsere Übersetzung beispielsweise ist unter dem folgenden Link erreichbar: <https://app.transifex.com/odoo/odoo-16/translate/#de/account/437927029?q=text%3ACut-Off>.

Wenn Sie sich registrieren, können Sie einen neuen Vorschlag erstellen. Wenn Sie den Vorschlag speichern, wird dieser zur Review freigegeben.

![](attachments/Best%20Practice%20Odoo%20übersetzen%20Suggestion.png)

Ob die Übersetzung angenommen wird, entscheiden die Reviewer.

## Direkt übersetzen

Mit Odoo 16 wurde die Erstellung von Übersetzung etwas komplizierter. Führen Sie als erstes diese Schritte aus:

* [Entwicklermodus aktivieren](Settings.md#Entwicklermodus%20aktivieren)
* Mindestens 2 [Sprachen aktivieren](Settings%20Translations.md#Sprache%20aktivieren)

Nun können Sie [Übersetzungen auf Ansichten anpassen](Settings%20Translations.md#Übersetzung%20auf%20Ansicht%20anpassen).
