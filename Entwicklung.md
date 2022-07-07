---
tags:
- HowTo
prev: ./
---
# Entwicklung
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Odoo mühelos anpassen und erweitern.

## Bereiche

| Bereich                                                     | Beschreibung                                                |
| ----------------------------------------------------------- | ----------------------------------------------------------- |
| [Entwicklung Aktionen](Entwicklung%20Aktionen.md)           | Eigene Odoo Aktionen erstellen.                             |
| [Entwicklung Snippets](Entwicklung%20Snippets.md)           | Einfache Anpassungen mit den Mint System Snippets umsetzen. |
| [Entwicklung QWeb-Berichte](Entwicklung%20QWeb-Berichte.md) | Eigene Berichte mit QWeb erstellen.                         |
| [Entwicklung Ansichten](Entwicklung%20Ansichten.md)         | Odoo Ansichten anpassen.                                    |

## Erweiterungen

| Erweiterung                       | Beschreibung                                   |
| --------------------------------- | ---------------------------------------------- |
| [Web Timeline](Web%20Timeline.md)   | Die Timeline-Ansicht für alle Objekte.         |
| [Mass Editing](Mass%20Editing.md)   | Mühelos mehrere Einträge auf einmal bearbeiten. |
| [BI SQL Editor](BI%20SQL%20Editor.md) | Ganz einfach SQL-basierte Berichte erstellen.  |

## Assets-Bundel neu generieren

Wird Odoo im Browser angezeigt, werden sog. Assets im Hintergrund geladen (JavaScript-, SCSS- und CSS-Dateien). Diese Assets können nach einem Odoo-Update veraltet sein und müss neu generiert werden. Wählen Sie Entwickler-Tool > Bündel von Assets regenerieren.

![](assets/Entwicklung%20Assets-Bundel%20neu%20generieren.png)

## Domainfilter-Widget deaktivieren

Damit man für Filter dynamische Funktionen verwenden kann, muss die Ansicht zur Darstellung der Filter angepasst werden.

Liste mit Ansichten öffnen *Einstellungen > Technisch > Benutzer-Interface > Ansichten*. Anschliessend suchen Sie nach der Ansicht mit Bezeichung *ir.filters form* und öffnen diese. Im Tab *Vererbte Ansichten* erstellen Sie einen neuen Eintrag:

Ansichtsbezeichnung: `$COMPANY_NAME.base.ir_filters_view_form.remove_domain_widget`  
Architektur:

```xml
<?xml version="1.0"?>
<data inherit_id="base.ir_filters_view_form" priority="50">

    <field name="domain" position="attributes">
        <attribute name="widget"/>
    </field>

</data>
```

## Filter mit dynamischen Datum erstellen

::: warning
Diese Aufgabe erfordert, dass Sie das [Domainfilter-Widget deaktivieren](#Domainfilter-Widget%20deaktivieren).
:::

Um einen Filter zu erstellen, der beispielsweise alle Aufgaben mit Frist Heute anzeigt, öffnen Sie als erstes die Aufgaben-Übersicht *Projekt > Alle Aufgaben*.

Erstellen Sie einen Filter für das Feld Frist mit dem heutigen Datum.

![](assets/Entwicklung%20Filter%20Frist.png)

Speichern Sie den Filter als Favorit und wählen *Entwicklertools > Filter verwalten*. Kopieren Sie den folgenden Ausdruck in das Feld *Domain*:

```python
[['date_deadline','<=',time.strftime('%Y-%m-%d')]]
```

Speichern Sie den Dialog. Beim Anzeigen des Filters werden nun alle Aufgaben mit einer Frist bis Heute aufgerufen.

Weitere Filter-Beispiele:

Frist erreicht und an eigenem Benutzer zugewiesen:

```python
[
"&",
["user_id", "=", uid],
["date_deadline", "<=", time.strftime('%Y-%m-%d')]
]
```

Frist bis in 5 Tagen erreicht und an eigenem Benutzer zugewiesen:

```python
[
"&",
["user_id", "=", uid], 
["date_deadline", "<=", (datetime.datetime.now() + datetime.timedelta(days=3)).strftime('%Y-%m-%d')]
]
```

## Developer API Key generieren

Damit Software von Dritten Zugriff auf die Daten von Odoo hat, ohne dass dabei das Passwort eines Benutzers geteilt werden muss, kann man einen Zugriffsschlüssel bereitstellen.

Öffenen Sie die Sicherheitseinstellungen des eingeloggten Benutzers *Menu > Mein Profil > Tab Acccount Security* und klicken auf *New API Key*.

## Menüeinträge umbennen

Im Entwicklermodus können Sie ganz einfach Menüeinträge umbennen. Angenommen Sie möchten diesen Punkt umbennen:

![](assets/Entwicklung%20Men%C3%BCeintr%C3%A4ge%20umbennen.png)

Gehen Sie wie folgt vor. Navigieren Sie nach *Einstellungen > Technisch >  Benutzer-Interface > Menüeinträge* und suchen Sie nach *Alle Angestellte*. Bearbeiten Sie den Eintrag und setzen Sie für das Feld *Menü* einen neuen Wert.

![](assets/Einstellungen%20Men%C3%BCeintrag%20bearbeiten.png)

Nachdem Sie den Browser-Tab aktualisiert haben, ist der Menüeintrag umbenannt.

## Fenster umbennen

Um den angezeigten Namen eines Fenster anzuspassen, navigieren Sie nach *Eisntellungen > Technisch > Aktionen > Fesnter öffnen/schliessen ...*. Suchen Sie im Feld *Name der Aktion* nach dem Fensternamen und passen Sie den Namen an.

![Einstellungen Fenster umbennen](assets/Einstellungen%20Fenster%20umbennen.gif)

## Neues Feld hinzufügen

An jedem Objekt kann an einfach ein Feld hinzugefügt werden. Öffnen Sie eine Ansicht im Entwicklermodus und wählen Sie *Entwicklertools > Felder anzeigen*. Wählen Sie *+ Anlegen* und geben Sie folgende Informationen ein:

* Feldname: Beginnt mit `x_` und darf keine Leerschläge enthalten und sollte kleingeschrieben und auf Englisch sein.
* Feldbezeichnung: Passender Name in der angezeigten Sprache.
* Typfeld-Text: Auswahls den Felddatentyps.

Dazu ein Beispiel mit [Abwesenheitszeiten](Abwesenheitszeiten.md):

![](assets/Entwicklung%20Neues%20Feld%20auf%20Abwesenheitszeiten.png)

## Menüeintrag erstellen

Öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge* und wählen Sie *Anlegen*.

## Menüeintrag entfernen

Öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge* und suchen Sie den entsprechende Menüeintrag. Markieren Sie diesen und wählen Sie *Aktion > Löschen* oder *Aktion > Archiv*.

::: warning
Diese Vorgang kann die Integrität und Verüfgbarkeit des Systems beeiträchitgen. Führen Sie die Aktion nur aus, wenn Sie sich den möglichen Auswirkungen bewusst sind.
:::

## Datenmodell entfernen

Öffnen Sie *Einstellungen > Technisch > Datenbankstruktur > Datenmodelle* und suchen Sie das entsprechende Datenmodell. Markieren Sie diesen und wählen Sie *Aktion > Löschen*.

::: warning
Diese Vorgang kann die Integrität und Verüfgbarkeit des Systems beeiträchitgen. Führen Sie die Aktion nur aus, wenn Sie sich den möglichen Auswirkungen bewusst sind.
:::

## Neues berechnetes Feld hinzufügen

Wir nehmen an, dass Sie auf der Lagerbechnung ein berechnetes Feld benötigen. Dieses Feld soll die Anzahl Kisten berechnen, die es braucht um das Produkt zu verpacken. Immer wenn die *Erledigte Menge* ändert, soll das Feld berechnet werden.

Erstellen Sie ein neues Feld unter *Einstellungen > Technisch > Datenbankstruktur > Felder* mit diesen Attributen:

* **Feldname**: `x_count_boxes`
* **Feldbezeichnung**: Anzahl Kisten
* **Modell**: Lagerbuchung (technischer Name ist `stock.move`)
* **Typfeld-Text**: Ganzzahl
* **Basiseigenschaften**:
	* Nur Lesen
	* Gespeichert
* **Abhängigkeiten**: `quantity_done`
* **Berechnen**:

```python
for rec in self:
	if rec.product_packaging:
		if rec.product_packaging.name == "Schale":
			rec['x_count_boxes'] = (rec.quantity_done + 2.4)/2.5
		if rec.product_packaging.name == "Kiste":
			rec['x_count_boxes'] = (rec.quantity_done + 9)/10
```

Dieser Code berechnet abhängig von der gewählten Verpackung und deren Füllmenge die Anzahl Kisten. Mit Python-Code können Sie natürlich jegliche Logik für die Berechnung entwickeln.

![](assets/Entwicklung%20Berechnetes%20Feld.png)

## Externe IDs anzeigen

Odoo speichert alle externen IDs in einer Tabelle. Öffnen Sie *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Externe Identifikationen*.

## Externe ID erfassen

Zeigen Sie einen beliebigen Datensatz in der Formularansicht an. Als Beispiel verwenden wir eine Ansicht. Entnehmen Sie anhand der Url die *ID* und das *Datenmodell*.

/web#id=**1639**&action=28&model=**ir.ui.view**&view_type=form&cids=1&menu_id=4

Navigieren Sie nun nach *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Externe Identifikationen* und legen Sie einen Eintrag an:

* **Modul**: Technischer Name des Odoo-Moduls
* **Externe Identifikation**: Eindeutiger Bezeichner
* **Modellname**: Angabe Gemäss Url
* **Datensatz-ID**: Angabe Gemäss Url

Dazu die Angaben aus dem Beispiel:

![](assets/Entwicklung%20Externe%20ID%20erfassen.png)

Ist die *Externe Identifikation* gespeichert, wird Sie auf Datensatz angezeigt.

![](assets/Entwicklung%20Externe%20Ansicht%20Beispiel.png)

## Neues Beziehungs-Feld hinzufügen

Wir nehmen an, dass Sie auf der Auftragsposition ein Beziehungs-Feld benötigen. Dieses Feld soll die Kundenreferenz auf dem zugehörigen Verkaufsauftrag anzeigen.

Erstellen Sie ein neues Feld unter *Einstellungen > Technisch > Datenbankstruktur > Felder* mit diesen Attributen:

* **Feldname**: `x_client_order_ref`
* **Feldbezeichnung**: Kundenreferenz
* **Modell**: Auftragsposition (technischer Name ist `sale.order.line`)
* **Typfeld-Text**: Text
* **Basiseigenschaften**:
	* Nur Lesen
	* Gespeichert
* **Beziehungs-Feld**: `order_id.client_order_ref`

![](assets/Entwicklung%20Neues%20Beziehungs-Feld%20hinzufügen.png)

Dieses Feld können Sie nun in Berichten oder Listenansichten anzeigen.

## Standard-Filter für alle Benutzer festlegen

Wenn Sie über Aktionen bestimmte Odoo-Ansichten aufrufen ist bereits ein Filter in der Suchmaske hinterlegt. Dieser Standard-Filter können Sie für alle Benutzer anpassen.

Wählen Sie auf der Ansicht mit dem Filter *Entwickler-Tools > Aktion bearbeiten*. Im Feld *Wert aus Kontext* können nicht nur Standardwerte für die anzuzeigende Ansicht hinterlegt werden, sondern auch der Status von Filtern.

![](assets/Entwicklung%20Standardfilter%20einrichten.png)

Der Name des Filters lautet in diesem Beispiel `my_quotation`. Angenommen Sie haben mittels Snippet diesen Filter hinzugefügt:

```xml
<filter string="Order Sent" name="sent" domain="[['state', '=', 'sent']]"/>
```

Können Sie entweder `my_question` mit `sent` im *Kontext Wert* der Aktion (*Entwickler-Tools > Aktion bearbeiten*) ersetzen oder den *Kontext Wert* mit `{'search_default_my_quotation': 1, 'search_default_sent': 1}` erweitern.

::: warning
Wenn Sie das Modul mit der Definition der Aktiona aktualisieren, wird das Feld *Wert aus Kontext* überschrieben und ihre Anpassungen gehen verloren. Falls das unter keinen Umständen passieren darf, müssen Sie Aktion duplizeren und in der Menüstruktur neu verknüpfen.
:::

## Ansicht Anhänge erstellen

Damit Sie eine Übersicht der Anhänte erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Entwicklung%20Aktionen.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Attachments`\
Objekt: `ir.attachments`\
Ansichtsmodus: `tree,form`\
Menü: `Anhänge`\
Obermenü: `Einstellungen/Technisch/Diskussion`\
Aktion: `ir.actions.act_window` `Einkaufszeilen`\
Nummernfolge: `10`

Das Ergebnis sollte so aussehen:

![](assets/Entwicklung%20Ansicht%20Anhänge.png)

## Ansicht erstellen

Öffnen Sie *Einstellung > Technisch > Ansichten* und legen Sie einen neuen Eintrag an. Im folgenden Beispiel erstellen Sie eine Listenansicht (Tree) für das Datenmodell *Basisimportzuordnung*.

Ansichtsbezeichnung: `mint_system.base_import.mapping.tree`
Modell: `base_import.mapping`\
Ansichtstyp: `Baum`\
Sequenz: `16`\
Architektur:

```xml
<tree>
  <field name="column_name"/>
  <field name="res_model"/>
</tree>
```

So sollte es dann aussehen:

![](assets/Entwicklung%20Ansicht%20erstellen.png)