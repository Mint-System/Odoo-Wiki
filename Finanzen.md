---
tags:
- HowTo
prev: ./
---
# Finanzen
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Ihre Buchhaltung einfach und korrekt.

Website: <https://www.odoo.com/de_DE/app/accounting>

## Bereiche

| Bereich                                                         | Beschreibung                                                |
| --------------------------------------------------------------- | ----------------------------------------------------------- |
| [Finanzen Abstimmung](Finanzen%20Abstimmung.md)                 | Bankkonto mit Odoo abgleichen.                              |
| [Finanzen Aktionen](Finanzen%20Aktionen.md)                     | Neue Aktionen für Buchungen und Abstimmungen.               |
| [Finanzen Anlagenverwaltung](Finanzen%20Anlagenverwaltung.md)   | Anlagen verwalten und automatisch Abschreibungen erstellen. |
| [Finanzen Berichte](Finanzen%20Berichte.md)                     | Finanzberichte erstellen.                                   |
| [Finanzen Buchhaltung](Finanzen%20Buchhaltung.md)               | Kontenplan einrichten und Buchungen erstellen.              |
| [Finanzen Kostenrechnung](Finanzen%20Kostenrechnung.md)         | Kosten analysieren und Budget plannen.                      |
| [Finanzen Mehrere Währungen](Finanzen%20Mehrere%20Währungen.md) | Unterschiedliche Währungen mit Odoo Finanzen verarbeiten.   |
| [Finanzen Mehrwertsteuer](Finanzen%20Mehrwertsteuer.md)         | Mehrwertsteuer einfach abrechnen mit Odoo.                  |
| [Finanzen Snippets](Finanzen%20Snippets.md)                     | Einfache Anpassungen mit Odoo Snippets.                     |
| [Finanzen Zahlungen](Finanzen%20Zahlungen.md)                   | SEPA- und QR-Zahlungen mit Odoo Finanzen abwickeln.         |

## Erweiterungen

| Erweiterung                                                                                                     | Beschreibung                                                                |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [Acccount Move Accounting Description](Acccount%20Move%20Accounting%20Description.md)                           | Beschreibungsfeld für Rechnungszeile.                                       |
| [Account Followup Hide Communication](Account%20Followup%20Hide%20Communication.md)                             | Spalte Kommunikation in Mahnbericht ausblenden.                             |
| [Account Invoice Description](Account%20Invoice%20Description.md)                                               | Beschreibungsfeld auf Rechnung.                                             |
| [Account Missing Menus](Account%20Missing%20Menus.md)                                                           | Zusätzliche Menu-Punkte von Finanzen anzeigen.                              |
| [Account Move Line Accounting Description Stock](Account%20Move%20Line%20Accounting%20Description%20Stock)      | Beschreibung Lagerbuchung auf Rechnung übertragen.                          |
| [Account Move Line Link Pickings](Account%20Move%20Line%20Link%20Pickings.md)                                   | Lieferaufträge mit Rechnungszeile verlinken.                                |
| [Account Move Line Position](Account%20Move%20Line%20Position.md)                                               | Positionsnummer aus dem Verkaufs- oder Einkaufsauftrag anzeigen.            |
| [Account Move Post Warn](Account%20Move%20Post%20Warn.md)                                                       | Beim Buchen wird sofern gesetzt die Warnung des Rechnungskontakt angezeigt. |
| [Account Move Reconciled Date](Account%20Move%20Reconciled%20Date.md)                                           | Zeigt für eine Rechnung das definitive Abgleichsdatum an.                   |
| [Bank Account Camt54 Import](Bank%20Account%20Camt54%20Import.md)                                               | Camt54 Bankauszug mit den Details zu Sammelbuchungen importieren.           |
| [Contract Sale Generation](Contract%20Sale%20Generation.md)                           | Aus wiederholenden Verträge Verkaufsangebote generieren.                    |
| [Contracts Management Recurring](Contracts%20Management%20Recurring.md)                                         | Wiederholende Verträge verwalten und automatisch verrechnen.                |
| [Invoice Merge PDF Attachment](Invoice%20Merge%20PDF%20Attachment.md)                                           | PDF-Dokumenten von Rechnungen zusammenführen.                               |
| [Nivels Deduct Supplier Discount](Nivels%20Deduct%20Supplier%20Discount.md)                                     | Allow discount deduction on vendor bills.                                   |
| [Swiss QR-ESR Scan](Swiss%20QR-ESR%20Scan.md)                                                                   | Rechnung anhand QR-Daten erstellen.                                         |
| [Switzerland Bank type](Switzerland%20Bank%20Type.md)                                                           | Lokalisierung für Schweizer Banken und Bankkontos.                          |
| [Switzerland Disable Default Reports](Switzerland%20Disable%20Default%20Reports.md)                             | Generierung der QR- und ISR-Berichte deaktivieren.                          |
| [L10n CH Invoice Reports](L10n%20CH%20Invoice%20Reports.md) | Rechnung mit ISR- und/oder QR-Zahlung drucken.                              |
| [Switzerland QR IBAN](Switzerland%20QR%20IBAN.md)                                                               | Generierung der QR-Rechnung ohne ISR-Nummer.                                |
| [Switzerland QR-Bill Scan](Switzerland%20QR-Bill%20Scan.md)                                                     | Daten aus QR-Code bei Rechnungsimport auslesen.                             |

## Bank-Jounal

### Bank-Journal einrichten

Öffnen Sie das Bank-Journal via *Finanzen > Dashboard > Kontextmenü Bank > Konfiguration*. Im Tab *Buchungssätze* geben legen Sie im Feld *Bankkonto* das entsprechende Konto aus dem Kontenplan fest.

Unter *Bankverbindung* fügen Sie das Bankkonto ihres Unternehmens hinzu. Legen Sie *Bank Datenübertrag* gemäss Anforderungen fest.

Im Tab *Payments Configuration* legen Sie die Konten für ausstehende Ein- und Auzahlungen fest.

::: tip
Ein Beispiel wie der Kontenplan nach der Konfiguration ausseiht
* 1031 Transferkonto Bank (Umlaufvermögen)
* 1032 Bank (Liquide Mittel)
* 1033 Ausstehende Auszahlungen (Umlaufvermögen)
* 1034 Ausstehende Einzahlungen (Umlaufvermögen)
:::

### Bank-Synchronisation konfigurieren

Fügen Sie ihre Bank via *Konfiguration > Bankverzeichnis > Eine Bank hinzufügen* hinzu.

![](assets/Finanzan%20Raiffeisen%20Schweiz.png)

Hinterlegen Sie eine Telefonnummer zur Wiederherstellung des Synchronisations-Account.

![](assets/Finanzen%20Account%20Recovery.png)

Geben Sie den Bestätigungcode ein. Nun werden Sie auf die Website von <https://www.saltedge.com> umgeleitet. Geben Sie ihre Login-Informationen ein.

![](assets/Finanzen%20Saltedge%20Account.png)

Im Anschluss wählen Sie eine Authentisierungs-Methode.

![](assets/Finanzen%20Saltedge%20Authenticaion.png)

Führen Sie diese wie gewohnt aus. Nun verbindet Saltedge den Odoo-Account mit dem Bankkonto. Sie werden wieder nach Odoo zurückgeführt.

![](assets/Finanzen%20Bankkonto%20verknüpfen.png)

Es wird nun ein neues Journal zur Synchronisation erstellt.

### Bank-Synchronisation einrichten

Wählen Sie *Finanzen > Konfiguration > Journale* und wählen Sie das Bank-Journal aus. Im Tab *Buchungssätze* legen Sie für das Feld *Bank-Datenübertragung* die Option *Automatisierte Banksynchronisation* fest.

Dann gehen Sie nach *Finanznen > Konfiguration > Online Synchronisation* und wählen den ersten Eintrag aus. Im Feld *Journal* können Sie das Bank-Journal eintragen.

![](assets/Fianzen%20Bank-Journal%20eintragen.png)

### Kommunikationsstandard festlegen

Der Kommunikationsstandard ist entscheidend bei der Generierung von Zahlungsreferenzen. Öffnen Sie ein Journal via *Finanzen > Konfiguration > Journale* und zeigen Sie den Tab *Erweiterte Einstellungen* an. Legen Sie im Feld *Kommunikationsstandard* den passenden Wert fest.

## Empfang

### Rechnung per E-Mail empfangen

Öffnen Sie die Journal-Einstellungen via *Finanzen > Konfiguration > Finanzen > Journale* und wählen Sie das Journal für das Rechnungen empfangen und erstellt werden sollen. Öffnen Sie den Tab *Erweiterte Einstellungen* und tragen Sie im Feld *E-Mail-Alias* die Empfangsadresse ein.

![](assets/Finanzen%20Journal%20E-Mail-Alias.png)

Anhänge an E-Mails mit diesem Alias aus dem Odoo-Postfach werden fortan als Rechnung erfasst.

## Versand

### Mehrere Rechnung versenden

Zeigen Sie *Finanzen > Kunden > Rechnung* an und filtern Sie die Rechnung nach *Status* und *Zahlung*. Markieren Sie die Rechnungen, die Sie versenden möchten und wählen Sie *Aktion > Senden & Drucken*. Wählen Sie für E-Mail eine Mail-Vorlage aus und drücken Sie auf *Senden*.

### Unversendete Rechnungen anzeigen

Navigieren Sie nach *Finanzen > Kunden > Rechnungen* und wählen Sie *Filter > Benutzerdefinierten Filter hinzufügen*. Als Feld definieren Sie *Rechnung Verschickt* mit Bedingung *Ist falsch*. Nun erhalten Sie alle unversendeneten Rechnungen.

### Standard-Versandoptionen definieren

Zeigen Sie den  Abschnitt *Finanzen > Konfiguration > Einstellungen > Ausgangsrechnungen* an. Legen Sie im Bereich *Standard-Versandoptionen* die Standardoptionen zum Versand fest.

## Rabatt

### Zahlungsbedingung mit Rabatt einrichten

Navigieren Sie nach *Finanzen > Konfiguration > Abrechnung > Zahlungsbedingungen* und erstellen Sie einen neuen Eintrag wie folgt. Duplizieren Sie eine bestehende Zahlungsbedingung, beispielsweise *30 Tage*. Wir nehmen an, dass wir für eine Zahlung innerhalb von Tagen 10 eine Skonto von 10% gewähren.

![](assets/Finanzen%20Rabatt.png)

## Portal

### Portal-Ansicht von Rechnung anzeigen

Um die Portal-Ansicht einer Rechnung anzuzeigen gehen Sie wie folgt vor *Abrechnung > Kunden > Rechnungen > Rechnung auswählen* und dann auf *Vorschau* klicken. Nun öffnet sich die Portal-Ansicht in einem neuen Tab.
