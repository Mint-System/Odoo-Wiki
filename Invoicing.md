---
title: Rechnungsstellung
description: Online Rechnungsstellung leicht gemacht.
tags:
- HowTo
prev: ./
---
# Rechnungsstellung
![icons_odoo_account](attachments/icons_odoo_account.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/invoicing>

## Bereiche

| Erweiterung                                            | Beschreibung                           |
| ------------------------------------------------------ | -------------------------------------- |
| [Rechnungsstellung Mahnungen](Invoicing%20Reminder.md) | Mahnberichte erstellen und verschicken |

## Erweiterungen

| Erweiterung                                                                                   | Beschreibung                                                                                       |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Account Followup Mail Layout](Account%20Followup%20Mail%20Layout.md)                         |                                                                                                    |
| [Account Followup Manual Reminder](Account%20Followup%20Manual%20Reminder.md)                 | Standardwert für Mahnungserinnerungen auf Manuell setzen.                                          |
| [Account Invoice Carrier](Account%20Invoice%20Carrier.md)                                     | Auslieferungsmethode auf Rechnung hinterlegen.                                                     |
| [Account Invoice Comment](Account%20Invoice%20Comment.md)                                     | Kommentarfeld auf Rechnung.                                                                        |
| [Account Invoice Detail](Account%20Invoice%20Detail.md)                                       | Verkaufskontakt auf Rechnung einblenden.                                                           |
| [Account Invoice Move Date](Account%20Invoice%20Move%20Date.md)                               | Buchungs- und Rechnungsdatum unabhängig definieren.                                                |
| [Account Invoice Multiline Ref](Account%20Invoice%20Multiline%20Ref.md)                       | Kundenreferenz auf Verkaufsauftrag und Rechnung mit mehreren Zeilen.                               |
| [Account Invoice Notes](Account%20Invoice%20Notes.md)                                         | Zusätzliche Header und Footer Notizen kopiert von Verkaufsauftrag.                                 |
| [Account Invoice Outstanding Credit](Account%20Invoice%20Outstanding%20Credit.md)             | Filtern Sie Kundenrechnungen mit offenen Gutschriften.                                             |
| [Account Invoice Overdue Reminder](Account%20Invoice%20Overdue%20Reminder.md)                 | Einfache Lösung zum Versenden von Zahlungserinnerungen.                                            |
| [Account Invoice Sale Partner](Account%20Invoice%20Sale%20Partner.md)                         | Verkaufsadresse auf Rechnung festlegen.                                                            |
| [Account Invoice Select Bank](Account%20Invoice%20Select%20Bank.md)                           | Bankkonto anhand Währung auswählen.                                                                |
| [Account Move Invoice Partner](Account%20Move%20Invoice%20Partner.md)                         | Separate Rechnungsadresse auf Rechnung festlegen.                                                  |
| [Account Move Line Description](Account%20Move%20Line%20Description.md)                       | Produktname ohne Referenz in Beschreibung Rechnungszeile übertragen.                               |
| [Account Sale Timesheet Report](Account%20Sale%20Timesheet%20Report.md)                       | Zeiterfassungsbericht für Rechnung.                                                                |
| [Invoice Merge PDF Attachment](Invoice%20Merge%20PDF%20Attachment.md)                         | PDF-Dokumenten von Rechnungen zusammenführen.                                                      |
| [Purchase Invoice Prepare Partner](Purchase%20Invoice%20Prepare%20Partner.md)                 | Kontakte aus Bestellung auf Rechnung kopieren.                                                     |
| [Sale Invoice Carrier](Sale%20Invoice%20Carrier.md)                                           | Auslieferungsmethode aus Transfers beim Erstellen von Rechnungen aus Verkaufsaufträgen übertragen. |
| [Sale Invoice Cash Rounding Default](Sale%20Invoice%20Cash%20Rounding%20Default.md)           | Standardwert für Runden beim Erzeugen von Rechnungen aus Verkaufsaufträgen verwenden.              |
| [Sale Invoice Frequency](Sale%20Invoice%20Frequency.md)                                       | Verrechnungsintervalle auf Kontakte und Verkaufsaufträge.                                          |
| [Sale Invoice Ignore Ref](Sale%20Invoice%20Ignore%20Ref.md)                                   | Zahlungsreferenz bei Abrechnung nicht auf Rechnung übertragen.                                     |
| [Sale Invoice Line Description](Sale%20Invoice%20Line%20Description.md)                       | Buchungszeilen generiert aus Verkaufsaufträgen enthalten nur den Anzeigenamen des Produkts.        |
| [Sale Invoice Prepare Bank](Sale%20Invoice%20Prepare%20Bank.md)                               | Bankkonto anhand Währung auswählen.                                                                |
| [Sale Invoice Prepare Partner](Sale%20Invoice%20Prepare%20Partner.md)                         | Kontakte aus Verkaufsauftrag auf Rechnung kopieren.                                                |
| [Sales Order Invoicing Grouping Criteria](Sales%20Order%20Invoicing%20Grouping%20Criteria.md) | Kriterien zur Gruppierung in der Rechnungstellung festlegen.                                       |

## Versand

### Ausgangsrechnung erfassen

Öffnen Sie *Rechnungsstellung > Kunden > Rechnungen* und fügen Sie einen Eintrag hinzu.

### Rechnung zurücksetzen

Um eine gebucht Rechnung zurückzusetzen navigieren Sie nach nach *Rechnungsstellung > Kunden > Rechnungen* und zeigen eine ausgewählte Rechnung an. Wählen Sie die Aktion *Zurücksetzen* damit die Rechnung in den Status *Entwurf* gesetzt wird.

::: tip
Wurde die erstellte Rechnung bereits auf Status *Gebucht* gesetzt, so kann diese Rechnung nur teilweise korrigiert oder gelöscht werden.
:::

### Gutschrift erfassen

Navigieren Sie nach *Rechnungsstellung > Kunden > Gutschriften* und erfassen Sie eine Gutschrift. 

### Gutschrift für Rechnung erfassen

Öffnen Sie *Rechnungsstellung > Kunden > Rechnungen* und zeigen Sie die Rechnung an, welche vergütet werden soll. Wählen Sie die Aktion *Gutschrift Erstellen* und aktivieren die passenden Optionen:

* **Kreditmethode**:
	* Teilweise Rückerstattung:  
	* Komplette Rückerstattung: Es wird eine Gegenbuchung erstellt
	* Komplette Rückerstattung und neuer Rechnungsentwurf: Es wird eine Gegenbuchung erstellt und die Rechnung kopiert.
* **Begründung**: Geben Sie einen Text für die Gegenbuchung ein
* **Stornodatum**: Wenn Sie *Spezifisch* wählen, treffen Sie für das *Rückerstattungsdatum* eine Auswahl

Schliessen Sie den Vorgang mit *Gutschrift Erstellen* ab.

#### Beispiel

Eine Rechnung *Rechn/2023/08/0001* mit dem Betrag CHF 455.00 wurde bezahlt. Jetzt wird sie mit *Gutschrift Erstellen* in die Gutschrift* RRechn/2023/11/0001* umgewandelt und mit  Bestätigen* gebucht.
Eine neue Rechnung *Rechn/2023/11/0001* vom gleichen Kunden wird erfasst. Der Betrag aus der Gutschrift erscheint als noch *Noch nicht ausgeglichene Zahlungen*:

![](attachments/Rechnungsstellung%20Nicht%20Ausgeglichen.png)

Mit *Hinzufügen* wird der fällige Betrag um den Wert der Gutschrift reduziert:

![](attachments/Rechnungsstellung%20Bezahlt%20am.png)

## Abrechnung

### Bank hinzufügen

Navigieren Sie nach *Kontakte > Konfiguration > Bankverzeichnis* und erstellen Sie einen neuen Eintrag. Geben Sie den *Namen* der Bank und die *Bankleitzahl* (BIC) ein. Optional können Sie die *Bankadresse* erfassen. 

### Bankkonto erfassen

Navigieren Sie nach *Kontakte > Konfiguration > Bankkonten* und erstellen Sie einen neuen Eintrag. Geben Sie *Kontonummer* (IBAN) und den *Kontoinhaber* ein. Wählen oder erstellen Sie eine Bank im Feld *Bank*.

### Bankkonto zu Lieferant hinzufügen

Wählen Sie *Kontakte*  zeigen Sie den Lieferanten in der Formularansicht an. Klicken Sie auf *Bearbeiten* und fügen Sie im Tab *Finanzen* ein Bankkonto hinzu.

::: tip
Der Benutzer muss hierfür die Berechtigung *Kontakt erstellen* haben (Zugriffsrechte > Extra Rights)
:::

### Geld schicken für Bankkonto erlauben

Gilt ab #Odoo16.

Damit Lieferanten bezahlt werden können, muss dies explizit auf dem Bankkonto angegeben werden. Zeiten Sie einen Lieferanten unter *Kontakte* an und wählen Sie den den Tab *Finanzen*. Bei der Liste der Bankkonten aktivieren Sie die Option *Geld schicken*. 

### Bankkonten anzeigen

Wenn Sie alle erfassten Bankkonten in einer Listen anzeigen möchten, navigieren Sie nach *Kontakte > Konfiguration > Bankkonten*.

### Rechnungsadresse ändern

Angenommen Sie möchten die Empfängeradresse einer gebuchten Rechnung ändern, so setzen Sie diese Rechnung mit *Zurücksetzen* in den Entwurfsstatus. Anschliessend können Sie das Feld *Kunde* wieder bearbeiten. Passen Sie die Adresse an und buchen Sie die Rechnung wieder.

### Warnung für den Rechnungskontakt festlegen

Auf Kontakten können Sie Warnungs-Text hinterlegen, welche bei der Ertellung einer Rechnung angezeigt werden. Damit die entprechenden Felder auf dem Kontakt angezeigt werden, müssen Sie in den Benutzer-Einstellungen die Berechtigung *Eine Warnung kann auf einem Partner (Konto) gelegt werden* aktivieren. Unter *Kontakte > Eintrag auswählen > Tab Interne Notizen* finden Sie das entsprechende Feld.

![](attachments/Rechnungsstellung%20Warnung.png)

## Empfang

### Eingangsrechnung erfassen

Öffnen Sie *Rechnungsstellung > Lieferanten > Rechnungen* und fügen Sie einen Eintrag hinzu.

### Zahlung erfassen

Öffnen Sie *Rechnungsstellung > Lieferanten > Rechnungen* und wählen Sie eine zu bezahlende Rechnung aus. Klicken Sie auf *Zahlung Registrieren*. Im Dialog wählen Sie das *Journal* und die *Zahlungsmethode* aus. Prüfen Sie die Angaben und wählen Sie *Zahlung Erstellen*.

### Guthaben für Rechnungsdigitalisierung kaufen

Mit Odoo können PDF-Rechnung einfach gescannt und verarbeitet werden. Die Rechnungsdigitalisierung liest die Zahlungsinformationen aus dem PDF und erstellt eine Lieferantenrechnung.

Jeder Digitalisierungsvorgang kostet einen Credit. Die benötigten Credits können als In-App-Purchase (IAP) erworben werden. Klicken Sie auf *Einstellungen > Finanzen > Eingangsrechnungen > Guthaben kaufen*. Loggen Sie sich mit dem Odoo-Account ein und erwerben Sie ein IAP-Paket. Die Credits werden an ihrer Datenbank gut geschrieben und fortan steht der Digitalisierungsprozess zur Verfügung.

### Rechnungen digitalisieren

Zur Digitalisierung einer Rechnung laden Sie als erstes die PDF-Datei via *Finanzen > Lieferanten > Rechnungen > Hochladen* hoch. Öffnen Sie die Rechnung und starten Sie dann die Aktion *Send for digitalization*. Nach wenigen Sekunden sollte die Rechnungsangaben aus dem PDF ausgelesen und abgefüllt werden.

![](attachments/Rechnungsstellung%20Rechnung%20digitalisieren.png)

Der Digitalisierungsprozess dauert wenige Sekunden. Sie können den Status mit *Aktualisieren* überprüfen.

![](attachments/Rechnungsstellung%20Digitalisierung%20überprüfen.png)

### Lieferantenrechnung mit Bestellung verknüpfen

Wenn Sie eine Lieferantenrechnung unter *Rechnungsstellung > Lieferanten > Rechnung* haben, können Sie diese mit dem Feld *Autovervollständigung* mit einer Bestellung verknüpfen.

## Abstimmung

### Gutschrift zu Rechnung hinzufügen

Wenn Sie für einen Kunden eine Gutschrift haben, können Sie diese einer offenen Rechnung hinzufügen. Zeigen Sie die offene Rechnung via *Rechnungsstellung > Kunden > Rechnungen* an. Auf der Rechnung erscheint die Meldung:

> Sie haben ausstehendes Haben für diesen Kunden. Sie können diese zuordnen, um die Rechnung als bezahlt zu kennzeichnen

Am Ende der Rechnung können Sie bei der entsprechenden Gutschrift auf *Hinzufügen* drücken.

::: warning
Die Gutschrift und Rechnung müssen den gleichen Kunden haben.
:::

## Vorlagen

### Rechnungsvorlage anpassen

Für den automatischen Versand von Rechnungen können E-Mail-Vorlagen erstellt werden.

Unter *Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen* können die E-Mail-Vorlagen verwaltet werden. Erstellen Sie ein Duplikat der Vorlage *Invoice: Send by email* und fahren Sie weiter gemäss [E-Mail-Vorlage erfassen](Dialog%20E-Mail.md#E-Mail-Vorlage%20erfassen).

### Standardvorlage deaktivieren

Zeigen Sie die [Externe ID](Development.md#Externe%20IDs%20anzeigen) für `account.email_template_edi_invoice` an. Geben Sie im Feld *Datensatz-ID* den Wert `0` ein.

Damit wird beim Aufruf der Aktion *Senden & Drucken* auf der Rechnung die Standardvorlage nicht geladen.

## Berichte

### PDF-Datei von Kundenrechnungen vorbereiten

Gilt ab #Odoo16.

Navigieren Sie nach *Rechnungsstellung > Kunden > Rechnungen*. Markieren Sie die entsprechenden Kundenrechnungen und wählen Sie *Aktion > Print QR invoices*. Nun erstellt Odoo die PDF-Dateien für die ausgewählten Rechnungen.

::: tip
Damit die PDF-Datei beim Versenden der Rechnung aus dem Anhang geladen wird, müssen Sie die Aktion [Bericht beim Drucken aus Anhang laden](Development%20Reports.md#Bericht%20beim%20Drucken%20aus%20Anhang%20laden) für den *Rechnungen*-Bericht aktivieren.
:::

### Einzahlungsschein drucken

Gilt bits #Odoo14.

Mit der Schweizer Lokalisierung für das Finanzmodul ist ein Bericht zur Generierung von Einzahlungsscheinen enthalten. Damit Einzahlungsscheine erstellt werden können, müssen die folgenden Bedingungen erfüllt sein:

* Auf dem Bankkonto des Unternehmens muss das Feld `CHF ISR Subscription Number` ausgefüllt sein

![](attachments/Rechnungsstellung%20ESR-Nummern.png)

* Das auf der Rechnung hinterlegte Konto muss mit diesem Unternehmenskonto übereinstimmen
* Die Rechnung ist im Status *Gebucht*
* Die Einstellung *Einstellungen > Finanzen > Ausgangsrechnungen > Print bank on ISR* ist aktiviert, jedoch nicht dessen Unteroption *Preprinted account*

Sind diese Bedingungen erfüllt, dann erscheint beim Aufruf einer Rechnung die Aktion *Print ISR*.

::: warning
Damit Einzahlungsscheine für bereits erstellte Rechnungen generiert werden können, muss das erstellte ISR-PDF im Anhang entfernt werden.
:::

### QR-Rechnung drucken

Gilt bits #Odoo14.

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

## Produkte

### Fakturierungsregel festlegen

Für jedes Produkt können Sie definieren, ob es nach der Lieferung oder nach der Bestellung verrechnet werden soll. Navigieren Sie nach *Rechnungsstellung > Produkte > Produkte* und zeigen Sie ein Produkt an. Im Feld *Fakturierungsregel* können Sie bestimmen Sie Verrechnungsart bestimmen.

![](attachments/eCommerce%20Fakturierungsregel%20auf%20Produkt.png)

::: warning
Falls während der Lieferung zusätzliche Produkte erfasst werden, muss die abzurechendende Menge des Verkaufsauftrag aktualisiert werden. Nur dann wird das zusätzliche Produkt auf die Rechnung übertragen.
:::

### Berechtigungen anhand von Gruppen filtern

Im folgenden Beispiel werden ausgewählte Rechnungen nur für eine bestimmte Gruppe angezeigt.

Legen Sie auf dem Datenmodell diese *Rechte für Daten* fest:

**Name**: Invoicing Confidential\
**Gruppen**: Interne Benutzer\
**Domain**: `[('x_group_ids', 'in', [g.id for g in user.groups_id])]`\
**Berechtigung**: Lesen

**Name**: Invoicing Public\
**Gruppen**: Interne Benutzer\
**Domain**: `[('x_group_ids', '=',False)]`\
**Berechtigung**: Lesen