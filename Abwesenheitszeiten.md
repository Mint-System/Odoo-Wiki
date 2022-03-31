---
tags:
- HowTo
prev: ./
---
# Abwesenheitszeiten
![icons_odoo_hr_holidays](assets/icons_odoo_hr_holidays.png)

Verwaltung von Mitarbeiterurlauben & Abwesenheit

| Erweiterung                                                                       | Beschreibung                                                                                                       |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [HR Holidays Public](HR%20Holidays%20Public.md)                                       | Erstellen Sie einen Feiertagskalender, der in der Abwesenheitszeiten berücksichtigt wird.                          |
| [Theoretical vs Attended Time Analysis](Theoretical%20vs%20Attended%20Time%20Analysis.md) | Erstellen Sie Berichte zu den effektiv gearbeiteten und den theoretischen Stunden. Ideal für Überzeitenmanagement. |
| [HR Holidays Remaining Leaves](HR%20Holidays%20Remaining%20Leaves.md)                   | Verbleibende Anwesenheitsansprüche der Mitarbeitenden anzeigen.                                                    |
| [HR Holidays .ics Attachment](HR%20Holidays%20ics%20Attachment.md)                      | An Meldung zur Genehmigung einer Abwesenheit .ics-Datei anhängen.                                                  |
| [HR Holidays Leave Archive](HR%20Holidays%20Leave%20Archive.md)                         | Archivierungsfunktion für Abwesenheitseinträge aktivieren.                                                         |

## Abwesenheitstypen erfassen

Jede Abwesenheit und Abwesenheitsanspruch wird einem Abwesenheitstyp zugeordnet. Damit Sie jährliche Feriensaldis korrekt erfassen, müssen Sie für jedes Jahr einen Abwesenheitstyp erfassen. Navigieren Sie nach *Abwesenheitszeiten > Konfiguratin > Abwesenheitstypen* und duplizieren Sie einen bestehenden Typ. Legen Sie im Bereich *Gültigkeit* das Von- und Bis-Datum fest. Dazu ein Beispiel:

![](assets/Abwesenheitszeiten%20Übersicht%20Abwesenheitstypen.png)

## Abwesenheitsanspruch melden

Damit Sie Anspruch auf Abwesenheit haben, müssen Sie diesen Anspruch geltend machen. Öffnen Sie die App *Abwesenheitszeiten* und wählen Sie *Neuer Abwesenheitsanspruch*. Wählen Sie den Typ, die Anzahl Tage und fügen Sie eine Beschreibung hinzu.

![](assets/Abwesenheitszeiten%20Anspruch%20melden.png)

Schliessen Sie den Dialog nach *Speichern*.

## Abwesenheitsanspruch validieren

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

## Abwesenheit melden

Öffnen Sie die App *Abwesenheitszeiten* und wählen Sie *Neuer Abwesenheitsantrag*. Geben Sie den Typ und die Dauer ein.

![](assets/Abwesenheitszeiten%20Abwesenheit%20melden.png)

Bestätigen Sie den Vorgang mit *Speichern*.

Wurde die Abwesenheit genehmigt, sehen Sie die verleibenden Tage des Abwesenheitstyps in der Übersicht *Abwesenheitszeiten*.

![](assets/Abwesenheitszeiten%20Verleibend.png)

::: tip
Abwesenheitseinträge, die im Zustand *Zur Genehmigung* sind, können nicht mehr gelöscht werden.
:::


## Abwesenheit validieren

Nach demselben Verfahren wie [Abwesenheitsanspruch validieren](#Abwesenheitsanspruch%20validieren) können Sie Abwesenheiten validieren. Sie erhalten entweder eine Mail oder sehen die zugewiesene Odoo-Aktivität.

![](assets/Anwesenheitszeiten%20Mail%20Abwesenheit.png)

Klicken Sie auf den Link und validieren Sie die Abwesenheit.

## Abwesenheitstyp konfigurieren

Navigieren Sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen*. Wählen Sie hier den Abwesenheitstyp aus und bearbeiten Sie diesen gemäss den Anforderungen.

## Abwesenheit entfernen

Wurde eine Abwesenheit einmal erfasst, kann Sie nicht mehr gelöscht werden (asser vom Administator). Möchte man dennoch eine Abwesenheit entfernen, muss der Vorgesetzte diese ablehnen. Im Status *Verworfen* wird der Kalendereintrag des Mitarbeiters entfernt..

## Verantwortliche festlegen

Navigieren sich zum Mitarbeitenden im App *Personal*, öffnen Sie den Tab *Arbeitsinformationen* und wählen Sie *Bearbeiten*. Tragen Sie den Vorgesetzen im Feld *Abwesenheitszeiten* ein. Standardmässig wird der *Manager* übernommen.

## Abwesenheitstyp Überstunden kompensieren anlegen

Damit Mitarbeiter ihre Überstunden kompensieren können, braucht es einen entsprechenden Abwesenheitstyp.

Navigieren Sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen* und erstellen einen neuen Eintrag. Wählen Sie als *Work Entry Type*: *Anwesend* und für *Einheit der Abwesenheit*: *Stunden*.

Über den normalen Genemigungsprozess können so Mitarbeiter ihre Überstunden als Anwesenheit registrieren lassen.

## Überstunden beziehen

Möchte ein Mitarbeiter seine Überstunden beziehen, gibt er diese als Abwesenheit ein. Angenommen man hat 00:29 Stunden Überzeit, so öffnet man als erstes die *Abwesenheitszeiten.*

![](assets/Odoo%20Abwesenheit%20%C3%9Cberstunden%20anzeigen.png)

Hier wählt man *Neuer Abwesenheitsantrag* und als Typ *Überstunden kompensieren*. Wurde der Abwesenheitsantrag angenomme und gespeichert, wird dies als Arbeitszeit berücksichtigt.

![](assets/Odoo%20Abwesenheitszeiten%20Abwesenheitsantrag%20erstellen.png)