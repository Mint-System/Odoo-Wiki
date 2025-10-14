---
title: Verkauf Projekt
description: Dienstleistungen mit Verkauf und Projekt abwickeln.
kind: howto
prev: ./sale
---

# Verkauf Projekt

![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

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
