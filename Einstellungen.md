# Einstellungen
![icons_odoo_settings](assets/icons_odoo_settings.png)

## Entwicklermodus aktivieren

Navigieren nach *Einstellungen > Allgemeine Einstellungen > Entwickler Tools*.

Auf *Entwicklermodus aktivieren* klicken. Nun erscheinen neue Optionen in verschiedenen Odoo Apps. In der URL erscheint zusätzlich der Parameter `?debug=1`. Der Entwicklermodus kann auch über die manuelle Eingabe dieses Parameters aktiviert werden.

## Übersetzungen aktualisieren

Mit jeder Odoo Version und den dazugehörigen Modulen werden neue Übersetzungen hinzugefügt. Um die aktuellsten Übersetzungen zu erhalten müssen sie folgende Aktion ausführen: Öffnen sie *Einstellungen > Sprachen > Sprachen verwalten > Sprache auswählen* und klicken auf *Aktivieren und Übersetzen*. Bestätigen sie den Dialog.

## Fehlende Begriffe generieren

Damit Begriffe überesetzt werden können, muss als erstes die Liste, der zu übersetzenden Begriffe aktualisiert werden.  Im [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren) folgende Aktionen ausführen:

*Einstellungen > Übersetzungen > Fehlende Begriffe generieren*.

Dann kann man die Übersetzungen über die Einstellungen anzeigen.

## Übersetzungen erstellen

Odoo wird in viele Sprachen übersetzt, daher kann es sein, dass die Lokalisierung in der eingestellte Sprache unvollständig ist.

Findet man einen Begriff oder Satz, der nicht korrekt übersetzt ist, kann man diesen selbst anpassen. Dazu ein Beispiel.

Der folgende Ausschnitt ist aus einem Odoo-Dialog. Die Labels und Buttons sind nicht übersetzt.

![Odoo Übersetzung vorher](assets/Einstellungen%20%C3%9Cbersetzung%20vorher.png)

Als erstes muss man  die [Übersetzungen aktualisieren](#%C3%9Cbersetzungen%20aktualisieren). Anschliessend kann man in der Liste *Einstellungen > Übersetzungen > Übersetzte Begriffe* den englischen Begriff suchen und anpassen.

![Odoo Übersetzung bearbeiten](assets/Einstellungen%20%C3%9Cbersetzung%20bearbeiten.png)

Nun ist der Odoo-Dialog übersetzt.

![Odoo Übersetzung nachher](assets/Einstellungen%20%C3%9Cbersetzung%20nachher.png)

## Übersetzungen exportieren

Im Entwicklermodus öffnen sie den Export-Dialog via *Einstellungen > Übersetzungen > Import / Export > Übersetzung exportieren*. Wählen sie die zu exportierende Sprache, Datei-Format CSV und eine App deren Übersetzungen sie exportieren möchten. Drücken sie auf *Export* und laden die CSV-Datei herunter.

!> Organisieren sie die Übersetzung nach Apps

## Übersetzungen importieren

m Entwicklermodus öffnen sie den Import-Dialog via *Einstellungen > Übersetzungen > Import / Export > Übersetzung importieren*. Für die Sprache Deutsch (Schweiz) geben sie die folgenden Informationen ein:
* Sprache: de
* Code: CH
Laden sie die Datei mit Übersetzungen hoch und klicken auf *Import*.

## Tour deaktivieren

Aktivieren Sie den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren).

Klicken sie auf das Käfer-Symbol in der Menu-Leiste oben rechts. Wählen sie *Tour deaktivieren*.

## Benutzerrechte vergeben
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Navigieren sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen sie den Benutzer, dessen Zugriffsrechte sie verändern möchten. Drücken sie auf *Bearbeiten* und wählen sie nun über die Dropdown oder Checkboxen die Rollen und Zugriffe aus.

![Odoo Handbuch Benutzerrechte](assets/Einstellungen%20Handbuch%20Benutzerrechte.png)

Klicken Sie auf speichern um den Vorgang abzuschliessen.

!> Damit die neuen Rechte für den Benutzer sichtbar sind, muss dieser den Browser aktualisieren.

## Passwort zurücksetzen
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Navigieren sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen sie den Benutzer, dessen Passwort sie zurücksetzen möchten.
 
Wählen Sie *Aktion* und *Passwort ändern*. Geben sie im Feld *Neues Passwort* das neue Passwort ein.

## Kundenregistration erlauben

Damit Besucher der Website sich im Odoo-Portal registrieren könne muss die Option *Einstellungen > Allgemeine Einstellungen > Berechtigungen > Kundenkontro > Kostenlose Anmeldung* aktiviert sein.