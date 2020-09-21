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

![](Odoo%20Enterprise%20aktivieren.png)

## Mehrwertsteuer

Bevor sie im System die erste Rechnung erstellen sollten sie die Abklärungen machen ob sie überhaupt MwSt. pflichtig sind oder nicht. Es gilt die Regel:

**Ab einem Jahresumsatz von CHF 100’000 sind sie steuerpflichtig und müssen die MwSt. quartalsweise abrechnen. Sind sie noch nicht steuerpflichtig, können sie alle Rechnungen ohne Steuer erzeugen. Aufs neue Buchhaltungsjahr hin, schätzen sie ihren Umsatz ein.**

Sind sie noch nicht Steuerpflichtig, können sie direkt mit dem Verbuchen von Rechnungen beginnen und tragen bei der Steuer nichts ein. Sind sie Steuerpflichtig, dann arbeiten sie am besten nach der Methode Effektive
Steuerverrechnung und vereinbarten Entgelten. So ist auch die Buchhaltung eingestellt.

DIe Abrechnung nach vereinbarten Entgelten (Art. 39 Abs. 1 MWSTG) ist das Standardverfahren der eidgenössischen Steuerverwaltung.

## Journale

Für die Finanzbuchhaltung müssen vor der ersten Buchung Journale definiert werden. Navigieren sie nach *Finanzen > *

### Verkauf

Name: **Ausgangsrechnungen**  
Kurzzeichen: DFA  
Sequenz: Prefix "Nr. " und nächste Nummer 300  
Rückerstattungs-Sequenz: Prefix "Nr. " und nächste Nummer 300  
Typ: Verkäufe  
Währung: CHF  
Standard-Sollkonto: 3400 Dienstleistungserlöse  
Standard-Habenkonto: 3400 Dienstleistungserlöse  

### Einkauf

Name: **Eingangsrechnungen**  
Kurzzeichen: KFA  
Sequenz: Prefix "Nr. " und nächste Nummer 300  
Rückerstattungs-Sequenz: Prefix "Nr. " und nächste Nummer 300  
Typ: Einkauf  
Währung: CHF  
Standard-Sollkonto: 4400 Handelswarenaufwand  
Standard-Habenkonto: 4400 Handelswarenaufwand  

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