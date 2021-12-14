---
tags:
- Best-Practice
---
[🔗 Best Practice](Best%20Practice.md)
# Best Practice: Abwesenheit

Mit der App Abwesenheit können Mitarbeitende ihre Abwesenheit registrieren. Damit der Workflow einwandfrei funktioniert, müssen bestimmte Vorbereitungen getroffen werden.

## Vorbereitung

Alle Odoo-Benutzer, die ihre Abwesenheit registrieren wollen, brauchen einen Mitarbeiter-Eintrag. [Mitarbeiter erfassen](Personal.md#Mitarbeiter%20erfassen).

**Mitarbeiter und Mail**

Im Weiteren muss jeder Mitarbeitende mit einer E-Mail-Adresse verbunden sein. Diese kann auf dem Mitarbeiter-Eintrag hinterlegt werden.

**Berechtigungen**

Damit die Vorgesetzten und Verantworltichen die Abwesenheit der Mitarbeitenden validieren können, muss der Odoo-Benutzer mit der Rolle *Abwesenheitszeiten: Verantwortlich* ausgestattet werden.

**Vorgesetzte und Verantwortliche**

Damit Abwesenheitseinträge vom Vorgesetzten oder den HR-Verantwortlichen validiert werden können, muss der *Vorgesetzte* und *Verantwortliche Abwesenheitszeiten* registriert werden. [Vorgesetze hinterlegen](Personal.md#Vorgesetze%20hinterlegen) und [Verantwortliche festlegen](Abwesenheitszeiten.md#Verantwortliche%20festlegen).

**Abwesenheitstyp**

Damit der Genehmigungs-Prozess korrekt funktioniert, müssen die Abwesenheitstypen konfiguriert werden. Stellen sie die *Genehmigung* auf *Abwesenheits Officer*. [Abwesenheitstyp konfigurieren](Abwesenheitszeiten.md#Abwesenheitstyp%20konfigurieren).

Setzen sie die *Einheit der Abwesenheit* von *Bezahlter Urlaub* auf *Halber Tag*.

## Prozess

Der genaue Ablauf zur Abwesenheit ist [hier](Prozess%20Abwesenheit.md) dokumentiert.

Je nach Konfiguration des Abwesenheitstyp muss kein Anspruch bezogen werden.
