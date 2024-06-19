---
title: Kreditkartenabrechnung
description: Erfassen und abgleichen von Kreditkartenzahlungen
tags:
- Best-Practice
prev: ./best-practice
---

# Kreditkartenabrechnung

In diesem Best Practice wird der Umgang mit Kreditkartenabrechnungen erläutert.

## Konto Kreditkarte Zahlungen erstellen

Die Kreditkartenzahlungen sollen auf bestimmtes Konto verbucht werden. Dazu können Sie ein neues [Konto erfassen](Accounting%20Finance.md#Konto%20erfassen):

* **Code**: 1023k
* **Name**: Kreditkarte Zahlungen
* **Typ**: Umlaufvermögen
* **Erlaube Abstimmung**: Aktivieren

## Journal Kreditkarte erstellen

Zur Erfassung der Keditkartenzahlungen können Sie optional ein Bank-Journal erstellen. Erstellen Sie ein [Bank-Journal](Accounting.md#Bank-Journal%20erfassen) mit diesen Angaben:

* **Journalbezeichnung**: Kreditkarte
* **Typ**: Bank
* **Kurzzeichen**: KRED

Im Tab *Zahlungsausgänge* wählen Sie bei *Konto für ausstehende Zahlungen* das Konto *Kreditkarte Zahlungen* aus.

## Zahlungsmethode Kreditkarte erstellen

Damit Sie Kreditkarten-Zahlungen erfassen können, braucht es eine neue [Zahlungsmethode](Accounting%20Payments.md#Zahlungsmethode%20für%20Lieferantenrechnungen%20hinzufügen) *Kreditkarte* auf dem ausgewählten Bank-Journal. Wählen Sie bei *Konto für ausstehende Zahlungen* das Kreditkarten-Konto aus. Bei *Konto für ausstehende Zahlungen* wählen Sie das Konto *Kreditkarte Zahlungen* aus.

## Kreditkartenzahlung erfassen

Wenn Sie eine Rechnung mit der Kreditkarte bezahlt haben, rufen Sie die entsprechende Rechnung auf und [erfassen Sie eine Zahlung](Invoicing.md#Zahlung%20erfassen). Wählen Sie *Kreditkarte* als *Zahlungsmethode*.

Die Rechnung wird als *In Zahlung* markiert und erwartet die Abstimmung der Zahlung.

## Kreditkartenzahlung ohne Rechnung erfassen

Wenn Sie keine Rechnung zur Kreditkartenzahlung haben, können Sie direkt eine [ausgehende Zahlung erfassen](Accounting%20Payments.md#Ausgehende%20Zahlung%20erfassen). Wählen Sie *Kreditkarte* als *Zahlungsmethode*.

## Kreditkartenzahlungen direkt abgleichen

Ihre Kreditkarte wurde abgerechnet und Sie haben den Kontoauszug importiert. Wenn Sie die [Abstimmung durchführen](Accounting%20Reconcile.md#Abstimmung%20durchführen) wählen Sie für die Position Kreditkartenabrechnung alle mit der Kreditkarte getätigten Zahlungen aus.
Die Position der Abrechnung und Positionen der Kreditkartenzahlungen müssen sich ausgleichen. Bei Zahlungsdifferenzen und Gebühren erstellen Sie eine manuelle Buchung.

![](attachments/Best%20Practice%20Creditcard%20Payment%20Reconcile.png)

## Kreditkartenzahlungen indirekt abgleichen

Sie können die Position der Kreditkartenabrechnung auf das Konto *Kreditkarte Zahlungen* buchen. Dann haben Sie auf diesem Konto die Zahlungen und die Abrechnung und können diese [Buchungszeilen abstimmen](Accounting%20Reconcile.md#Buchungszeilen%20abstimmen).