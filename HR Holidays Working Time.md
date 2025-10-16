---
title: HR Holidays Working Time
description: Aus Abwesenheiten Anwesenheiten erstellen.
kind: howto
partner: Mint-System
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
Die Anwesenheiten werden bei Klick auf _Genehmigen_ erstellt. Der Schritt Genehmigung ist nicht aktiv wenn die Genehmigung der Abwesenheitsart auf _Keine Validierung_ eingestellt ist.
:::

## Konfiguration

### Abwesenheitsart für Anwesenheiten konfigurieren

Navigieren Sie nach _Abwesenheiten > Konfiguration > Abwesenheitsarten_ und öffnen Sie eine Abwesenheitsart, für welche die Abwesenheiten als Anwesenheiten erfasst werden soll. Aktivieren Sie die Option _Erstelle als Anwesenheit_. Optional konfigurieren Sie diese Felder:

- **Kalender**: Bestimmen Sie die Arbeitszeit zur Berechnung der Anwesenheiten. Wenn die Auswahl leer ist, wird die Arbeitszeit des Mitarbeitenden verwendet.
- **Maximale Stunden Abwesenheit**: Bei Überschreitung dieser Stundenzahl der Abwesenheit werden keine Anwesenheiten erstellt. Wenn die Eingabe leer ist, wird kein Maximum definiert.

## Verwendung

### Anwesenheiten von Abwesenheiten anzeigen

Zeigen Sie eine bestätige Abwesenheit an, die eine Abwesenheitsart mit Option _Erstelle als Anwesenheit_ hat. Klicken Sie auf _Ansicht Anwesenheiten_.

### Anwesenheiten ohne Abwesenheiten anzeigen

Rufen Sie _Anwesenheiten > Anwesenheiten_ auf. Wählen Sie _Filter > Ohne Abwesenheiten_. Nun werden die Anwesenheiten, die mit einer Abwesenheit verknüpft sind, ausgeblendet.
