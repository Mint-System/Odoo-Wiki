---
title: HR Holidays Working Time
description: Aus Abwesenheiten Anwesenheiten erstellen.
tags:
- HowTo
- Drittanbieter
prev: ./hr-holidays
---
# HR Holidays Working Time
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_holidays_working_time`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/16.0/hr_holidays_working_time>

## Beschreibung

Mit dieser Erweiterungen werden für bestätigte Abwesenheiten von ausgewählten Abwesenheitsarten Anwesenheiten erstellt. Damit können Abwesenheiten wie der Besuch einer Konferenz oder bezahlte Krankheit an Mitarbeitende mit Arbeitszeit vergütet werden. 

::: warning
Die Anwesenheiten werden bei Klick auf *Genehmigen* erstellt. Der Schritt Genehmigung ist nicht aktiv wenn die Genehmigung der Abwesenheitsart auf *Keine Validierung* eingestellt ist. 
:::

## Konfiguration

### Abwesenheitsart für Anwesenheiten konfigurieren

Navigieren Sie nach *Abwesenheiten > Konfiguration > Abwesenheitsarten* und öffnen Sie eine Abwesenheitsart, für welche die Abwesenheiten als Anwesenheiten erfasst werden soll. Aktivieren Sie die Option *Erstelle als Anwesenheit*. Optional konfigurieren Sie diese Felder:

* **Kalender**: Bestimmen Sie die Arbeitszeit zur Berechnung der Anwesenheiten. Wenn die Auswahl leer ist, wird die Arbeitszeit des Mitarbeitenden verwendet.
* **Maximale Stunden Abwesenheit**: Bei Überschreitung dieser Stundenzahl der Abwesenheit werden keine Anwesenheiten erstellt. Wenn die Eingabe leer ist, wird kein Maximum definiert.

## Verwendung

### Anwesenheiten von Abwesenheit anzeigen

Zeigen Sie eine bestätige Abwesenheit an, die eine Abwesenheitsart mit Option *Erstelle als Anwesenheit* hat. Klicken Sie auf *Ansicht Anwesenheiten*.

### Anwesenheiten ohne Abwesenheit anzeigen

Rufen Sie *Anwesenheiten > Anwesenheiten* auf. Wählen Sie *Filter > Ohne Abwesenheiten*. Nun werden die Anwesenheiten, die mit einer Abwesenheit verknüpft sind, ausgeblendet.
