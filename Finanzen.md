---
tags:
- HowTo
---
# Finanzen
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Ihre Buchhaltung einfach und korrekt.

| Bereich                                                         | Beschreibung                                              |
| --------------------------------------------------------------- | --------------------------------------------------------- |
| [Finanzen Mehrere Währungen](Finanzen%20Mehrere%20Währungen.md) | Unterschiedliche Währungen mit Odoo Finanzen verarbeiten. |
| [Finanzen Zahlungen](Finanzen%20Zahlungen.md)                   | SEPA-Zahlungen mit Odoo Finanzen abwickeln.               |
| [Finanzen Mehrwertsteuer](Finanzen%20Mehrwertsteuer.md)         | Mehrwertsteuer einfach abrechnen mit Odoo.                |
| [Finanzen Berichte](Finanzen%20Berichte.md)                       | Finanzberichte erstellen.                                 |


| Erweiterung                                                 | Beschreibung                                                      |
| ----------------------------------------------------------- | ----------------------------------------------------------------- |
| [Bank Account Camt54 Import](Bank%20Account%20Camt54%20Import.md) | Camt54 Bankauszug mit den Details zu Sammelbuchungen importieren. |
| [Recurring - Contracts Management](Contract.md)             | Wiederholende Verträge verwalten und automatisch verrechnen.      |
| [Switzerland - Bank type](Switerland%20Bank%20Type.md)          | Lokalisierung für Schweizer Banken und Bankkontos.                |
| [Account Move Line Position](Account%20Move%20Line%20Position.md) | Positionsnummer aus dem Verkaufs- oder Einkaufsauftrag anzeigen.  |

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

![](assets/Fiannzen%20Bank-Journal%20eintragen.png)

## Kommunikationsstandard festlegen

Der Kommunikationsstandard ist entscheidend bei der Generierung von Zahlungsreferenzen. Öffnen sie ein Journal via *Finanzen > Konfiguration > Journale* und zeigen sie den Tab *Erweiterte Einstellungen* an. Legen sie im Feld *Kommunikationsstandard* den passenden Wert fest.

## QR-IBAN speichern

Zur Speicherung der QR-IBAN gibt es auf dem Bankkonto ein entsprechendes Feld. Navigieren sie nach *Finanzen > Konfiguraiton > Bankkonten*, wählen sie das Bankkonto aus und tragen sie im Feld *QR-IBAN* die Nummer ein.

## QR-Code Zahlungstyp festlegen

Zeigen sie eine Rechnung via *Finanzen > Kunden > Rechnungen* an und öffnen sie den Tab *Weitere Informationen*. Im Feld *Payment QR-code* ist die Methode zum Generieren des QR-Codes festgelegt.

## Währung auf Rechnung festlegen

Zeigen sie eine Rechnung via *Finanzen > Kunden > Rechnungen* oder *Finanzen > Lieferanten > Rechnungen* an. Rechts vom Eingabefeld *Journal* können sie die Währung festlegen.

## Sperrdatum festlegen

Im Dialog *Finanzen > Finanzen > Aktion > Sperrdaten* können sie Sperrdaten für die Geschäfts- und Steuerperiode definieren.e

![](assets/Finanzen%20Sperrdatum%20festlegen.png)

## Ausgehende Zahlung für mehrere Rechnungen erfassen
Im App Finanzen in der Ansicht *Finanzen >  Lieferanten > Rechnung* den Fiilter *Nicht bezahlt* setzen. Die zu zahhlenden Rechnungen links markieren und *Zahlung erfassen* auswählen. 

![](assets/Finanzen%20Sepa%20Zahlung%20erfassen.png)

Für jede Rechnung wird eine SEPA-Zahlung angelegt.

## Mehrere Rechnung versenden

Zeigen sie *Finanzen > Kunden > Rechnung* an und filtern sie die Rechnung nach *Status* und *Zahlung*. Markieren sie die Rechnungen, die sie versenden möchten und wählen sie *Aktion > Senden & Drucken*. Wählen sie für E-Mail eine Mail-Vorlage aus und drücken sie auf *Senden*.

## Kontenplan exportieren

Öffnen sie die Übersicht der Konten *Finanzen > Konfiguration > Finanzen > Kontenplan* und filtern sie die Konten gemäss ihren Anforderungen. Markieren sie die Konten und wählen sie *Select all ...*. Führen sie *Aktion > Export* aus.

![](assets/Finanzen%20Kontenplan%20exportieren.png)

Im Export-Dialog können sie auf der linken Seite die zu exportierenden Felder suchen und dem Export auf der rechten Seite hinzufügen. Dies ist eine Odoo-Standardfunktion, mehr dazu unter [Daten exportieren](Datenmanagement.md#Daten%20exportieren).

![](assets/Finanzen%20Daten%20exportieren.png)

## Kontenplan gruppieren

Den Kontenplan können sie nach beliebigen Merkmalen gruppieren und die Gruppierung als Standard speichern.

![Finanzen Kontenplan gruppieren](assets/Finanzen%20Kontenplan%20gruppieren.gif)

## Kontengruppen erstellen

Navigieren sie nach *Finanzen > Konfiguration > Kontengruppen* und fügen eine Kontengruppe hinzu.

* **Name**: Name der Kontengruppe
* **Code-Präfix Von bis**: Bereiech der Kontennummer welche dieser Gruppe hinzugefügt werden

## Kontoarten anzeigen

Standardmässig werden die Kontoarten nicht angezeigt. Damit diese angezeigt werden, muss eine Menüpunkt gemäss [Menüeintrag erstellen](Entwicklung.md#Entwicklung#Menüeintrag%20erstellen)

![](assets/Finanzen%20Kontoarten%20anzeigen.png)

## Zahlungskonten konfigurieren

Auf jedem Journal vom Typ *Bank* oder *Kasse/Bank* ist hinterlegt welches Konto für die ausstehende Zahlungen bzw. Zahlungsbestätigungen verwendet werden sollen.

Öffnen sie *Finanzen > Konfiguration > Journale > Journal auswählen* und zeigen sie den Tab *Payments Configuration* an. Hier können sie die Konten für die Zahlungen festlegen.
