---
title: Kreditkartenabrechnung
description: Erfassen und abgleichen von Kreditkartenzahlungen
tags:
- Best-Practice
prev: ./best-practice
---

# Kreditkartenabrechnung

In diesem Best Practice wird der Umgang mit Kreditkartenabrechnungen erläutert.

## Konto Kreditkarte erstellen

Die Kreditkartenzahlungen sollen auf bestimmtes Konto verbucht werden. Dazu können Sie ein nues [Konto erfassen](Finance%20Accounting.md#Konto%20erfassen):

* **Code**: 1002
* **Name**: Kreditkarte
* **Typ**: Umlaufvermögen
* **Erlaube Abstimmung**: Aktivieren

## Journal Kreditkarte erstellen

Zur Erfassung der Keditkartenzahlungen braucht es ein Bank-Journal. Erstellen Sie ein [Bank-Journal](Finance.md#Bank-Journal%20erfassen) mit diesen Angaben:

* **Journalbezeichnung**: Kreditkarte
* **Typ**: Bank
* **Kurzzeichen**: KRED

Im Tab *Zahlungsausgänge* wählen Sie das Kreditkarten-Konto bei *Konto für ausstehende Zahlungen* aus.

## Zahlungsmethode Kreditkarte erstelle

#FIXME 

## Kreditkartenzahlung erfassen

Wenn Sie eine Rechnung mit der Kreditkarte bezahlt haben, rufen Sie die entsprechende Rechnung auf und [erfassen eine Zahlung](Invoicing.md#Zahlung%20erfassen). Dabei wählen Sie als *Kreditkarte* als *Journal*.

Die Rechnung wird als *In Zahlung* markiert und wartet auf den Abgleich der Zahlung.

## Kreditkartenzahlungen abgleichen

Ihre Kreditkarte wurde abgerechnet und Sie haben den Kontoauszug importiert. Wenn Sie die [Abstimmung durchführen](Finance%20Reconcile.md#Abstimmung%20durchführen) wählen Sie für die Position Kreditkartenabrechnung alle mit der Kreditkarten getätigten Zahlungen aus.
Die Position der Abrechnung und der Kreditkartenzahlungen sollten sich ausgleichen. Bei Zahlungsdifferenzen und Gebühren kann eine manuelle Buchung erstellt werden.