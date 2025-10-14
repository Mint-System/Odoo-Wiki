---
title: HR Holidays Public
description: Erstellen Sie einen Feiertagskalender, der in der Abwesenheiten berücksichtigt wird.
kind: howto
partner: OCA
prev: ./hr-holidays
---

# HR Holidays Public

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `hr_holidays_public`\
Repository: <https://github.com/OCA/hr-holidays/tree/18.0/hr_holidays_public>

## Verwendung

### Feiertage für Abwesenheitsart ignorieren

Damit Feiertage bei der Eingabe von Abwesenheiten abegzogen werden, muss der ausgewählte Abwesenheitsart konfiguriert werden. Standardmässig werden Feiertage für Abwesenheitsarten berücksichtigt.

Navigieren Sie nach _Abwesenheiten > Konfiguration > Abwesenheitsarten_ und wählen Sie hier den Typ zur Bearbeitung aus. Entfernen Sie das Häkchen von*Feiertage ausschliessen*, falls Sie die Feiertage für diesen Abwesenheitsart ignorieren möchten.

### Feiertage einrichten

Feiertage können für alle Mitarbeiter zentral festgelegt werden. Navigieren Sie nach _Abwesenheiten > Feiertage > Feiertage des neues Jahres erstellen_. Klicken Sie auf _Erstellen_ und navigieren Sie nach _Abwesenheiten > Feiertage > Feiertage_. Wählen Sie den neuen Feiertagskalender aus und geben Sie die Feiertage ein. Schliessen Sie den Vorgang mit _Speichern_ ab.

![](attachments/HR%20Holidays%20Public%20Beispiel%20Feiertagskalender.png)

Erstellte Feiertage werden im Kalender von OdooBot eingetragen:

![](attachments/HR-Holidays-Public%20OdooBot.png)

Geben Mitarbeitende ihren Abwesenheit ein, wird der Feiertag von der berechneten Anzahl Tage abgezogen:

![HR Holidays Public Abzug](attachments/HR%20Holidays%20Public%20Abzug.gif)

### Spezielle Abwesenheitsregelungen einrichten

Angenommen Sie müssen für bestimmte Personen spezielle Abwesenheitsregelungen einrichten, so können Sie das über die Arbeitszeit festhalten. Öffnen Sie _Einstellungen > Technisch > Arbeitszeit_ und wählen Sie einen Eintrag aus. Wenn Sie im Tab _Gobal Time Off_ einen Eintrag machen, wird dieser bei der Erfassung der Abwesenheit berücksichtigt.

![](attachments/Abwesenheitszeiten%20Global%20Time%20Off.png)
