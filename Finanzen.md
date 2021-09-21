---
tags:
- HowTo
---
# Finanzen
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Ihre Buchhaltung einfach und korrekt.

* [Bank Account Camt54 Import](Bank-Account-Camt54-Import.md)
* [Mehrere Währungen](Mehrere%20Währungen.md)
* [SEPA-Zahlung](SEPA-Zahlung.md)
* [Recurring - Contracts Management](Contract.md)

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

## Eingangsrechnung manuell ausgleichen

#FIXME 