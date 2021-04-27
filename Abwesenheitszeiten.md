# Abwesenheitszeiten
![icons_odoo_hr_holidays](assets/icons_odoo_hr_holidays.png)

* [HR Holidays Public](Abwesenheitszeiten-HR-Holidays-Public)

## Abwesenheitstyp in theoretischen Stunden einbeziehen

::: tip
Damit der Abwesenheitstyp in der Auswertung [Anwesenheitszeiten-Theoretical-vs-Attended-Time-Analysis](Anwesenheitszeiten-Theoretical-vs-Attended-Time-Analysis.md) berücksichtigt wird muss dies explizit festgelegt werden.
:::

Öffnen Sie den Abwesenheitstyp mit *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen*. Bearbeiten sie den Typ und wählen sie die Checkbox *in theoretische Stunden einbeziehen* unter *Optionen*. Schliessen sie den Vorgang ab. Nun wird der Abwesenheitstyp in der theoretischen Stunden berücksichtigt.

## Abweseneitstyp Überstunden kompensieren anlegen

Damit Mitarbeiter ihre Überstunden kompensieren können, braucht es einen entsprechenden Abwesenheitstyp.

Navigieren sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen* und erstellen einen neuen Eintrag. Wählen sie als *Work Entry Type* *Anwesend* und *Einheit der Abwesenheit* *Stunden*.

#FIXME

## Überstunden beziehen

Möchte ein Mitarbeiter seine Überstunden beziehen, gibt er diese als Abwesenheit ein. Angenommen man hat 00:29 Stunden Überzeit, so öffnet man als erstes die *Abwesenheitszeiten.*

![](assets/Odoo%20Abwesenheit%20%C3%9Cberstunden%20anzeigen.png)

Hier wählt man *Neuer Abwesenheitsantrag* und als Typ *Überstunden kompensieren*. Wurde der Abwesenheitsantrag angenomme und gespeichert, wird dies als Arbeitszeit berücksichtigt.

![](assets/Odoo%20Abwesenheitszeiten%20Abwesenheitsantrag%20erstellen.png)