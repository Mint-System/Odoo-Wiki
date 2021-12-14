---
tags:
- Best-Practice
prev: ./best-practice
---
# Best Practice: Zahlungsabgleich

## Begriffe

### camt

camt steht für cash management. Die Informationsdateien werden durch die elektronischen Bankingsysteme der Banken dem Geschäftskunden automatisch oder auf Abruf zur Verfügung gestellt. 

Man unterscheidet folgende camt-Nachrichten:
- camt.052 für untertägige Kontoauszüge, Vormerkposten (vorher MT942-Datei)
- camt.053 für gebuchte Kontoauszüge (vorher MT940 und MT950-Datei)
- camt.054 für Details zu Sammelbuchungen (vorher DTI)
- camt.056 für Recall im Überweisungssystem bei Fehlern und irregulären Vorgängen
 
Die Dateien camt053 und camt054 kann durch Odoo im App Finanzen eingelesen und verarbeitet werden. 

Durch die Angabe von Detailinformationen wie Bankdaten der Buchungs-Gegenseite, Mandat-ID und EndToEndId ist die Zuordnung von Zahlungen zu "Offene Posten" einfacher als mit den alten Formaten.

Für Odoo wählen sie das Format *camt.053* um die von der Bank verbuchten Belege in den Kontoauszügen zu importieren. 

### pain 

pain steht für Payment Initiation und ist ein XML basiertes Format im ISO 20022-Standard.

pain-Meldungen gehören zur Kategorie **Zahlungsverkehr** und betreffen Überweisungen und Lastschriften. Sie werden zum Austausch von Nachrichten zwischen Kunde und Bank eingesetzt. In der Schweiz wird für die Zahlung (Überweisungsaufträge) das Format **pain.001** (Customer Credit Transfer Initiation, also Kunde > Bank) verwendet.
In Odoo wird für die das Erstellen des Zahlungsfile die Methode SEPA eingesetzt. 

## Zahlungsausgleich

### Rechnung (Kreditor) erfassen

Damit ein Zahlungsausgleich durchgeführt werden kann, müssen zuerst die   Kreditoren-Rechnungen über das App Finanzen erfasst werden. Für eine einfache Archivierung lohnt es sich, die Rechnung vorgängig als PDF-Datei zu scannen und mit der Buchung abzulegen. Eine neue Rechnung (Kreditor) wird über das *App > Finanzen > Dashboard im Journal Eingangsrechnungen* den Befehl *Erstellen* erfasst.

![](assets/Best%20Practice%20Zahlungsabgleich%20Dashboard.png)

Erfassen sie die Angaben zur Rechnung wie Lieferant, Rechnungsdatum, Buchungsdatum und Fälligkeit. Das Buchungsdatum und Fälligkeitsdatum soll mit der manuellen Verbuchung identisch mit dem Zahlungsdatum des Bankbeleges sein.
    
Geben sie in den Rechnungspositionen die Menge, den Stückpreis und die Art der Mehrwertsteuer ein. Dabei wird unterschieden zwischen den verschiedenen Mehrwertsteuersätze (2.5%, 7.7%) und ob der Betrag inklusive Mehrwertsteuer ist.

Oben rechts mit der Büroklammer kann die eingescannte Rechnung als PDF abgelegt werden. Nach dem Erfassen aller Angaben klicken sie oben links auf *Bestätigen* damit der Knopf *Zahlung Erfassen* erscheint.

![](assets/Best%20Practice%20Zahlungsabgleich%20Entwurf.png)

![](assets/Best%20Practice%20Zahlungsabgleich%20Rechnung.png)

### Manueller Zahlungsabgleich

Wird die Zahlung manuell ausgelöst, so wählen sie bei der Zahlungsmethode *Manuell* aus. Setzen sie auch das effektive Zahlungsdatum der Bankzahlung ein.

Eine andere Art der Zahlung ist das Aufbereiten der Zahlungen in einer SEPA-Datei, die anschliessend im Ebanking eingelesen wrid.

![](assets/Best%20Practice%20Zahlungsabgleich%20Zahlung.png)

Der Status wechselt zu *In Zahlung* und unten beim Betrag steht das Valutadatum.

![](assets/Best%20Practice%20Zahlungsabgleich%20In%20Zahlung.png)
    
### Automatisierter Zahlungsausgleich

Link zu SEPA-Zahlung erstellen

### Auslandzahlungen mit XML-Dateien

Werden Zahlungen aus Odoo mittels der Datei SEPA-XML ins EBanking importiert, so lohnt es sich die importierten Zahlungen im EBanking nochmals zu überprüfen.
Die Raiffeisenbank zum Beispiel, import die Zahlung nicht als SEPA sondern als Typ "Andere SHA". Das hat zur Folge, dass die Geühren der Zahlung einiges höher sind. Statt CHF 0.20 je Zahlung können bis CHF 15.00 anfallen. Korrigieren Sie gegebenenfalls die Zahlungsart auf SEPA.


#FIXME 

