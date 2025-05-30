---
title: Zahlungsabgleich
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---
# Zahlungsabgleich

## Begriffe

### camt

camt steht für cash management. Die Informationsdateien werden durch die elektronischen Bankingsysteme der Banken dem Geschäftskunden automatisch oder auf Abruf zur Verfügung gestellt. 

Man unterscheidet folgende camt-Nachrichten:
- camt.052 für untertägige Kontoauszüge, Vormerkposten (vorher MT942-Datei)
- camt.053 für gebuchte Kontoauszüge (vorher MT940 und MT950-Datei)
- camt.054 für Details zu Sammelbuchungen (vorher DTI)
- camt.056 für Recall im Überweisungssystem bei Fehlern und irregulären Vorgängen
 
Die Dateien camt053 und camt054 kann durch Odoo im App Buchhaltung eingelesen und verarbeitet werden. 

Durch die Angabe von Detailinformationen wie Bankdaten der Buchungs-Gegenseite, Mandat-ID und EndToEndId ist die Zuordnung von Zahlungen zu "Offene Posten" einfacher als mit den alten Formaten.

Für Odoo wählen Sie das Format *camt.053* um die von der Bank verbuchten Belege in den Kontoauszügen zu importieren. 

### pain 

pain steht für Payment Initiation und ist ein XML basiertes Format im ISO 20022-Standard.

pain-Meldungen gehören zur Kategorie **Zahlungsverkehr** und betreffen Überweisungen und Lastschriften. Sie werden zum Austausch von Nachrichten zwischen Kunde und Bank eingesetzt. In der Schweiz wird für die Zahlung (Überweisungsaufträge) das Format **pain.001** (Customer Credit Transfer Initiation, also Kunde > Bank) verwendet.
In Odoo wird für die das Erstellen des Zahlungsfile die Methode SEPA eingesetzt. 

## Zahlungsausgleich

### Rechnung (Kreditor) erfassen

Damit ein Zahlungsausgleich durchgeführt werden kann, müssen zuerst die   Kreditoren-Rechnungen über das App Buchhaltung erfasst werden. Für eine einfache Archivierung lohnt es sich, die Rechnung vorgängig als PDF-Datei zu scannen und mit der Buchung abzulegen. Eine neue Rechnung (Kreditor) wird über das *App > Buchhaltung > Dashboard im Journal Eingangsrechnungen* den Befehl *Erstellen* erfasst.

![](attachments/Best%20Practice%20Zahlungsabgleich%20Dashboard.png)

Erfassen Sie die Angaben zur Rechnung wie Lieferant, Rechnungsdatum, Buchungsdatum und Fälligkeit. Das Buchungsdatum und Fälligkeitsdatum soll mit der manuellen Verbuchung identisch mit dem Zahlungsdatum des Bankbeleges sein.
    
Geben Sie in den Rechnungspositionen die Menge, den Stückpreis und die Art der Mehrwertsteuer ein. Dabei wird unterschieden zwischen den verschiedenen Mehrwertsteuersätze (2.5%, 7.7%) und ob der Betrag inklusive Mehrwertsteuer ist.

Oben rechts mit der Büroklammer kann die eingescannte Rechnung als PDF abgelegt werden. Nach dem Erfassen aller Angaben klicken Sie oben links auf *Bestätigen* damit der Knopf *Zahlung Erfassen* erscheint.

![](attachments/Best%20Practice%20Zahlungsabgleich%20Entwurf.png)

![](attachments/Best%20Practice%20Zahlungsabgleich%20Rechnung.png)

### Manueller Zahlungsabgleich

Wird die Zahlung manuell ausgelöst, so wählen Sie bei der Zahlungsmethode *Manuell* aus. Setzen Sie auch das effektive Zahlungsdatum der Bankzahlung ein.

Eine andere Art der Zahlung ist das Aufbereiten der Zahlungen in einer SEPA-Datei, die anschliessend im Ebanking eingelesen wrid.

![](attachments/Best%20Practice%20Zahlungsabgleich%20Zahlung.png)

Der Status wechselt zu *In Zahlung* und unten beim Betrag steht das Valutadatum.

![](attachments/Best%20Practice%20Zahlungsabgleich%20In%20Zahlung.png)
