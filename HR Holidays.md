---
title: Abwesenheit
description: Verwaltung von Mitarbeiterurlauben & Abwesenheit.
tags:
- HowTo
prev: ./
---

# Abwesenheit
![icons_odoo_hr_holidays](attachments/icons_odoo_hr_holidays.png)

{{ $frontmatter.description }}

Wesite: <https://www.odoo.com/de_DE/app/time-off>

## Bereiche

| Bereich                                                         | Beschreibung                                      |
| --------------------------------------------------------------- | ------------------------------------------------- |
| [Abwesenheit Aktionen](HR%20Holidays%20Actions.md)               | Aktionen für Abwesenheit App einrichten.          |
| [Abwesenheit Datenmanagement](HR%20Holidays%20Data%20Management.md) | Daten zu Abwesenheit exportieren und importieren. |

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                                                         |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [HR Attendance Overtime Negative Hours](HR%20Attendance%20Overtime%20Negative%20Hours.md) | Anzeige negative Überstunden auf Dashboard Abwesenheit.                              |
| [HR Holidays .ics Attachment](HR%20Holidays%20ics%20Attachment.md)                        | An Meldung zur Genehmigung einer Abwesenheit .ics-Datei anhängen.                    |
| [HR Holidays Calendar Department](HR%20Holidays%20Calendar%20Department.md)               | Erweitert den Anwesenheitsbericht mit neuen Felder.                                  |
| [HR Holidays Leave Archive](HR%20Holidays%20Leave%20Archive.md)                           | Archivierungsfunktion für Abwesenheitseinträge aktivieren.                           |
| [HR Holidays Leave Repeated](HR%20Holidays%20Leave%20Repeated.md)                         | Wiederkehrende Abwesenheitseinträge erstellen.                                       |
| [HR Holidays Public](HR%20Holidays%20Public.md)                                           | Erstellen Sie einen Feiertagskalender, der in der Abwesenheiten berücksichtigt wird. |
| [HR Holidays Remaining Leaves](HR%20Holidays%20Remaining%20Leaves.md)                     | Verbleibende Urlaubsansprüche der Mitarbeitenden anzeigen.                           |
| [HR Leave Custom Hour Interval](HR%20Leave%20Custom%20Hour%20Interval.md)                 | Start- und End-Zeit für Abwesenheiten eintragen.                                     |
| [Theoretical vs Attended Time Analysis](Theoretical%20vs%20Attended%20Time%20Analysis.md) | Erstellen Sie Berichte zu den effektiv gearbeiteten und den theoretischen Stunden.   |

## Dashboard

###  Verfügbare Urlaubsansprüche anzeigen

Öffnen Sie die App *Abwesenheit*. Auf dem Dashboard werden oberhalb des Kalender die verbleibenden Urlaubsansprüche angezeigt.

![](attachments/Abwesenheit%20Dashboard.png)

::: warning
Die verfügbaren Überstunden werden nur angezeigt, wenn der Wert positiv ist.
:::

## Konfiguration

### Abwesenheitstyp erfassen

Jede Abwesenheit und Urlaubsanspruch wird einem Abwesenheitstyp zugeordnet. Damit Sie jährliche Feriensaldis korrekt erfassen, müssen Sie für jedes Jahr einen Abwesenheitstyp erfassen. Navigieren Sie nach *Abwesenheiten > Konfiguration > Abwesenheitstypen* und duplizieren Sie einen bestehenden Typ. Legen Sie diese Werte fest:

* **Name**: Anzeigenamen des Abwesenheitstyp.
* **Abwesenheitsanträge Genehmigung**: Bestimmen Sie ob die Abwesenheitseinträge genehmigt werden muss.
* **Einheit der Abwesenheit**: Wählen Sie hier Stunden, Halbtage oder Tage als Einheit.
* **Zusätzliche Stunden abziehen**: Wenn die Abwesenheit nicht als Arbeitszeit gerechnet werden soll, aktivieren Sie diese Option.
* **Erfordert Zuweisung**: Bestimmen Sie ob der Urlaubsanspruch genehmigt werden muss.
* **Urlaubsanspruch Genehmigung**: Bestimmen Sie wie der Urlaubsanspruch genehmigt wird.

### Abwesenheitstyp konfigurieren

Navigieren Sie nach *Abwesenheiten > Konfiguration > Abwesenheitstypen*. Wählen Sie hier den Abwesenheitstyp aus und bearbeiten Sie diesen gemäss den Anforderungen.

### Einheit für Abwesenheitstyp festlegen

Navigieren Sie nach *Abwesenheiten > Konfiguration > Abwesenheitstypen*. Wählen Sie hier den Abwesenheitstyp aus. Im Feld *Einheit der Abwesenheit* können Sie wählen, ob der Typ in Stunden, Halbtage oder Tagen dargestellt wird.

::: tip
Odoo rechnet intern immer in Stunden. Diese Option legt die Darstellung der verbleibenden Ansprüche fest.
:::

### Verworfene Abwesenheiten auf Dashboard ausblenden

Auf der Dashboard-Ansicht von *Abwesenheiten* werden alle Abwesenheiten unabhängig ihres Status angezeigt. Um Abwesenheiten im Zustand *Verworfen* auszublenden, wählen Sie *Entwicklertools > Aktion bearbeiten*. Überschreiben Sie das Feld *Wertebereich* mit dem Wert `[('user_id', '=', uid),('state', 'not in', ['refuse'])]`. Laden Sie den Browser-Tab neu.

::: warning
Diese Anpassung geht bei der Aktualisierung oder Neuinstallation des Abwesenheits-Moduls verloren.
:::

### Feiertage festlegen

Für jeden Arbeitszeiteintrag können Sie Feiertage festlegen. Navigieren Sie nach *Abwesenheit > Konfiguration > Gesetzliche Feiertage*. Erstellen Sie hier einen neuen Eintrag für jeden Feiertag und jedes Arbeitspensum.

![](attachments/Abwesenheit%20Feiertage.png)

::: warning
Stellen Sie sicher, dass zwischen Start- und Endatum die effektive Anzahl Stunden/Tage dazwischen liegt.
:::

## Vorgänge

### Urlaubsanspruch melden

Damit Sie Anspruch auf Abwesenheit haben, müssen Sie diesen Anspruch geltend machen. Öffnen Sie die App *Abwesenheitszeiten* und wählen Sie *Neuer Urlaubsanspruch*. Wählen Sie den Typ, die Anzahl Tage und fügen Sie eine Beschreibung hinzu.

![](attachments/Abwesenheitszeiten%20Anspruch%20melden.png)

Schliessen Sie den Dialog nach *Speichern*.

### Urlaubsanspruch validieren

Wenn Sie eine Mail zur Validierung eines Urlaubsanspruches erhalten, können Sie direkt auf den Link klicken.

![](attachments/Abwesenheitszeiten%20Anspruch%20Mail.png)

Urlaubsansprüche zur Validierung werden auch über Odoo-Aktivitäten angezeigt.

![](attachments/Abwesenheitszeiten%20Aktivität.png)

Klicken Sie auf *Genehmigen* oder *Ablehnen* um den Urlaubsanspruch zu validieren.

Mitarbeitende erhalten nach der Validierung eine entsprechende Mail.

![](attachments/Abwesenheitszeiten%20Mail%20Validierung.png)

::: tip
Odoo versendet keine Nachrichten, wenn die Genehmigung alls Massenbearbeitung erfolgt.
:::

### Urlaubsanspruch anpassen

Wenn Sie einen genehmigten Urlaubsanspruch anpassen wollen, wählen Sie diesen aus *Abwesenheiten > Genehmigungen > Urlaubsansprüche* und klicken auf *Ablehnen*. Anschliessend klicken Sie auf *Zurücksetzen* und bearbeiten den Anspruch.

::: warning
Damit die Aktion *Zurücksetzen* ausgewählt werden kann, muss Ihr Odoo-Benutzer die Rolle *Abwesenheitszeiten: Administrator* haben.
:::

### Abwesenheit melden

Öffnen Sie die App *Abwesenheitszeiten* und wählen Sie *Neuer Abwesenheitsantrag*. Geben Sie den Typ und die Dauer ein.

![](attachments/Abwesenheitszeiten%20Abwesenheit%20melden.png)

Bestätigen Sie den Vorgang mit *Speichern*.

Wurde die Abwesenheit genehmigt, sehen Sie die verleibenden Tage des Abwesenheitstyps in der Übersicht *Abwesenheitszeiten*.

![](attachments/Abwesenheitszeiten%20Verleibend.png)

::: tip
Abwesenheitseinträge, die im Zustand *Zur Genehmigung* sind, können nicht mehr gelöscht werden.
:::

### Abwesenheit validieren

Nach demselben Verfahren wie [Urlaubsanspruch validieren](#Urlaubsanspruch%20validieren) können Sie Abwesenheiten validieren. Sie erhalten entweder eine Mail oder sehen die zugewiesene Odoo-Aktivität.

![](attachments/Anwesenheitszeiten%20Mail%20Abwesenheit.png)

Klicken Sie auf den Link und validieren Sie die Abwesenheit.

### Abwesenheit entfernen

Wurde eine Abwesenheit einmal erfasst, kann Sie nicht mehr gelöscht werden (asser vom Administator). Möchte man dennoch eine Abwesenheit entfernen, muss der Vorgesetzte diese ablehnen. Im Status *Verworfen* wird der Kalendereintrag des Mitarbeiters entfernt..

### Verantwortliche festlegen

Navigieren sich zum Mitarbeitenden im App *Personal*, öffnen Sie den Tab *Arbeitsinformationen* und wählen Sie *Bearbeiten*. Tragen Sie den Vorgesetzten im Feld *Abwesenheitszeiten* ein. Standardmässig wird der *Manager* übernommen.

### Urlaubsanspruch ausblenden

Wenn Sie einen genehmigten Urlaubsanspruch ausblenden wollen, wählen Sie diesen unter *Abwesenheiten > Genehmigungen > Urlaubsansprüche* aus und geben im Feld *Gültigkeitsdauer* ein Enddatum ein.

## Berechtigungen

### Zugriff auf  erteilen

Damit Benutzer die [Anwesenheit und Zeiterfassung vergleichen](#Anwesenheit%20und%20Zeiterfassung%20vergleichen) können, müssen Sie Zugriffsrechte auf Menüposten anpasst werden.

Als erstes müssen Sie die folgenden [Menüposten bearbeiten](Development.md#Menüposten%20bearbeiten):

* *Zeiterfassung/Berichtswesen*
* *Zeiterfassung/Berichtswesen/Zeiterfassung / Anwesenheit*

Fügen Sie im Tab *Zugriffsrechte* die Gruppe *Zeiterfassung / Benutzer: nur eigene Stundenzettel* hinzu. 

Anschliessend müssen Sie für *Zeiterfassung Anwesenheitsnachweis* die [Rechte für Daten auf Datenmodell vergeben](Settings%20Permissions.md#Rechte%20für%20Daten%20auf%20Datenmodell%20vergeben):

Für die Benutzer:

* **Name**: *Zeiterfassung / Benutzer: nur eigene Stundenzettel*
* **Gruppe**: *Zeiterfassung / Benutzer: nur eigene Stundenzettel*
* **Filter**: `[('user_id', '=', user.id)]`
* **Berechtigung**: Leseberechtigung

Für die Vorgesetzten:

* **Name**: *Zeiterfassung / Benutzer: Alle Stundenzettel*
* **Gruppe**: *Zeiterfassung / Benutzer: Alle Stundenzettel*
* **Filter**: `[]`
* **Berechtigung**: Leseberechtigung

Nun sollten Benutzer, die nur ihren eigenen Stundenzettel sehen, den Bericht aufrufen können.