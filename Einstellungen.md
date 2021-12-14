---
tags:
- HowTo
---
[🔗 Home](/)
# Einstellungen
![icons_odoo_settings](assets/icons_odoo_settings.png)

Odoo-Einstellungen aktivieren und konfigurieren.

| Bereich                                                        | Beschreibung                                          |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| [Einstellungen Übersetzung](Einstellungen%20Übersetzung.md) | Einstellungen zu Sprachpakete und Übersetzungen.      |
| [Einstellungen Login](Einstellungen%20Login.md)                  | Odoo-Einstellungen zum Benutzer und Anmeldeverfahren. |
| [Einstellungen Integration](Einstellungen%20Integration.md)                                  | Odoo mit Plattformen von Dritten integrieren.         |

| Erweiterung                                           | Beschreibung                                   |
| ----------------------------------------------------- | ---------------------------------------------- |
| [Web Responsive](Web%20Responsive.md)                 | Responsive Anzeige der Odoo-Oberfläche.        |
| [Impersonate](Impersonate.md)                         | Schnelles Wechseln zwischen Benutzer-Accounts. |
| [Home Background Image](Home%20Background%20Image.md) | Den Odoo-Startbildschirm gestalten.            |
| [Show DB Name](Show%20DB%20Name.md)                   | Zeigt den Datenbanknamen oben rechts an.       |

## Entwicklermodus aktivieren

Navigieren nach *Einstellungen > Allgemeine Einstellungen > Entwickler Tools*.

Auf *Entwicklermodus aktivieren* klicken. Nun erscheinen neue Optionen in verschiedenen Odoo Apps. In der URL erscheint zusätzlich der Parameter `?debug=1`. Der Entwicklermodus kann auch über die manuelle Eingabe dieses Parameters aktiviert werden.

Eine weitere Möglickeit ist die Installation einer Browser Erweiterung. Installieren sie über die Funktion *Erweiterungen* in der Einstellung ihres Browsers die Funktion *Odoo Debug*. Anschliessend erscheint das folgende Icon in der Toolbar. ![Einstellungen Odoo Debug](assets/Einstellungen%20Odoo%20Debug.png)

Mit einem Mausklick können sie damit den Entwicklermodus ein- und ausschalten.

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

![](assets/Einstellungen%20Dokumentlayout.png)

## Rollen erstellen

::: warning
Diese Anleitung erfordert das Modul `base_user_role`.
:::

Die Gruppenrechte können mit Benutzerrollen zusammengefasst werden. Mit der entsprechenden Erweiterung kann man Rollen erstellen, Gruppen hinzufügen und diese für einen Benutzer aktivieren.

Navigieren sie nach *Einstellungen > Benutzer und Unternehmen > Roles* und wählen sie *Anlegen*. Erstellen zur Initieirung eine Administratoren-Rolle mit diesen Angaben:

![](assets/Odoo%20Einstellungen%20Benutzerrolle%20Administrator.png)

Weisen sie im Tab *Benutzer* die Rolle einem Benutzer zu. Ist die Rolle aktiv, überschreibt sie die existierenden Berechtigungen.

## Papierformat für Bericht anpassen

Angenommen sie möchten das Papieformat für den ISR-Einzahlungsschein ändern, öffnen sie im Entwicklermodus *Einstellungen > Technisch > Berichtswesen > Papierformat.*

Duplizieren sie das Papierformat *European A4 without borders* als *European A4 for ISR Report*.

Passen sie das Papierformat an, beispielsweise mit *Linker Rand (mm)* `5.00`.

Im Entwicklermodus öffnen sie *Einstellungen > Technisch > Berichtswesen > Berichte*, wählen den Bericht *ISR* und legen sie das neue Papieformat fest.

## Berechtigungen zurücksetzen

Bei einem Modul- oder Odoo-Upgrade können sich die Berechtigungsstrukturen ändern. Falls sich diese nicht korrekt verhalten, kann man die Berechtigungen zurücksetzen. Als Anwendungsfall nehmen wir die Berechtigungen für [Anwesenheitszeiten](Anwesenheitszeiten.md).

Eine Fehlerhafte Struktur wird in der Ansicht Benutzerberechtiung beispielsweise so darsgestellt:

![](assets/Einstellungen%20fehlerhafte%20Berechtigungsstruktur.png)

Zur Bereinigung öffnen sie als erstes *Einstellungen > Technisch > Sicherheit > Zugriffsrechte*. Suchen sie hier nach Einträgen mit Modul `hr_attendance` und löschen sie diese.

Als nächstes öffnen sie *Einstellungen > Benutzer und Unternehmen > Gruppen* und  suchen nach *Anwesenheit*. Öffnen sie jede Gruppe  entfernen sie im Tab *Benutzer* und *Reche für Daten* alle Einträge.

Zuletzt installiere sie die App `hr_attendance` neu. Nun sollten die Ursprünglichen Berechtigungsstrukturen wiederhergestellt sein.

![](assets/Einstellungen%20Berechtigungen%20korrigiert.png)

## Standardwerte setzen

Für jedes Geschäftsobjekt können sie Standardwerte mit Bedingungen festlegen. Öffnen sie im Entwicklermodus ein Objekt, beispielsweise ein Angbot und legen sie für ein Feld einen neuen Wert fest. Bevor sie das Angebot speichern, navigieren sie zum Entwicklermenu und wählen *Standardwert setzen*. Im Dialog wählen sie das Feld und den Wert sowie die passende Bedingung. Wenn sie den Standardwert gespeichert haben, wir dieser bei der Erstellung eines neuen Geschäftsobjekts angwendet.

![Einstellungen Standardwerte festlegen](assets/Einstellungen%20Standardwerte%20festlegen.gif)

## Datumsformat ändern

Für jede installierte Sprache kann das angezeigte Datumsformat überschrieben werden. Öffnen sie das Sprachpaket via *Einstellungen > Allgemeine Einstellungen > Sprachen > Sprachen verwalten*. Bearbeiten sie das Feld *Datumsformat* und geben sie dort `%d.%m.%Y` ein.

![](assets/Einstellung%20Datumsformat.png)

## Odoo-Datenbank verlängern

Wenn eine Datenbank abgelaufen ist, erscheine eine entsprechende Meldung. Diese ist aber nur symbolisch, mit der richtigen URL können sie in den *Systemparameter* von Odoo das Ablaufdatum der Datenbank verlängern. Am einfachsten ist es, wenn das Testsystem und das produktive System unter einer ähnlichen URL erreichbar sind.

![Einstellungen Odoo-Datenbank verlängern](assets/Einstellungen%20Odoo-Datenbank%20verlängern.gif)

## Sequenz anpassen

Um die Nummerierung einer Sequenz anzupassen, öffnen sie *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Sequenzen*. Wählen sie die Sequenz aus und setzen die beispielsweise das Feld *Nächste Nummer zuweisen*.

## Neues Papierformat einrichten

Navigieren sie nach *Einstellungen > Technisch > Berichtswesen > Papieformat*. Wir nehmen an, es braucht ein neues Papieformat für einen Etikettendrucker. Erstellen sie einen neuen Eintrag:

![](assets/Neues%20Papierformat.png)

::: tip
Für einen exakten Druck, müssen sie die Seitengrösse in Inche und Milimeter kennen
:::