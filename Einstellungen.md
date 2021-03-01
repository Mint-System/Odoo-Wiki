# Einstellungen
![icons_odoo_settings](assets/icons_odoo_settings.png)

* [Einstellungen-Übersetzung](Einstellungen-%C3%9Cbersetzung.md)
* [Einstellungen-Login](Einstellungen-Login.md)

## Entwicklermodus aktivieren

Navigieren nach *Einstellungen > Allgemeine Einstellungen > Entwickler Tools*.

Auf *Entwicklermodus aktivieren* klicken. Nun erscheinen neue Optionen in verschiedenen Odoo Apps. In der URL erscheint zusätzlich der Parameter `?debug=1`. Der Entwicklermodus kann auch über die manuelle Eingabe dieses Parameters aktiviert werden.

## Tour deaktivieren

Aktivieren Sie den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren).

Klicken sie auf das Käfer-Symbol in der Menu-Leiste oben rechts. Wählen sie *Tour deaktivieren*.

## Benutzerrechte vergeben
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Navigieren sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen sie den Benutzer, dessen Zugriffsrechte sie verändern möchten. Drücken sie auf *Bearbeiten* und wählen sie nun über die Dropdown oder Checkboxen die Rollen und Zugriffe aus.

![Odoo Handbuch Benutzerrechte](assets/Einstellungen%20Handbuch%20Benutzerrechte.png)

Klicken Sie auf speichern um den Vorgang abzuschliessen.

::: warning
Damit die neuen Rechte für den Benutzer sichtbar sind, muss dieser den Browser aktualisieren.
:::

## Passwort zurücksetzen
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Navigieren sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen sie den Benutzer, dessen Passwort sie zurücksetzen möchten.
 
Wählen Sie *Aktion* und *Passwort ändern*. Geben sie im Feld *Neues Passwort* das neue Passwort ein.

## Kundenregistration erlauben

Damit Besucher der Website sich im Odoo-Portal registrieren könne muss die Option *Einstellungen > Allgemeine Einstellungen > Berechtigungen > Kundenkontro > Kostenlose Anmeldung* aktiviert sein.

## Dokumentlayout konfigurieren

Die Darstellung der generierten Dokumente kann einfach angepasst werden. Navigieren sie nach *Einstellungen > Allgemeine Einstellungen > Geschäftsunterlagen* und wählen sie *Dokumentlayout konfigurieren* aus. Die hier ausgewählte Dokumentvorlage wird für alle Berichte übernommen.

## Rollen erstellen

::: warning
Diese Anleitung erfordert das Modul `base_user_role`.
:::

Die Gruppenrechte können mit Benutzerrollen zusammengefasst werden. Mit der entsprechenden Erweiterung kann man Rollen erstellen, Gruppen hinzufügen und diese für einen Benutzer aktivieren.

Navigieren sie nach *Einstellungen > Benutzer und Unternehmen > Roles* und wählen sie *Anlegen*. Erstellen zur Initieirung eine Administratoren-Rolle mit diesen Angaben:

![](assets/Odoo%20Einstellungen%20Benutzerrolle%20Administrator.png)

Weisen sie im Tab *Benutzer* die Rolle einem Benutzer zu. Ist die Rolle aktiv, überschreibt sie die existierenden Berechtigungen.

## Papieformat für Bericht anpassen

#FIXME
  
Angenommen

Papierformat "European A4 without borders" duplizieren und als "A4 for isr report".  

Paierformat anpassen -> Linker Rand (mm)5.00  

Im Entwicklermodus nach Berichte suchen -> ISR auswählen und Papieformat festlegen.

## Bezeichnung Umsatzsteuer festlegen

Wenn keine Bezeichnung für die Umsatzsteuer festgelegt ist, verwendet Odoo *Tax ID*. Das ist beispielsweise im Footer eines Dokuments ersichtlich.

Wenn sie die Bezeichnung ändern wollen, gehen sie folgt vor. Öffnen sie die Ansicht *Kontakte > Konfiguration > Lokalisierung > Länder* und wählen sie ihr Land aus. Nun können sie die Bezeichnung im Feld *USt.-Bezeichnung* festlegen.

![](assets/Einstellung%20Bezeichnung%20Umsatzsteuer.png)