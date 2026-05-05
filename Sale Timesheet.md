---
title: Verkauf Zeiterfassung
description: Dienstleistungen mit Verkauf, Projekt und Zeiterfassung abwickeln.
kind: howto
section: true
prev: ./sale
---

# Verkauf Zeiterfassung

![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

## Erweiterungen

| Erweiterung                                                                                       | Beschreibung                                                                                |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [Sale Project Key](Sale%20Project%20Key.md)                                                       | Projekt-Nummer in Listenansicht von Verkaufsaufträgen anzeigen.                             |
| [Sale Project Link](Sale%20Project%20Link.md)                                                     | Bestehendes Projekt mit Angebot verlinken.                                                  |
| [Sale Project Phase Estimate](Sale%20Project%20Phase%20Estimate.md)                               | Verlinkt Auftragszeilen mit Schätzungen von Projektphasen.                                  |
| [Sale Timesheet Billable](Sale%20Timesheet%20Billable.md)                                         | Auswahl-Filter für Auftragszeilen mit verrechenbaren Produkten auf Zeiterfassungseinträgen. |
| [Sale Timesheet Estimate Report](Sale%20Timesheet%20Estimate%20Report.md)                         | Übersicht der Projektschätzungen auf Bericht Zeiterfassung anzeigen.                        |
| [Sale Timesheet Report Group Invoice Type](Sale%20Timesheet%20Report%20Group%20Invoice%20Type.md) | Gruppiert die Zeilen im Bericht Zeiterfassung nach Abrechnungstyp.                          |
| [Sale Timesheet Report Project Details](Sale%20Timesheet%20Report%20Project%20Details.md)         | Zeige Zeitraum und Projektname auf Bericht Zeiterfassung.                                   |

## Abrechnung

### Dienstleistung für Zeiterfassung konfigurieren

Mit Verkauf, Projekt und Zeiterfassung können Sie Dienstleistung mit Zeiterfassung erstellen. Navigieren Sie nach _Verkauf > Produkte > Produkte_ erstellen oder öffnen Sie ein Dienstleistungs-Produkt. Hier die wichtigsten Konfigurationen:

- **Produktart**: Muss als Dienstleistung festgelegt sein.
- **Abrechnungspolitik**: Basis für Abrechnung der Dienstleistungseinheiten.
- **Bei Auftrag erstellen**: Projekt, Aufgabe oder beides bei Bestätigungs des Auftrags erstellen.
  _ **Aufgabe**: Für die Dienstleistung wird eine Projektaufgabe erstellt
  _ **Projekt & Aufgabe**: Für die Dienstleistung wird ein Projekt und eine Aufgabe erstellt \* **Projekt**: Für die Dienstleistung wird ein Projekt generiert
  **Projekt**: Bestimmen Sie das Projekt für die zu erstellende Aufgabe
- **Projekt-Vorlage**: Bestimmen Sie die Projektvorlage für das zu erstellende Projekt

### Bestehendes Projekt verknüpfen

Wenn Sie ein bestehendes Projekt mit Dienstleistungen aus einem Verkaufsauftrag verknüpfen möchten, müssen Sie mindestes eine Dienstleistung als Auftragszeile hinzugefügt haben.

![Verkauf Projekt Verknüpfung](attachments/Verkauf%20Projekt%20Verknüpfung.gif)
