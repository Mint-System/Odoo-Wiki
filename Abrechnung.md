---
description: Online Rechnungsstellung leicht gemacht.
tags:
- HowTo
prev: ./
---
# Abrechnung
![icons_odoo_account_invoicing](assets/icons_odoo_account_invoicing.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/invoicing>

## Bereiche

| Erweiterung                                       | Beschreibung                           |
| ------------------------------------------------- | -------------------------------------- |
| [Abrechnung Mahnungen](Abrechnung%20Mahnungen.md) | Mahnberichte erstellen und verschicken |

## Erweiterungen

| Erweiterung                                                                         | Beschreibung                                                                                       |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Account Invoice Carrier](Account%20Invoice%20Carrier.md)                           | Auslieferungsmethode auf Rechnung hinterlegen.                                                     |
| [Account Invoice Comment](Account%20Invoice%20Comment.md)                           | Kommentarfeld auf Rechnung.                                                                        |
| [Account Invoice Detail](Account%20Invoice%20Detail.md)                             | Verkaufskontakt auf Rechnung einblenden.                                                           |
| [Account Invoice Multiline Ref](Account%20Invoice%20Multiline%20Ref.md)             | Kundenreferenz auf Verkaufsauftrag und Rechnung mit mehreren Zeilen.                               |
| [Account Invoice Notes](Account%20Invoice%20Notes.md)                               | Zusätzliche Header und Footer Notizen kopiert von Verkaufsauftrag.                                 |
| [Account Invoice Overdue Reminder](Account%20Invoice%20Overdue%20Reminder.md)       | Einfache Lösung zum Versenden von Zahlungserinnerungen.                                            |
| [Account Invoice Sale Partner](Account%20Invoice%20Sale%20Partner.md)               | Verkaufsadresse auf Rechnung festlegen.                                                            |
| [Account Invoice Select Bank](Account%20Invoice%20Select%20Bank.md)                 | Bankkonto anhand Währung auswählen.                                                                |
| [Account Move Invoice Partner](Account%20Move%20Invoice%20Partner.md)               | Separate Rechnungsadresse auf Rechnung festlegen.                                                  |
| [Account Move Line Description](Account%20Move%20Line%20Description.md)             | Produktname ohne Referenz in Beschreibung Rechnungszeile übertragen.                               |
| [Account Sale Timesheet Report](Account%20Sale%20Timesheet%20Report.md)             | Zeiterfassungsbericht für Rechnung.                                                                |
| [Purchase Invoice Prepare Partner](Purchase%20Invoice%20Prepare%20Partner.md)       | Kontakte aus Bestellung auf Rechnung kopieren.                                                     |
| [Sale Invoice Carrier](Sale%20Invoice%20Carrier.md)                                 | Auslieferungsmethode aus Transfers beim Erstellen von Rechnungen aus Verkaufsaufträgen übertragen. |
| [Sale Invoice Cash Rounding Default](Sale%20Invoice%20Cash%20Rounding%20Default.md) | Standardwert für Runden beim Erzeugen von Rechnungen aus Verkaufsaufträgen verwenden.              |
| [Sale Invoice Line Description](Sale%20Invoice%20Line%20Description.md)             | Buchungszeilen generiert aus Verkaufsaufträgen enhalten nur den Anzeigenamen des Produkts.         |
| [Sale Invoice Prepare Bank](Sale%20Invoice%20Prepare%20Bank.md)                     | Bankkonto anhand Währung auswählen.                                                                |
| [Sale Invoice Prepare Partner](Sale%20Invoice%20Prepare%20Partner.md)               | Kontakte aus Verkaufsauftrag auf Rechnung kopieren.                                                |
| [l10n CH Invoice Reports](l10n%20CH%20Invoice%20Reports.md)                         | Rechnung mit ISR- und/oder QR-Zahlung drucken.                                                     |
| [l10n CH QR ISR Invoice Import](l10n%20CH%20QR%20ISR%20Invoice%20Import.md)         | Rechnung anhand QR-Daten erstellen.                                                                |

## Versand

### Ausgangsrechnung erfassen

Öffnen Sie *Abrechnung > Kunden > Rechnungen* und fügen Sie einen Eintrag hinzu.

### Rechnung zurücksetzen

Um eine gebucht Rechnung zurückzusetzen navigieren Sie nach nach Abrechnung > Kunden > Rechnungen* und zeigen eine augewählte Rechnung an. Wählen Sie die Aktion *Zurücksetzen* damit die Rechnung in den Status *Entwurf* gesetzt wird.

::: tip
Wurde die erstellte Rechnung bereits auf Status *Gebucht* gesetzt, so kann diese Rechnung nur teilweise korrigiert oder gelöscht werden.
:::

### Gutschrift erstellen

Öffnen Sie *Abrechnung > Kunden > Rechnungen* und zeigen Sie die Rechnung an, welche vergütet werden soll. Wählen Sie die Aktion *Gutschrift Erstellen* und aktivieren die passenden Optionen:

* **Kreditmethode**:
	* Teilweise Rückerstattung:  
	* Komplette Rückerstattung: Es wird eine Gegenbuchung erstellt
	* Komplette Rückerstattung und neuer Rechnungsentwurf: Es wird eine Gegenbuchung erstellt und die Rechnung kopiert.
* **Begründung**: Geben Sie einen Text für die Gegenbuchung ein
* **Stornodatum**: Wenn Sie *Spezifisch* wählen, treffen Sie für das *Rückerstattungsdatum* eine Auswahl 

Schliessen Sie den Vorgang mit *Gutschrift Erstellen* ab.

## Abrechnung

### Bank hinzufügen

Navigieren Sie nach *Kontakte > Konfiguration > Bankverzeichnis* und erstellen Sie einen neuen Eintrag. Geben Sie den *Namen* der Bank und die *Bankleitzahl* (BIC) ein. Optional können Sie die *Bankadresse* erfassen. 

### Bankkonto erfassen

Navigieren Sie nach *Kontakte > Konfiguration > Bankkonten* und erstellen Sie einen neuen Eintrag. Geben Sie *Kontonummber* (IBAN) und den *Kontoinhaber* ein. Wählen oder erstellen Sie eine Bank im Feld *Bank*.

### Bankkonto zu Lieferant hinzufügen

Wählen Sie *Kontakte*  zeigen Sie den Lieferanten in der Formularansicht an. Klicken Sie auf *Bearbeiten* und fügen Sie im Tab *Finanzen* ein Bankkonto hinzu.

### Bankkonten anzeigen

Wenn Sie alle erfassten Bankkonten in einer Listen anzeigen möchten, navigieren Sie nach *Kontakte > Konfiguration > Bankkonten*.

### Rechnungsadresse ändern

Angenommen Sie möchten die Empfängeradresse einer gebuchten Rechnung ändern, so setzen Sie diese Rechnung mit *Zurücksetzen* in den Entwurfsstatus. Anschliessen können Sie das Feld *Kunde* wieder bearbeiten. Passen Sie die Adresse an und buchen Sie die Rechnung wieder.

### Warnung für den Rechnungskontakt festlegen

Auf Kontakten können Sie Warnungs-Text hinterlegen, welche bei der Ertellung einer Rechnung angezeigt werden. Damit die entprechenden Felder auf dem Kontakt angezeigt werden, müssen Sie in den Benutzer-Einstellungen die Berechtigung *Eine Warnung kann auf einem Partner (Konto) gelegt werden* aktivieren. Unter *Kontakte > Eintrag auswählen > Tab Interne Notizen* finden Sie das entsprechende Feld.

![](assets/Abrechnung%20Warnung.png)

## Empfang

### Eingangsrechnung erfassen

Öffnen Sie *Abrechnung > Lieferanten > Rechnungen* und fügen Sie einen Eintrag hinzu.

### Rechnungen digitalisieren

Mit Odoo können PDF-Rechnung einfach gescannt und verarbeitet werden. Die Rechnungsdigitalisierung liest die Zahlungsinformationen aus dem PDF und erstellt eine Lieferantenrechnung.

Jeder Digitalisierungsvorgang kostet einen Credit. Die benötigten Credits können als In-App-Purchase (IAP) erworben werden. Klicken Sie auf *Einstellungen > Finanzen > Eingangsrechnungen > Guthaben kaufen*. Loggen Sie sich mit dem Odoo-Account ein und erwerben Sie ein IAP-Paket. Die Credits werden an ihrer Datenbank gut geschrieben und fortan steht der Digitalisierungsprozess zur Verfügung.

Zur Digitalisierung einer Rechnung laden Sie als erstes die PDF-Datei via *Finanzen > Lieferanten > Rechnungen > Hochladen* hoch. Öffnen Sie die Rechnung und starten Sie dann die Aktion *Send for digitalization*. Nach wenigen Sekunden sollte die Rechnungsangaben aus dem PDF ausgelesen und abgefüllt werden.

![](assets/Abrechnung%20Rechnung%20digitalisieren.png)

Der Digitalisierungsprozess dauert wenige Sekunden. Sie können den Status mit *Aktualisieren* überprüfen.

![](assets/Abrechnung%20Digitalisierung%20überprüfen.png)

## Vorlagen

### Rechnungsvorlage anpassen

Für den automatischen Versand von Rechnungen können E-Mail-Vorlagen erstellt werden.

Unter *Einstellungen > Technisch > E-Mail > Vorlagen* können die E-Mail-Vorlagen verwaltet werden. Erstellen Sie ein Duplikat der Vorlage *Invoice: Send by email* und fahren Sie weiter gemäss [E-Mail-Vorlage erfassen](Diskussion%20E-Mail.md#E-Mail-Vorlage%20erfassen).

### Standardvorlage deaktivieren

Zeigen Sie die [Externe ID](Entwicklung.md#Externe%20IDs%20anzeigen) für `account.email_template_edi_invoice` an. Geben Sie im Feld *Datensatz-ID* den Wert `0` ein.

Damit wird beim Aufruf der Aktion *Senden & Drucken* auf der Rechnung die Standardvorlage nicht geladen.

## Berichte

### Einzahlungsschein drucken

Mit der Schweizer Lokalisierung für das Finanzmodul ist ein Bericht zur Generierung von Einzahlungsscheinen enthalten. Damit Einzahlungsscheine erstellt werden können, müssen die folgenden Bedingungen erfüllt sein:

* Auf dem Bankkonto des Unternehmens muss das Feld `CHF ISR Subscription Number` ausgefüllt sein

![](assets/Abrechnung%20ESR-Nummern.png)

* Das auf der Rechnung hinterlegte Konto muss mit diesem Unternehmenskonto übereinstimmen
* Die Rechnung ist im Status *Gebucht*
* Die Einstellung *Einstellungen > Finanzen > Ausgangsrechnungen > Print bank on ISR* ist aktiviert, jedoch nicht dessen Unteroption *Preprinted account*

Sind diese Bedingungen erfüllt, dann erscheint beim Aufruf einer Rechnung die Aktion *Print ISR*.

::: warning
Damit Einzahlungsscheine für bereits erstellte Rechnungen generiert werden können, muss das erstellte ISR-PDF im Anhang entfernt werden.
:::

### QR-Rechnung drucken

Mit der Schweizer Lokalisierung für das Finanzmodul ist ein Bericht zur Generierung von QR-Rechnungen enthalten. Damit Einzahlungsscheine erstellt werden können, müssen die folgenden Bedingungen erfüllt sein:

* Der Rechnungsempfänger und Absender müssen eine Schweizer-Adresse haben
* Das QR-Konto ist auf dem Rechnungskonto eingetragen
* Die Zahlungsreferenz muss QR-kompatibel sein (Referenz gemäss ISR)
* Die Rechnung ist im Status *Gebucht*
* Die Einstellung *Einstellungen > Finanzen > Ausgangsrechnungen > Print Swiss QR Code* ist aktiviert (optional)

Sind diese Bedingungen erfüllt, dann erscheint beim Aufruf einer Rechnung die Aktion *QR-Rechnung Drucken*.

## Datenbank

### Rundungsmethode erstellen

Damit Frankenbeträge in Rechnungen auf 0.05 gerundet werden, müssen Sie die Bargeldrundung aktivieren.

Navigieren Sie nach *Finanzen > Konfiguration > Bargeld-Runden* und erstellen Sie einen neuen Eintrag wie folgt:

* **Name**: CHF auf 0.05
* **Rundungsgenauigkeit**: 0.05
* **Rundungsstrategie**: Steuerbetrag bearbeiten
* **Rundungsverfahren**: HALF-UP

Wenn Sie eine neue Rechnung schreiben und die Rundungsmethode festgelegt ist, werden die Beiträge entsprechend gerundet.

## Produktverwaltung

### Fakturierungsregel festlegen

Für jedes Produkt können Sie definieren, ob es nach der Lieferung oder nach der Bestellung verrechnet werden soll. Navigieren Sie nach *Abrechnung > Produkte > Produkte* und zeigen Sie ein Produkt an. Im Feld *Fakturierungsregel* können Sie bestimmen Sie Verrechnungsart bestimmen.

![](assets/eCommerce%20Fakturierungsregel%20auf%20Produkt.png)

::: warning
Falls während der Lieferung zusätzliche Produkte erfasst werden, muss die abzurechendende Menge des Verkaufsauftrag aktualisiert werden. Nur dann wird das zusätzliche Produkt auf die Rechnung übertragen.
:::