---
tags:
- HowTo
---
# HR Holidays Public
![icon_oca_app](assets/icon_oca_app.png)

Erstellen sie einen Feiertagskalender, der in der Abwesenheitszeiten berücksichtigt wird.

Technischer Name: `hr_holidays_public`\
Repository: <https://github.com/OCA/hr-holidays/tree/13.0/hr_holidays_public>

## Feiertage für Abwesenheitstyp ignorieren

Damit Feiertage bei der Eingabe von Abwesenheiten abegzogen werden, muss der ausgewählte Abwesenheitstyp konfiguriert werden. Standardmässig werden Feiertage für Abwesenheitstypen berücksichtigt.

Navigieren sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen* und wählen sie hier den Typ zur Bearbeitung aus. Entfernen sie das Häkchen  von*Feiertage ausschliessen*, falls sie die Feiertage für diesen Abwesenheitstyp ignorieren möchten.

## Feiertage einrichten

Feiertage können für alle Mitarbeiter zentral festgelegt werden. Navigieren sie nach *Abwesenheitszeiten > Feiertage > Feiertage des neues Jahres erstellen*. Klicken sie auf *Erstellen* und navigieren sie nach *Abwesenheitszeiten > Feiertage > Feiertage*. Wählen sie den neuen Feiertagskalender aus und geben sie die Feiertage ein. Schliessen sie den Vorgang mit *Speichern* ab.

![](assets/HR%20Holidays%20Public%20Beispiel%20Feiertagskalender.png)

In den [Demodaten](Datenmanagement.md#Demodaten%20anzeigen) der Mint System sind Feiertage zum Import bereitgestellt.

Erstellte Feiertage werden im Kalender von OdooBot eingetragen:

![](assets/HR-Holidays-Public%20OdooBot.png)

Geben Mitarbeitende ihren Abwesenheit ein, wird der Feiertag von der berechneten Anzahl Tage abgezogen:

![HR Holidays Public Abzug](assets/HR%20Holidays%20Public%20Abzug.gif)

