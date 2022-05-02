---
tags:
- HowTo
prev: ./anwesenheitszeiten
---
# Anwesenheitszeiten Überstunden
![icons_odoo_hr_attendance](assets/icons_odoo_hr_attendance.png)

Überstundenmanagement ganz einfach.

Gilt ab #Odoo15

## Überstunden berechnen

Öffnen Sie die *Einstellungen* und markieren Sie die Option *Anwesenheitszeiten > Überstunden > Überstunden zählen*. Setzen Sie ein Startdatum und Speichern Sie die Einstellungen.

![](assets/Anwesenheitszeiten%20Überstunden.png)

Unter *Anwesenheitszweiten > Berichtswesen* können Sie die Überzeiten der Mitarbeitenden anzeigen.

## Übersteunden bei Abwesenheit abziehen

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