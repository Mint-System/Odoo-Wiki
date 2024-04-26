---
title: Setup Abwesenheit
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Setup Abwesenheit

Mit der App Abwesenheit können Mitarbeitende ihre Abwesenheit registrieren. Damit der Workflow einwandfrei funktioniert, müssen bestimmte Vorbereitungen getroffen werden.

## Vorbereitung

Alle Odoo-Benutzer, die ihre Abwesenheit registrieren wollen, brauchen einen Mitarbeiter-Eintrag. [Mitarbeiter erfassen](HR.md#Mitarbeiter%20erfassen).

**Mitarbeiter und Mail**

Im Weiteren muss jeder Mitarbeitende mit einer E-Mail-Adresse verbunden sein. Diese kann auf dem Mitarbeiter-Eintrag hinterlegt werden.

**Berechtigungen**

Damit die Vorgesetzten und Verantworltichen die Abwesenheit der Mitarbeitenden validieren können, muss der Odoo-Benutzer mit der Rolle *Abwesenheitszeiten: Verantwortlich* ausgestattet werden.

**Vorgesetzte und Verantwortliche**

Damit Abwesenheitseinträge vom Vorgesetzten oder den HR-Verantwortlichen validiert werden können, muss der *Vorgesetzte* und *Verantwortliche Abwesenheiten* registriert werden. Siehe [Vorgesetzte hinterlegen](HR.md#Vorgesetzte%20hinterlegen)
und [Verantwortliche festlegen](HR%20Holidays.md#Verantwortliche%20festlegen).

**Abwesenheitsart**

Damit der Genehmigungs-Prozess korrekt funktioniert, müssen die Abwesenheitsarten konfiguriert werden. Stellen Sie die *Genehmigung* auf *Abwesenheits Officer*. [Abwesenheitsart konfigurieren](HR%20Holidays.md#Abwesenheitsart%20konfigurieren).

Setzen Sie die *Einheit der Abwesenheit* von *Bezahlter Urlaub* auf *Halber Tag*.

## Prozess

Der genaue Ablauf zur Abwesenheit ist [hier](Prozess%20Abwesenheit.md) dokumentiert.

Je nach Konfiguration des Abwesenheitsart muss kein Anspruch bezogen werden.
