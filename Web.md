---
title: Web
description: Benutzeroberfläche von Odoo.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Web

![icons_odoo_website_partner](attachments/icons_odoo_website_partner.png)

{{ $frontmatter.description }}

## Erweiterungen

| Erweiterung                                                                         | Beschreibung                                                         |     |     |     |     |     |     |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------- | --- | --- | --- | --- | --- | --- |
| [Web Dark Mode](Web%20Dark%20Mode.md)                                               | Dark mode für Web-Oberfläche.                                        |     |     |     |     |     |     |
| [Web Editor Disable Convert Inline](Web%20Editor%20Disable%20Convert%20Inline.md)   | Konvertierung der Inline-Styles im Odoo Editor verhindern.           |     |     |     |     |     |     |
| [Web Editor Show Code](Web%20Editor%20Show%20Code.md)                               | Aktion "Code anzeigen" im HTML-Editor ohne Entwicklermodus anzeigen. |     |     |     |     |     |     |
| [Web Font Arial](Web%20Font%20Arial.md)                                             | Fügt Schriftart Arial der Auswahl hinzu.                             |     |     |     |     |     |     |
| [Web Font Dobra Book](Web%20Font%20Dobra%20Book.md)                                 | Fügt Schriftart Dobro Book der Auswahl hinzu,                        |     |     |     |     |     |     |
| [Web Referesher](Web%20Referesher.md)                                               | Fügt einen Button zur Aktualisierung der Listenansicht hinzu.        |     |     |     |     |     |     |
| [Web Responsive](Web%20Responsive.md)                                               | Responsive Anzeige der Odoo-Oberfläche.                              |     |     |     |     |     |     |

## Ansichten

### Ansichten durchsuchen

Die Startseite von Odoo listet alle verfügbaren Apps auf. Die Apps und deren Ansichten können gefiltert werden. Geben Sie auf der Übersicht einfach den gewünschten Begriff ein und Odoo filter die Ansichten für sie.

![](attachments/Navigation%20Suche.png)

### Smart-Links aufrufen

Die Smart-Links erlauben einen direkten Wechsel zu verknüpften Dokumenten und Apps. Dazu ein Beispiel der Smart-Links in der Projekt-Übersicht:

![](attachments/Navigation%20Smart-Links.png)

Klicken Sie auf _Zeiterfassung_ werden alle Zeiterfassungs-Einträge des Projekts dargestellt.

### Mit Links navigieren

Odoo-Verknüpft die Dokumente über diverse Links. Dies erlaubt eine flexible Navigation. Beispielsweise kann man über die Kontakte-App in die Verkauf-App gelangen ohne dass sich der Navigations-Titell ändert.

![](attachments/Navigation%20Pfad.png)

::: warning
Beachten Sie immer in welchem Kontext Sie sich in der Navigation befinden.
:::

### Mehrere Listeneinträge anzeigen

Standardmässig zeigt Odoo 80 Einträge auf einer Listenseite an. Diese Einstellung kann pro Listenansicht übersteuert werden. Als Anwender kann man adhoch einen Werte festlegen.

![Navigation Mehrere Listeneinträge](attachments/Navigation%20Mehrere%20Listeneinträge.gif)

### Versteckte Spalte anzeigen

Öffnen Sie eine beliebige Listenansicht und klicken Sie auf die drei Punkte auf der rechten Seite. Wählen Sie die Spalten an, die Sie anzeigen möchten.

![](attachments/Navigation%20Versteckte%20Spalten.png)

Odoo merkt sich die Einstellungen für ihren Benutzer und zeigt beim Aufruf der Listenansicht die Spalten wie gewählt an.

### Einträge archivieren

Bestimmte Einträge wie Kontakte oder Produkte können archiviert und so ausgeblendet werden. Um Einträge zu archivieren, rufen Sie die entsprechende Listen-Ansicht auf und wählen _Aktion > Archivieren_.

### Archivierte Einträge anzeigen

Bestimmte Einträge wie Kontakte oder Produkte können archiviert und so ausgeblendet werden. Um die archivierten Einträge anzuzeigen rufen Sie die entsprechende Listen-Ansicht auf und wählen _Filter > Archiviert_. Es werden alle archivierten Einträge angezeigt.

![](attachments/Navigation%20Archivierte%20Einträge.png)

### Archivieren Einträge wiederherstellen

Wenn Sie [Archivierte Einträge anzeigen](#Archivierte%20Einträge%20anzeigen) können Sie mit _Aktion > Archivierung aufheben_ die Archivierung des gewählten Eintrags rückgängi machen.

## Dashboard

### Kommandozeile ausführen

Mit der Tastenkombination <kbd>Ctrl</kbd> + <kbd>k</kbd> starten Sie die Odoo Kommandozeile. Geben Sie im Suchfeld einen Befehl ein und starten Sie diesen mit <kbd>Enter</kbd>.

![Navigation Kommandozeile](attachments/Navigation%20Kommandozeile.gif)
