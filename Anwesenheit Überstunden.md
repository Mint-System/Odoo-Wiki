---
tags:
- HowTo
prev: ./anwesenheit
---
# AnwesenheitÜberstunden
![icons_odoo_hr_attendance](assets/icons_odoo_hr_attendance.png)

Überstundenmanagement ganz einfach.

Gilt ab #Odoo15

## Konfiguraiton

### Überstunden berechnen

Öffnen Sie die *Einstellungen* und markieren Sie die Option *Anwesenheitszeiten > Überstunden > Überstunden zählen*. Setzen Sie ein Startdatum und Speichern Sie die Einstellungen.

![](assets/Anwesenheitszeiten%20Überstunden.png)

Unter *Anwesenheitszweiten > Berichtswesen* können Sie die Überzeiten der Mitarbeitenden anzeigen.

## Verwendung

### Eigene Überstunden anzeigen

Mitarbeitende können Ihre Überstunden unter *Account > Mein Profil* anzeigen lassen. Die Summer der Überstunden wird über den gleichnamigen Smart-Link angezeigt.

### Alle Überstunden anzeigen

Als Personaldministrator können Sie alle Überstunden im Bericht *Anwesenheit > Berichtswesen* anzeigen lassen. Wählen Sie dazu *Werte > Überstunden*.

### Übersteunden bei Abwesenheit abziehen

Auf Abwesenheitstypen können Sie festlegen, ob Überstunden abgezogen werden können bzw. ob Überstunden mit der Abwesenheit kompensiert werden können.

Öffnen Sie den Abwesenheitstyp via *Abwesenheitszeiten > Konfiguration > Abwesenheitstypen*. Mit der Option *Zusätzliche Stunden abziehen* können Sie festlegen, ob Überstunden abgezogen werden.

Dazu ein Beispielt mit dem Abwesenheitstyp *Übestunden*:

![](assets/Anwesenheitszeiten%20Überstunden%20Abwesenheitstyp.png)

Legt man für den Mitarbeitenden eine Abwesenheit von diesem Typ an, prüft Odoo ob genug Überzeit vorhanden ist.

![](assets/Anwesenheitszeiten%20Überstunden%20Abwesenheit.png)

Werden die Überstunden genehmigt, verbucht Odoo am Tag der Erstellung dementsprechend die Überzeit.

![](assets/Anwesenheitszeiten%20Überstunden%20kompensiert.png)

::: warning
Wenn man die Abwesenheit Rückgängig macht, löscht Odoo die betroffnen Überstunden-Einträge.
:::

### Überstundenberechnung für Mitarbeitende im Stundenlohn deaktivieren

Angenommen Sie haben Mitarbeiten im Stundenlohn und möchten für diese die Berechnung der Überstunden deaktiveren, müssen Sie als erstes eine neue [Arbeitszeit erstellen](Personal.md#Arbeitszeit%20erstellen). Geben Sie als Namen *Standard 0 hours/week*, entfernen Sie alle Einträge in *Arbeitsstunden* und tragen Sie als *Durchschnittliche Stundenzahl pro Tag* den Wert `0` ein. Hinterlegen Sie diese Arbeitszeit bei Mitarbeitenden mit Stundenlohn.

::: warning
Jede Arbeitsstunde wird so als Überstunde berechnet.
:::