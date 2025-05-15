---
title: Rückvergütung Spesen
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Rückvergütung Spesen

Bei der Rückvergütung von Spesen haben Sie verschiedene Möglichkeiten. Die Szenarien werden hier erläutert.

## Lieferantenrechnung

Standardmässig erstellt Odoo eine Lieferantenrechnung mit den Spesen für den Mitarbeitenden. Sie können eine SEPA-Zahlung erfassen und mittel Stapelzahlung ins eBanking hochladen. 

## Lohnabrechnung

Wenn Sie den Spesenbericht genehmigen, haben Sie eine Option um die Spesen mit der nächsten Lohnabrechnung auszuzahlen. Sie können an diesem Punkt auf eine Journalbuchung verzichten, sofern die Aufwandsbuchung der Spesen im Lohnabrechnung geschieht.

## Lohnabrechnung und Mehrwertsteuer

Wenn die Aufwandsbuchung der Spesenabrechnung in der Lohnabrechnung erfolgt, kann die Mehrwersteuer nicht geltend gemacht werden. In diesem Falls muss der Spesenbericht als Lieferantenrechnung erfasst werden und die Aufwandsbuchung in der Lohnabrechnung auf ein Durchlaufkonto, beispielsweise *2020 Spesendurchlaufkonto* verbucht werden. Anschliessend können Sie die Journalbuchung mit der Spesendurchlauf-Buchung abgleichen.

## Kreditkarte

Wenn Sie eine Firmen-Kreditkarte haben, können Sie diese Mitarbeitenden zur Bezahlung von Spesen zur Verfügung stellen. Erstellen Sie ein Journal *Kreditkarte* vom Typ *Bank*. Bei der Abrechnung des Spesenbericht wählen Sie das Journal aus. Die erstellte Buchung wird auf das Konto *Kreditkarte* verbucht.