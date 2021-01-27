# Abwesenheitszeiten
![icons_odoo_hr_holidays](assets/icons_odoo_hr_holidays.png)

## Feiertage einrichten

::: tip
Die Aktion erfordert die Installation des Moduls *HR Holidays Public*.
:::

Feiertage können für alle Mitarbeiter zentral festgelegt werden. Navigieren sie nach *Abwesenheitszeiten > Feiertage > Feiertage*. Hier erstellen sie die einzelnen Feiertage für das aktuelle Kalenderjahr.

In den [Demodaten](Datenmanagement.md#Demodaten%20anzeigen) der Mint System sind Feiertage zum Import bereitgestellt.

## Abwesenheitstyp in theoretischen Stunden einbeziehen

::: tip
Damit der Abwesenheitstyp in der Auswertung [Theoretische und tatsächliche Anwesenheitszeiten vergleichen](Anwesenheitszeiten.md#Theoretische%20und%20tats%C3%A4chliche%20Anwesenheitszeiten%20vergleichen) berücksichtigt wird muss dies explizit festgelegt werden.
:::

Öffnen Sie den Abwesenheitstyp mit *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen*. Bearbeiten sie den Typ und wählen sie die Checkbox *in theoretische Stunden einbeziehen* unter *Optionen*. Schliessen sie den Vorgang ab. Nun wird der Abwesenheitstyp in der theoretischen Stunden berücksichtigt.

## Abweseneitstype Überstunden kompensieren anlegen

Damit Mitarbeiter ihre Überstunden kompensieren können, braucht es einen entsprechenden Abwesenheitstyp.

Navigieren sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen* und erstellen einen neuen Eintrag. Wählen sie als *Work Entry Type* *Anwesend* und *Einheit der Abwesenheit* *Stunden*.

#FIXME

## Überstunden beziehen

Möchte ein Mitarbeiter seine Überstunden beziehen, gibt er diese als Abwesenheit ein. Angenommen man hat 00:29 Stunden Überzeit, so öffnet man als erstes die *Abwesenheitszeiten.*

![](assets/Odoo%20Abwesenheit%20%C3%9Cberstunden%20anzeigen.png)

Hier wählt man *Neuer Abwesenheitsantrag* und als Typ *Überstunden kompensieren*. Wurde der Abwesenheitsantrag angenomme und gespeichert, wird dies als Arbeitszeit berücksichtigt.

![](assets/Odoo%20Abwesenheitszeiten%20Abwesenheitsantrag%20erstellen.png)