---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Anzahlungen

## Dienstleistung mit Anzahlung abwickeln

In diesem Szenario verkaufen Sie eine Dienstleistung auf Stundenbasis an einen Kunden. Sie bieten dem Kunden 10% Rabatt in Form von zusätzlichen Stunden an, wenn eine Anzahlung der offerierten Stunden zu 100% erfolgt. 

### Konfiguration

Damit Anzahlungen für Angebote erfasst werden können, führen Sie diese Schritte durchführen:

* [Produkt für Anzahlung auswählen](Sale%20Invoicing.md#Produkt%20für%20Anzahlung%20auswählen)
* [Konto für Anzahlungen festlegen](Finance%20Payments.md#Konto%20für%20Anzahlungen%20festlegen)

### Anzahlung

Nun können Sie ein [Angebot erstellen](Sale.md#Angebot%20erstellen) und diese Auftragszeilen hinzufügen:

Auftragszeile 1:
* **Produkt**: Produkt vom Typ Dienstleistung
* **Menge**: 20 Stunden
* **Stückpreis**: 100.00

Auftragszeile 2:
* **Produkt**: Produkt vom Typ Dienstleistung
* **Menge**: 2 Stunden (10% von 20 Stunden)
* **Preis**: 0.00 

Bestätigen Sie den Auftrag und führen Sie [Anzahlung erstellen](Sale%20Invoicing.md#Anzahlung%20erstellen) mit dem *Anzahlungsbetrag* von 100% aus. Bestätigen Sie die Rechnung.

Mit der Anzahlung wird der Betrag auf das Konto *2030 Erhaltene Anzahlungen* blastet.

| Buchungssatz    | Konto                                                       | Buchungstext         | Soll         | Haben        |
| --------------- | ----------------------------------------------------------- | -------------------- | ------------ | ------------ |
| Re.:/2023/00006 | 2030 Erhaltene Anzahlungen                                  | Anzahlung von 100.0% | CHF 0.00     | CHF 2'154.00 |
| Re.:/2023/00006 | 1100 Forderungen aus Lieferungen und Leistungen (Debitoren) |                      | CHF 2'154.00 | CHF 0.00     |

### Gutschrift
 Auf der Rechnung ist ein Hinweis, ass die Rechnung bereits bezahlt wurde, ist ersichtlich Auf der Rechnung ist ein Hinweis, ass die Rechnung bereits bezahlt wurde, ist ersichtlich
Sobald der Kunde die Rechnung bezahlt, erhalten Sie über das eBanking einen entsprechenden Beleg zum Abgleich. Diesen Beleg gleichen Sie mit der Anzahlungsrechnung ab und erstellen eine [Gutschrift](Invoicing.md#Gutschrift%20erstellen). Mit der Gutschrift wird das Konto *2030 Erhaltene Anzahlungen* wieder ausgeglichen.

| Buchungssatz                                      | Konto                                                       | Buchungstext         | Soll         | Haben        |
| ------------------------------------------------- | ----------------------------------------------------------- | -------------------- | ------------ | ------------ |
| Re.:/2023/00006                                   | 2030 Erhaltene Anzahlungen                                  | Anzahlung von 100.0% | CHF 0.00     | CHF 2'154.00 |
| Re.:/2023/00006                                   | 1100 Forderungen aus Lieferungen und Leistungen (Debitoren) |                      | CHF 2'154.00 | CHF 0.00     |
| RRe.:/2023/00001 (Umkehrung von: Re.:/2023/00006) | 2030 Erhaltene Anzahlungen                                  | Anzahlung von 100.0% | CHF 2'154.00 | CHF 0.00     |
| RRe.:/2023/00001 (Umkehrung von: Re.:/2023/00006) | 1100 Forderungen aus Lieferungen und Leistungen (Debitoren) |                      | HF 0.00      | CHF 2'154.00 |

Für dieses Beispiel können Sie einen [Bankauszug](Finance%20Reconcile.md#Bankauszug%20erfassen) mit dem Betrag von 2'154.00 erfassen.

### Abrechnung

Auf dem Verkaufsauftrag erfassen Sie nun Leistungen. Entweder tragen Sie diese manuell in die Auftragszeilen ein oder fügen Sie über die Zeiterfassung und Projekte hinzu.

Genau wie für die Aufträge ohne Anzahlung erstellen Sie periodische eine Rechnung. Führen Sie dazu eine Abrechnung aus: [Verkaufsauftrag mit Anzahlungen abrechnen](Sale%20Invoicing.md#Verkaufsauftrag%20mit%20Anzahlungen%20abrechnen).

Nachdem Sie die Rechnung bestätigt haben, erscheint die folgende Meldung:

> Sie haben **Restguthaben** für diesen Kunden. Sie können diese zuteilen, um die Rechnung als bezahlt zu kennzeichnen.

Klicken Sie auf *Restguthaben* und gleichen Sie die Rechnung mit der Gutschrift ab. Sie können die Rechnung dem Kunden schicken. Es ist ein Hinweis vermerkt, dass die Rechnung bereits bezahlt wurde.
