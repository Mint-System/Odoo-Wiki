---
description: Verwaltung von Mitarbeiterurlauben & Abwesenheit.
tags:
- HowTo
prev: ./
---

# Abwesenheit
![icons_odoo_hr_holidays](assets/icons_odoo_hr_holidays.png)

{{ $frontmatter.description }}

Wesite: <https://www.odoo.com/de_DE/app/time-off>

## Bereiche

| Bereich                                                         | Beschreibung                                      |
| --------------------------------------------------------------- | ------------------------------------------------- |
| [Abwesenheit Aktionen](HR%20Holidays%20Actions.md)               | Aktionen für Abwesenheit App einrichten.          |
| [Abwesenheit Datenmanagement](HR%20Holidays%20Data%20Management.md) | Daten zu Abwesenheit exportieren und importieren. |

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                                                                                       |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [HR Attendance Overtime Negative Hours](HR%20Attendance%20Overtime%20Negative%20Hours.md) | Anzeige negative Überstunden auf Dashboard Abwesenheit.                                                            |
| [HR Holidays .ics Attachment](HR%20Holidays%20ics%20Attachment.md)                        | An Meldung zur Genehmigung einer Abwesenheit .ics-Datei anhängen.                                                  |
| [HR Holidays Calendar Department](HR%20Holidays%20Calendar%20Department.md)               | Erweitert den Anwesenheitsbericht mit neuen Felder.                                                                |
| [HR Holidays Leave Archive](HR%20Holidays%20Leave%20Archive.md)                           | Archivierungsfunktion für Abwesenheitseinträge aktivieren.                                                         |
| [HR Holidays Public](HR%20Holidays%20Public.md)                                           | Erstellen Sie einen Feiertagskalender, der in der Abwesenheitszeiten berücksichtigt wird.                          |
| [HR Holidays Remaining Leaves](HR%20Holidays%20Remaining%20Leaves.md)                     | Verbleibende Anwesenheitsansprüche der Mitarbeitenden anzeigen.                                                    |
| [HR Leave Custom Hour Interval](HR%20Leave%20Custom%20Hour%20Interval.md)                 | Start- und End-Zeit für Abwesenheiten eintragen.                                                                   |
| [Theoretical vs Attended Time Analysis](Theoretical%20vs%20Attended%20Time%20Analysis.md) | Erstellen Sie Berichte zu den effektiv gearbeiteten und den theoretischen Stunden. Ideal für Überzeitenmanagement. |

## Dashboard

###  Verfügbare Abwesenheitsansprüche anzeigen

Öffnen Sie die App *Abwesenheit*. Auf dem Dashboard werden oberhalb des Kalender die verbleibenden Abwesenheitsansprüche angezeigt.

![](assets/Abwesenheit%20Dashboard.png)

::: warning
Die verfügbaren Überstunden werden nur angezeigt, wenn der Wert positiv ist.
:::

## Konfiguration

### Abwesenheitstyp erfassen

Jede Abwesenheit und Abwesenheitsanspruch wird einem Abwesenheitstyp zugeordnet. Damit Sie jährliche Feriensaldis korrekt erfassen, müssen Sie für jedes Jahr einen Abwesenheitstyp erfassen. Navigieren Sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen* und duplizieren Sie einen bestehenden Typ. Legen Sie diese Werte fest:

* **Name**: Anzeigenamen des Abwesenheitstyp.
* **Abwesenheitsanträge Genehmigung**: Bestimmen Sie ob die Abwesenheitseinträge genehmigt werden muss.
* **Einheit der Abwesenheit**: Wählen Sie hier Stunden, Halbtage oder Tage als Einheit.
* **Zusätzliche Stunden abziehen**: Wenn die Abwesenheit nicht als Arbeitszeit gerechnet werden soll, aktivieren Sie diese Option.
* **Erfordert Zuweisung**: Bestimmen Sie ob der Abwesenheitsanspruch genehmigt werden muss.
* **Urlaubsanspruch Genehmigung**: Bestimmen Sie wie der Abwesenheitsanspruch genehmigt wird.

### Abwesenheitstyp konfigurieren

Navigieren Sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen*. Wählen Sie hier den Abwesenheitstyp aus und bearbeiten Sie diesen gemäss den Anforderungen.

### Einheit für Abwesenheitstyp festlegen

Navigieren Sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen*. Wählen Sie hier den Abwesenheitstyp aus. Im Feld *Einheit der Abwesenheit* können Sie wählen, ob der Typ in Stunden, Halbtage oder Tagen dargestellt wird.

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

![](assets/Abwesenheit%20Feiertage.png)

::: warning
Stellen Sie sicher, dass zwischen Start- und Endatum die effektive Anzahl Stunden/Tage dazwischen liegt.
:::

## Vorgänge

### Abwesenheitsanspruch melden

Damit Sie Anspruch auf Abwesenheit haben, müssen Sie diesen Anspruch geltend machen. Öffnen Sie die App *Abwesenheitszeiten* und wählen Sie *Neuer Abwesenheitsanspruch*. Wählen Sie den Typ, die Anzahl Tage und fügen Sie eine Beschreibung hinzu.

![](assets/Abwesenheitszeiten%20Anspruch%20melden.png)

Schliessen Sie den Dialog nach *Speichern*.

### Abwesenheitsanspruch validieren

Wenn Sie eine Mail zur Validierung eines Abwesenheitsanspruches erhalten, können Sie direkt auf den Link klicken.

![](assets/Abwesenheitszeiten%20Anspruch%20Mail.png)

Abwesenheitsansprüche zur Validierung werden auch über Odoo-Aktivitäten angezeigt.

![](assets/Abwesenheitszeiten%20Aktivit%C3%A4t.png)

Klicken Sie auf *Genehmigen* oder *Ablehnen* um den Abwesenheitsanspruch zu validieren.

Mitarbeitende erhalten nach der Validierung eine entsprechende Mail.

![](assets/Abwesenheitszeiten%20Mail%20Validierung.png)

::: tip
Odoo versendet keine Nachrichten, wenn die Genehmigung alls Massenbearbeitung erfolgt.
:::

### Abwesenheitsanspruch anpassen

Wenn Sie einen genehmigten Abwesenheitsanspruch anpassen wollen, wählen Sie diesen aus *Abwesenheitszeiten > Vorgesetzte > Abwesenheitsansprüche* und klicken auf *Ablehnen*. Anschliessend klicken Sie auf *Zurücksetzen* und bearbeiten den Anspruch.

::: warning
Damit die Aktion *Zurücksetzen* ausgewählt werden kann, muss Ihr Odoo-Benutzer die Rolle *Abwesenheitszeiten: Administrator* haben.
:::

### Abwesenheit melden

Öffnen Sie die App *Abwesenheitszeiten* und wählen Sie *Neuer Abwesenheitsantrag*. Geben Sie den Typ und die Dauer ein.

![](assets/Abwesenheitszeiten%20Abwesenheit%20melden.png)

Bestätigen Sie den Vorgang mit *Speichern*.

Wurde die Abwesenheit genehmigt, sehen Sie die verleibenden Tage des Abwesenheitstyps in der Übersicht *Abwesenheitszeiten*.

![](assets/Abwesenheitszeiten%20Verleibend.png)

::: tip
Abwesenheitseinträge, die im Zustand *Zur Genehmigung* sind, können nicht mehr gelöscht werden.
:::

### Abwesenheit validieren

Nach demselben Verfahren wie [Abwesenheitsanspruch validieren](#Abwesenheitsanspruch%20validieren) können Sie Abwesenheiten validieren. Sie erhalten entweder eine Mail oder sehen die zugewiesene Odoo-Aktivität.

![](assets/Anwesenheitszeiten%20Mail%20Abwesenheit.png)

Klicken Sie auf den Link und validieren Sie die Abwesenheit.

### Abwesenheit entfernen

Wurde eine Abwesenheit einmal erfasst, kann Sie nicht mehr gelöscht werden (asser vom Administator). Möchte man dennoch eine Abwesenheit entfernen, muss der Vorgesetzte diese ablehnen. Im Status *Verworfen* wird der Kalendereintrag des Mitarbeiters entfernt..

### Verantwortliche festlegen

Navigieren sich zum Mitarbeitenden im App *Personal*, öffnen Sie den Tab *Arbeitsinformationen* und wählen Sie *Bearbeiten*. Tragen Sie den Vorgesetzen im Feld *Abwesenheitszeiten* ein. Standardmässig wird der *Manager* übernommen.
