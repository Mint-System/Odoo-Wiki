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
| [Entwicklung Ansichten](Entwicklung%20Ansichten.md)         | Odoo Ansichten anpassen.                                    |
| [Entwicklung QWeb-Berichte](Entwicklung%20QWeb-Berichte.md) | Eigene Berichte mit QWeb erstellen.                         |
| [Entwicklung Snippets](Entwicklung%20Snippets.md)           | Einfache Anpassungen mit den Mint System Snippets umsetzen. |

## Erweiterungen

| Erweiterung                                     | Beschreibung                                    |
| ----------------------------------------------- | ----------------------------------------------- |
| [BI SQL Editor](BI%20SQL%20Editor.md)           | Ganz einfach SQL-basierte Berichte erstellen.   |
| [Mass Editing](Mass%20Editing.md)               | Mühelos mehrere Einträge auf einmal bearbeiten. |
| [Web Timeline](Web%20Timeline.md)               | Die Timeline-Ansicht für alle Objekte.          |
| [Prometheus Exporter](Prometheus%20Exporter.md) | Odoo-Metriken mit Prometheus monitoren.         |

## Assets-Bundel neu generieren

Wird Odoo im Browser angezeigt, werden sog. Assets im Hintergrund geladen (JavaScript-, SCSS- und CSS-Dateien). Diese Assets können nach einem Odoo-Update veraltet sein und müss neu generiert werden. Wählen Sie *Entwicklertool > Bündel von Assets regenerieren*.

![](assets/Entwicklung%20Assets-Bundel%20neu%20generieren.png)

## Developer API Key generieren

Damit Software von Dritten Zugriff auf die Daten von Odoo hat, ohne dass dabei das Passwort eines Benutzers geteilt werden muss, kann man einen Zugriffsschlüssel bereitstellen.

Öffenen Sie die Sicherheitseinstellungen des eingeloggten Benutzers *Menu > Mein Profil > Tab Acccount Security* und klicken auf *New API Key*.

## Menüeinträge umbennen

Im Entwicklermodus können Sie ganz einfach Menüeinträge umbennen. Angenommen Sie möchten diesen Punkt umbennen:

![](assets/Entwicklung%20Men%C3%BCeintr%C3%A4ge%20umbennen.png)

Gehen Sie wie folgt vor. Navigieren Sie nach *Einstellungen > Technisch >  Benutzer-Interface > Menüeinträge* und suchen Sie nach *Alle Angestellte*. Bearbeiten Sie den Eintrag und setzen Sie für das Feld *Menü* einen neuen Wert.

![](assets/Einstellungen%20Men%C3%BCeintrag%20bearbeiten.png)

Nachdem Sie den Browser-Tab aktualisiert haben, ist der Menüeintrag umbenannt.

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

## Metadaten anzeigen

Für jedes Geschäftsobjekt können Sie in der Einzelansicht die Metadaten anzeigen. Rufen Sie ein Odoo-Objekt im Entwicklermodus auf, beispielsweise einen Benutzer und klicken Sie auf *Entwicklertools > Metadaten anzeigen*.

![](assets/Entwicklung%20Metadaten%20anzeigen.png)

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

## Neues Feld hinzufügen

An jedem Objekt kann an einfach ein Feld hinzugefügt werden. Öffnen Sie eine Ansicht im Entwicklermodus und wählen Sie *Entwicklertools > Felder anzeigen*. Wählen Sie *+ Anlegen* und geben Sie folgende Informationen ein:

* Feldname: Beginnt mit `x_` und darf keine Leerschläge enthalten und sollte kleingeschrieben und auf Englisch sein.
* Feldbezeichnung: Passender Name in der angezeigten Sprache.
* Typfeld-Text: Auswahls den Felddatentyps.

Dazu ein Beispiel mit [Abwesenheitszeiten](Abwesenheitszeiten.md):

![](assets/Entwicklung%20Neues%20Feld%20auf%20Abwesenheitszeiten.png)

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

## Systemparameter anlegen

 Öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und erstellen einen Eintrag mit *Schlüssel* und *Wert*.