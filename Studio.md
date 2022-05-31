---
tags:
- HowTo
prev: ./
---
## Studio
![icons_odoo_web_studio](assets/icons_odoo_web_studio.png)

Alles, was Sie zum Bauen benutzerdefinierter Anwendungen brauchen.

## Bereiche

| Bereich                                   | Beschreibung                               |
| ----------------------------------------- | ------------------------------------------ |
| [Studio Beispiele](Studio%20Beispiele.md) | Beispiele für Anpassungen mit Odoo Studio. |

## Anpassungen dokumentieren
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Jede Änderung mit Odoo Studio an einer Odoo-Instanz muss dokumentiert werden. Die Entwickler von Odoo haben dafür die Menu-Option *Notizen* hinzugefügt.

![Studio Anpassungen dokumentieren](assets/Studio%20Anpassungen%20dokumentieren.gif)

## Feld entfernen

Möchten Sie ein Feld aus einer Ansicht entfernen, öffnen Sie zuerst die Ansicht in Odoo Studion. Anschliessend wählen Sie das Feld aus und klicken in der linken Menu-Leiste auf *Aus Ansicht entfernen*

::: warning
Benutzerdefinierte Felder sowie Basisfelder werden nicht aus der Datenbank entfernt. Sie bestehen weiterhin und können der Ansicht wieder hinzugefügt werden.
:::

## Berechtigung auf verstecktem Feld festlegen

Bestimmte Felder und Buttons werden nur im Entwicklermodus also mit den erweiterten Berechtigungen angezeigt. Damit diese Felder und Buttons standardmässig angezeigt werden können, können Sie mit Odoo Studion ganz einfach die Berechtigung festlegen.

Dazu ein Beispiel: Ein Arbeitsauftrag ist in Arbeit und bereits Bestände produziert, die man verbuchen kann.

![](assets/Studio%20Feld%20nicht%20angezeigt.png)

Nur im Entwicklermodus wird die entsprechende Aktion angezeigt:

![](assets/Studio%20Feld%20angzeigt.png)

Damit dieser Button standardmässig angzeigt wird, geht man wie folgt vor:

![Studio Berechtigungen auf verstecktem Feld festlegen](assets/Studio%20Berechtigungen%20auf%20verstecktem%20Feld%20festlegen.gif)

## Neue Ansichten hinzufügen

Odoo stellt Inhalte in verschiedenen Ansichten dar:
* Listen
* Pivot
* Graphen
* uvw.

Wenn eine Ansicht fehlt, können Sie diese mit Odoo Studio ergänzen.

Angenommen der Bericht zum prognostizierten Lagerbestand *Lager > Berichtswesen > Prognostizierter Bestand* soll nebst der grafischen Ansicht eine Pivot-Ansicht erhalten, gehen Sie wie folgt vor.

Öffnen Sie den Bericht in Odoo Studio. In der Adressleite finden Sie diesen Parameter `model=report.stock.quantity`. Das sagt ihnen auf welchen Datenmodell Sie mit Odoo Studio arbeiten. Klicken Sie auf *Ansichten*, wählen *Privot* und klicken *Ansicht aktivieren*.

![](assets/Studio%20Ansicht%20aktivieren.png)

Schliessen Sie die Bearbeitung mit *Abschliessen* ab. Nun sehen Sie unter dem Suchfeld die Ansicht.

![](assets/Studio%20Neue%20Ansicht.png)

## Ansicht als Standard definieren

Beim Aufruf einer App oder eines Menu ruft Odoo die dazugehörige Standardansicht auf. Öffnen Sie beispielsweise die App Kontakte, erscheinen die Kontakte in der Listenansicht. Um dies zu ändern öffnen Sie die aktive Ansicht im Odoo Studio und wählen *Ansichten*.

![](assets/Studio%20Standardansicht%20festlegen.png)

Wählen Sie die neue Standardansicht an und klicken auf das Menu und auf *Als Standard setzen*. Schliessen Sie den Vorgang ab.

## Benutzerdefinierte App entfernen

Eine App erstellt mit Odoo Studio generiert im Hintergrund Menüeinträge, Datenmodelle und Ansichten. Damit die App entfernt werden kann, müssen diese Einträge von Hand gelöscht werden. Gehen Sie folgt vor:

* [Ansicht entfernen](Entwicklung%20Ansichten.md#Ansicht%20entfernen)
* [Menüeintrag entfernen](Entwicklung.md#Menüeintrag%20entfernen)
* [Datenmodell entfernen](Entwicklung.md#Datenmodell%20entfernen)