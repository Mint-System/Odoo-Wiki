---
tags:
- HowTo
- Drittanbieter
prev: ./abwesenheit
---
# HR Holidays Leave Archive
![icon_oms_box](assets/icon_oms_box.png)

Archivierungsfunktion für Abwesenheitseinträge aktivieren.

Technischer Name: `hr_holidays_leave_archive`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/14.0/hr_holidays_leave_archive>

## Verwendung

### Abwesenheitszeiten archivieren

Ist diese Erweiterung installiert können Abwesenheitszeiten archiviert werden. Navigieren Sie nach *Abwesenheitszeiten > Vorgesetzte > Abwesenheitszeiten*. Filtern Sie die Listen nach Einträgen und markieren Sie jene, die archivieren möchten. Wählen Sie *Aktion > Archiv*.

::: warning
<!--Im Archivierungsvorgang wird der Status von Abwesenheitszeiten auf *Abgebrochen* gesetzt.-->
Archivierte Abwesenheiten werden weiterhin in den Abwesenheitsanspruch eingerechnet.
:::

### Archivierte Abwesenheitszeiten anzeigen

Zeigen Sie die Listenansicht *Abwesenheitszeiten > Vorgesetzte > Abwesenheitszeiten* an und wählen Sie *Filter*. Aktivieren Sie den Filter *Archived*. Mit *Aktion > Archivierung aufheben* können Sie ausgewählte Einträge wieder aktivieren.

### Abwesenheitsansprüche archivieren

Ist diese Erweiterung installiert können Abwesenheitsansprüche archiviert werden. Navigieren Sie nach *Abwesenheitszeiten > Vorgesetzte > Abwesenheitsansprüche*. Filtern Sie die Listen nach Einträgen und markieren Sie jene, die archivieren möchten. Wählen Sie *Aktion > Archiv*.

::: warning
Im Archivierungsvorgang werden alle verknüpften Abwesenheitszeiten ebenfalls archiviert.
:::

### Archivierte Abwesenheitsansprüche anzeigen

Zeigen Sie die Listenansicht *Abwesenheitszeiten > Vorgesetzte > Abwesenheitsansprüche* an und wählen Sie *Filter*. Aktivieren Sie den Filter *Archived*. Mit *Aktion > Archivierung aufheben* können Sie ausgewählte Einträge wieder aktivieren.
