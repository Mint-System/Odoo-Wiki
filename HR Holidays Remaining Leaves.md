---
tags:
- HowTo
- Drittanbieter
prev: ./abwesenheit
---
# HR Holidays Remining Leaves
![icon_oms_box](assets/icon_oms_box.png)

Verbleibende Anwesenheitsansprüche der Mitarbeitenden anzeigen.

Technischer Name: `hr_holidays_remaining_leaves`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/15.0/hr_holidays_remaining_leaves>

## Verwendung

### Verbleibende Anwesenheitsansprüche anzeigen

Mit dieser Erweiterung werden unter *Abwesenheitszeiten > Vorgesetzte > Abwesenheitsanprüche* nebst der zugewiesenen Tagen die verbleibenden Abwesenheitstage angezeigt.

* **Verbleibend**: Berechnet Dauert aus Anspruch minus Dauer aus validierten Abwesenheiten
* **Aktuell Verbleibend**:  Berechnet Dauert aus Anspruch minus Dauer aus validierten Abwesenheiten bis zum aktuellen Tag

::: tip
Läuft eine Abwesenheit, beispielsweise von Mittwoch bis Dienstag der nächsten Woche, liegt ein Wochenende dazwischen. Erstellt man die Bewertung am Dienstag so berechnet Odoo für *Aktuell Verbleibend* 4 Tage: Mittwoch, Donnerstag, Freitag und Montag.
:::