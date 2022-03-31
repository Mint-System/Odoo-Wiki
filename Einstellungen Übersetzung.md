---
tags:
- HowTo
prev: ./einstellungen
---
# Einstellungen Übersetzungen
![icons_odoo_settings](assets/icons_odoo_settings.png)

Einstellungen zu Sprachpakete und Übersetzungen.

## Neue Sprache aktivieren

Damit Odoo in mehreren Sprachen verfügbar ist, müssen Sie die entsprechenden Sprachpakete installieren. Navigieren Sie nach *Einstellungen > Sprachen* und wählen Sie *Sprachen verwalten*. Suchen Sie die zu installierende Sprache, öffnen Sie diese und wählen *Aktivieren und Übersetzen*.

## Übersetzungen aktualisieren

Mit jeder Odoo Version und den dazugehörigen Modulen werden neue Übersetzungen hinzugefügt. Um die aktuellsten Übersetzungen zu erhalten müssen Sie folgende Aktion ausführen: Öffnen Sie *Einstellungen > Sprachen > Sprachen verwalten > Sprache auswählen* und klicken auf *Active / Update*. Bestätigen Sie den Dialog. Mit der Option *Bisherige Übersetzungen ändern* werden manuell erstelle Übersetzungen überschrieben.

## Fehlende Begriffe generieren

Damit Begriffe überesetzt werden können, muss als erstes die Liste, der zu übersetzenden Begriffe aktualisiert werden.  Im [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren) folgende Aktionen ausführen:

*Einstellungen > Übersetzungen > Fehlende Begriffe generieren*.

Dann kann man die Übersetzungen über die Einstellungen anzeigen.

## Übersetzungen erstellen

Odoo wird in viele Sprachen übersetzt, daher kann es sein, dass die Lokalisierung in der eingestellte Sprache unvollständig ist. Findet man einen Begriff oder Satz, der nicht korrekt übersetzt ist, kann man diesen selber anpassen. Dazu ein Beispiel.

Der folgende Ausschnitt ist aus einem Odoo-Dialog. Die Labels und Buttons sind nicht übersetzt.

![Odoo Übersetzung vorher](assets/Einstellungen%20%C3%9Cbersetzung%20vorher.png)

Als erstes muss man  die [Übersetzungen aktualisieren](Einstellungen%20Übersetzung.md#Übersetzungen%20aktualisieren). Anschliessend kann man in der Liste *Einstellungen > Übersetzungen > Übersetzte Begriffe* den englischen Begriff suchen und anpassen.

![Odoo Übersetzung bearbeiten](assets/Einstellungen%20%C3%9Cbersetzung%20bearbeiten.png)

Nun ist der Odoo-Dialog übersetzt.

![Odoo Übersetzung nachher](assets/Einstellungen%20%C3%9Cbersetzung%20nachher.png)

::: warning
Speichern Sie alle übersetzten Begriffe in einer separaten Notiz. Bei Upgrades können eigene Übersetzungen vom System überschrieben werden.

![](assets/Einstellungen%20Übersetungen%20Noitz.png)
:::

## Übersetzungen exportieren

Im Entwicklermodus öffnen Sie den Export-Dialog via *Einstellungen > Übersetzungen > Import / Export > Übersetzung exportieren*. Wählen Sie die zu exportierende Sprache, Datei-Format CSV und eine App deren Übersetzungen Sie exportieren möchten. Drücken Sie auf *Export* und laden die CSV-Datei herunter.

::: warning
Organisieren Sie die Übersetzung nach Apps
:::

## Übersetzungen importieren

Im Entwicklermodus öffnen Sie den Import-Dialog via *Einstellungen > Übersetzungen > Import / Export > Übersetzung importieren*. Für die Sprache Deutsch (Schweiz) geben Sie die folgenden Informationen ein:
* Sprache: de
* Code: CH
Laden Sie die Datei mit Übersetzungen hoch und klicken auf *Import*.

## Bestimmte Begriffe umbennen

Ist man mit einer bestimmte Übersetzung nicht zufrieden, können Sie diese selber anpassen. Angenommen wir wollen auf der Rechnung *Zwischensumme* zu *Nettobetrag* umbennen, öffnen Sie als erstes *Einstellungen > Übersetzungen > Übersetzt Begriffe*.

![](assets/Einstellungen%20%C3%9Cbersetzungen%20Begriff%20Zwischensumme.png)

Suchen Sie nach dem Übersetzungswert *Zwischensumme*. Es erscheinen mehrere Resultate. Für einen Begriff kann es mehrere gleiche Übersetzung geben, weil es mehrere unabhängige Odoo Apps gibt, die den gleichen Begriff verwenden.

In unserem Fall wollen wir die Einträge mit `<strong>...</strong>` anpassen. Wählen Sie die entsprechenden Einträge aus und ersetzen Sie *Zwischensumme* mit *Nettobetrag*.

## Produktnamen übersetzen

Haben Sie mehrere Sprachpakete auf der Odoo-Umgebung installiert und möchten Produktnamen übersetzen, gehen Sie wie folgt vor. Öffnen Sie das Produkt in der Einzelansicht und klicken Sie auf *Bearbeiten*. Am oberen rechten Eck des Eingabefelds zum Produktnamen finden Sie ein Link.

![](assets/Einstellungen%20%C3%9Cbersetung%20Produktnamen%20%C3%BCbersetzen.png)
n
Klicken Sie auf diesen und geben Sie den übersetzten Produktnamen ein.

## Feldinhalte übersetzen

Bestimmte Feldinhalte können direkt übersetzt werden. Dazu wählt man den Sprachcode *DE* (gemäss aktiver Sprache) auf der rechten Seite des Feldes und passt die Übersetzung an.

![Einstellungen Übersetzung Feldinhalt](assets/Einstellungen%20Übersetzung%20Feldinhalt.gif)

::: warning
Wenn Sie [Übersetzungen aktualisieren](#Übersetzungen%20aktualisieren) können solche Änderungen verloren gehen.
:::

## Übersetzungskommentar hinzufügen

Mit einem Odoo Snippet können Sie in unter *Einstellungen > Übersetzungen > Übersetzte Begriffe* das Feld *Übersetzungskommentare* anzeigen. Wenn Sie eine eigene Übersetzung erstellen, fügen Sie den Kommentar `mint_system` hinzu. So können Sie vor einem Export die eigenen Übersetzungen exportieren.

![Einstellungen Übersetzung Kommentar hinzufügen](assets/Einstellungen%20Übersetzung%20Kommentar%20hinzufügen.gif)
