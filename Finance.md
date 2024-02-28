---
title: Finanzen
description: Ihre Buchhaltung einfach und korrekt.
tags:
- HowTo
prev: ./
---
# Finanzen
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/accounting>

## Bereiche

| Bereich                                                       | Beschreibung                                                |
| ------------------------------------------------------------- | ----------------------------------------------------------- |
| [Finanzen Abstimmung](Finance%20Reconcile.md)                 | Bankkonto mit Odoo abgleichen.                              |
| [Finanzen Aktionen](Finance%20Actions.md)                     | Neue Aktionen für Buchungen und Abstimmungen.               |
| [Finanzen Anlagenverwaltung](Finance%20Assets.md)             | Anlagen verwalten und automatisch Abschreibungen erstellen. |
| [Finanzen Berichte](Finance%20Reports.md)                     | Finanzberichte erstellen.                                   |
| [Finanzen Buchhaltung](Finance%20Accounting.md)               | Kontenplan einrichten und Buchungen erstellen.              |
| [Finanzen Datenmanagement](Finance%20Data%20Management.md)    | Daten zu Finanzen exportieren und importieren.              |
| [Finanzen Kostenrechnung](Finance%20Analytic%20Accounting.md) | Kosten analysieren und Budget planen.                      |
| [Finanzen Mehrere Währungen](Finance%20Multicurrency.md)      | Unterschiedliche Währungen mit Odoo Finanzen verarbeiten.   |
| [Finanzen Mehrwertsteuer](Finance%20Tax.md)                   | Mehrwertsteuer einfach abrechnen mit Odoo.                  |
| [Finanzen Snippets](Finance%20Snippets.md)                    | Einfache Anpassungen mit Odoo Snippets.                     |
| [Finanzen Zahlungen](Finance%20Payments.md)                   | SEPA- und QR-Zahlungen mit Odoo Finanzen abwickeln.         |

## Erweiterungen

| Erweiterung                                                                                                | Beschreibung                                                                |
| ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [Account Financial Report Contra Accounts](Account%20Financial%20Report%20Contra%20Accounts.md)            | Gegenkontos für Hauptbuch OCA-Finanzbericht bereitstellen.                  |
| [Account Financial Report Reverse Move Lines](Account%20Financial%20Report%20Reverse%20Move%20Lines.md)    | Ordnet die Buchungszeilen von neu zu alt.                                   |
| [Account Financial Report Show Grouped None](Account%20Financial%20Report%20Show%20Grouped%20None.md)      | Alle Buchungszeilen bei Auswahl "nicht gruppiert" anzeigen.                 |
| [Account Financial Report](Account%20Financial%20Report.md)                                                | Finanzberichte der Odoo Community Assocation.                               |
| [Account Followup Email From](Account%20Followup%20Email%20From.md)                                        | Mahnbericht von definierter E-Mail-Adresse verschicken.                     |
| [Account Followup Hide Communication](Account%20Followup%20Hide%20Communication.md)                        | Spalte Kommunikation in Mahnbericht ausblenden.                             |
| [Account General Ledger Contra Accounts](Account%20General%20Ledger%20Contra%20Accounts.md)                | Spalte Gegenkontos in Hauptbuch.                                            |
| [Account Invoice Description](Account%20Invoice%20Description.md)                                          | Beschreibungsfeld auf Rechnung.                                             |
| [Account Journal Items Report](Account%20Journal%20Items%20Report.md)                                      | Kontoauszug basierend auf Buchungszeilen erstellen.                         |
| [Account Menu](Account%20Menu.md)                                                                          | Navigation für die OCA Finanzbuchhaltung.                                   |
| [Account Move Accounting Description](Account%20Move%20Accounting%20Description.md)                        | Beschreibungsfeld für Rechnungszeile.                                       |
| [Account Move Line Accounting Description Stock](Account%20Move%20Line%20Accounting%20Description%20Stock) | Beschreibung Lagerbuchung auf Rechnung übertragen.                          |
| [Account Move Line Contra Accounts](Account%20Move%20Line%20Contra%20Accounts.md)                          | Gegenkontos auf Buchungszeilen anzeigen.                                    |
| [Account Move Line Link Pickings](Account%20Move%20Line%20Link%20Pickings.md)                              | Lieferaufträge mit Rechnungszeile verlinken.                                |
| [Account Move Line Position](Account%20Move%20Line%20Position.md)                                          | Positionsnummer anzeigen und aus Verkaufs- oder Einkaufsauftrag verlinken.  |
| [Account Move Post Warn](Account%20Move%20Post%20Warn.md)                                                  | Beim Buchen wird sofern gesetzt die Warnung des Rechnungskontakt angezeigt. |
| [Account Move Reconciled Date](Account%20Move%20Reconciled%20Date.md)                                      | Zeigt für eine Rechnung das definitive Abstimmungsdatum an.                 |
| [Account Payment Mode](Account%20Payment%20Mode.md)                                                        | Bezahlmethoden definieren.                                                  |
| [Account Payment Order](Account%20Payment%20Order.md)                                                      | Stapelzahlungen für die Odoo Community Edition.                             |
| [Account Payment Partner](Account%20Payment%20Partner.md)                                                  | Zahlungsmodus auf Kontakt festlegen.                                        |
| [Account Payment Purchase](Account%20Payment%20Purchase.md)                                                | Zahlungsmodus auf Bestellung festlegen.                                     |
| [Account Reports Hide Ref](Account%20Reports%20Hide%20Ref.md)                                              | Zahlungsreferenz in Spalte Kommunikation in Finanzberichten ausblenden.     |
| [Account Statement Import Base](Account%20Statement%20Import%20Base.md)                                    | Basismodul für Import Bankauszüge.                                          |
| [Account Statement Import CAMT](Account%20Statement%20Import%20CAMT.md)                                    | Support Import Bankauszug im Camt-Format.                                   |
| [Account Statement Import Camt54](Account%20Statement%20Import%20Camt54.md)                                | Camt54 Bankauszug mit Details zu Einzahlungen importieren.                  |
| [Account Statement Import](Account%20Statement%20Import.md)                                                | Bankauszüge importieren.                                                    |
| [Account Usability](Account%20Usability.md)                                                                | Menüs der Enterprise Finanzbuchhaltung für Community.                       |
| [Nivels Deduct Supplier Discount](Nivels%20Deduct%20Supplier%20Discount.md)                                | Allow discount deduction on vendor bills.                                   |

## Konfiguration

### Zahlungsbedingungen definieren

Um spezielle Zahlungsbedingungen zu formulieren navigieren Sie nach *Einstellungen > Finanzen > Zahlungsbedingungen* . Dort können Sie einen vorhandenen Eintrag kopieren oder neu anlegen und nach den eigenen Wünschen konfigurieren.

::: tip
Zahlungsbedingungen können den Kontakten für den Verkauf und den Einkauf hinterlegt werden. Für neue *Angebote/Verkaufsaufträge* und *Bestellungen* werden sie dann als Vorgabewert übernommen.
:::

### Kontenrahmen festlegen

Wenn Sie ein neues Unternehmen erstellt haben, können Sie unter *Einstellungen > Finanzen > Steuerliche Lokalisierung* ein Lokalisierungspaket im Feld *Kontenrahmen* auswählen und installieren. Damit werden die länderspezifischen Journale, Steuersätze und Kontenplan angelegt.

![](attachments/Finanzen%20Mehrwertsteuer.png)

### Konten Tag verwalten

Navigieren Sie nach *Finanzen > Konfiguration > Konten Tags*. Hier finden Sie die auf Buchungszeilen und Steuersätzen auswählbaren Konten Tags. Erstellen Sie einen neuen Eintrag oder bearbeiten Sie einen Bestehenden.

::: warning
Konten Tags werden zur Generierung des Steuerberichts verwendet und sind mit den Steuersätzen eng verknüpft.
:::

### Zulässige Journale auf Konto festlegen

Navigieren Sie nach *Finanzen > Konfiguration > Kontenplan* und wählen Sie ein Konto aus. Im Feld *Zugelassene Journale* können Sie festlegen in welchem Journal dieses Konto verwendet darf.

## Bank-Jounal

### Bank-Journal erfassen

Um ein ein neues Journal zu erstelle, navigieren Sie nach *Finanzen > Konfiguration > Journale* und erstellen einen neuen Eintrag mit diesen Parametern:

* **Journalbezeichnung**: Name des Journal
* **Typ**: Wählen Sie Bank
* **Kurzzeichen**: Abkürzung Name in Grossbuchstaben

### Bank-Journal einrichten

Öffnen Sie das Bank-Journal via *Finanzen > Konfiguration > Journale*. Im Tab *Buchungssätze* legen Sie bei *Bankkonto* und *Zwischenkonto* die entsprechenden Konten aus dem Kontenplan fest.

Unter *Bankverbindung* fügen Sie das Bankkonto ihres Unternehmens hinzu. Legen Sie *Kontonummer* gemäss Anforderungen fest.

In den Tabs *Zahlungseingänge* und *Zahlungsausgänge* können Sie die Zahlungsmethoden konfigurieren.

::: tip
Die Spalten *Ausstehende Zahlungseingänge* und *Konto für ausstehende Zahlungen* werden standardmässig nicht eingeblendet.
:::

### Bank-Synchronisation konfigurieren

Fügen Sie ihre Bank via *Konfiguration > Bankverzeichnis > Eine Bank hinzufügen* hinzu.

![](attachments/Finanzan%20Raiffeisen%20Schweiz.png)

Hinterlegen Sie eine Telefonnummer zur Wiederherstellung des Synchronisations-Account.

![](attachments/Finanzen%20Account%20Recovery.png)

Geben Sie den Bestätigunsgcode ein. Nun werden Sie auf die Website von <https://www.saltedge.com> umgeleitet. Geben Sie ihre Login-Informationen ein.

![](attachments/Finanzen%20Saltedge%20Account.png)

Im Anschluss wählen Sie eine Authentisierungs-Methode.

![](attachments/Finanzen%20Saltedge%20Authenticaion.png)

Führen Sie diese wie gewohnt aus. Nun verbindet Saltedge den Odoo-Account mit dem Bankkonto. Sie werden wieder nach Odoo zurückgeführt.

![](attachments/Finanzen%20Bankkonto%20verknüpfen.png)

Es wird nun ein neues Journal zur Synchronisation erstellt.

### Bank-Synchronisation einrichten

Wählen Sie *Finanzen > Konfiguration > Journale* und wählen Sie das Bank-Journal aus. Im Tab *Buchungssätze* legen Sie für das Feld *Bank-Datenübertragung* die Option *Automatisierte Banksynchronisation* fest.

Dann gehen Sie nach *Finanznen > Konfiguration > Online Synchronisation* und wählen den ersten Eintrag aus. Im Feld *Journal* können Sie das Bank-Journal eintragen.

![](attachments/Fianzen%20Bank-Journal%20eintragen.png)

### Kommunikationsstandard festlegen

Der Kommunikationsstandard ist entscheidend bei der Generierung von Zahlungsreferenzen. Öffnen Sie ein Journal via *Finanzen > Konfiguration > Journale* und zeigen Sie den Tab *Erweiterte Einstellungen* an. Legen Sie im Feld *Kommunikationsstandard* den passenden Wert fest.

## Empfang

### Rechnung per E-Mail empfangen

Öffnen Sie die Journal-Einstellungen via *Finanzen > Konfiguration > Finanzen > Journale* und wählen Sie das Journal für das Rechnungen empfangen und erstellt werden sollen. Öffnen Sie den Tab *Erweiterte Einstellungen* und tragen Sie im Feld *E-Mail-Alias* die Empfangsadresse ein.

![](attachments/Finanzen%20Journal%20E-Mail-Alias.png)

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

![](attachments/Finanzen%20Rabatt.png)

## Portal

### Portal-Ansicht von Rechnung anzeigen

Um die Portal-Ansicht einer Rechnung anzuzeigen gehen Sie wie folgt vor *Rechnungsstellung > Kunden > Rechnungen > Rechnung auswählen* und dann auf *Vorschau* klicken. Nun öffnet sich die Portal-Ansicht in einem neuen Tab.
