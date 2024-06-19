---
title: Journale
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Journale

Gilt für #Odoo13 

Für die Finanzbuchhaltung müssen vor der ersten Buchung Journale definiert werden. Navigieren Sie nach *Buchhaltung > Konfiguration > Abrechnung > Journale*. Passen Sie die bestehenden Journale an.

## Verkauf

Name: **Ausgangsrechnungen**  
Kurzzeichen: DFA  
Sequenz: Prefix "Nr. " und nächste Nummer 300  
Rückerstattungs-Sequenz: Prefix "Nr. " und nächste Nummer 300  
Typ: Verkäufe  
Währung: CHF  
Standard-Sollkonto: 3400 Dienstleistungserlöse  
Standard-Habenkonto: 3400 Dienstleistungserlöse  
E-Mail Alias: ausgangsrechnungen@example.com  

## Einkauf

Name: **Eingangsrechnungen**  
Kurzzeichen: KFA  
Typ: Einkauf  
Währung: CHF  
E-Mail Alias: eingangsrechnungen@example.com  

Sequenz: Prefix "Nr. " und nächste Nummer 300  
Rückerstattungs-Sequenz: Prefix "Nr. " und nächste Nummer 300  
Standard-Sollkonto: 4400 Handelswarenaufwand  
Standard-Habenkonto: 4400 Handelswarenaufwand  

## Finanzen

Name: **Sonstige Operationen**  
Kurzzeichen: DIV  
Sequenz: Prefix "DIV/%(range_year)s/"  
Typ: Sonstiges  
Währung: CHF  

Name: **Bank**  
Kurzzeichen: BNK1  
Typ: Bank  
Währung: CHF  

Sequenz: Prefix "BNK1/%(range_year)s/"  
Standard-Sollkonto: 1021 Bank  
Standard-Habenkonto: 1021 Bank  

## SPOS

Name: **Kasse/Bank**  
Kurzzeichen: CSH1  
Typ: Kasse/Bank  
Währung: CHF  

Sequenz: Prefix "CSH1/%(range_year)s/"  
Standard-Sollkonto: 1001 Kasse/Bank  
Standard-Habenkonto: 1001 Kasse/Bank  

## Mehrere Währungen

Name: **Wechselkursdifferenzen (CHF)**  
Kurzzeichen: EXCH  
Typ: Sonstiges  

Sequenz: Prefix "EXCH/%(range_year)s/"  
Standard-Sollkonto: 4906 Währungsdifferenzen  
Standard-Habenkonto: 3806 Währungsdifferenzen  

## Personalabrechnung

Name: **Lohn**  
Kurzzeichen: LHN  
Typ: Sonstiges  
Währung: CHF  

Sequenz: Prefix "LHN/%(range_year)s/"  
Standard-Sollkonto: 5000 Lohnaufwand  
Standard-Habenkonto: 5000 Lohnaufwand  
