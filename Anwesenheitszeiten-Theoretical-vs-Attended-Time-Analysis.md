---
tags:
- HowTo
---
# Theoretical vs Attended Time Analysis
![icon_oca_app](assets/icon_oca_app.png)

Technischer Name: `hr_attendance_report_theoretical_time`\
Repository: <https://github.com/OCA/hr-attendance/tree/13.0/hr_attendance_report_theoretical_time>

## Abwesenheitstyp in theoretischen Stunden einbeziehen

::: tip
Damit der Abwesenheitstyp in der Auswertung [Anwesenheitszeiten-Theoretical-vs-Attended-Time-Analysis](Anwesenheitszeiten-Theoretical-vs-Attended-Time-Analysis.md) berücksichtigt wird muss dies explizit festgelegt werden.
:::

Öffnen Sie den Abwesenheitstyp mit *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen*. Bearbeiten sie den Typ und wählen sie die Checkbox *in theoretische Stunden einbeziehen* unter *Optionen*. Schliessen sie den Vorgang ab. Nun wird der Abwesenheitstyp in der theoretischen Stunden berücksichtigt.

## Theoretische und tatsächliche Anwesenheitszeiten vergleichen

::: warning
Diese Aktion erfordert die Installation der Erweiterung *Theoretical vs Attended Time Analysis*.
:::

Navigieren sie nach *Anwesenheitszeiten > Berichtswesen > Theoretische vs. tatsächliche Anwesenheitszeiten > Angestellt wählen*. Fügen sie die Mitarbeiter deren Zeiten sie auswerten wollen der Liste *Angestellte* hinzu. Zeigen sie den Bericht mit *Bericht ansehen* an.

Falls sie direkt den eigenen Vergleich sehen möchten wählen sie direkt *Alle Angestellte*. Standardmässig wird die Ansicht nach dem eigenen Benutzer gefiltert.

![](assets/Odoo%20Anwesenheitszeiten%20Vergleich.png)