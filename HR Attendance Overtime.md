---
title: Anwesenheit Überstunden
description: Überstundenmanagement ganz einfach.
tags:
- HowTo
prev: ./hr-attendance
---

# Anwesenheit Überstunden
![icons_odoo_hr_attendance](attachments/icons_odoo_hr_attendance.png)

{{ $frontmatter.description }}

Gilt ab #Odoo15.

## Konfiguration

### Überstunden berechnen

Öffnen Sie die *Einstellungen* und markieren Sie die Option *Anwesenheitszeiten > Überstunden > Überstunden zählen*. Setzen Sie ein Startdatum und Speichern Sie die Einstellungen.

![](attachments/Anwesenheitszeiten%20Überstunden.png)

Unter *Anwesenheitszeiten > Berichtswesen* können Sie die Überstunden der Mitarbeitenden anzeigen.

## Verwendung

### Eigene Überstunden anzeigen

Mitarbeitende können Ihre Überstunden unter *Account > Mein Profil* anzeigen lassen. Die Summe der Überstunden wird über den gleichnamigen Smart-Link angezeigt.

### Überstunden bei Abwesenheit abziehen

Auf Abwesenheitstypen können Sie festlegen, ob Überstunden abgezogen werden können bzw. ob Überstunden mit der Abwesenheit kompensiert werden können.

Öffnen Sie den Abwesenheitstyp via *Abwesenheiten > Konfiguration > Abwesenheitstypen*. Mit der Option *Zusätzliche Stunden abziehen* können Sie festlegen, ob Überstunden abgezogen werden.

Dazu ein Beispiel mit dem Abwesenheitstyp *Überstunden*:

![](attachments/Anwesenheitszeiten%20Überstunden%20Abwesenheitstyp.png)

Legt man für den Mitarbeitenden eine Abwesenheit von diesem Typ an, prüft Odoo ob genug Überstunden vorhanden sind.

![](attachments/Anwesenheitszeiten%20Überstunden%20Abwesenheit.png)

Werden die Überstunden genehmigt, verbucht Odoo am Tag der Erstellung dementsprechend die Überstunden.

![](attachments/Anwesenheitszeiten%20Überstunden%20kompensiert.png)

::: warning
Wenn man die Abwesenheit rückgängig macht, löscht Odoo die betroffenen Überstunden-Einträge.
:::

### Überstundenberechnung für Mitarbeitende im Stundenlohn deaktivieren

Angenommen Sie haben Mitarbeiten im Stundenlohn und möchten für diese die Berechnung der Überstunden deaktiveren. Dazu müssen Sie eine [Flexible Arbeitszeit erfassen](HR.md#Flexible%20Arbeitszeit%20erfassen) und diese den entsprechenden Mitarbeitenden hinterlegen. Jede Arbeitsstunde wird mit deser Konfiguration als Überstunde gerechnet.

Zusätzlich können Sie mit der geplanten Aktion die angefallenen [Überstunden entfernen](HR%20Attendance%20Actions.md#Überstunden%20entfernen).

## Berichte

### Überstunden in Bericht Anwesenheiten anzeigen

Als Personaldministrator können Sie alle Überstunden im Bericht *Anwesenheiten > Berichtswesen* anzeigen lassen. Wählen Sie dazu *Werte > Überstunden*.

## Technisch

### Alle Überstunden anzeigen

Damit Sie eine Übersicht alle Überstunden erhalten, müssen Sie via *Einstellungen > Technisch > Benutzer-Interface > Menüposten* einen neuen Eintrag anlegen:

* **Menü**: `Überstunden`
* **Obermenü**: `Anwesenheiten`
* **Aktion**: `ir.actions.act_window` `Überstunden`
* **Nummernfolge**: `20`
* **Zugriffsrechte**: `Personal / Sachbearbeiter: Alle Mitarbeiter verwalten`