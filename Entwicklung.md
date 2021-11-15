---
tags:
- HowTo
---
# Entwicklung
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Odoo mühelos anpassen und erweitern.

| Bereich                           | Beschreibung                                                |
| --------------------------------- | ----------------------------------------------------------- |
| [Aktionen](Aktionen.md)           | Eigene Odoo Aktionen erstellen.                             |
| [Snippets](Snippets.md)           | Einfache Anpassungen mit den Mint System Snippets umsetzen. |
| [QWeb Berichte](QWeb-Berichte.md) | Eigene Berichte mit QWeb erstellen.                         |
| [Ansichten](Ansichten.md)         | Odoo Ansichten anpassen.                                                            |

| Erweiterung                       | Beschreibung                                   |
| --------------------------------- | ---------------------------------------------- |
| [Web Timeline](Web-Timeline.md)   | Die Timeline-Ansicht für alle Objekte.         |
| [Mass Editing](Mass-Editing.md)   | Mühelos mehere Einträge auf einmal bearbeiten. |
| [BI SQL Editor](BI-SQL-Editor.md) | Ganz einfach SQL-basierte Berichte erstellen.  |

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