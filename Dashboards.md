---
title: Dashboards
description: Dynamische Übersichten und Grafiken zu ihrem Unternehmen.
tags:
- HowTo
prev: ./
---
# Dashboards
![icons_odoo_board](attachments/icons_odoo_board.png)

{{ $frontmatter.description }}

## Erweiterungen

| Erweiterung                                                             | Beschreibung                                    |
| ----------------------------------------------------------------------- | ----------------------------------------------- |
| [Board User ACL](Board%20User%20ACL.md)                                 | Zugriffsrechte auf Dashboards festlegen.        |
| [Board Users](Board%20Users.md)                                         | Dashboars von allen Benutzer anzeigen.          |
| [MIS Builder Cash Flow](MIS%20Builder%20Cash%20Flow.md)                 | Geldfluss-Bericht für Odoo Community.           |
| [MIS Builder](MIS%20Builder.md)                                         | Build Management Information System dashboards. |
| [MIS Template Financial Report](MIS%20Template%20Financial%20Report.md) | Bilanz und Erfolgsrechnung für Odoo Community.  |
| [Mail Activity Board](Mail%20Activity%20Board.md)                       | Übersicht aller erstellten Aktivitäten.         |
| [Mail Activity Done](Mail%20Activity%20Done.md)                         | Aktivitäten als erledigt markieren.             |

## Verwendung

### Ansicht als Favorit speichern

Öffnen Sie eine Ansicht und Filtern und Gruppieren Sie die Daten gemäss ihren Anforderungen. Anschliessend wählen Sie *Favoriten > Aktuelle Suche speichern*. Geben Sie einen passenden Namen ein und fügen Sie am Ende eines der folgenden Emojis hinzu:

* 🗓️: Pivot-Ansicht
* 📊: Graph-Ansicht
* 📋: Listen-Ansicht

Dies ist ein Indikator, welcher Ansichtstyp verwendet werden muss, damit der Favorit korrekt dargestellt wird.

Legen Sie fest, ob der Favorit als Standard verwendet werden soll und ob dieser allen Benutzer zur Verfügung steht.

### Ansicht zu Dashboard hinzufügen

Gilt bis #Odoo15.

Jede Odoo-Ansicht mit oder ohne aktive Filter kann auf dem Dashboard gespeichert werden. Navigieren Sie auf eine beliebige Ansicht, Filtern Sie die Daten und anschliessend wählen Sie *Favoriten > Zu meinem Dashboard hinzufügen*. Geben Sie einen Namen und schliessen den Vorgang mit *Hinzufügen* ab. Laden Sie den Browser-Tab neu und öffnen Sie *Dashboard*.

![Dashboards Beispiel Speichern](attachments/Dashboards%20Beispiel%20Speichern.gif)

### Externer Link auf Startseite hinzufügen

Sie können jeden HTTP-Link auf der Startseite von Odoo hinzufügen. Öffnen Sie dazu *Einstellungen > Technisch > Menüposten* und legen Sie einen Menüposten vom Typ *ir.actions.act_url* an.

<<<<<<< HEAD
![Externer Link auf Startseite hinzufüge](attachments/Externer%20Link%20auf%20Startseite%20hinzufügen.gif)
=======
![Externer Link auf Startseite hinzufügen](attachments/Externer%20Link%20auf%20Startseite%20hinzufüge.gif)
>>>>>>> origin/main

## Entwicklung

### Dashboard-Definition anzeigen

Navigieren Sie nach *Einstellungen > Technisch > Individualisierte Ansicht*. Hier finden Sie ihre Dashboard-Definitionen. Suchen Sie im Feld *Aufbau des Ansichts-Formulars* nach einem Stichwort und bearbeiten Sie die Definition des Dashboards.
