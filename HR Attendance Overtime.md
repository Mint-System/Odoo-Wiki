---
title: Anwesenheiten Überstunden
description: Überstundenmanagement ganz einfach.
tags:
- HowTo
prev: ./hr-attendance
---

# Anwesenheiten Überstunden
![icons_odoo_hr_attendance](attachments/icons_odoo_hr_attendance.png)

{{ $frontmatter.description }}

Gilt ab #Odoo15.

## Konfiguration

### Überstunden Startdatum festlegen

Öffnen Sie die *Einstellungen* und markieren Sie die Option *Anwesenheiten > Überstunden > Überstunden zählen*. Setzen Sie ein Startdatum und Speichern Sie die Einstellungen.

![](attachments/Anwesenheiten%20Überstunden.png)

Unter *Anwesenheiten > Berichtswesen* können Sie die Überstunden der Mitarbeitenden anzeigen.

### Überstunden-Saldo festlegen

Ein Überstunden-Saldo für Mitarbeitende legen mit manuellen Überstunden-Einträgen fest, dessen Datum vor dem Startdatum der Überstunden-Berechnung liegt.

Damit Sie manuelle Überstunden-Einträge erstelle können, müssen Sie die Aktion [Alle Überstunden anzeigen](#Alle%20Überstunden%20anzeigen) ausführen.

Angenommen dass Startdatum ist der *01.07.2024*, dann erstellen Sie unter *Anwesenheiten > Überstunden* die Überstunden-Einträge mit Datum *30.06.2024*.

::: tip
Bei der Berechnung und Aktualisierung der Überstunden ignoriert Odoo alle Einträge vor dem Startdatum.
:::

## Verwendung

### Eigene Überstunden anzeigen

Mitarbeitende können Ihre Überstunden unter *Account > Mein Profil* anzeigen lassen. Die Summe der Überstunden wird über den gleichnamigen Smart-Link angezeigt.

### Überstunden bei Abwesenheit abziehen

Auf Abwesenheitsarten können Sie festlegen, ob Überstunden abgezogen werden können bzw. ob Überstunden mit der Abwesenheit kompensiert werden können.

Öffnen Sie den Abwesenheitsart via *Abwesenheiten > Konfiguration > Abwesenheitsarten*. Mit der Option *Zusätzliche Stunden abziehen* können Sie festlegen, ob Überstunden abgezogen werden.

Dazu ein Beispiel mit dem Abwesenheitsart *Überstunden*:

![](attachments/Anwesenheiten%20Überstunden%20Abwesenheitsart.png)

Legt man für den Mitarbeitenden eine Abwesenheit von diesem Typ an, prüft Odoo ob genug Überstunden vorhanden sind.

![](attachments/Anwesenheiten%20Überstunden%20Abwesenheit.png)

Werden die Überstunden genehmigt, verbucht Odoo am Tag der Erstellung dementsprechend die Überstunden.

![](attachments/Anwesenheiten%20Überstunden%20kompensiert.png)

::: warning
Wenn man die Abwesenheit rückgängig macht, löscht Odoo die betroffenen Überstunden-Einträge.
:::

### Überstundenberechnung für Mitarbeitende im Stundenlohn deaktivieren

Angenommen Sie haben Mitarbeiten im Stundenlohn und möchten für diese die Berechnung der Überstunden deaktiveren. Dazu müssen Sie eine [Flexible Arbeitszeit erfassen](HR.md#Flexible%20Arbeitszeit%20erfassen) und diese den entsprechenden Mitarbeitenden hinterlegen. Jede Arbeitsstunde wird mit deser Konfiguration als Überstunde gerechnet.

Zusätzlich können Sie mit der geplanten Aktion die angefallenen [Überstunden entfernen](HR%20Attendance%20Actions.md#Überstunden%20entfernen).

### Überstunden auszahlen

Wenn Sie Überstunden auszahlen, müssen Sie diese manuell abziehen. Damit Sie manuelle Korrekturen vornehmen können, richten Sie [Alle Überstunden anzeigen](#Alle%20Überstunden%20anzeigen) ein und erlauben die manuelle Bearbeitung mit [Snippet hinzufügen](Development%20Snippets.md#Snippet%20hinzufügen).

Anschliessend können Sie unter *Anwesenheiten > Überstunden* manuelle Einträge erstellen.

![](attachments/Anwesenheiten%20Überstunden%20Korrektur.png)

::: tip
Erfassen Sie die Korrektur-Einträge an einem Wochenende oder Feiertag, damit der Eintrag nicht von Überstunden-Berechnungen überschrieben.
:::

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
* **Zugriffsrechte**: `Anwesesenheiten / Sachbearbeiter: Alle Anwesenheiten verwalten`

::: info
Damit Überstunden-Einträge bearbeiten werden können, muss die Definition der Überstunden-Liste mit einem [Snippet](Development%20Snippets.md) angepasst werden.
:::