---
title: Anwesenheiten
description: Mitarbeitende erfassen selbständig ihre Präsenzzeit.
tags:
- HowTo
prev: ./
---

# Anwesenheiten
![icons_odoo_hr_attendance](attachments/icons_odoo_hr_attendance.png)

{{ $frontmatter.description }}

## Bereiche

| Bereich                                                  | Beschreibung                             |
| -------------------------------------------------------- | ---------------------------------------- |
| [Anwesenheiten Aktionen](HR%20Attendance%20Actions.md)     | Aktionen für Anwesenheiten App einrichten. |
| [Anwesenheiten Überstunden](HR%20Attendance%20Overtime.md) | Überstundenmanagement ganz einfach.      |

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                                                       |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [HR Attendance Calendar View](HR%20Attendance%20Calendar%20View.md)                       | Kalenderansicht für Anwesenheiten.                                                 |
| [HR Attendance Delta](HR%20Attendance%20Delta.md)                                         | Berechnet Zeitspanne zwischen Anwesenheitseinträgen.                               |
| [HR Attendance IP Check](HR%20Attendance%20IP%20Check.md)                                 | IP-Prüfung bei Anmeldung der Anwesenheiten.                                        |
| [HR Attendance Kanban](HR%20Attendance%20Kanban.md)                                       | Ein- und Auschecken mit Kanban-Board.                                              |
| [HR Attendance Kiosk Mode Color](HR%20Attendance%20Kiosk%20Mode%20Color.md)               | An- und Abmelden bei Anwesenheit farblich markieren.                               |
| [HR Attendance Missing](HR%20Attendance%20Missing.md)                                     | Fehlende Anwesenheiten erstellen.                                                  |
| [HR Attendance Overtime Hours](HR%20Attendance%20Overtime%20Hours.md)                     | Geplante und gearbeitete Stunden auf Ansicht Überstunden anzeigen.                 |
| [HR Attendance Policy](HR%20Attendance%20Policy.md)                                       | Richtlinien für die Anwesenheiten festlegen.                                       |
| [HR Attendance User ACL](HR%20Attendance%20User%20ACL.md)                                 | Manuelle Erfassung der Anwesenheit für Gruppe Benutzer erlauben.                   |
| [HR Employee Attendance Report](HR%20Employee%20Attendance%20Report.md)                   | Stundenzettel mit Anwesenheit, Abwesenheiten und Überstunden.                      |
| [Theoretical vs Attended Time Analysis](Theoretical%20vs%20Attended%20Time%20Analysis.md) | Erstellen Sie Berichte zu den effektiv gearbeiteten und den theoretischen Stunden. |

## Beschreibung

::: tip
Odoo unterscheidet zwischen Anwesenheits- und Projektzeit. Die Zeiterfassung für Anwesenheit erfolgt mit der App Anwesenheiten. Für das Erfassen der Projektzeit nutzt man die App Zeiterfassung.
:::

![](attachments/Anwesenheiten%20An-%20und%20Abmelden.png)

## Konfiguration

### Ausweis ID hinterlegen

Für jeden Mitarbeitenden kann eine Ausweis ID hinterlegt werden. Navigieren Sie dazu nach *Personal > Mitarbeitende auswählen > Tab HR Einstellungen*. Geben Sie im Feld *Ausweis ID* die gewünschte Nummer ein oder wählen Sie *Erzeugen.*

![](attachments/Anwesenheiten%20Ausweis%20ID.png)

::: warning
Die Ausweis ID ist ist für die Anmeldung im Kioskmodus relevant.
:::

### PIN Code für Anmeldung festlegen

Wenn Sie die Anmeldung der Anwesenheit mit einem PIN Code validieren möchten, können Sie diesen auf den Mitarbeitenden hinterlegen. Navigieren Sie dazu nach *Personal > Mitarbeitende auswählen > Tab HR Einstellungen*. Geben Sie den PIN im Feld *PIN Code* ein.

![](attachments/Anwesenheiten%20PIN%20Code.png)

::: warning
Der PIN Code wird bei der Anmeldung über den Kioskmodus abgefragt.
:::

### Anwesenheitskontrolle konfigurieren

Navigieren Sie nach *Einstellungen > Personal > Personal*. Bei Feld *Anwesenheitskontrolle* können Sie die Optionen zur Erfassung der Anwesenheit ein- und ausschalten.

## Verwaltung

### Kioskmodus starten

Starten Sie den Kioskmodus von Odoo über *Anwesenheiten > Kioskmodus*.

![](attachments/Anwesenheiten%20Kioskmodus.png)

Mitarbeitende können nun ohne Odoo-Benutzer die Anwesenheit registrieren.

::: warning
Stellen Sie sicher, dass der verwendete Benutzer für den Kioskmodus eingeschränkte Berechtigungen hat.
:::

### Anwesenheit anmelden

Gilt ab #odoo18:

Klicken Sie oben rechts im Benutzer-Menü auf den roten Punkt. Wählen Sie *Anmelden*.

![](attachments/Anwesenheiten%20Anmelden.png)

Gilt bis #Odoo17:

Navigieren Sie nach *Anwesenheiten > An- und Abmelden* und klicken Sie auf den Knopf *Anmelden*.

![](attachments/Anwesenheiten%20Anmeldung.png)

Es erscheint ein Willkommensgruss mit Angabe der Uhrzeit.

![](attachments/Anwesenheiten%20Bestätigung%20Anmeldung.png)

### Anwesenheit abmelden

Gilt ab #odoo18:

Klicken Sie oben rechts im Benutzer-Menü auf den grünen Punkt. Wählen Sie *Abmelden*.

![](attachments/Anwesenheiten%20Abmelden.png)

Gilt bis #Odoo17:

Navigieren Sie nach *Anwesenheiten > An- und Abmelden* und klicken Sie auf den Knopf *Abmelden*.

![](attachments/Anwesenheiten%20Abmeldung.png)

Es erscheint eine Verabschiedung mit Angabe der geleisteten Arbeitszeit.

![](attachments/Anwesenheiten%20Bestätigung%20Abmeldung.png)

### Anwesenheit manuell erfassen

Gilt bis #Odoo17:

Wenn die manuelle Erfassung der Anwesenheit erlaubt ist, navigieren Sie nach *Anwesenheiten > Anweseheiten* und erstellen einen neuen Eintrag. Wählen Sie bei *Anmeldung* das Startdatum mit Uhrzeit und bei Abmeldung das Enddatum mit Uhrzeit. 

## Berechtigungen

### Manuelle Erfassung Anwesenheit erlauben

Die Berechtigung zur Bearbeitung der Anwesenheits-Einträge wird über die Fenster-Aktion gesteuert. Nun gibt es eine gleichnamige Fensteraktion für Awesenheiten-Benutzer und -Administratoren. Navigieren Sie nach *Einstellungen > Technisch > Menüpunkte* und suchen Sie nach *Anwesenheiten*. Öffnen Sie den ersten Eintrag und wählen Sie im Feld *Aktion* den ersten Eintrag *Anwesenheiten* aus.

![](attachments/HR%20Attendance%20Aktionen%20Awesenheiten.png)

Nun wird für Benutzer- und Administratoren die gleiche Aktion aufgerufen und die gleiche Ansicht angzeigt.

Gilt bis #Odoo15:

Damit Mitarbeitende ihre Anwesenheit manuell erfassen können Navigieren Sie nach *Einstellungen > Technisch > Ansichten* und zeigen die Ansicht *hr.attendance.tree.inherit* an. Im Tab *Zugriffsrechte* fügen Sie die Gruppe *Anwesenheiten / Manuelle Anwesenheit* hinzu.

### Löschen von Anwesenheiten erlauben

Damit Mitarbeitende ihre erfassten Anwesenheiten löschen können, müssen Sie die Zugriffsrechte für die Gruppe *Anwesenheit /  Bentuzer* anpassen. Führen Sie [Datensatzregeln für Gruppe anpassen](Settings%20Permissions.md#Datensatzregeln%20für%20Gruppe%20anpassen) aus und erlauben Sie das Löschen der Einträge.

Zusätzlich müssen Sie auf den Zugriffsrechten *hr.attendance.system.user* das Löschen erlauben. 

## Auswertung

### Anwesenheiten anzeigen

Der kürzeste Weg zur Anzeige der rapportierten Arbeitszeit führt über *Mein Profil*.
Navigieren Sie zum Knopf mit ihrem Namen auf dem Bildschirm oben rechts.
Dort wählen Sie *Vorname Nachname > Mein Profil*. Es erscheint die folgende Maske:

![](attachments/Anwesenheiten%20Zeitrapport.png)

Ein Klick auf den Smart-Link *XX.XX Stunden* zeigt eine Tabelle mit den Details.

![](attachments/Anwesenheiten%20Zeitrapport%20Detail.png)

Ausführlichere Informationen bietet das Berichtswesen in der App Zeiterfassung.
Navigieren Sie nach *Zeiterfassung > Berichtswesen* und wählen Sie das Menü *Zeiterfassung / Anwesenheit*.

![Zeiterfassung Anwesenheitsbericht](attachments/Zeiterfassung%20Anwesenheitsbericht.png)

Mit dem Knopf *Werte* können Spalten ein- und ausgeblendet werden.

::: tip
Das detaillierte Protokoll der An- und Abmeldungen zeigt die Übersicht *Anwesenheiten > Anwesenheiten*. (Die Berechtigung Personalsachbearbeiter ist notwendig.)
:::

### Anwesenheiten bearbeiten

Gilt ab #odoo18:

Klicken Sie auf die App *Anwesenheiten* und anschliessend auf einen Eintrag. Setzen Sie die Genehmigung des Eintrags zurück indem Sie auf das Statusfeld *Zu gengemigen* klicken. Bearbeiten Sie den Eintrag und bestätigen Sie die Eingaben mit einem Klick auf *Genehmigen*.

Gilt bis #Odoo17:

Mitarbeiteende können standardmässig ihre Anwesenheiten korrigieren. Dazu navigieren Sie über das Menu oben-rechts nach *Vorname Nachname > Mein Profil > Smart-Link XX.XX Stunden*. Hier werden die An- und Abmeldungen aufgelistet.

Um einen Eintrag zu bearbeiten, klick man entweder auf *Einchecken* oder *Abmeldung*.

![](attachments/Anwesenheiten%20bearbeiten.png)

### Zeitüberschreitungen filtern

Wenn Sie wissen möchten, welche Mitarbeitenden nicht korrekt ausgestempelt oder zu viel Zeit gestempelt haben, können Sie die Einträge via *Anwesenheiten > Anwesenheiten* filtern. Erstellen Sie einen Filter für das Feld *Arbeitsstunden*:

![](attachments/Anwesenheiten%20Arbeitsstunden%20filtern.png)

Natürlich können Sie die Auswertung auf ihrem Dashboard hinzufügen und sehen so, ob eine Fehlbuchung entstanden ist.

![](attachments/Anwesenheiten%20Dashboard.png)
