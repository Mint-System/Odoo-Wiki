---
title: Schweizer KMU-Kontenplan
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Schweizer KMU-Kontenplan

Odoo bietet eine Vorlage für den Schweizer KMU-Kontenplan. Wenn die Vorlage aktiviert wird, werden ausgewählte Konten von Odoo verwaltet.

Hier folgt eine Übersicht der wichtigsten Konten und Konten-Gruppen, die von Odoo verwaltet werden.

[[TOC]]

## 1001 Bargeld

Das Bargeld-Konto wird vom gleichnamigen Journal "Bargeld" verwaltet.

## 1021 Bankzwischenkonto

Dieses Konto wird für Konto-Transfers verwendet. Wenn Sie eine Überweisung im Bargeld- oder Bank-Journal erfassen, wird diese auf das Konto 1021 verbucht. Die Aus- und Einzahlung der Überweisung werden mit diesem Konto abgeglichen.

Siehe [Bank-Journal anzeigen](Accounting.md#Bank-Journal%20anzeigen), [Standardkonten verwalten](Accounting.md#Standardkonten%20verwalten).

## 1022 Ausstehende Quittungen/Eingänge

Das Konto 1023 ist für Debitoren-Zahlungen. Wenn Debitoren-Rechnungen indirekt bezahlt werden, beispielsweise mit einer Kreditkarte im Webshop, werden diese Zahlungen als Quittungen verbucht. Wenn die Abstimmung des Bankkonto (nach Auszahlung durch Dritte) erfolgt, müssen Gutschriften mit den Buchungszeilen verknüpft werden.

Siehe [Standardkonten verwalten](Accounting.md#Standardkonten%20verwalten).

## 1023 Ausstehende Zahlungen

Das Konto 1023 ist für Kreditoren-Zahlungen. Wenn Kreditoren-Zahlungen erstellt werden, wird der Betrag auf dieses Konto gebucht. Wenn die Abstimmung (nach Zahlung in eBanking mit SEPA-Datei) erfolgt, ordnet man die Belastung auf dem Bankkonto 1024 den Zahlungen auf dem Konto 1023 zu.

Siehe [Standardkonten verwalten](Accounting.md#Standardkonten%20verwalten).

## 1024 Bank

Dieses Konto ist mit dem Journal "Bank" verknüpft.

Siehe [Bank-Journal anzeigen](Accounting.md#Bank-Journal%20anzeigen).

## 102X Bank

Wenn Sie neue Bank-Journale anlegen, werden diese fortlaufen vom letzten Bankkonto weiternummeriert.

Siehe [Bank-Journal erfassen](Accounting.md#Bank-Journal%20erfassen).

## 10901 Liquiditätstransfer

Das ist das "Internes Transferkonto".

Siehe [Standardkonten verwalten](Accounting.md#Standardkonten%20verwalten).

## 1100 Debitoren

Wenn Sie eine Kunden-Rechnung erfassen, wird der Rechnungsbetrag auf dieses Konto verbucht.

::: tip
Es gibt nur ein Debitoren-Konto für Journale vom Typ *Verkauf*.
:::

## 1170 Vorsteuer (MwSt.) auf Material, Waren, Dienstleistungen, Energie

Bei Einkäufen wird der Vorsteuerabzug hier verbucht.

Siehe [Mehrwertsteuer-Konto festlegen](Accounting%20Tax.md#Mehrwertsteuer-Konto%20festlegen).

## 1176 Forderungen Quellensteuer

Wenn Sie nach der Mehrwertsteuer-Abrechnung eine Forderung gegenüber der Steuerverwaltung erhalten, wird der Betrag auf dieses Konto verbucht.

Siehe [Steuergruppen anzeigen](Accounting%20Tax.md#Steuergruppen%20anzeigen).

## 2000 Kreditoren

Wenn Sie eine Lieferanten-Rechnung erfassen, wird der Rechnungsbetrag auf dieses Konto verbucht.

::: tip
Es gibt nur ein Kreditoren-Konto für Journale vom Typ *Einkauf*.
:::

## 2200 Geschuldete MwSt. (Umsatzsteuer)

Bei Verkäufen wird der MWST-Betrag hier verbucht.

Siehe [Mehrwertsteuer-Konto festlegen](Accounting%20Tax.md#Mehrwertsteuer-Konto%20festlegen).

## 2201 Zu zahlende MwSt.

Wenn Sie die Mehrwertsteuer-Abrechnung verbuchen, wird der zu zahlende Betrag auf diesem Konto verbucht.

Siehe [Steuergruppen anzeigen](Accounting%20Tax.md#Steuergruppen%20anzeigen).

## 28XX Eigenkapital

Bereich wird als Konto für die Kapitaleinlage in der Bilanz verwendet.

## 29XX Gewinnvortrag / Verlustvortrag

Wird für Gewinn- und Verlust-Vortrag in der Bilanz verwendet.

## 3200 Warenverkauf (Handel)

Ist das Standard-Ertragskonto für das Journal "Kundenrechnungen".

Siehe [Journal Kundenrechnungen anzeigen](Invoicing.md#Journal%20Kundenrechnungen%20anzeigen).

## 3801 Rabatte und Preisnachlässe

Ist als Skonto-Ertragskonto hinterlegt.

Siehe [Standardkonten verwalten](Accounting.md#Standardkonten%20verwalten).

## 3806 Wechselkursdifferenzen

Ist als Ertragskonto für das Journal "Wechselkursdifferenz" hinterlegt.

Siehe [Standardkonten verwalten](Accounting.md#Standardkonten%20verwalten).

## 4200 Materialkosten (Handel)

Ist das Standard-Aufwandskonto für das Journal "Lieferantenrechnungen".

Siehe [Journal Lieferantenrechnungen anzeigen](Invoicing.md#Journal%20Lieferantenrechnungen%20anzeigen).

## 4901 Rabatte und Preisnachlässe

Ist als Skonto-Verlustkonto hinterlegt.

Siehe [Standardkonten verwalten](Accounting.md#Standardkonten%20verwalten).

## 4906 Wechselkursdifferenzen

Ist als Verlustkonto für das Journal "Wechselkursdifferenz" hinterlegt.

Siehe [Standardkonten verwalten](Accounting.md#Standardkonten%20verwalten).

## 4992 Bargelddifferenz Gewinn

Erlöskonto für Währungsdifferenzen der Journale "Bargeld", "Bank" und weitere Journale dieses Typs.

Siehe [Bank-Journal anzeigen](Accounting.md#Bank-Journal%20anzeigen).

## 4991 Bargelddifferenz Verlust

Verlustkonto für Währungsdifferenzen des Journals "Bargeld", "Bank" und weitere Journale dieses Typs.

Siehe [Bank-Journal anzeigen](Accounting.md#Bank-Journal%20anzeigen).

## 999999 Unverteilte Gewinne/Verluste

Konto ausserhalb der Bilanz. Wird für Gewinn- und Verlust-Vortrag verwendet.