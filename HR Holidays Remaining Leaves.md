---
tags:
- HowTo
- Drittanbieter
prev: ./abwesenheit
---
# HR Holidays Remining Leaves
![icon_oms_box](assets/icon_oms_box.png)

Verbleibende Abwesenheitsansprüche der Mitarbeitenden anzeigen.

Technischer Name: `hr_holidays_remaining_leaves`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/15.0/hr_holidays_remaining_leaves>

## Verwendung

### Verbleibende Abwesenheitsansprüche anzeigen

Mit dieser Erweiterung werden unter *Abwesenheitszeiten > Vorgesetzte > Abwesenheitsanprüche* nebst der zugewiesenen Tagen die verbleibenden Abwesenheitstage angezeigt.

* **Verbleibend**: Berechnet Dauert aus Anspruch minus Dauer aus validierten Abwesenheiten
* **Aktuell Verbleibend**:  Berechnet Dauert aus Anspruch minus Dauer aus validierten Abwesenheiten bis zum aktuellen Tag

::: tip
Läuft eine Abwesenheit von Mittwoch bis Dienstag der nächsten Woche, dann liegt ein Wochenende oder sogar Feiertage dazwischen. Wird der Abwesenheitsanspruch am Dienstag betracht, berücksichtigt Odoo die gegebenen Abwesenheit und berechnet für *Aktuell Verbleibend* 4 Tage: Mittwoch, Donnerstag, Freitag und Montag.
:::