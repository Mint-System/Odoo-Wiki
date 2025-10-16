---
title: Theoretical vs Attended Time Analysis
description: Erstellen Sie Berichte zu den effektiv gearbeiteten und den theoretischen Stunden.
kind: howto
partner: OCA
prev: ./hr-attendance
---

# Theoretical vs Attended Time Analysis

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `hr_attendance_report_theoretical_time`\
Repository: <https://github.com/OCA/hr-attendance/tree/18.0/hr_attendance_report_theoretical_time>

## Verwendung

### Startdatum festlegen

Das Startdatum der theoretischen Stunden kann pro MitarbieterIn festgelegt werden. Navigieren Sie nach _Personal > MitarbeiterIn auswählen_ und legen Sie im Tab _HR Einstellungen_ das Datum im Feld _Startdatum der theoretischen Stunden_ fest.

### Offset definieren

Haben Mitarbeitende vor der Einführung des Überzeitenmanagement Übersstunden gesammelt, die übertragen werden müssen, gilt es für diese Stunden eine Anwesenheit zu erfassen.

Legen Sie als erstes pro Mitarbeiter das Startdatum der theoretischen Stunden fest. Erfassen Sie an den Tagen vor Beginn der theortischen Stunden zusätzliche Anwesenheiten. Wählen Sie das Eincheck- und Abmeldedatum sodass die Arbeitsstunden dem Überstundensaldo entsprechen.

![](attachments/Theoretical-vs-Attenden-Time-Analysis-Offset.png)

### Abwesenheitsart in theoretischen Stunden einbeziehen

::: tip
Damit der Abwesenheitsart in der Auswertung [Theoretical vs Attended Time Analysis](Theoretical%20vs%20Attended%20Time%20Analysis.md) berücksichtigt wird, muss dies explizit festgelegt werden.
:::

Öffnen Sie den Abwesenheitsart mit _Abwesenheiten > Konfiguration > Abwesenheitsarten_. Bearbeiten Sie den Typ und wählen Sie die Checkbox _in theoretische Stunden einbeziehen_ unter _Optionen_. Schliessen Sie den Vorgang ab. Nun wird der Abwesenheitsart in der theoretischen Stunden berücksichtigt.

### Theoretische und tatsächliche Anwesenheiten vergleichen

Navigieren Sie nach _Anwesenheiten > Berichtswesen > Theoretische vs. tatsächliche Anwesenheitszeiten > Angestellt wählen_. Fügen Sie die Mitarbeiter deren Zeiten Sie auswerten wollen der Liste _Angestellte_ hinzu. Zeigen Sie den Bericht mit _Bericht ansehen_ an.

Falls Sie direkt den eigenen Vergleich sehen möchten wählen Sie direkt _Alle Angestellte_. Standardmässig wird die Ansicht nach dem eigenen Benutzer gefiltert.

![](attachments/Odoo%20Anwesenheiten%20Vergleich.png)

### Abwesenheitsart "Überstunden kompensieren" anlegen

Damit Mitarbeiter ihre Überstunden kompensieren können, braucht es einen entsprechenden Abwesenheitsart.

Navigieren Sie nach _Abwesenheiten > Konfiguration > Abwesenheitsarten_ und erstellen einen neuen Eintrag. Wählen Sie als _Work Entry Type_: _Anwesend_ und für _Einheit der Abwesenheit_: _Stunden_.

Über den normalen Genemigungsprozess können so Mitarbeiter ihre Überstunden als Anwesenheit registrieren lassen.

### Überstunden beziehen

Möchte ein Mitarbeiter seine Überstunden beziehen, gibt er diese als Abwesenheit ein. Angenommen man hat 00:29 Überstunden, so öffnet man als erstes die _Abwesenheitszeiten._

![](attachments/Odoo%20Abwesenheit%20Überstunden%20anzeigen.png)

Hier wählt man _Neuer Abwesenheitsantrag_ und als Typ _Überstunden kompensieren_. Wurde der Abwesenheitsantrag angenomme und gespeichert, wird dies als Arbeitszeit berücksichtigt.

![](attachments/Odoo%20Abwesenheitszeiten%20Abwesenheitsantrag%20erstellen.png)
