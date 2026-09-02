---
title: Erläuterungen
description: Beschreibt wie man bestimmte Anwendungsfälle in Odoo implementiert.
kind: explain
prev: ./
partner: Mint System
---

# Erläuterungen

{{ $frontmatter.description }}

## Bereiche

Gruppiert nach Bereich werden verschiedene Erläuterungen aufgeführt. Die Erläuterungen verweisen zur Implementation auf die HowTos.

### Abrechnung

- [Verschiedene Währungen](Explanation%20Multiple%20Currencies.md)
- [Mehrwertsteuer](Explanation%20Value%20Added%20Tax.md)
- [QR-Rechnung](Explanation%20QR-Bill.md)
- [SEPA Zahlung](Explanation%20SEPA%20Payment.md)
- [Anzahlungen](Explanation%20Downpayments.md)

### An- und Abwesenheiten

- [Definition Abwesenheitsarten](Explanation%20Definition%20HR%20Holidays%20Types.md)
- [Setup Abwesenheiten](Explanation%20Setup%20Attendance.md)
- [Arbeitszeiten und Urlaubsansprüche](Explanation%20Working%20Times%20and%20Holiday%20Allocations.md)
- [Ferien- und Überstundensaldo](Explanation%20Holiday%20and%20Vacation%20Balance.md)
- [Arbeitszeit über Zeitraum reduzieren](Explanation%20Arbeitszeit%20über%20Zeitraum%20reduzieren.md)
- [Kombination An- und Abwesenheit](Explanation%20Kombination%20An-%20und%20Abwesenheit.md)

### Buchhaltung

- [Zahlungsabgleich](Explanation%20Payment%20Reconciliation.md)
- [Kostenrechnung](Explanation%20Cost%20Accounting.md)
- [Buchung Gewinn-/Verlustvortrag](Explanation%20Posting%20of%20Profit%20or%20Loss%20Carried%20Forward.md)
- [Devisenhandel](Explanation%20Foreign%20Exchange.md)
- [Buchung Zahlungsdifferenzen](Explanation%20Posting%20Payment%20Differences.md)
- [Kreditkartenabrechnung](Explanation%20Creditcard%20Payment.md)
- [Migration Buchhaltung](Explanation%20Accounting%20Migration.md)
- [VAT-Abrechnung](Explanation%20VAT%20Billing.md)
- [OCA Finanzbuchhaltung](Explanation%20OCA%20Finanzbuchhaltung.md)
- [Eröffnung Buchhaltung](Explanation%20Open%20Accounting.md)
- [Schweizer KMU-Kontenplan](Explanation%20Schweizer%20KMU-Kontenplan.md)

### Einkauf

- [Änderung der Route während dem Einkaufsprozess](Explanation%20Changing%20the%20Route%20During%20Purchasing%20Process.md)
- [Bestellmenge Einkauf](Explanation%20Purchase%20Quantity.md)
- [Definition Stückpreis](Explanation%20Define%20Unit%20Price.md)
- [Purchase To Order](Explanation%20Purchase%20To%20Order.md)

### Einstellungen

- [Odoo Datenmanagement](Explanation%20Odoo%20Data%20Management.md)
- [Externe ID](Explanation%20External%20ID.md)
- [Datumsfelder](Explanation%20Date%20Fields.md)
- [Direct Print](Explanation%20Direct%20Print.md)
- [Portal und Backend](Explanation%20Portal%20and%20Backend.md)
- [Rollen und Berechtigungen](Explanation%20Roles%20and%20Permissions.md)

### Einstellungen E-Mail

- [E-Mail Verarbeitung](Explanation%20E-Mail%20Processing.md)
- [E-Mail Vorlagen](Explanation%20E-Mail%20Templates.md)
- [Kommunikation mit Odoo](Explanation%20Communication%20with%20Odoo.md)

### Entwicklung

- [Odoo übersetzen](Explanation%20Odoo%20Translation.md)
- [Datenbank Concurrency, Locks und Cursor](Explanation%20database%20concurrency%20Locks%20and%20Cursor.md)

### Fertigung

- [Fertigungsplanung](Explanation%20Production%20Planning.md)
- [Fertigungsauftrag](Explanation%20Manufacturing%20Order.md)
- [Verkaufsgruppen und Baugruppen](Explanation%20Sale%20and%20Assembly%20Groups.md)
- [Materialbezug in Vorgängen](Explanation%20Material%20Consumption%20in%20Operations.md)
- [Material-Reservierung](Explanation%20Material%20Reservations.md)
- [Make To Order](Explanation%20Make%20To%20Order.md)
- [Fertigung mit Subunternehmer](Explanation%20Manufacturing%20with%20Subcontractor.md)

### Kaufverträge

- [Zustände von Einkaufs- und Verkaufsaufträgen](Explanation%20States%20of%20Purchase%20and%20Sales%20Orders.md)

### Kontakte

- [Verwaltung Kontakte](Explanation%20Contacts%20Management.md)
- [Incoterms](Explanation%20Incoterms.md)

### Kundendienst

- [Kommunkation mit Kundendienst](Explanation%20Kommunkation%20mit%20Kundendienst.md)

### Lager

- [Replenishment](Explanation%20Replenishment.md)
- [Warenbedarf](Explanation%20Material%20demand.md)
- [Verschiebung Liefertermin](Explanation%20Postpone%20Delivery%20Date.md)
- [Berücksichtigung Lead-Time](Explanation%20Consideration%20Lead%20Time.md)
- [Mengeneinheiten](Explanation%20Units%20of%20Quantity.md)
- [Konfiguration Lager](Explanation%20Stock%20Configuration.md)
- [Verpackungen](Explanation%20Packaging.md)
- [Scheduler](Explanation%20Scheduler.md)
- [Lager Vorgangstypen](Explanation%20Stock%20Operation%20Types.md)

### Projekte

- [Projekte initialisieren](Explanation%20Projects.md)
- [Aufgabenphasen](Explanation%20Task%20Types.md)

### Personalabrechung

- [Lohnrekapitulation](Explanation%20Salary%20Recap.md)
- [Abrechnung Stundenlohn](Explanation%20Settle%20Hourly%20Wages.md)
- [Rückvergütung Spesen](Explanation%20Expense%20Compensation.md)

### Verkauf

- [Kit Bereitstellung](Explanation%20Kit%20Provision.md)
- [Auswertung Auftragspositionen](Explanation%20Analyse%20Sale%20Order%20Lines.md)
- [Abonnements](Explanation%20Subscriptions.md)
- [Dienstleistungen mit Nachtzuschlag](Explanation%20Services%20with%20Night%20Surcharge.md)
- [Verrechnung Spesen](Explanation%20Charge%20Expenses.md)

## Anwendungsfälle

Komplexere vertikale Odoo Implementationen werden hier mit Anwendungsfällen beschrieben.

### [Schokoladenfabrik](Use%20Case%20Chocolate%20Factory.md)

In der Lebensmittelbranche müssen mehrstufige Qualitätskontrollen für Rohstoffe, Halbfabriakte und Fertigprodukte absolviert werden. In diesem Anwendungsfall wird beschrieben wie mit Odoo mehrstufige Routen für den Einkauf, die Fertigung und das Lager konfiguriert werden und wie diese mit der Qualitätskontrolle verknüpft werden.

Hier geht es zum [Anwendungsfall - Schokoladenfabrik](Use%20Case%20Chocolate%20Factory.md).

### [Weinhändler](Use%20Case%20Weinhändler.md)

Im Weinhandel müssen gekaufte Weine nicht als Aufwand verbucht werden, sondern als Vermögen (Einkauf=Vermögen und nicht Einkauf=Aufwand). In diesem Anwendungsfall wird beschrieben wie Odoo eingerichtet werden kann, damit eine automatische Bestandsbewertung für das Kellerbuch gelingt.

Hier geht es zum [Anwendungsfall Weinhändler](Use%20Case%20Weinhändler.md)

## Beispiel-Daten

Mit Beispiel-Daten werden Anwendungsfälle illustriert und die Implementation von Odoo unterstützt.

- [Definition Beispiel Fahrrad](Explanation%20Definition%20Example%20Bicycle.md)
- [Struktur Lohnabrechnung](Explanation%20Payroll%20Structure.md)
