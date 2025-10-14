---
title: Setup Abwesenheiten
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Setup Abwesenheiten

Mit der App Abwesenheit können Mitarbeitende ihre Abwesenheit registrieren. Damit der Workflow einwandfrei funktioniert, müssen bestimmte Vorbereitungen getroffen werden.

## Vorbereitung

Alle Odoo-Benutzer, die ihre Abwesenheit registrieren wollen, brauchen einen Mitarbeiter-Eintrag. [Mitarbeiter erfassen](HR.md#Mitarbeiter%20erfassen).

**Mitarbeiter und Mail**

Im Weiteren muss jeder Mitarbeitende mit einer E-Mail-Adresse verbunden sein. Diese kann auf dem Mitarbeiter-Eintrag hinterlegt werden.

**Berechtigungen**

Damit die Vorgesetzten und Verantworltichen die Abwesenheit der Mitarbeitenden validieren können, muss der Odoo-Benutzer mit der Rolle _Abwesenheitszeiten: Verantwortlich_ ausgestattet werden.

**Vorgesetzte und Verantwortliche**

Damit Abwesenheitseinträge vom Vorgesetzten oder den HR-Verantwortlichen validiert werden können, muss der _Vorgesetzte_ und _Verantwortliche Abwesenheiten_ registriert werden. Siehe [Vorgesetzte hinterlegen](HR.md#Vorgesetzte%20hinterlegen)
und [Verantwortliche festlegen](HR%20Holidays.md#Verantwortliche%20festlegen).

**Abwesenheitsart**

Damit der Genehmigungs-Prozess korrekt funktioniert, müssen die Abwesenheitsarten konfiguriert werden. Stellen Sie die _Genehmigung_ auf _Abwesenheits Officer_. [Abwesenheitsart konfigurieren](HR%20Holidays.md#Abwesenheitsart%20konfigurieren).

Setzen Sie die _Einheit der Abwesenheit_ von _Bezahlter Urlaub_ auf _Halber Tag_.
