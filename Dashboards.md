---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./
---
# Dashboards
![icons_odoo_board](assets/icons_odoo_board.png)

Dynamische Übersichten und Grafiken zu ihrem Unternehmen.

## Erweiterungen

| Erweiterung                                       | Beschreibung                            |
| ------------------------------------------------- | --------------------------------------- |
| [Board Users](Board%20Users.md)                   | Dashboars von allen Benutzer anzeigen.  |
| [Mail Activity Board](Mail%20Activity%20Board.md) | Übersicht aller erstellten Aktivitäten. |
| [Mail Activity Done](Mail%20Activity%20Done.md)   | Aktivitäten als erledigt markieren.     |

## Verwendung

### Ansicht als Favorit speichern

Öffnen Sie eine Ansicht und Filtern und Gruppieren Sie die Daten gemäss ihren Anforderungen. Anschliessend wählen Sie *Favoriten > Aktuelle Suche speichern*. Geben Sie einen passenden Namen ein und fügen Sie am Ende eines der folgenden Emojis hinzu:

* 🗓️: Pivot-Ansicht
* 📊: Graph-Ansicht
* 📋: Listen-Ansicht

Dies ist ein Indikator, welcher Ansichtstyp verwerden werden muss, damit der Favorit korrekt dargestellt wird.

Legen Sie fest, ob der Favorit als Standard verwendet werden soll und ob dieser allen Benutzer zur Verfügung steht.

### Ansicht zu Dashboard hinzufügen

Jede Odoo-Ansicht mit oder ohne aktive Filter kann auf dem Dahsboard gespeichert werden. Navigieren Sie auf eine beliebige Ansicht, Filtern Sie die Daten und anschliessend wählen Sie *Favoriten > Zu meinem Dashboard hinzüfgen*. Geben Sie einen Namen und schliessend den Vorgang mit *Hinzufügen* ab. Laden Sie den Browser-Tab neu und öffnen Sie *Dashboard*.

![Dashboards Beispiel Speichern](assets/Dashboards%20Beispiel%20Speichern.gif)

### Externer Link auf Startseite hinzufügen

Sie können jeden HTTP-Link auf der Startseite von Odoo hinzufügen. Öffnen Sie dazu *Einstellungen > Technisch > Menüeinträge* und legen Sie einen Menüeintrag vom Typ *ir.actions.act_url* an.

![Externer Link auf Startseite hinzufüge](assets/Externer%20Link%20auf%20Startseite%20hinzufüge.gif)