---
tags:
- HowTo
---

# Zeiterfassung
![icons_odoo_hr_timesheet](assets/icons_odoo_hr_timesheet.png)

Verfolgen Sie die Zeit, prognostizieren Sie die Produktivität.

* [Terminal Zeiterfassung](Terminal-Zeiterfassung.md)
* [Awesome Timesheet](Zeiterfassung-Awesome-Timesheet.md)

## Eintrag manuell erstellen

Damit ein Odoo Benutzer ein Zeiterfassungs-Eintrag machen kann, müssen die foglenden Bedingungen erfüllt sein:
* Dem Benutzer ist ein Mitarbeiter zugewiesen
* Der Benutzer hat Zugriff auf ein Projekt und auf eine Projektaufgabe

Zur manuellen Erfassung folgende Aktion ausführen *Zeiterfassung > + Anlegen*. Anschliessend die Beschreibung eingeben, Projekt wählen, Aufgabe wählen und die Zeitdauer eintragen.

## Verrechnungstyp anpassen

Jeder Zeiterfassungseintrag ist ein Verrechnungstyp zugeweisen. Dieser wird beim Erstellen des Eintrag abhängig von Konfiguration des Projekts und der Projektaufgabe festgelegt. In der Listenansicht des Stundenzettels kann nach dem Attribut *Abrechenbarer Typ* gruppiert werden. Falsche Einträge können so identifiziert werden.

Wenn sie den Abrechnungstyp von bestehenden Eintägen ändern möchten, müssen sie die verknüpfte Aufgaben ändern und wieder zuweisen.

![](assets/Zeiterfassung%20Verrechnungstyp%20%C3%A4ndern.gif)

## Stundenzettel validieren

Ist die Fakturierungsregel *Nur bestätigte Stundenzettel* aktiviert, müssen zur Verrechnung die Stundenzetter der Mitarbieter explizit validiert werden.

Der Stundenzettel-Manager des Mitarbeiters navigiert nach *Zeiterfassung > Zu Validieren* und wählt den entsprechenden Zeitraum aus. Mit *Bestätigen* wird ein Validierungsdatum festgelegt. Alle Zeitnachweise vor dem Validierungsdatum gelten als validiert.

![](assets/Zeiterfassung%20Validierungsdatum.png)