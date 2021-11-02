---
tags:
- HowTo
---
# Finanzen
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Ihre Buchhaltung einfach und korrekt.

Erweiterungen:
* [Bank Account Camt54 Import](Bank-Account-Camt54-Import.md)
* [Mehrere Währungen](Mehrere%20Währungen.md)
* [SEPA-Zahlung](SEPA-Zahlung.md)
* [Recurring - Contracts Management](Contract.md)
* [Switzerland - Bank type](Switerland-Bank-Type.md)
* [Account Move Line Position](Account-Move-Line-Position.md)

## Kontenplan einrichten

Öffnen sie die Finanz-App und richten Sie den Standard-Kontenplan ein. Navigieren sie nach *Finanzen > Konfiguration > Finanzen > Kontenplan*.

Konten für welche sie keine Verwendung haben, können sie anwählen und die Checkbox *Nicht mehr verwenden* markieren.

## Skonto einrichten

Navigieren sie nach *Finanzen > Konfiguration > Abrechnung > Zahlungsbedingungen* und erstellen sie einen neuen Eintrag wie folgt.
Duplizieren sie eine bestehende Zahlungsbedingung. zum Beispiel 15 Tage.

![](assets/Zahlungsbedingungen%20Skonto.png)

## Rechnung per E-Mail empfangen

Öffnen sie die Journal-Einstellungen via *Finanzen > Konfiguration > Finanzen > Journale* und wählen sie das Journal für das Rechnungen empfangen und erstellt werden sollen. Öffnen sie den Tab *Erweiterte Einstellungen* und tragen sie im Feld *E-Mail-Alias* die Empfangsadresse ein.

![](assets/Finanzen%20Journal%20E-Mail-Alias.png)

Anhänge an E-Mails mit diesem Alias aus dem Odoo-Postfach werden fortan als Rechnung erfasst.

## Bank-Datenübertragung konfigurieren

Wählen sie *Finanzen > Konfiguration > Journale* und wählen sie das Bank-Journal aus. Im Tab *Buchungssätze* legen sie für das Feld *Bank-Datenübertragung* die Option *Automatisierte Banksynchronisation* fest.

Fügen sie ihre Bank via *Konfiguration > Bankverzeichnis > Eine Bank hinzufügen* hinzu.

![](assets/Finanzen%20Bank%20hinzufügen.png)

## Kommunikationsstandard festlegen

Der Kommunikationsstandard ist entscheidend bei der Generierung von Zahlungsreferenzen. Öffnen sie ein Journal via *Finanzen > Konfiguration > Journale* und zeigen sie den Tab *Erweiterte Einstellungen* an. Legen sie im Feld *Kommunikationsstandard* den passenden Wert fest.

## QR-IBAN speichern

Zur Speicherung der QR-IBAN gibt es auf dem Bankkonto ein entsprechendes Feld. Navigieren sie nach *Finanzen > Konfiguraiton > Bankkonten*, wählen sie das Bankkonto aus und tragen sie im Feld *QR-IBAN* die Nummer ein.

## QR-Code Zahlungstyp festlegen

Zeigen sie eine Rechnung via *Finanzen > Kunden > Rechnungen* an und öffnen sie den Tab *Weitere Informationen*. Im Feld *Payment QR-code* ist die Methode zum Generieren des QR-Codes festgelegt.

## Währung auf Rechnung festlegen

Zeigen sie eine Rechnung via *Finanzen > Kunden > Rechnungen* oder *Finanzen > Lieferanten > Rechnungen* an. Rechts vom Eingabefeld *Journal* können sie die Währung festlegen.