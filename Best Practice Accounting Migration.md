---
title: Migration Buchhaltung
description: Wie Sie am besten ihre Buchhaltung nach Odoo migirieren.
tags:
- Best-Practice
prev: ./best-practice
---

# Migration Buchhaltung

Wir empfehlen zwischen drei Ansätzen zur Migration der Buchhaltung nach Odoo auszuwählen:

* Migration mit Neueröffnung
* Migration mit offenen Posten
* Migration mit Erfolgsrechnung
* Migration der gesamten Buchhaltung

## Migration mit Neueröffnung

Bei diesem Ansatz schliessen Sie die Buchhaltung zu einem bestimmten Stichtag ab. Sie führen eine Saldierung der Konten durch und stellen sicher, dass keine offene Forderungen und Verbindlichkeiten bestehen.

In Odoo passen Sie die Aufwands- und Erfolgs-Konten im Kontenplan an. Zum Start der Buchhaltung erstellen Sie eine Eröffnungsbuchung anhand der Bilanz.

## Migration mit offenen Posten

Bei diesem Ansatz schliessen Sie die Buchhaltung zu einem bestimmten Stichtag ab. Sie exportieren die offenen Forderungen und Verbindlichkeiten.

In Odoo passen Sie die Aufwands- und Erfolgs-Konten im Kontenplan an. Sie importieren die offenen Forderungen und Verbindlichkeit als Buchungssätze. Zuletzt erstellen Sie eine Eröffnungsbuchung anhand der Bilanz und passen die Konten für Forderungen und Verbindlichkeiten an.

## Migration mit Erfolgsrechnung

Wenn Sie die Buchungen im Zusammenhang mit der Erfolgsrechnung migrieren möchten, wählen Sie diesen Ansatz. Schliessen Sie die Buchhaltung zu einem bestimmten Stichtag ab. Exportieren Sie alle Buchungen im Konten-Bereich 3000 bis 8999.

Nehmen Sie die Odoo-Buchhaltung in Betrieb und importieren Sie die Buchungszeilen aus der Erfolgrechnung.

## Migration der gesamten Buchhaltung

Wir empfehlen Ihnen diesen Ansatz nicht zu verfolgen. Dies aus folgenden Gründen:

* Odoo hat eine Logik wie Konten im Bereich 1000 benannt und erstellt werden.
* Für die Mehrwertsteuerabrechnung setzt Odoo nebst ausgewählten Konto, auch die Markierung der Mehrwertsteuer-Buchungszeilen voraus
* Der Gewinn- und Verlust-Vortrag setzt die Verwendung von bestimmten Konten voraus
* Die Schweizer Finanzberichte von Odoo enthalten Filter für Konten im Bereich 1000, 2000 und 9000

Eine Migration der gesamten Buchhaltung würde bedeuten, dass Sie die Logik der Finanzberichte, Mehrwertsteuer und Bank-Journale anpassen müssen.