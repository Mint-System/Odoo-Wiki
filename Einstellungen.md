---
tags:
- HowTo
prev: ./
---
# Einstellungen
![icons_odoo_settings](assets/icons_odoo_settings.png)

Odoo-Einstellungen aktivieren und konfigurieren.

## Bereiche

| Bereich                                                             | Beschreibung                                          |
| ------------------------------------------------------------------- | ----------------------------------------------------- |
| [Einstellungen Aktionen](Einstellungen%20Aktionen.md)               | Odoo-Einstellungen automatisieren.                    |
| [Einstellungen Berechtigungen](Einstellungen%20Berechtigungen.md)   | Einstellungen zur Zugriffsrechte und Gruppen.         |
| [Einstellungen Datenmanagement](Einstellungen%20Datenmanagement.md) | Daten zu Einstellungen exportieren und importieren.   |
| [Einstellungen E-Mail](Einstellungen%20E-Mail.md)                   | Odoo mit Plattformen von Dritten integrieren.         |
| [Einstellungen Login](Einstellungen%20Login.md)                     | Odoo-Einstellungen zum Benutzer und Anmeldeverfahren. |
| [Einstellungen Technisch](Einstellungen%20Technisch.md)             | Technische Einstellungen zur Odoo-Datenbank.          |
| [Einstellungen Übersetzung](Einstellungen%20Übersetzung.md)         | Einstellungen zu Sprachpakete und Übersetzungen.      |
| [[Einstellungen OAuth]]                                                                    |                                                       |

## Erweiterungen

| Erweiterung                                           | Beschreibung                                                         |
| ----------------------------------------------------- | -------------------------------------------------------------------- |
| [Auth OAuth Keycloak](Auth%20OAuth%20Keycloak)        | Ermöglich Keycloak Integration mit Odoo OAuth.                       |
| [Home Background Image](Home%20Background%20Image.md) | Den Odoo-Startbildschirm gestalten.                                  |
| [Impersonate](Impersonate.md)                         | Schnelles Wechseln zwischen Benutzer-Accounts.                       |
| [Show DB Name](Show%20DB%20Name.md)                   | Zeigt den Datenbanknamen oben rechts an.                             |
| [Web Editor Show Code](Web%20Editor%20Show%20Code.md) | Aktion "Code anzeigen" im HTML-Editor ohne Entwicklermodus anzeigen. |
| [Web Responsive](Web%20Responsive.md)                 | Responsive Anzeige der Odoo-Oberfläche.                              |

## Entwicklermodus aktivieren

Navigieren nach *Einstellungen > Allgemeine Einstellungen > Entwicklertools*.

Auf *Entwicklermodus aktivieren* klicken. Nun erscheinen neue Optionen in verschiedenen Odoo Apps. In der URL erscheint zusätzlich der Parameter `?debug=1`. Der Entwicklermodus kann auch über die manuelle Eingabe dieses Parameters aktiviert werden.

Eine weitere Möglickeit ist die Installation der Browser-Addon [Odoo Debug](https://www.droggol.com/odoo-tools). Installieren Sie deses Addon in ihrem Browser. Anschliessend erscheint das folgende Icon in der Toolbar:

![Einstellungen Odoo Debug](assets/Einstellungen%20Odoo%20Debug.png)

Mit einem Mausklick können Sie damit den Entwicklermodus ein- und ausschalten.

## Superuser werden

Aktivieren Sie den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren).

Klicken Sie *Entwicklertools > Superuser werden*. Das Layout von Odoo ändert sich, Sie sind nun Superuser. Um zum normalen Benutzer zu wechseln, müssen Sie sich abmelden.

::: warning
Im Superuser-Modus werden alle Berechtigungen ignoriert. Das System kann unabsichtlich in einen inkonsistenten Zustand gebracht werden.
:::

## Tour deaktivieren

Aktivieren Sie den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren).

Klicken Sie auf das Käfer-Symbol in der Menu-Leiste oben rechts. Wählen Sie *Tour deaktivieren*.

## Benutzerrechte vergeben
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen Sie den Benutzer, dessen Zugriffsrechte Sie verändern möchten. Drücken Sie auf *Bearbeiten* und wählen Sie nun über die Dropdown oder Checkboxen die Rollen und Zugriffe aus.

![Odoo Benutzerrechte](assets/Einstellungen%20Benutzerrechte.png)

Klicken Sie auf speichern um den Vorgang abzuschliessen.

::: warning
Damit die neuen Rechte für den Benutzer sichtbar sind, muss dieser den Browser aktualisieren.
:::

## Passwort zurücksetzen
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Benutzer* und klicken auf *Benutzer verwalten*. Wählen Sie den Benutzer, dessen Passwort Sie zurücksetzen möchten.
 
Wählen Sie *Aktion* und *Passwort ändern*. Geben Sie im Feld *Neues Passwort* das neue Passwort ein.

## Kundenregistration erlauben

Damit Besucher der Website sich im Odoo-Portal registrieren könne muss die Option *Einstellungen > Allgemeine Einstellungen > Berechtigungen > Kundenkontro > Kostenlose Anmeldung* aktiviert sein.

## Dokumentlayout konfigurieren

Die Darstellung der generierten Dokumente kann einfach angepasst werden. Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Geschäftsunterlagen* und wählen Sie *Dokumentlayout konfigurieren* aus. Die hier ausgewählte Dokumentvorlage wird für alle Berichte übernommen.

![](assets/Einstellungen%20Dokumentlayout.png)

## Rollen erstellen

::: warning
Diese Anleitung erfordert das Modul `base_user_role`.
:::

Die Gruppenrechte können mit Benutzerrollen zusammengefasst werden. Mit der entsprechenden Erweiterung kann man Rollen erstellen, Gruppen hinzufügen und diese für einen Benutzer aktivieren.

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Roles* und wählen Sie *Anlegen*. Erstellen zur Initieirung eine Administratoren-Rolle mit diesen Angaben:

![](assets/Odoo%20Einstellungen%20Benutzerrolle%20Administrator.png)

Weisen Sie im Tab *Benutzer* die Rolle einem Benutzer zu. Ist die Rolle aktiv, überschreibt Sie die existierenden Berechtigungen.

## Papierformat für Bericht anpassen

Angenommen Sie möchten das Papieformat für den ISR-Einzahlungsschein ändern, öffnen Sie im Entwicklermodus *Einstellungen > Technisch > Berichtswesen > Papierformat.*

Duplizieren Sie das Papierformat *European A4 without borders* als *European A4 for ISR Report*.

Passen Sie das Papierformat an, beispielsweise mit *Linker Rand (mm)* `5.00`.

Im Entwicklermodus öffnen Sie *Einstellungen > Technisch > Berichtswesen > Berichte*, wählen den Bericht *ISR* und legen Sie das neue Papieformat fest.

## Berechtigungen zurücksetzen

Bei einem Modul- oder Odoo-Upgrade können sich die Berechtigungsstrukturen ändern. Falls sich diese nicht korrekt verhalten, kann man die Berechtigungen zurücksetzen. Als Anwendungsfall nehmen wir die Berechtigungen für [Anwesenheitszeiten](Anwesenheitszeiten.md).

Eine Fehlerhafte Struktur wird in der Ansicht Benutzerberechtiung beispielsweise so darsgestellt:

![](assets/Einstellungen%20fehlerhafte%20Berechtigungsstruktur.png)

Zur Bereinigung öffnen Sie als erstes *Einstellungen > Technisch > Sicherheit > Zugriffsrechte*. Suchen Sie hier nach Einträgen mit Modul `hr_attendance` und löschen Sie diese.

Als nächstes öffnen Sie *Einstellungen > Benutzer und Unternehmen > Gruppen* und  suchen nach *Anwesenheit*. Öffnen Sie jede Gruppe  entfernen Sie im Tab *Benutzer* und *Reche für Daten* alle Einträge.

Zuletzt installiere Sie die App `hr_attendance` neu. Nun sollten die Ursprünglichen Berechtigungsstrukturen wiederhergestellt sein.

![](assets/Einstellungen%20Berechtigungen%20korrigiert.png)

## Standardwerte setzen

Für jedes Geschäftsobjekt können Sie Standardwerte mit Bedingungen festlegen. Öffnen Sie im Entwicklermodus ein Objekt, beispielsweise ein Angbot und legen Sie für ein Feld einen neuen Wert fest. Bevor Sie das Angebot speichern, navigieren Sie zum Entwicklermenu und wählen *Standardwert setzen*. Im Dialog wählen Sie das Feld und den Wert sowie die passende Bedingung. Wenn Sie den Standardwert gespeichert haben, wir dieser bei der Erstellung eines neuen Geschäftsobjekts angwendet.

![Einstellungen Standardwerte festlegen](assets/Einstellungen%20Standardwerte%20festlegen.gif)

## Datumsformat ändern

Für jede installierte Sprache kann das angezeigte Datumsformat überschrieben werden. Öffnen Sie das Sprachpaket via *Einstellungen > Allgemeine Einstellungen > Sprachen > Sprachen verwalten*. Bearbeiten Sie das Feld *Datumsformat* und geben Sie dort `%d.%m.%Y` ein.

![](assets/Einstellung%20Datumsformat.png)

## Odoo-Datenbank verlängern

Wenn eine Datenbank abgelaufen ist, erscheine eine entsprechende Meldung. Diese ist aber nur symbolisch, mit der richtigen URL können Sie in den *Systemparameter* von Odoo das Ablaufdatum der Datenbank verlängern. Am einfachsten ist es, wenn das Testsystem und das produktive System unter einer ähnlichen URL erreichbar sind.

![Einstellungen Odoo-Datenbank verlängern](assets/Einstellungen%20Odoo-Datenbank%20verlängern.gif)

## Sequenz anpassen

Um die Nummerierung einer Sequenz anzupassen, öffnen Sie *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Sequenzen*. Wählen Sie die Sequenz aus und setzen die beispielsweise das Feld *Nächste Nummer zuweisen*.

## Neues Papierformat einrichten

Navigieren Sie nach *Einstellungen > Technisch > Berichtswesen > Papieformat*. Wir nehmen an, es braucht ein neues Papieformat für einen Etikettendrucker. Erstellen Sie einen neuen Eintrag:

![](assets/Neues%20Papierformat.png)

::: tip
Für einen exakten Druck, müssen Sie die Seitengrösse in Inch und Milimeter kennen
:::
