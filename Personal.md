---
tags:
- HowTo
---
[🔗 Home](/)
# Personal
![icons_odoo_hr](assets/icons_odoo_hr.png)

Personalmanagement für moderne Unternehmen.

| Erweiterung                                     | Beschreibung                                  |
| ----------------------------------------------- | --------------------------------------------- |
| [HR Birthday Calender](HR%20Birthday%20Calender.md) | Kalenderansicht aller Geburtstage.            |
| [HR Shortname](HR%20Shortname.md)                 | Zu jedem Mitarbeitenden ein Kürzel speichern. |

> Odoo unterscheidet zwischen Benutzer und Mitarbeiter. Mitarbeiter müssen nicht zwingend einen Odoo-Account besitzen. Zur Verwendung von Apps wie die Zeiterfassung muss den Benutzern ein Mitarbeiter hinterlegt werden.

## Mitarbeiter erfassen

Navigieren sie nach *Personal* und wählen sie *+ Anlegen*. Geben sie den Vor- und Nachnamen des Mitarbeiters ein und öffnen sie den Tab *HR Einstelungen*. Wählen sie unter *Verknüpfter Benutzer* einen bestehenden Benutzer aus, falls der Mitarbeiter Zugriff auf Odoo haben soll.

Schliessen Sie den Vorgang mit *Speichern* ab.

Alternativ können sie nach *Einstellungen > Benutzer > Benutzer verwalten* navigieren und hier den Odoo-Benutzer auswählen. Über den Knopf *Mitarbeiter anlegen* können sie den Mitarbeiter erfassen. Dieser wird über den Smart-Link verknüpft.

![](assets/Peresonal%20Smart-Link%20Mitarbeiter.png)

## Vorgesetzte hinterlegen

Damit Prozesse korrekt Ablaufen, muss die *Organisations-Charta* konfiguriert werden. Öffnen sie den Mitarbeitenden via *Personal* und wählen im Feld *Manager* den Vorgesetzten aus. Die Visualisierung der Organisationsstruktur wird aktualisiert, sobald die Anpassung gespeichert ist.

## Private Adresse hinterlegen

Bestimmte Unterlagen wie die Lohnabrechnung werden an die private Adresse des Mitarbeiters versandt. Dafür gibt es ein entsprechendes Feld in der Mitarbeiter-Ansicht.

Erstellen sie eine private Adresse folgendermassen: *Personal > Mitarbeiter auswählen > Tab Private Information > Bearbeiten* und legen sie private Adresse im Feld *Adresse* fest.

## Arbeitspensum festlegen

Um das Arbeitspensum für einen Mitarbeiter zu ändern, öffnen sie das App *Personal* und wählen den Mitarbieter aus. Wählen sie *Bearbeiten* und legen sie im Tab *Arbeitsinformation* unter *Ausführungsplan* die *Arbeitsstunden* fest.

![](assets/Personal%20Arbeitsstunden.png)

## Arbeitspensum wechseln

::: tip
Heute ist es die Norm, dass Mitarbeiter unterhalb des Jahres ein Arbeitspensum reduzieren oder erhöhen können. Es muss sichergestellt werden, dass die Entlohnung, Feriensaldos und Überstunden entsprechend angepasst werden.
:::

Um das Pensum eines Mitarbeits zu wechseln, muss ein Endatum für die bestehenden Arbeitszeiten eingetragen werden und die neuen Arbeitszeiten werden im Arbeitspensum erfasst.

Erstellen sie eine neues Pensum *Personal > Mitarbeiter auswählen > Tab Arbeitsinformation > Ausführungsplan > Anlegen und Bearbeiten*. Definieren sie einen passenden Titel und legen sie bei den bestehenden Arbeitszeiten das Enddatum fest.

![](assets/Personal%20Arbeitszeiten%20mit%20Enddatum.png)

## Arbeitsvertrag hinzufügen

Die Entlohnung und Arbeitszeiten sind im Arbeitsvertrag festgehalten. Fügen sie den Mitarbeiter über *Personal > Mitarbeiter auswählen > Link Verträge* mit *Anlegen* einen Vertrag hinzu. Damit der Vertrag aktiv ist, müssen sie ihn in den Status *Laufend* verschieben.

## Mitarbeiteraustritt ausführen

Ein Mitarbeiteraustritt bedeutet für Odoo eine Archivierung des Mitarbeitenden in der *Personal* App. Wählen sie den/die Mitarbeitenden unter *Personal* aus und klicken auf *Aktion > Archiv*. Zusammenhängende Ressourcen zum Personaleintrag werden mit dier Aktion ebenfalls archiviert.