---
description: Verbleibende Urlaubsansprüche der Mitarbeitenden anzeigen.
forge: github.com
kind: howto
name: hr_holidays_remaining_leaves
partner: Mint System
prev: ./hr-holidays
repo: Mint-System/Odoo-Apps-HR
title: HR Holidays Remining Leaves
versions:
- '17.0'
---


# HR Holidays Remining Leaves

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Verbleibende Urlaubsansprüche anzeigen

Mit dieser Erweiterung werden unter _Abwesenheiten > Genehmigungen > Urlaubsansprüche_ nebst der zugewiesenen Tagen die verbleibenden Abwesenheitstage angezeigt.

- **Verbleibend**: Berechnet Dauert aus Anspruch minus Dauer aus validierten Abwesenheiten
- **Aktuell Verbleibend**: Berechnet Dauert aus Anspruch minus Dauer aus validierten Abwesenheiten bis zum aktuellen Tag

::: tip
Läuft eine Abwesenheit von Mittwoch bis Dienstag der nächsten Woche, dann liegt ein Wochenende oder sogar Feiertage dazwischen. Wird der Urlaubsanspruch am Dienstag betracht, berücksichtigt Odoo die gegebenen Abwesenheit und berechnet für _Aktuell Verbleibend_ 4 Tage: Mittwoch, Donnerstag, Freitag und Montag.
:::

::: warning
Wenn mehrere Urlaubsansprüche vom selben Abwesenheitsart existieren und die Abwesenheiten an keinem Urlaubsanspruch zugeordnet sind, wird die Dauer für alle Urlaubsansprüche minus berechnet.
:::

### Verbleibende Urlaubsansprüche übertragen

Wenn Mitarbeitende Ende des Jahres bestimmte Mengen an verbleibenden Abwesenheiten in das neue Jahr übertragen möchten gehen Sie wie folgt vor.

Zeigen Sie die Abwesenheitsansprüche unter _Abwesenheiten > Genehmigungen > Urlaubsansprüche_ an, filter Sie die Ansprüche welche übertragen werden sollen. Erstellen Sie einen Export mit den Felder `remaining_leaves_hours` oder `remaining_leaves_days`. Passen Sie in der exportieren Datei die Abwesenheitsarten an und importieren Sie die Daten als neue Abwesenheitsansprüche.
