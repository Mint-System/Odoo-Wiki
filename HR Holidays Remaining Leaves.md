---
title: HR Holidays Remining Leaves
description: Verbleibende Urlaubsansprüche der Mitarbeitenden anzeigen.
kind: howto
tags:
- Drittanbieter
prev: ./hr-holidays
---
# HR Holidays Remining Leaves
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_holidays_remaining_leaves`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/16.0/hr_holidays_remaining_leaves>

## Verwendung

### Verbleibende Urlaubsansprüche anzeigen

Mit dieser Erweiterung werden unter *Abwesenheiten > Genehmigungen > Urlaubsansprüche* nebst der zugewiesenen Tagen die verbleibenden Abwesenheitstage angezeigt.

* **Verbleibend**: Berechnet Dauert aus Anspruch minus Dauer aus validierten Abwesenheiten
* **Aktuell Verbleibend**:  Berechnet Dauert aus Anspruch minus Dauer aus validierten Abwesenheiten bis zum aktuellen Tag

::: tip
Läuft eine Abwesenheit von Mittwoch bis Dienstag der nächsten Woche, dann liegt ein Wochenende oder sogar Feiertage dazwischen. Wird der Urlaubsanspruch am Dienstag betracht, berücksichtigt Odoo die gegebenen Abwesenheit und berechnet für *Aktuell Verbleibend* 4 Tage: Mittwoch, Donnerstag, Freitag und Montag.
:::

::: warning
Wenn mehrere Urlaubsansprüche vom selben Abwesenheitsart existieren und die Abwesenheiten an keinem Urlaubsanspruch zugeordnet sind, wird die Dauer für alle Urlaubsansprüche minus berechnet.
:::

### Verbleibende Urlaubsansprüche übertragen

Wenn Mitarbeitende Ende des Jahres bestimmte Mengen an verbleibenden Abwesenheiten in das neue Jahr übertragen möchten gehen Sie wie folgt vor.

Zeigen Sie die Abwesenheitsansprüche unter *Abwesenheiten > Genehmigungen > Urlaubsansprüche* an, filter Sie die Ansprüche welche übertragen werden sollen. Erstellen Sie einen Export mit den Felder `remaining_leaves_hours` oder `remaining_leaves_days`. Passen Sie in der exportieren Datei die Abwesenheitsarten an und importieren Sie die Daten als neue Abwesenheitsansprüche.
