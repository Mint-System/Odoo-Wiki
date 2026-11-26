---
title: HR Holidays Attendance Overtime
description: Erlaubt eine Trennung von Überstunden und Überzeit.
kind: howto
partner: Mint-System
prev: ./hr
forge: github.com
repo: Mint-System/Odoo-Apps-HR
versions:
  - '19.0'
name: hr_holidays_attendance_overtime
---

# HR Holidays Attendance Overtime

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung wird die Mehrarbeit eines Mitarbeitenden auf zwei Konten aufgeteilt, für die jeweils eine eigene Abwesenheitsart geführt wird:

- **Überstunden**: dies sind die Stunden über die vertraglich vereinbarte Wochenarbeitszeit hinaus, aber nur bis zu einer Obergrenze (z.B. mehr als 38h bis maximal 45h, also höchstens 7h pro Woche).
- **Überzeit**: dies sind alle Stunden über dieser Obergrenze hinaus (z.B. mehr als 45 h pro Woche).

Technisch gesehen können mit dieser Erweiterung Überstundenregel-Zeilen mit einer Abwesenheitsart verknüpft werden. Bei der Erfassung der Anwesenheit werden alle Zeilen der Überstundenregel des Mitarbeitenden geprüft.

Standardmässig werden diese Überstundenregel-Zeilen erstellt:

| Name            | Definition                                                                                                        | Regel                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Überstunden** | Arbeitszeit über dem vertraglichen Soll (Arbeitszeitmodell, z.B. 42h/Woche bei 100%, 33.6h bei 80%) bis 45h/Woche | Regel "Überstunden": Grundlage Arbeitszeitmodell, aktiv bis 45h minus Arbeitssollstunden |
| **Überzeit**    | Arbeitszeit über der gesetzlichen Höchstarbeitszeit von 45h/Woche (ArG Art. 9)                                    | Regel "Überzeit": Periode Woche, aktiv ab 45h minus Arbeitssollstunden                   |

## Konfiguration

**Regelsatz** öffnen: _Anwesenheiten > Konfiguration > Regelsätze für Überstunden_, dort den Regelsatz _Überstunden und Überzeit_ öffnen.

Regel **„Überstunden“** (Zeitraum _Tag_):

- Nei _Wenn die gearbeiteten Stunden pro Tag weicht ab_ die Option _von der im Vertrag festgelegten Anzahl_ aktivieren.
- _Max. Stunden pro Woche_ setzen, z.B. 45:00.
- _Als Urlaub zurückgeben_ aktivieren.
- Als Abwesenheitsart _Kompensation_ wählen.

Regel **„Überzeit“** (Zeitraum Woche):

- Bei _Wenn die gearbeiteten Stunden pro Woche weicht ab_ die Option _von einer bestimmten Dauer_ aktivieren
- _Überschreitungsdauer_ fest auf 45:00 Stunden setzen.
- _Als Urlaub zurückgeben_ aktivieren.
- Als _Abwesenheitsart_ „Überzeit“ wählen.

**Abwesenheitsarten prüfen**: Beide Arten müssen _Überstunden abziehen_ aktiviert haben und dürfen keine Zuteilung erfordern.

**Regelsatz zuweisen**: Den Regelsatz im Vertrag des Mitarbeiters hinterlegen.

## Verwendung

- **Anwesenheit**: _Gearbeitete Überstunden_ und _Validierte Überstunden_ zeigen nur die Überstunden.
  Die _Überzeit der Woche_ steht im Feld _Weekly Overtime Hours)_, und zwar nur bei der letzten Anwesenheit der Woche.
- **Guthaben**: Im Abwesenheits-Dashboard und im Abwesenheitsantrag sieht man das verfügbare Guthaben je Abwesenheitsart, z.B. „Überzeit (9:45 Stunden verfügbar)“.
- **Abwesenheitsantrag**: Ein Antrag wird nur gegen das Guthaben der gewählten Art geprüft. Wer mehr beantragt als vorhanden, erhält eine Fehlermeldung.
- **Auswertung**: _Anwesenheiten > Berichte > Überstunden und Überzeit_ zeigt die Überstundenzeilen gruppiert nach Abwesenheitsart.