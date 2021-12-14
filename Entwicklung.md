---
tags:
- HowTo
prev: ./
---
# Entwicklung
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Odoo mühelos anpassen und erweitern.

| Bereich                                                   | Beschreibung                                                |
| --------------------------------------------------------- | ----------------------------------------------------------- |
| [Entwicklung Aktionen](Entwicklung%20Aktionen.md)           | Eigene Odoo Aktionen erstellen.                             |
| [Entwicklung Snippets](Entwicklung%20Snippets.md)           | Einfache Anpassungen mit den Mint System Snippets umsetzen. |
| [Entwicklung QWeb-Berichte](Entwicklung%20QWeb-Berichte.md) | Eigene Berichte mit QWeb erstellen.                         |
| [Entwicklung Ansichten](Entwicklung%20Ansichten.md)         | Odoo Ansichten anpassen.                                    |

| Erweiterung                       | Beschreibung                                   |
| --------------------------------- | ---------------------------------------------- |
| [Web Timeline](Web%20Timeline.md)   | Die Timeline-Ansicht für alle Objekte.         |
| [Mass Editing](Mass%20Editing.md)   | Mühelos mehrere Einträge auf einmal bearbeiten. |
| [BI SQL Editor](BI%20SQL%20Editor.md) | Ganz einfach SQL-basierte Berichte erstellen.  |

## Domainfilter-Widget deaktivieren

Damit man für Filter dynamische Funktionen verwenden kann, muss die Ansicht zur Darstellung der Filter angepasst werden.

Liste mit Ansichten öffnen *Einstellungen > Technisch > Benutzer-Interface > Ansichten*. Anschliessend suchen sie nach der Ansicht mit Bezeichung *ir.filters form* und öffnen diese. Im Tab *Vererbte Ansichten* erstellen sie einen neuen Eintrag:

Ansichtsbezeichnung: `ir.filters form custom`  
Architektur:

```xml
<xpath expr="//field[@name='domain']" position="replace">
    <field name="domain"/>
</xpath>
```

## Filter mit dynamischen Datum erstellen

::: warning
Diese Aufgabe erfordert, dass sie das [Domainfilter-Widget deaktivieren](#Domainfilter-Widget%20deaktivieren).
:::

Um einen Filter zu erstellen, der beispielsweise alle Aufgaben mit Frist Heute anzeigt, öffnen sie als erstes die Aufgaben-Übersicht *Projekt > Alle Aufgaben*.

Erstellen sie einen Filter für das Feld Frist mit dem heutigen Datum.

![](assets/Entwicklung%20Filter%20Frist.png)

Speichern sie den Filter als Favorit und wählen *Entwicklertools > Filter verwalten*. Kopieren sie den folgenden Ausdruck in das Feld *Code-Editor*:

```py
[('date_deadline','<=',time.strftime('%Y-%m-%d'))]
```

Speichern sie den Dialog. Beim Anzeigen des Filters werden nun alle Aufgaben mit einer Frist bis Heute aufgerufen.

Weitere Filter-Beispiele:

Frist erreicht und an eigenem Benutzer zugewiesen:

```py
["&", ("user_id", "=", uid), 
("date_deadline", "<=", time.strftime('%Y-%m-%d'))]
```

Frist bis in 5 Tagen erreicht und an eigenem Benutzer zugewiesen:

```py
[
"&",
("user_id", "=", uid), 
("date_deadline", "<=", (datetime.datetime.now() + datetime.timedelta(days=3)).strftime('%Y-%m-%d'))
]
```

## Developer API Key generieren

Damit Software von Dritten Zugriff auf die Daten von Odoo hat, ohne dass dabei das Passwort eines Benutzers geteilt werden muss, kann man einen Zugriffsschlüssel bereitstellen.

Öffenen sie die Sicherheitseinstellungen des eingeloggten Benutzers *Menu > Mein Profil > Tab Acccount Security* und klicken auf *New API Key*.

## Menüeinträge umbennen

Im Entwicklermodus können sie ganz einfach Menüeinträge umbennen. Angenommen sie möchten diesen Punkt umbennen:

![](assets/Entwicklung%20Men%C3%BCeintr%C3%A4ge%20umbennen.png)

Gehen sie wie folgt vor. Navigieren sie nach *Einstellungen > Technisch >  Benutzer-Interface > Menüeinträge* und suchen sie nach *Alle Angestellte*. Bearbeiten sie den Eintrag und setzen sie für das Feld *Menü* einen neuen Wert.

![](assets/Einstellungen%20Men%C3%BCeintrag%20bearbeiten.png)

Nachdem sie den Browser-Tab aktualisiert haben, ist der Menüeintrag umbenannt.

## Fenster umbennen

Um den angezeigten Namen eines Fenster anzuspassen, navigieren sie nach *Eisntellungen > Technisch > Aktionen > Fesnter öffnen/schliessen ...*. Suchen sie im Feld *Name der Aktion* nach dem Fensternamen und passen sie den Namen an.

![Einstellungen Fenster umbennen](assets/Einstellungen%20Fenster%20umbennen.gif)

## Neues Feld hinzufügen

An jedem Objekt kann an einfach ein Feld hinzugefügt werden. Öffnen sie eine Ansicht im Entwicklermodus und wählen sie *Entwicklertools > Felder anzeigen*. Wählen sie *+ Anlegen* und geben sie folgende Informationen ein:

* Feldname: Beginnt mit `x_` und darf keine Leerschläge enthalten und sollte kleingeschrieben und auf Englisch sein.
* Feldbezeichnung: Passender Name in der angezeigten Sprache.
* Typfeld-Text: Auswahls den Felddatentyps.

Dazu ein Beispiel mit [Abwesenheitszeiten](Abwesenheitszeiten.md):

![](assets/Entwicklung%20Neues%20Feld%20auf%20Abwesenheitszeiten.png)

## Menüeintrag erstellen

Öffnen sie *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge* und wählen sie *Anlegen*.

## Menüeintrag entfernen

Öffnen sie *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge* und suchen sie den entsprechende Menüeintrag. Markieren sie diesen und wählen sie *Aktion > Löschen* oder *Aktion > Archiv*.

::: warning
Diese Vorgang kann die Integrität und Verüfgbarkeit des Systems beeiträchitgen. Führen sie die Aktion nur aus, wenn sie sich den möglichen Auswirkungen bewusst sind.
:::

## Datenmodell entfernen

Öffnen sie *Einstellungen > Technisch > Datenbankstruktur > Datenmodelle* und suchen sie das entsprechende Datenmodell. Markieren sie diesen und wählen sie *Aktion > Löschen*.

::: warning
Diese Vorgang kann die Integrität und Verüfgbarkeit des Systems beeiträchitgen. Führen sie die Aktion nur aus, wenn sie sich den möglichen Auswirkungen bewusst sind.
:::

## Neues berechnetes Feld hinzufügen

Wir nehmen an, dass sie auf der Lagerbechnung ein berechnetes Feld benötigen. Dieses Feld soll die Anzahl Kisten berechnen, die es braucht um das Produkt zu verpacken. Immer wenn die *Erledigte Menge* ändert, soll das Feld berechnet werden.

Erstellen sie ein neues Feld unter *Einstellungen > Technisch > Datenbankstruktur > Felder* mit diesen Attributen:

* **Feldname**: `x_count_boxes`
* **Feldbezeichnung**: Anzahl Kisten
* **Modell**: Lagerbuchung (technischer Name ist `stock.move`)
* **Typfeld-Text**: Ganzzahl
* **Basiseigenschaften**:
	* Nur Lesen
	* Gespeichert
* **Abhängigkeiten**: `quantity_done`
* **Berechnen**:

```py
for rec in self:
	if rec.product_packaging:
		if rec.product_packaging.name == "Schale":
			rec['x_count_boxes'] = (rec.quantity_done + 2.4)/2.5
		if rec.product_packaging.name == "Kiste":
			rec['x_count_boxes'] = (rec.quantity_done + 9)/10
```

Dieser Code berechnet abhängig von der gewählten Verpackung und deren Füllmenge die Anzahl Kisten. Mit Python-Code können sie natürlich jegliche Logik für die Berechnung entwickeln.

![](assets/Entwicklung%20Berechnetes%20Feld.png)

## Externe IDs anzeigen

Odoo speichert alle externen IDs in einer Tabelle. Öffnen sie *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Externe Identifikationen*.

## Externe ID erfassen

Zeigen sie einen beliebigen Datensatz in der Formularansicht an. Als Beispiel verwenden wir eine Ansicht. Entnehmen sie anhand der Url die *ID* und das *Datenmodell*.

/web#id=**1639**&action=28&model=**ir.ui.view**&view_type=form&cids=1&menu_id=4

Navigieren sie nun nach *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Externe Identifikationen* und legen sie einen Eintrag an:

* **Modul**: Technischer Name des Odoo-Moduls
* **Externe Identifikation**: Eindeutiger Bezeichner
* **Modellname**: Angabe Gemäss Url
* **Datensatz-ID**: Angabe Gemäss Url

Dazu die Angaben aus dem Beispiel:

![](assets/Entwicklung%20Externe%20ID%20erfassen.png)

Ist die *Externe Identifikation* gespeichert, wird sie auf Datensatz angezeigt.

![](assets/Entwicklung%20Externe%20Ansicht%20Beispiel.png)