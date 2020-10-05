# Initialisierung
![icons_odoo_survey](assets/icons_odoo_survey.png)

Richten sie ihre Odoo-Umgebung ein.

## Unternehmensdaten

Die Unternehmensdaten werden an vielen Stellen im System verwendet. Unter anderem für die Rechnung, für Angebote, für E-Mails und weiteres. Füllen sie bitte diese Daten aus und verwenden sie ein Logo mit folgenden Details:
* Datenformat: JPG oder PNG
* Grösse: Empfehlung Breite 300 pixel

Benötigte Informationen:
* Unternehmensname, Adresse, Telefon
* EMail, Webseite (Domain)
* Bankverbindung - Name, Kontonummer
* IBAN Nummer
* Unternehmensnummer, MwSt Nr. (wenn vorhanden)

## Enterprise Abonnement

Beim ersten Login erscheint die Meldung, dass die Odoo-Installation nicht aktiviert ist. 

![](assets/Intialisierung%20Odoo%20Enterprise%20aktivieren.png)

## Mehrwertsteuer

Bevor sie im System die erste Rechnung erstellen sollten sie die Abklärungen machen ob sie überhaupt MwSt. pflichtig sind oder nicht. Es gilt die Regel:

**Ab einem Jahresumsatz von CHF 100’000 sind sie steuerpflichtig und müssen die MwSt. quartalsweise abrechnen. Sind sie noch nicht steuerpflichtig, können sie alle Rechnungen ohne Steuer erzeugen. Aufs neue Buchhaltungsjahr hin, schätzen sie ihren Umsatz ein.**

Sind sie noch nicht Steuerpflichtig, können sie direkt mit dem Verbuchen von Rechnungen beginnen und tragen bei der Steuer nichts ein. Sind sie Steuerpflichtig, dann arbeiten sie am besten nach der Methode Effektive
Steuerverrechnung und vereinbarten Entgelten. So ist auch die Buchhaltung eingestellt.

DIe Abrechnung nach vereinbarten Entgelten (Art. 39 Abs. 1 MWSTG) ist das Standardverfahren der eidgenössischen Steuerverwaltung.

### Abrechnung nach vereinbarten Entelten

DIe Abrechnung nach vereinbarten Entgelten (Art. 39 Abs. 1 MWSTG) ist das Standardverfahren der eidgenössischen Steuerverwaltung. Bei dieser Methode wird die MwSt fällig, sobald die Rechnung dem Kunden gestellt ist. Bezahlt dieser die Rechnung erst in einem späteren Quartal, finanzieren sie als Unternehmer die MwSt vor.

?> Beispiel: sie haben eine Physiotherapie Praxis und haben Arbeiten im Wert von CHF 1’000 ausgeführt. Am 25. Juni stellen sie dem Kunden eine Rechnung über CHF 1’080 aus
(Rechnungsbetrag plus 8% MwSt). Der Kunde bezahlt die Rechnung erst später. Als Unternehmer müssen sie die MwSt von CHF 80 vorfinanzieren und nach Abschluss des laufenden Quartals, also Anfang Juli, der Steuerverwaltung abliefern.

### Abrechnung nach vereinahmten Entgelten

Die MwSt-Abrechnung nach vereinnahmten Entgelten (Art. 39 Abs. 2 MWSTG) muss
schriftlich bei der eidg. Steuerverwaltung beantragt werden. So ist die MwSt erst fällig,
nachdem sie die Zahlung des Kunden erhalten haben.

?> Beispiel: Wie im Beispiel oben stellen sie dem Kunden eine Rechnung über CHF 1’080 aus (Rechnungsbetrag plus 8% MwSt). Die MwSt im Wert von CHF 80 bezahlen sie der Steuerverwaltung erst in dem Quartal, in dem der Kunde die Rechnung bezahlt hat. Zahlt der Kunde die Rechnung erst im Juli, müssen sie die MwSt erst nach Ablauf dieses Quartals abliefern, d.h. Anfang Oktober.

### Steuersätze

Im System sind die wichtigsten Steuersätze bereits erfasst. Sind sie in der Schweiz MwSt. pflichtig, arbeiten sie mit 7.7%, wenn nicht dann lassen sie die Steuer leer.

**Ausgangsrechnungen**  
nicht MwST pflichtig: leer  
MwSt. pflichtig:  7.7% MwSt. inkl. VK  

**Eingangsrechnungen**  
Eingangsrechnungen von Lieferanten haben in der Regel MwSt. drauf. Auf diesen Rechnungen prüfen sie jeweils ob der Betrag inkl. oder exkl. angegeben ist und tragen einfach genau diese Regelung ein.  
nicht MwST pflichtig: leer  
MwSt. pflichtig:  7.7% MwSt. exkl. EK / 7.7% MwSt. inkl. EK

Bezeichnung auf Rechnungen | Steuerbezeichnung | Steuergültigkeit | Steuerkonto | Steuerkonto für Erstattungen / Gutschriften
-|-|-|-|-
0% MwSt. VK | 0% MwSt. Verkauf von Gütern und Dienstleistungen | Verkauf | 2200 | 2200
7.7% MwSt. inkl. EK | 7.7% MwSt. inklusive auf Einkäufe | Einkauf | 1170 | 1170
7.7% MwSt. inkl. VK | 7.7% MwSt. inklusive auf Verkäufe | Verkauf 2200 2200
7.7% MwSt. exkl. VK | 7.7% MwSt. exklusive auf Verkäufe | Verkauf 2200 2200
7.7% MwSt. exkl. EK | 7.7% MwSt. exklusive auf Einkäufe | Einkauf 1170 1170
2.5% MwSt. exkl. EK | 2,5 % MwSt. exklusiv auf Einkäufe | Einkauf | 1170 | 1170
2.5% MwSt. inkl. EK | 2,5 % MwSt. inklusive Einkauf | Einkauf | 1170 | 1170
2.5% MwSt. inkl. VK | 2,5 % MwSt. inklusive auf Verkauf | Verkauf | 2200 | 2200
2.5% MwSt. exkl. VK | 2,5 % MwSt. exklusiv auf Verkäufe | Verkauf | 2200 |  2200

## Journale

Für die Finanzbuchhaltung müssen vor der ersten Buchung Journale definiert werden. Navigieren sie nach *Finanzen > Konfiguration > Abrechnung > Journale*. Passen sie die bestehenden Journale an.

### Verkauf

Name: **Ausgangsrechnungen**  
Kurzzeichen: DFA  
Sequenz: Prefix "Nr. " und nächste Nummer 300  
Rückerstattungs-Sequenz: Prefix "Nr. " und nächste Nummer 300  
Typ: Verkäufe  
Währung: CHF  
Standard-Sollkonto: 3400 Dienstleistungserlöse  
Standard-Habenkonto: 3400 Dienstleistungserlöse  
E-Mail Alias: ausgangsrechnungen@example.com  

### Einkauf

Name: **Eingangsrechnungen**  
Kurzzeichen: KFA  
Sequenz: Prefix "Nr. " und nächste Nummer 300  
Rückerstattungs-Sequenz: Prefix "Nr. " und nächste Nummer 300  
Typ: Einkauf  
Währung: CHF  
Standard-Sollkonto: 4400 Handelswarenaufwand  
Standard-Habenkonto: 4400 Handelswarenaufwand  
E-Mail Alias: eingangsrechnungen@example.com  

### Finanzen

Name: **Sonstige Operationen**  
Kurzzeichen: DIV  
Sequenz: Prefix "DIV/%(range_year)s/"  
Typ: Sonstiges  
Währung: CHF  

Name: **Bank**  
Kurzzeichen: BNK1  
Sequenz: Prefix "BNK1/%(range_year)s/"  
Typ: Bank  
Währung: CHF  
Standard-Sollkonto: 1021 Bank  
Standard-Habenkonto: 1021 Bank  

### SPOS

Name: **Kasse/Bank**  
Kurzzeichen: CSH1  
Sequenz: Prefix "CSH1/%(range_year)s/"  
Typ: Kasse/Bank  
Währung: CHF  
Standard-Sollkonto: 1001 Kasse/Bank  
Standard-Habenkonto: 1001 Kasse/Bank  

### Mehrere Währungen

Name: **Wechselkursdifferenzen (CHF)**  
Kurzzeichen: EXCH  
Sequenz: Prefix "EXCH/%(range_year)s/"  
Type: Sonstiges  
Standard-Sollkonto: 4906 Währungsdifferenzen  
Standard-Habenkonto: 3806 Währungsdifferenzen  

### Personalabrechnung

Name: **Lohn**  
Kurzzeichen: LHN  
Sequenz: Prefix "LHN/%(range_year)s/"  
Typ: Sonstiges  
Währung: CHF  
Standard-Sollkonto: 5000 Lohnaufwand  
Standard-Habenkonto: 5000 Lohnaufwand  

## Kontenplan



## Eröffnungsbuchung