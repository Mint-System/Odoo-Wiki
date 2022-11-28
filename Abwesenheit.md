---
tags:
- HowTo
prev: ./
---
# Abwesenheit
![icons_odoo_hr_holidays](assets/icons_odoo_hr_holidays.png)

Verwaltung von Mitarbeiterurlauben & Abwesenheit.

Wesite: <https://www.odoo.com/de_DE/app/time-off>

## Bereiche

| Bereich                                                         | Beschreibung                                      |
| --------------------------------------------------------------- | ------------------------------------------------- |
| [Abwesenheit Datenmanagement](Abwesenheit%20Datenmanagement.md) | Daten zu Abwesenheit exportieren und importieren. |

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                                                                                       |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [HR Holidays .ics Attachment](HR%20Holidays%20ics%20Attachment.md)                        | An Meldung zur Genehmigung einer Abwesenheit .ics-Datei anhängen.                                                  |
| [HR Holidays Calendar Department](HR%20Holidays%20Calendar%20Department.md)               | Erweitert den Anwesenheitsbericht mit neuen Felder.                                                                |
| [HR Holidays Leave Archive](HR%20Holidays%20Leave%20Archive.md)                           | Archivierungsfunktion für Abwesenheitseinträge aktivieren.                                                         |
| [HR Holidays Public](HR%20Holidays%20Public.md)                                           | Erstellen Sie einen Feiertagskalender, der in der Abwesenheitszeiten berücksichtigt wird.                          |
| [HR Holidays Remaining Leaves](HR%20Holidays%20Remaining%20Leaves.md)                     | Verbleibende Anwesenheitsansprüche der Mitarbeitenden anzeigen.                                                    |
| [Theoretical vs Attended Time Analysis](Theoretical%20vs%20Attended%20Time%20Analysis.md) | Erstellen Sie Berichte zu den effektiv gearbeiteten und den theoretischen Stunden. Ideal für Überzeitenmanagement. |

## Konfiguration

### Abwesenheitstypen erfassen

Jede Abwesenheit und Abwesenheitsanspruch wird einem Abwesenheitstyp zugeordnet. Damit Sie jährliche Feriensaldis korrekt erfassen, müssen Sie für jedes Jahr einen Abwesenheitstyp erfassen. Navigieren Sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen* und duplizieren Sie einen bestehenden Typ. Legen Sie im Bereich *Gültigkeit* das Von- und Bis-Datum fest. Dazu ein Beispiel:

![](assets/Abwesenheitszeiten%20Übersicht%20Abwesenheitstypen.png)

### Abwesenheitstyp konfigurieren

Navigieren Sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen*. Wählen Sie hier den Abwesenheitstyp aus und bearbeiten Sie diesen gemäss den Anforderungen.

## Verworfene Abwesenheiten auf Dashboard ausblenden

Auf der Dashboard-Ansicht von *Abwesenheiten* werden alle Abwesenheiten unabhängig ihres Status angezeigt. Um Abwesenheiten im Zustand *Verworfen* auszublenden, wählen Sie *Entwicklertools > Aktion bearbeiten*. Überschreiben Sie das Feld *Wertebereich* mit dem Wert `[('user_id', '=', uid),('state', 'not in', ['refuse'])]`. Laden Sie den Browser-Tab neu.

::: warning
Diese Anpassung geht bei der Aktualisierung oder Neuinstallation des Abwesenheits-Moduls verloren.
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

## Aktionen

### Aktion "Ablehnen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Ablehnen`\
Modell: `hr.leave`\
Folgeaktion: `Python-Code ausführen`

```python
for record in records:  
  record.action_refuse()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Abwesenheitszeiten erscheint nun in der Auswahl *Aktion* das Menu *Ablehnen*.

![](assets/Aktionen%20Abwesenheitszeiten%20Ablehnen.png)
