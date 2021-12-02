---
tags:
- HowTo
---
# Abwesenheitszeiten
![icons_odoo_hr_holidays](assets/icons_odoo_hr_holidays.png)

Verwaltung von Mitarbeiterurlauben & Abwesenheit

| Erweiterung                                                                       | Beschreibung                                                                                                       |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [HR Holidays Public](HR%20Holidays%20Public.md)                                       | Erstellen sie einen Feiertagskalender, der in der Abwesenheitszeiten berücksichtigt wird.                          |
| [Theoretical vs Attended Time Analysis](Theoretical%20vs%20Attended%20Time%20Analysis.md) | Erstellen sie Berichte zu den effektiv gearbeiteten und den theoretischen Stunden. Ideal für Überzeitenmanagement. |
| [HR Holidays Remaining Leaves](HR%20Holidays%20Remaining%20Leaves.md)                   | Verbleibende Anwesenheitsansprüche der Mitarbeitenden anzeigen.                                                    |
| [HR Holidays .ics Attachment](HR%20Holidays%20ics%20Attachment.md)                      | An Meldung zur Genehmigung einer Abwesenheit .ics-Datei anhängen.                                                  |
| [HR Holidays Leave Archive](HR%20Holidays%20Leave%20Archive.md)                         | Archivierungsfunktion für Abwesenheitseinträge aktivieren.                                                         |

## Abwesenheitsanspruch melden

Damit sie Anspruch auf Abwesenheit haben, müssen sie diesen Anspruch geltend machen. Öffnen sie die App *Abwesenheitszeiten* und wählen sie *Neuer Abwesenheitsanspruch*. Wählen sie den Typ, die Anzahl Tage und fügen sie eine Beschreibung hinzu.

![](assets/Abwesenheitszeiten%20Anspruch%20melden.png)

Schliessen sie den Dialog nach *Speichern*.

## Abwesenheitsanspruch validieren

Wenn sie eine Mail zur Validierung eines Abwesenheitsanspruches erhalten, können sie direkt auf den Link klicken.

![](assets/Abwesenheitszeiten%20Anspruch%20Mail.png)

Abwesenheitsansprüche zur Validierung werden auch über Odoo-Aktivitäten angezeigt.

![](assets/Abwesenheitszeiten%20Aktivit%C3%A4t.png)

Klicken sie auf *Genehmigen* oder *Ablehnen* um den Abwesenheitsanspruch zu validieren.

Mitarbeitende erhalten nach der Validierung eine entsprechende Mail.

![](assets/Abwesenheitszeiten%20Mail%20Validierung.png)

::: tip
Odoo versendet keine Nachrichten, wenn die Genehmigung alls Massenbearbeitung erfolgt.
:::

## Abwesenheit melden

Öffnen sie die App *Abwesenheitszeiten* und wählen sie *Neuer Abwesenheitsantrag*. Geben sie den Typ und die Dauer ein.

![](assets/Abwesenheitszeiten%20Abwesenheit%20melden.png)

Bestätigen sie den Vorgang mit *Speichern*.

Wurde die Abwesenheit genehmigt, sehen sie die verleibenden Tage des Abwesenheitstyps in der Übersicht *Abwesenheitszeiten*.

![](assets/Abwesenheitszeiten%20Verleibend.png)

::: tip
Abwesenheitseinträge, die im Zustand *Zur Genehmigung* sind, können nicht mehr gelöscht werden.
:::


## Abwesenheit validieren

Nach demselben Verfahren wie [Abwesenheitsanspruch validieren](#Abwesenheitsanspruch%20validieren) können sie Abwesenheiten validieren. Sie erhalten entweder eine Mail oder sehen die zugewiesene Odoo-Aktivität.

![](assets/Anwesenheitszeiten%20Mail%20Abwesenheit.png)

Klicken sie auf den Link und validieren sie die Abwesenheit.

## Abwesenheitstyp konfigurieren

Navigieren sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen*. Wählen sie hier den Abwesenheitstyp aus und bearbeiten sie diesen gemäss den Anforderungen.

## Abwesenheit entfernen

Wurde eine Abwesenheit einmal erfasst, kann sie nicht mehr gelöscht werden (asser vom Administator). Möchte man dennoch eine Abwesenheit entfernen, muss der Vorgesetzte diese ablehnen. Im Status *Verworfen* wird der Kalendereintrag des Mitarbeiters entfernt..

## Verantwortliche festlegen

Navigieren sich zum Mitarbeitenden im App *Personal*, öffnen sie den Tab *Arbeitsinformationen* und wählen sie *Bearbeiten*. Tragen sie den Vorgesetzen im Feld *Abwesenheitszeiten* ein. Standardmässig wird der *Manager* übernommen.

## Abwesenheitstyp Überstunden kompensieren anlegen

Damit Mitarbeiter ihre Überstunden kompensieren können, braucht es einen entsprechenden Abwesenheitstyp.

Navigieren sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen* und erstellen einen neuen Eintrag. Wählen sie als *Work Entry Type*: *Anwesend* und für *Einheit der Abwesenheit*: *Stunden*.

Über den normalen Genemigungsprozess können so Mitarbeiter ihre Überstunden als Anwesenheit registrieren lassen.

## Überstunden beziehen

Möchte ein Mitarbeiter seine Überstunden beziehen, gibt er diese als Abwesenheit ein. Angenommen man hat 00:29 Stunden Überzeit, so öffnet man als erstes die *Abwesenheitszeiten.*

![](assets/Odoo%20Abwesenheit%20%C3%9Cberstunden%20anzeigen.png)

Hier wählt man *Neuer Abwesenheitsantrag* und als Typ *Überstunden kompensieren*. Wurde der Abwesenheitsantrag angenomme und gespeichert, wird dies als Arbeitszeit berücksichtigt.

![](assets/Odoo%20Abwesenheitszeiten%20Abwesenheitsantrag%20erstellen.png)