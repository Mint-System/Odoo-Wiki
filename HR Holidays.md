---
title: Abwesenheiten
description: Verwaltung von Mitarbeiterurlauben & Abwesenheiten.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Abwesenheiten

![icons_odoo_hr_holidays](attachments/icons_odoo_hr_holidays.png)

{{ $frontmatter.description }}

Wesite: <https://www.odoo.com/de_DE/app/time-off>

## Bereiche

| Bereich                                                               | Beschreibung                                        |
| --------------------------------------------------------------------- | --------------------------------------------------- |
| [Abwesenheiten Aktionen](HR%20Holidays%20Actions.md)                  | Aktionen für Abwesenheiten App einrichten.          |
| [Abwesenheiten Datenmanagement](HR%20Holidays%20Data%20Management.md) | Daten zu Abwesenheiten exportieren und importieren. |

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                                                         |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [HR Attendance Overtime Negative Hours](HR%20Attendance%20Overtime%20Negative%20Hours.md) | Anzeige negative Überstunden auf Dashboard Abwesenheiten.                            |
| [HR Holidays .ics Attachment](HR%20Holidays%20ics%20Attachment.md)                        | An Meldung zur Genehmigung einer Abwesenheit .ics-Datei anhängen.                    |
| [HR Holidays Calendar Department](HR%20Holidays%20Calendar%20Department.md)               | Erweitert den Anwesenheitsbericht mit neuen Felder.                                  |
| [HR Holidays Custom Hours](HR%20Holidays%20Custom%20Hours.md)                             | Benutzerdefinierte Anzahl Stunden auf Abwesenheiten eintragen.                       |
| [HR Holidays Leave Archive](HR%20Holidays%20Leave%20Archive.md)                           | Archivierungsfunktion für Abwesenheitseinträge aktivieren.                           |
| [HR Holidays Leave Repeated](HR%20Holidays%20Leave%20Repeated.md)                         | Wiederkehrende Abwesenheitseinträge erstellen.                                       |
| [HR Holidays Negative Hours](HR%20Holidays%20Negative%20Hours.md)                         | Abwesenheitsart zur Kompensierung von Überstunden.                                   |
| [HR Holidays Public](HR%20Holidays%20Public.md)                                           | Erstellen Sie einen Feiertagskalender, der in der Abwesenheiten berücksichtigt wird. |
| [HR Holidays Remaining Leaves](HR%20Holidays%20Remaining%20Leaves.md)                     | Verbleibende Urlaubsansprüche der Mitarbeitenden anzeigen.                           |
| [HR Holidays Type Note](HR%20Holidays%20Type%20Note.md)                                   | Hinweis zur Abwesenheitsart auf Abwesenheiten anzeigen.                              |
| [HR Holidays Working Time](HR%20Holidays%20Working%20Time.md)                             | Aus Abwesenheiten Anwesenheiten erstellen.                                           |
| [HR Leave Custom Hour Interval](HR%20Leave%20Custom%20Hour%20Interval.md)                 | Start- und End-Zeit für Abwesenheiten eintragen.                                     |
| [Theoretical vs Attended Time Analysis](Theoretical%20vs%20Attended%20Time%20Analysis.md) | Erstellen Sie Berichte zu den effektiv gearbeiteten und den theoretischen Stunden.   |

## Dashboard

### Verfügbare Urlaubsansprüche anzeigen

Öffnen Sie die App _Abwesenheit_. Auf dem Dashboard werden oberhalb des Kalender die verbleibenden Urlaubsansprüche angezeigt.

![](attachments/Abwesenheiten%20Dashboard.png)

::: warning
Die verfügbaren Überstunden werden nur angezeigt, wenn der Wert positiv ist.
:::

## Konfiguration

### Abwesenheitsart erfassen

Jede Abwesenheit und Urlaubsanspruch wird einem Abwesenheitsart zugeordnet. Damit Sie jährliche Feriensaldis korrekt erfassen, müssen Sie für jedes Jahr einen Abwesenheitsart erfassen. Navigieren Sie nach _Abwesenheiten > Konfiguration > Abwesenheitsarten_ und duplizieren Sie einen bestehenden Typ. Legen Sie diese Werte fest:

- **Name**: Anzeigenamen des Abwesenheitsart.
- **Abwesenheitsanträge / Genehmigung**: Bestimmen Sie ob die Abwesenheitseinträge genehmigt werden muss.
- **Einheit der Abwesenheit**: Wählen Sie hier Stunden, Halbtage oder Tage als Einheit.
- **Zusätzliche Stunden abziehen**: Wenn die Abwesenheit nicht als Arbeitszeit gerechnet werden soll, aktivieren Sie diese Option.
- **Abwesenheitsart**: Legen Sie fest, ob die Zeit der Abwesenheit als gearbeitete Zeit oder Abwesend gilt.
- **Anträge auf Urlaubsanspruch / Erfordert Anspruch**: Bestimmen Sie ob der Urlaubsanspruch genehmigt werden muss.
- **Anträge auf Urlaubsanspruch / Genehmigung**: Bestimmen Sie wie der Urlaubsanspruch genehmigt wird.

### Abwesenheitsart konfigurieren

Navigieren Sie nach _Abwesenheiten > Konfiguration > Abwesenheitsarten_. Wählen Sie hier den Abwesenheitsart aus und bearbeiten Sie diesen gemäss den Anforderungen.

### Einheit für Abwesenheitsart festlegen

Navigieren Sie nach _Abwesenheiten > Konfiguration > Abwesenheitsarten_. Wählen Sie hier den Abwesenheitsart aus. Im Feld _Einheit der Abwesenheit_ können Sie wählen, ob der Typ in Stunden, Halbtage oder Tagen dargestellt wird.

::: tip
Odoo rechnet intern immer in Stunden. Diese Option legt die Darstellung der verbleibenden Ansprüche fest.
:::

### Verworfene Abwesenheiten auf Dashboard ausblenden

Auf der Dashboard-Ansicht von _Abwesenheiten_ werden alle Abwesenheiten unabhängig ihres Status angezeigt. Um Abwesenheiten im Zustand _Verworfen_ auszublenden, wählen Sie _Entwicklertools > Aktion bearbeiten_. Überschreiben Sie das Feld _Wertebereich_ mit dem Wert `[('user_id', '=', uid),('state', 'not in', ['refuse'])]`. Laden Sie den Browser-Tab neu.

::: warning
Diese Anpassung geht bei der Aktualisierung oder Neuinstallation des Abwesenheits-Moduls verloren.
:::

### Gesetzliche Feiertage festlegen

Navigieren Sie nach _Abwesenheiten > Konfiguration > Gesetzliche Feiertage_. Erstellen Sie hier einen neuen Eintrag für jeden Feiertag und optional für bestimmte Arbeitszeiten.

![](attachments/Abwesenheiten%20Feiertage.png)

::: tip
Lassen Sie das Feld _Arbeitsstunden_ leer, damit der Feiertag für alle Arbeitszeiten aktiv ist.
:::

## Vorgänge

### Urlaubsanspruch melden

Damit Sie Anspruch auf Abwesenheit haben, müssen Sie diesen Anspruch geltend machen. Öffnen Sie die App _Abwesenheitszeiten_ und wählen Sie _Neuer Urlaubsanspruch_. Wählen Sie den Typ, die Anzahl Tage und fügen Sie eine Beschreibung hinzu.

![](attachments/Abwesenheitszeiten%20Anspruch%20melden.png)

Schliessen Sie den Dialog nach _Speichern_.

### Urlaubsanspruch validieren

Wenn Sie eine Mail zur Validierung eines Urlaubsanspruches erhalten, können Sie direkt auf den Link klicken.

![](attachments/Abwesenheitszeiten%20Anspruch%20Mail.png)

Urlaubsansprüche zur Validierung werden auch über Odoo-Aktivitäten angezeigt.

![](attachments/Abwesenheitszeiten%20Aktivität.png)

Klicken Sie auf _Genehmigen_ oder _Ablehnen_ um den Urlaubsanspruch zu validieren.

Mitarbeitende erhalten nach der Validierung eine entsprechende Mail.

![](attachments/Abwesenheitszeiten%20Mail%20Validierung.png)

::: tip
Odoo versendet keine Nachrichten, wenn die Genehmigung alls Massenbearbeitung erfolgt.
:::

### Urlaubsanspruch anpassen

Wenn Sie einen genehmigten Urlaubsanspruch anpassen wollen, wählen Sie diesen aus _Abwesenheiten > Genehmigungen > Urlaubsansprüche_ und klicken auf _Ablehnen_. Anschliessend klicken Sie auf _Zurücksetzen_ und bearbeiten den Anspruch.

::: warning
Damit die Aktion _Zurücksetzen_ ausgewählt werden kann, muss Ihr Odoo-Benutzer die Rolle _Abwesenheitszeiten: Administrator_ haben.
:::

### Abwesenheit erstellen

Öffnen Sie die App _Abwesenheitszeiten_ und wählen Sie _Neuer Abwesenheitsantrag_. Geben Sie den Typ und die Dauer ein.

![](attachments/Abwesenheitszeiten%20Abwesenheit%20melden.png)

Bestätigen Sie den Vorgang mit _Speichern_.

Wurde die Abwesenheit genehmigt, sehen Sie die verleibenden Tage des Abwesenheitsarts in der Übersicht _Abwesenheitszeiten_.

![](attachments/Abwesenheitszeiten%20Verleibend.png)

::: tip
Abwesenheitseinträge, die im Zustand _Zur Genehmigung_ sind, können nicht mehr gelöscht werden.
:::

### Abwesenheit validieren

Nach demselben Verfahren wie [Urlaubsanspruch validieren](#Urlaubsanspruch%20validieren) können Sie Abwesenheiten validieren. Sie erhalten entweder eine Mail oder sehen die zugewiesene Odoo-Aktivität.

![](attachments/Anwesenheiten%20Mail%20Abwesenheit.png)

Klicken Sie auf den Link und validieren Sie die Abwesenheit.

### Abwesenheit entfernen

Wurde eine Abwesenheit einmal erfasst, kann Sie nicht mehr gelöscht werden (asser vom Administator). Möchte man dennoch eine Abwesenheit entfernen, muss der Vorgesetzte diese ablehnen. Im Status _Verworfen_ wird der Kalendereintrag des Mitarbeiters entfernt..

### Verantwortliche festlegen

Navigieren sich zum Mitarbeitenden im App _Personal_, öffnen Sie den Tab _Arbeitsinformationen_ und wählen Sie _Bearbeiten_. Tragen Sie den Vorgesetzten im Feld _Abwesenheitszeiten_ ein. Standardmässig wird der _Manager_ übernommen.

### Urlaubsanspruch ausblenden

Wenn Sie einen genehmigten Urlaubsanspruch ausblenden wollen, wählen Sie diesen unter _Abwesenheiten > Genehmigungen > Urlaubsansprüche_ aus und geben im Feld _Gültigkeitsdauer_ ein Enddatum ein.

## Berechtigungen

### Zugriff auf erteilen

Damit Benutzer die [Anwesenheiten und Zeiterfassung vergleichen](#Anwesenheiten%20und%20Zeiterfassung%20vergleichen) können, müssen Sie Zugriffsrechte auf Menüposten anpasst werden.

Als erstes müssen Sie die folgenden [Menüposten bearbeiten](Development.md#Menüposten%20bearbeiten):

- _Zeiterfassung/Berichtswesen_
- _Zeiterfassung/Berichtswesen/Zeiterfassung / Anwesenheiten_

Fügen Sie im Tab _Zugriffsrechte_ die Gruppe _Zeiterfassung / Benutzer: nur eigene Stundenzettel_ hinzu.

Anschliessend müssen Sie für _Zeiterfassung Anwesenheitsnachweis_ die [Datensatzregeln auf Datenmodell vergeben](Settings%20Permissions.md#Datensatzregeln%20auf%20Datenmodell%20vergeben):

Für die Benutzer:

- **Name**: _Zeiterfassung / Benutzer: nur eigene Stundenzettel_
- **Gruppe**: _Zeiterfassung / Benutzer: nur eigene Stundenzettel_
- **Filter**: `[('user_id', '=', user.id)]`
- **Berechtigung**: Leseberechtigung

Für die Vorgesetzten:

- **Name**: _Zeiterfassung / Benutzer: Alle Stundenzettel_
- **Gruppe**: _Zeiterfassung / Benutzer: Alle Stundenzettel_
- **Filter**: `[]`
- **Berechtigung**: Leseberechtigung

Nun sollten Benutzer, die nur ihren eigenen Stundenzettel sehen, den Bericht aufrufen können.
