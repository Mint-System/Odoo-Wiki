---
tags:
- HowTo
prev: ./
---
# Finanzen
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Ihre Buchhaltung einfach und korrekt.

| Bereich                                                         | Beschreibung                                              |
| --------------------------------------------------------------- | --------------------------------------------------------- |
| [Finanzen Mehrere Währungen](Finanzen%20Mehrere%20Währungen.md) | Unterschiedliche Währungen mit Odoo Finanzen verarbeiten. |
| [Finanzen Zahlungen](Finanzen%20Zahlungen.md)                   | SEPA- und QR-Zahlungen mit Odoo Finanzen abwickeln.       |
| [Finanzen Mehrwertsteuer](Finanzen%20Mehrwertsteuer.md)         | Mehrwertsteuer einfach abrechnen mit Odoo.                |
| [Finanzen Berichte](Finanzen%20Berichte.md)                     | Finanzberichte erstellen.                                 |
| [Finanzen Kostenrechnung](Finanzen%20Kostenrechnung.md)         | Kosten analysieren und Budget plannen.                    |
| [Finanzen Buchhaltung](Finanzen%20Buchhaltung.md)               | Kontenplan einrichten und Buchungen erstellen.            |

| Erweiterung                                                                         | Beschreibung                                                                          |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Bank Account Camt54 Import](Bank%20Account%20Camt54%20Import.md)                   | Camt54 Bankauszug mit den Details zu Sammelbuchungen importieren.                     |
| [Recurring - Contracts Management](Contract.md)                                     | Wiederholende Verträge verwalten und automatisch verrechnen.                          |
| [Switzerland Bank type](Switzerland%20Bank%20Type.md)                               | Lokalisierung für Schweizer Banken und Bankkontos.                                    |
| [Account Move Line Position](Account%20Move%20Line%20Position.md)                   | Positionsnummer aus dem Verkaufs- oder Einkaufsauftrag anzeigen.                      |
| [Account Move Line Link Pickings](Account%20Move%20Line%20Link%20Pickings.md)       | Lieferaufträge mit Rechnungszeile verlinken.                                          |
| [Sale Invoice Cash Rounding Default](Sale%20Invoice%20Cash%20Rounding%20Default.md) | Standardwert für Runden beim Erzeugen von Rechnungen aus Verkaufsaufträgen verwenden. |

## Rechnung per E-Mail empfangen

Öffnen sie die Journal-Einstellungen via *Finanzen > Konfiguration > Finanzen > Journale* und wählen sie das Journal für das Rechnungen empfangen und erstellt werden sollen. Öffnen sie den Tab *Erweiterte Einstellungen* und tragen sie im Feld *E-Mail-Alias* die Empfangsadresse ein.

![](assets/Finanzen%20Journal%20E-Mail-Alias.png)

Anhänge an E-Mails mit diesem Alias aus dem Odoo-Postfach werden fortan als Rechnung erfasst.

## Bank-Journal einrichten

Öffnen sie das Bank-Journal via *Finanzen > Dashboard > Kontextmenü Bank > Konfiguration*. Im Tab *Buchungssätze* geben legen sie im Feld *Bankkonto* das entsprechende Konto aus dem Kontenplan fest.

Unter *Bankverbindung* fügen sie das Bankkonto ihres Unternehmens hinzu. Legen sie *Bank Datenübertrag* gemäss Anforderungen fest.

Im Tab *Payments Configuration* legen sie die Konten für ausstehende Ein- und Auzahlungen fest.

::: tip
Ein Beispiel wie der Kontenplan nach der Konfiguration ausseiht
* 1031 Transferkonto Bank (Umlaufvermögen)
* 1032 Bank (Liquide Mittel)
* 1033 Ausstehende Auszahlungen (Umlaufvermögen)
* 1034 Ausstehende Einzahlungen (Umlaufvermögen)
:::

## Bank-Synchronisation konfigurieren

Fügen sie ihre Bank via *Konfiguration > Bankverzeichnis > Eine Bank hinzufügen* hinzu.

![](assets/Finanzan%20Raiffeisen%20Schweiz.png)

Hinterlegen sie eine Telefonnummer zur Wiederherstellung des Synchronisations-Account.

![](assets/Finanzen%20Account%20Recovery.png)

Geben sie den Bestätigungcode ein. Nun werden sie auf die Website von <https://www.saltedge.com> umgeleitet. Geben sie ihre Login-Informationen ein.

![](assets/Finanzen%20Saltedge%20Account.png)

Im Anschluss wählen sie eine Authentisierungs-Methode.

![](assets/Finanzen%20Saltedge%20Authenticaion.png)

Führen sie diese wie gewohnt aus. Nun verbindet Saltedge den Odoo-Account mit dem Bankkonto. Sie werden wieder nach Odoo zurückgeführt.

![](assets/Finanzen%20Bankkonto%20verknüpfen.png)

Es wird nun ein neues Journal zur Synchronisation erstellt.

## Bank-Synchronisation einrichten

Wählen sie *Finanzen > Konfiguration > Journale* und wählen sie das Bank-Journal aus. Im Tab *Buchungssätze* legen sie für das Feld *Bank-Datenübertragung* die Option *Automatisierte Banksynchronisation* fest.

Dann gehen sie nach *Finanznen > Konfiguration > Online Synchronisation* und wählen den ersten Eintrag aus. Im Feld *Journal* können sie das Bank-Journal eintragen.

![](assets/Fianzen%20Bank-Journal%20eintragen.png)

## Kommunikationsstandard festlegen

Der Kommunikationsstandard ist entscheidend bei der Generierung von Zahlungsreferenzen. Öffnen sie ein Journal via *Finanzen > Konfiguration > Journale* und zeigen sie den Tab *Erweiterte Einstellungen* an. Legen sie im Feld *Kommunikationsstandard* den passenden Wert fest.

## Mehrere Rechnung versenden

Zeigen sie *Finanzen > Kunden > Rechnung* an und filtern sie die Rechnung nach *Status* und *Zahlung*. Markieren sie die Rechnungen, die sie versenden möchten und wählen sie *Aktion > Senden & Drucken*. Wählen sie für E-Mail eine Mail-Vorlage aus und drücken sie auf *Senden*.

## Unversendete Rechnungen anzeigen

Navigieren sie nach *Finanzen > Kunden > Rechnungen* und wählen sie *Filter > Benutzerdefinierten Filter hinzufügen*. Als Feld definieren sie *Rechnung Verschickt* mit Bedingung *Ist falsch*. Nun erhalten sie alle unversendeneten Rechnungen.

## Zahlungsbedingung mit Rabatt einrichten

Navigieren sie nach *Finanzen > Konfiguration > Abrechnung > Zahlungsbedingungen* und erstellen sie einen neuen Eintrag wie folgt. Duplizieren sie eine bestehende Zahlungsbedingung, beispielsweise *30 Tage*. Wir nehmen an, dass wir für eine Zahlung innerhalb von Tagen 10 eine Skonto von 10% gewähren.

![](assets/Finanzen%20Rbatt.png)