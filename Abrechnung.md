---
tags:
- HowTo
prev: ./
---
# Abrechnung
![icons_odoo_account_invoicing](assets/icons_odoo_account_invoicing.png)

Online Rechnungsstellung leicht gemacht.

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
| [Account Invoice Notes](Account%20Invoice%20Notes.md)                               | Zusätzliche Header und Footer Notizen kopiert von Verkaufsauftrag.                                 |
| [Account Invoice Sale Partner](Account%20Invoice%20Sale%20Partner.md)               | Verkaufsadresse auf Rechnung festlegen.                                                            |
| [Account Invoice Select Bank](Account%20Invoice%20Select%20Bank.md)                 | Bankkonto anhand Währung auswählen.                                                                |
| [Account Move Invoice Partner](Account%20Move%20Invoice%20Partner.md)               | Separate Rechnungsadresse auf Rechnung festlegen.                                                  |
| [Account Sale Timesheet Report](Account%20Sale%20Timesheet%20Report.md)             | Zeiterfassungsbericht für Rechnung.                                                                |
| [Purchase Invoice Prepare Partner](Purchase%20Invoice%20Prepare%20Partner.md)       | Kontakte aus Bestellung auf Rechnung kopieren.                                                     |
| [Sale Invoice Carrier](Sale%20Invoice%20Carrier.md)                                 | Auslieferungsmethode aus Transfers beim Erstellen von Rechnungen aus Verkaufsaufträgen übertragen. |
| [Sale Invoice Cash Rounding Default](Sale%20Invoice%20Cash%20Rounding%20Default.md) | Standardwert für Runden beim Erzeugen von Rechnungen aus Verkaufsaufträgen verwenden.              |
| [Sale Invoice Line Description](Sale%20Invoice%20Line%20Description.md)             | Buchungszeilen generiert aus Verkaufsaufträgen enhalten nur den Anzeigenamen des Produkts.         |
| [Sale Invoice Prepare Bank](Sale%20Invoice%20Prepare%20Bank.md)                     | Bankkonto anhand Währung auswählen.                                                                |
| [Sale Invoice Prepare Partner](Sale%20Invoice%20Prepare%20Partner.md)               | Kontakte aus Verkaufsauftrag auf Rechnung kopieren.                                                |
| [Swiss QR-ESR Scan](Swiss%20QR-ESR%20Scan.md)                                       | Rechnung anhand QR-Daten erstellen.                                                                |

## Versand

### Ausgangsrechnung erfassen

Öffnen Sie *Abrechnung > Kunden > Rechnungen* und fügen Sie einen Eintrag hinzu.

### Rechnung stornieren

Wurde die erstellte Rechnung bereits auf Status *Verbucht* gesetzt, so kann diese Rechnung nicht mehr korrigiert oder gelöscht werden. Reklamiert der Kunde zum Beispiel und die Rechnung muss neu erstellt erden, so kann über die Funktion *Stornieren* die Rechnung rückgängig gemacht werden und sämtliche Buchungen erhalten eine Gegenbuchung. Somit ist zum Beispiel das Konto *2200   
Geschuldete MwSt. (Umsatzsteuer)* mit den Gegenbuchungen wieder ausgeglichen und die MWST wird in Auflistung der Abrechnung nicht erscheinen.

In Modul *Finanzen* die Rechnung in der Liste anwählen und anzeigen lassen. Danach den Befehl *Stornieren* ausführen. Beachten Sie, dass Sie das als Storno-Datum das Rechnungsdatum wählen. Sodass die Storno am gleichen Tag erfolgt.

## Adressen

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

## Konfiguration

### Rechnungsnummer einrichten

Die Einrichtung der automatischen Vergabe der Rechnungsnummer erfolgt über die Aktion *Resequence* im Menu *Abrechnung > Kunden > Rechnungen*.
Markieren Sie eine (oder alle) Rechnungen und formulieren Sie die erste Rechnungsnummer der Sequenz. Nach diesem Schema werden nur alle Rechnungen neu benannt und neue Rechnungen folgen diesem Muster.

![Abrechnung Rechnungsnummer einrichten](assets/Abrechnung%20Rechnungsnummer%20einrichten.gif)

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
* Die Einstellung *Einstellungen > Finanzen > Ausgangsrechnungen > Print Swiss QR Code* ist aktiviert

Sind diese Bedingungen erfüllt, dann erscheint beim Aufruf einer Rechnung die Aktion *Print QR-Bill*.

## Datenbank

### Beträge runden

Damit Frankenbeträge in Rechnungen auf 0.05 gerundet werden, müssen Sie die Bargeldrundung aktivieren.

Navigieren Sie nach *Finanzen > Konfiguration > Bargeld-Runden* und erstellen Sie einen neuen Eintrag wie folgt.

![](assets/Abrechnung%20Runden.png)

Wenn Sie eine neue Rechnung schreiben und die Rundungsmethode festgelegt ist, werden die Beiträge entsprechend gerundet.

## Produktverwwaltung

### Fakturierungsregel festlegen

Für jedes Produkt können Sie definieren, ob es nach der Lieferung oder nach der Bestellung verrechnet werden soll.

![](assets/eCommerce%20Fakturierungsregel%20auf%20Produkt.png)

::: warning
Falls während der Lieferung zusätzliche Produkte erfasst werden, muss die abzurechendende Menge des Verkaufsauftrag aktualisiert werden. Nur dann wird das zusätzliche Produkt auf die Rechnung übertragen.
:::