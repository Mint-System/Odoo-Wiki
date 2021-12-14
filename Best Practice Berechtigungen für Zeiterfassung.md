---
tags:
- Best-Practice
---
[> Best Practice](Best%20Practice.md)
# Best Practice: Berechtigungen für Zeiterfassung

#FIXME 

## Beispiel

| #   | Benutzer      | Personal      | Abwesenheitszeiten   | Anwesenheitszeiten | Zeiterfassung               |
| --- | ------------- | ------------- | -------------------- | ------------------ | --------------------------- |
| A   | Kurt Gisler   | Administrator | Administrator        | Administrator      | Administrator               |
| B1  | Thomas Kärnen | -             | -                    | -                  | -                           |
| B2  | Thomas Kärnen | -             | -                    | -                  | Alle Stundennachweise sehen |
| C   | Lydia Wildi   | -             | Manuelle Anwesenheit | -                  | -                           |

### Fall B1

| Verfügbare Apps    | Menu              | Funktionen                    | Bemerkungen                              |
| ------------------ | ----------------- | ----------------------------- | ---------------------------------------- |
| Abwesenheitszeiten | Meine Abwesenheit | Dashboard                     |                                          |
|                    |                   | Abwesenheitsanträge           |                                          |
|                    |                   | Anfrage Abwesenheitsansprüche |                                          |
|                    | Alle Benutzer     |                               | Kalender *Alle Abwesenheiten*            |
|                    | Feiertage         |                               | Ansicht alle Feiertage, schreibgeschützt |

### Fall B2

| Verfügbare Apps    | Menu              | Funktionen                    | Bemerkungen                              |
| ------------------ | ----------------- | ----------------------------- | ---------------------------------------- |
| Abwesenheitszeiten | Meine Abwesenheit | Dashboard                     |                                          |
|                    |                   | Abwesenheitsanträge           |                                          |
|                    |                   | Anfrage Abwesenheitsansprüche |                                          |
|                    | Alle Benutzer     |                               | Kalender *Alle Abwesenheiten*            |
|                    | Feiertage         |                               | Ansicht alle Feiertage, schreibgeschützt |
| Zeiterfassung      | Zeiterfassung     | Meine Stundenzettel           |                                          |
|                    |                   | Alle Zeitnachweise            |                                          |


### Fall B

| Verfügbare Apps    | Menu              | Funktionen                    | Bemerkungen                              |
| ------------------ | ----------------- | ----------------------------- | ---------------------------------------- |
| Anwesenheitszeiten | An- und Abmeldung |                               | Kiosk-Modus                              |
|                    | Berichtswesen     | Alle Angestellte              |                                          |
| Abwesenheitszeiten | Meine Abwesenheit | Dashboard                     |                                          |
|                    |                   | Abwesenheitsanträge           |                                          |
|                    |                   | Anfrage Abwesenheitsansprüche |                                          |
|                    | Alle Benutzer     |                               | Kalender *Alle Abwesenheiten*            |
|                    | Feiertage         |                               | Ansicht alle Feiertage, schreibgeschützt |
