---
tags:
- HowTo
- OCA
prev: ./abwesenheit
---
# HR Holidays Public
![icon_oca_app](assets/icon_oca_app.png)

Erstellen Sie einen Feiertagskalender, der in der Abwesenheitszeiten berücksichtigt wird.

Technischer Name: `hr_holidays_public`\
Repository: <https://github.com/OCA/hr-holidays/tree/15.0/hr_holidays_public>

## Verwendung

### Feiertage für Abwesenheitstyp ignorieren

Damit Feiertage bei der Eingabe von Abwesenheiten abegzogen werden, muss der ausgewählte Abwesenheitstyp konfiguriert werden. Standardmässig werden Feiertage für Abwesenheitstypen berücksichtigt.

Navigieren Sie nach *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen* und wählen Sie hier den Typ zur Bearbeitung aus. Entfernen Sie das Häkchen  von*Feiertage ausschliessen*, falls Sie die Feiertage für diesen Abwesenheitstyp ignorieren möchten.

### Feiertage einrichten

Feiertage können für alle Mitarbeiter zentral festgelegt werden. Navigieren Sie nach *Abwesenheitszeiten > Feiertage > Feiertage des neues Jahres erstellen*. Klicken Sie auf *Erstellen* und navigieren Sie nach *Abwesenheitszeiten > Feiertage > Feiertage*. Wählen Sie den neuen Feiertagskalender aus und geben Sie die Feiertage ein. Schliessen Sie den Vorgang mit *Speichern* ab.

![](assets/HR%20Holidays%20Public%20Beispiel%20Feiertagskalender.png)

Erstellte Feiertage werden im Kalender von OdooBot eingetragen:

![](assets/HR-Holidays-Public%20OdooBot.png)

Geben Mitarbeitende ihren Abwesenheit ein, wird der Feiertag von der berechneten Anzahl Tage abgezogen:

![HR Holidays Public Abzug](assets/HR%20Holidays%20Public%20Abzug.gif)

### Spezielle Abwesenheitsregelungen einrichten

Angenommen Sie müssen für bestimmte Personen spezielle Abwesenheitsregelungen einrichten, so können Sie das über die Arbeitszeit festhalten. Öffnen Sie *Einstellungen > Technisch > Arbeitszeit* und wählen Sie einen Eintrag aus. Wenn Sie im Tab *Gobal Time Off* einen Eintrag machen, wird dieser bei der Erfassung der Abwesenheit berücksichtigt.

![](assets/Abwesenheitszeiten%20Global%20Time%20Off.png)