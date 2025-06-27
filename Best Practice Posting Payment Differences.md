---
title: Buchung Zahlungsdifferenzen
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Buchung Zahlungsdifferenzen

In diesem Best Practice werden verschiedene Szenarios zur Behandlung von Zahlungsdifferenzen behandelt.

## Kunde bezahlt zu wenig

Wir nehmen das ein Kunde eine offene Rechnung bezahlt hat. Sie haben den Bankauszug mit der Zahlung importiert und stellen bei der [Abstimmung](Accounting%20Reconcile.md#Abstimmung%20durchführen) fest, dass eine Differenz besteht.

![](attachments/Best%20Practice%20Buchung%20Zahlungsdifferenzen%20Abstimmung%20mit%20Differenz.png)

Sie klicken auf Bestätigen und die Rechnung weisst die Differenz als offener Betrag aus:

![](attachments/Best%20Practice%20Buchung%20Zahlungsdifferenzen%20offener%20Betrag.png)

Den Restbetrag wollen Sie als Verlust aus Forderung verbuchen. Dazu zeigen Sie die [überfälligen Forderungen](Accounting%20Reports.md#Überfällige%20Forderungen%20anzeigen) an und filtern nach dem Kunden.

![](attachments/Best%20Practice%20Buchung%20Zahlungsdifferenzen%20überfällige%20Forderungen.png)

Nun [gleichen Sie die Forderung](Accounting%20Reconcile.md#Überfällige%20Forderungen%20abstimmen) mit der Aktion *Ausgleich* aus. Sie verbuchen den offenen Betrag auf das entsprechende Aufwandskonto.

![](attachments/Best%20Practice%20Buchung%20Zahlungsdifferenzen%20Abstimmung%20Verlust%20aus%20Forderung.png)