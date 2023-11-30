---
title: Einstellungen Übersetzungen
description: Einstellungen zu Sprachpakete und Übersetzungen.
tags:
- HowTo
prev: ./settings
---
# Einstellungen Übersetzungen
![icons_odoo_settings](attachments/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Konfiguration

### Sprache aktivieren

Damit Odoo in mehreren Sprachen verfügbar ist, müssen Sie die entsprechenden Sprachpakete installieren. Navigieren Sie nach *Einstellungen > Sprachen* und wählen Sie *Sprachen verwalten*. Suchen Sie die zu installierende Sprache, öffnen Sie diese und wählen *Aktivieren und Übersetzen*.

## Übersetzung

### Übersetzungen aktualisieren

Mit jeder Odoo Version und den dazugehörigen Modulen werden neue Übersetzungen hinzugefügt. Um die aktuellsten Übersetzungen zu erhalten müssen Sie folgende Aktion ausführen: Öffnen Sie *Einstellungen > Sprachen > Sprachen verwalten > Sprache auswählen* und klicken auf *Active / Update*. Bestätigen Sie den Dialog. Mit der Option *Bisherige Übersetzungen ändern* werden manuell erstelle Übersetzungen überschrieben.

### Fehlende Begriffe generieren

Bis #Odoo15.

Damit Begriffe überesetzt werden können, muss als erstes die Liste, der zu übersetzenden Begriffe aktualisiert werden.  Im [Entwicklermodus](Settings.md#Entwicklermodus%20aktivieren) folgende Aktionen ausführen:

*Einstellungen > Übersetzungen > Fehlende Begriffe generieren*.

Dann kann man die Übersetzungen über die Einstellungen anzeigen.

### Übersetzung anpassen

Ab #Odoo16 .

Zur Übersetzung von Ansichten und Felder müssen Sie mindestens eine [Sprache aktivieren](#Sprache%20aktivieren). Wenn Sie eine andere Sprache als `en_US` aktiviert haben und nur diese Sprache, beispielsweise `de_CH` aktiviert haben wollen, können Sie die zusätzliche Sprache nach Anpassung der Übersetzungen wieder deaktivieren. 

Bis #Odoo15.

Navigieren Sie nach *Einstellungen > Übersetzungen > Übersetzte Begriffe* und suchen Sie nach dem übersetzten Begriff. Ändern Sie die Übersetzung direkt im Feld *Übersetzungswert*.

::: warning
Wenn Sie ein Modul aktualisieren, können angepasste Übersetzungen verloren gehen. Notieren Sie sich die angepassten Übersetzungen.
:::

### Übersetzung auf Ansicht anpassen

Auf der Ansicht, welche die Übersetzung enthält, die Sie anpassen möchten, wählen *Entwickler-Tool > Bearbeitungsansicht:List|Form*. Klicken im Tab *Architektur* rechts auf den *EN*-Link. Nun öffnet sich ein Dialog mit den übersetzten und übersetzbaren Begriffen der Ansicht. Nehmen Sie die Anpassungen vor und Speichern Sie den Vorgang.

![](attachments/Einstellungen%20Übersetzung%20Ansicht%20übersetzen.gif)

::: warning
Der *EN*-Link wird ab #Odoo16 nur angezeigt, wenn mindestens 2 Sprachen aktiv sind.
:::

### Übersetzungen erstellen

Bis #Odoo15.

Odoo wird in viele Sprachen übersetzt, daher kann es sein, dass die Lokalisierung in der eingestellte Sprache unvollständig ist. Findet man einen Begriff oder Satz, der nicht korrekt übersetzt ist, kann man diesen selber anpassen. Dazu ein Beispiel.

Der folgende Ausschnitt ist aus einem Odoo-Dialog. Die Labels und Buttons sind nicht übersetzt.

![Odoo Übersetzung vorher](attachments/Einstellungen%20Übersetzung%20vorher.png)

Als erstes muss man  die [Übersetzungen aktualisieren](Settings%20Translations.md#Übersetzungen%20aktualisieren). Anschliessend kann man in der Liste *Einstellungen > Übersetzungen > Übersetzte Begriffe* den englischen Begriff suchen und anpassen.

![Odoo Übersetzung bearbeiten](attachments/Einstellungen%20Übersetzung%20bearbeiten.png)

Nun ist der Odoo-Dialog übersetzt.

![Odoo Übersetzung nachher](attachments/Einstellungen%20Übersetzung%20nachher.png)

::: warning
Speichern Sie alle übersetzten Begriffe in einer separaten Notiz. Bei Upgrades können eigene Übersetzungen vom System überschrieben werden.

![](attachments/Einstellungen%20Übersetungen%20Noitz.png)
:::

### Übersetzungen exportieren

Im Entwicklermodus öffnen Sie den Export-Dialog via *Einstellungen > Übersetzungen > Import / Export > Übersetzung exportieren*. Wählen Sie die zu exportierende Sprache, Datei-Format CSV und eine App deren Übersetzungen Sie exportieren möchten. Drücken Sie auf *Export* und laden die CSV-Datei herunter.

::: warning
Organisieren Sie die Übersetzung nach Apps
:::

### Übersetzungen importieren

Im Entwicklermodus öffnen Sie den Import-Dialog via *Einstellungen > Übersetzungen > Import / Export > Übersetzung importieren*. Für die Sprache Deutsch (Schweiz) geben Sie die folgenden Informationen ein:
* Sprache: de
* Code: CH
Laden Sie die Datei mit Übersetzungen hoch und klicken auf *Import*.

### Begriffe in Bericht umbennen

Bis #Odoo15.

Wenn Sie mit einer bestimmte Übersetzung nicht zufrieden sind, können Sie diese selber anpassen. Angenommen Sie wollen auf der Rechnung *Zwischensumme* zu *Nettobetrag* umbennen, öffnen Sie als erstes *Einstellungen > Übersetzungen > Übersetzt Begriffe*.

![](attachments/Einstellungen%20Übersetzungen%20Begriff%20Zwischensumme.png)

Suchen Sie nach dem Übersetzungswert *Zwischensumme*. Es erscheinen mehrere Resultate. Für einen Begriff kann es mehrere gleiche Übersetzung geben, weil es mehrere unabhängige Odoo Apps gibt, die den gleichen Begriff verwenden.

In unserem Fall wollen wir die Einträge mit `<strong>...</strong>` anpassen. Wählen Sie die entsprechenden Einträge aus und ersetzen Sie *Zwischensumme* mit *Nettobetrag*.

### Feldinhalte übersetzen

Bestimmte Feldinhalte können direkt übersetzt werden. Dazu wählt man den Sprachcode *DE* (gemäss aktiver Sprache) auf der rechten Seite des Feldes und passt die Übersetzung an.

![Einstellungen Übersetzung Feldinhalt](attachments/Einstellungen%20Übersetzung%20Feldinhalt.gif)

::: warning
Wenn Sie [Übersetzungen aktualisieren](#Übersetzungen%20aktualisieren) können solche Änderungen verloren gehen.
:::

### Übersetzungskommentar hinzufügen

Bis #Odoo15.

Mit einem Odoo Snippet können Sie in unter *Einstellungen > Übersetzungen > Übersetzte Begriffe* das Feld *Übersetzungskommentare* anzeigen. Wenn Sie eine eigene Übersetzung erstellen, fügen Sie den Kommentar `mint_system` hinzu. So können Sie vor einem Export die eigenen Übersetzungen exportieren.

![Einstellungen Übersetzung Kommentar hinzufügen](attachments/Einstellungen%20Übersetzung%20Kommentar%20hinzufügen.gif)
