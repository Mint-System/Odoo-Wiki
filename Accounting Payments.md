---
title: Buchhaltung Zahlungen
description: SEPA- und QR-Zahlungen mit Odoo Buchhaltung abwickeln.
kind: howto
prev: ./accounting
---
# Buchhaltung Zahlungen
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## SEPA-Zahlung

### SEPA-Zahlung aktivieren

Damit SEPA-Zahlungen exportiert werden können, müssen unter *Einstellungen > Buchhaltung > Lieferantenzahlungen* die Option *SEPA-Überweisung / ISO20022* aktivieren und folgenden Einstellungen vornehmen:

* **Unternehmensname**: Name des Unternehmens
* **Identifikation**: Mwst. oder andere eindeutige Identifikationsnummer

### SEPA-Zahlmethode aktiveren

Gilt bis #Odoo16.

Damit Zahlungen aus Odoo exportiert und im eBanking importiert werden können, müssen Sie die SEPA-Zahlmethode für das entsprechende Bank-Journal aktiveren.

Navigieren Sie nach *Buchhaltung > Konfiguration > Journale > Bank > Tab Erweiterte Einstellungen* und aktiveren Sie *SEPA Kreditübertragung*.

### SEPA-Zahlung erstellen

Gilt bis #Odoo16.

Öffnen Sie eine Rechnung und drücken Sie auf *Einzahlung erfassen*. Wählen Sie *SEPA Kreditübertragung als Zahlungsmethode*.

![](attachments/Buchhaltung%20SEPA-Zahlung%20erfassen.gif)

Gilt ab #Odoo17.

Öffnen Sie eine Rechnung und drücken Sie auf *Zahlen*. Wählen Sie *Swiss ISO20022* als Zahlungsmethode. 

### SEPA-Zahlung nach Währung gruppieren

Oft macht es Sinn Zahlungen nach Währung oder einem anderen Attribut zu gruppieren. Klicken Sie auf *Buchhaltung > X Über SEPA zu sendende Zahlungen* und wählen Sie *Gruppieren nach > Währung*. Führen Sie nun eine Folgeaktion aus mit der markierten Elementen einer Gruppe.

![](attachments/Buchhaltung%20Zahlungen%20SEPA-Zahlung%20nach%20Währung%20gruppieren.png)

### Stapelzahlung anlegen

Gilt bis #Odoo16.

Um eine Zahlung zu exportieren, klicken Sie auf *Buchhaltung > X Über SEPA zu sendende Zahlungen*, markieren die offenen Zahlungen und wählen *Aktionen > Stapelzahlung anlegen*. Im neuen Dialog wählen Sie *Bestätigen* und erhalten so die generierte Zahlungsdatei, die Sie exportieren können.

Im Menüpunkt *Buchhaltung > Lieferanten > Stapel-Überweisungen* sehen Sie alle Stapelzahlungen.

Gilt ab #Odoo17.

Zeigen Sie die Lieferanten-Zahlungen unter *Buchhaltung > Lieferanten > Zahlungen* an. Markieren Sie Zahlungen im Status *In Bearbeitung* und wählen Sie *Stapel erstellen*.

Im neuen Dialog wählen Sie *Validieren*.

### Zahlungsdatei neu generieren

Angenommen Sie haben Stammdaten oder Kontoangaben der Lieferanten angepasst und möcht die Zahlungsdatei erneut generieren, öffnen Sie *Buchhaltung > Lieferanten > Stapel-Überweisungen*. Wählen Sie die betroffene Stapelzahlung aus und klicken Sie auf *Re-generate Export File*. Ein Dialog öffnet sich und Sie können Sie Zahlung herunterladen.

![](attachments/Buchhaltung%20Zahlungen%20Datei%20herunterladen.png)

::: warning
Falls Sie beim Neu generieren der Zahlung einen Fehler erhalten, müssen Sie die Zahlungen zurücksetzen.

![](attachments/Buchhaltung%20Zahlung%20gesendet%20Fehler.png)
:::

### Zahlungsbetrag korrigieren

Angenommen Sie möchten eine Zahlung korrigieren und anschliessend erneut zur Zahlung hochladen. Gehen Sie wie folgt vor. Rufen Sie die Zahlung unter *Buchhaltung > Lieferanten > Zahlungen* auf. Wählen Sie *Stornieren* und passen Sie die Zahlung an. *Bestätigen* Sie anschliessend die Zahlung klicken Sie auf *Abstimmung Rechnungen & Zahlungen*.

![](attachments/Buchhaltung%20Zahlungen%20Abstimmen.png)

Hat sich der Betrag geändert muss nun die Differenz entsprechend verbucht werden.

![](attachments/Buchhaltung%20Zahlungen%20Zahlungsbetrag%20korrigieren.png)

### Mehrere Zahlungen auf einmal anlegen

Öffnen Sie *Buchhaltung > Lieferanten > Rechnungen* und zeigen Sie die Spalte *Zahlung Status* an. Filtern Sie nach *Nicht bezahl* und selektieren Sie die Rechnungen, für welche Sie eine Zahlung erfassen möchten.

![](attachments/Buchhaltung%20Zahlungen%20erfassen.png)

Wählen Sie *Zahlung Erfassen*. Schliessen Sie den Dialog. Nun wird für jede Rechnung eine Zahlung generiert.

## QR-Rechnung

### QR-IBAN speichern

Zur Speicherung der QR-IBAN gibt es auf dem Bankkonto ein entsprechendes Feld. Navigieren Sie nach *Kontakte > Konfiguration > Bankkonten*, wählen Sie das Bankkonto aus und tragen Sie im Feld *QR-IBAN* die Nummer ein.

### QR-Code Zahlungstyp festlegen

Zeigen Sie eine Rechnung via *Buchhaltung > Kunden > Rechnungen* an und öffnen Sie den Tab *Weitere Informationen*. Im Feld *Payment QR-code* ist die Methode zur Generierung des QR-Codes festgelegt.

## Ausgehende Zahlungen

### Ausgehende Zahlung erfassen

Navigieren Sie nach *Buchhaltung > Lieferanten > Zahlungen* und erstellen Sie einen Eintrag

* **Zahlungsart**: Wählen Sie hier *Ausgehend*
* **Kunde**: Wählen Sie den Lieferanten welcher die Zahlung erhält
* **Betrag**: Geben Sie hier den zu schuldenden Betrag ein
* **Datum**: Das ist das Datum an dem die Zahlung erfolgt ist
* **Memo**: Tragen Sie hier die Zahlungsreferenz des Lieferanten ein
* **Journal**: Hier wählen Sie das passende Journal (Bank oder Kasse) aus
* **Zahlungsmethode**: Wählen Sie die passende Zahlungsmethode aus
* **Bankkonto des Lieferanten**: Ist erforderlich, wenn es sich um eine SEPA-Zahlung handelt

Buchen Sie die Zahlung mit *Bestätigung*.

### Zahlungsmethode für Lieferantenrechnungen hinzufügen

Zeigen Sie ein Bank-Journal via *Buchhaltung > Konfiguration > Journale* an. Fügen Sie einen Eintrag unter *Zahlungsausgänge* hinzu um eine neue Zahlungsmethode für Lieferantenrechnungen zu erhalten. Optional können Sie das Standardkonto für Zahlungen im Feld *Konten für ausstehende Zahlungen* übersteuern.

### Zahlungsreferenz von Lieferant hinterlegen

Auf einer Lieferantenrechnung unter *Buchhaltung > Lieferanten > Rechnung* geben Sie im Feld *Zahlungsreferenz* die Rechnungsnummer des Lieferanten ein. Dazu ein Beispiel:

![](attachments/Buchhaltung%20Zahlungen%20Zahlungsreferenz%20Lieferant%20hinterlegen.png)

Wenn Sie eine Zahlung erfassen wird diese Zahlungsreferenz als *Memo* übernommen.

![](attachments/Buchhaltung%20Zahlungen%20Memo%20Zahlung.png)

### Ausgehende Zahlung für mehrere Rechnungen erfassen

Im App Buchhaltung in der Ansicht *Buchhaltung >  Lieferanten > Rechnung* den Filter *Nicht bezahlt* setzen. Die zu zahhlenden Rechnungen links markieren und *Zahlung erfassen* auswählen. 

![](attachments/Buchhaltung%20Sepa%20Zahlung%20erfassen.png)

Für jede Rechnung wird eine SEPA-Zahlung angelegt.

### Lieferanten-Zahlung mit Rabatt erstellen

Wenn Sie für eine Rechnung *Buchhaltung > Lieferanten > Rechnung* eine Zahlung erfassen, können Sie den Zahlungsbetrag mit dem gewährten Rabatt überschreiben. Den Rabatt-Betrag erhalten Sie im Tab *Buchungszeilen* unter Berücksichtigung der entsprechenden *Fälligkeit*. Im Dialog *Zahlung erfassen*, geben Sie den entsprechenden Betrag ein und wählen für das Feld *Zahlungsdifferenz* die Option *Mark as fully paid*. Geben Sie nun das entsprechende Konto für das Skonto ein.

![](attachments/Buchhaltung%20Zahlung%20mit%20Rabatt.png)

### Lieferanten-Zahlungen anzeigen

Wählen Sie bezahlte Rechnung oder Rechnung in Zahlung via *Buchhaltung > Lieferanten > Rechnung* aus. Klicken Sie auf das Informations-Icon unterhalb des Rechnungstotal und wählen anschliessen *Ansicht*.

![](attachments/Buchhaltung%20Zahlungen%20anzeigen.png)

### Zahlungsreferenz auf Lieferantenrechnung neu generieren

Wählen Sie die gebuchte Rechnung unter *Buchhaltung > Lieferanten > Rechnung* und klicken Sie auf *Zurücksetzen*. Entfernen Sie die Inhalte aus dem Feld *Zahlungsreferenz* und bestätigen Sie die Rechnung. Nun sollte eine neue Zahlungsreferenz generiert werden.

### Zahlungsdatei validieren

Falls die Zahlung nach dem Hochladen ins eBanking nicht ausgeführt werden kann, können Sie die Zahlungsdatei validieren lassen. Registrieren Sie sich im [Swiss Pyament Standards Validation Portal](https://validation.iso-payments.ch/).

Laden Sie die Datei hoch und wählen Sie den Standard aus. Drücken Sie *Nachricht Hochladen* und anschliessen *Jetzt validieren* um den Validierungsvorgang zustarten.

![](attachments/Buchhaltung%20Zahlungen%20Zahlungsdatei%20validieren.png)

Nach der Validierung erhalten Sie einen ausführlichen Bericht.

![](attachments/Buchhaltung%20Zahlungen%20Zahlungsdatei%20output.png)

### Gesendete Stapelzahlung zurücksetzen

Wenn  Sie die Aktion [Zahlung gesendet zurücksetzen](Accounting%20Actions.md#Zahlung%20gesendet%20zurücksetzen) erstellen, können Sie Stapelzahlung mit gesendeten Zahlungen neu generieren.

![](attachments/Buchhaltung%20Zahlungen%20gesendet%20zurücksetzen.gif)

## Eingehende Zahlungen

### Eingehende Zahlung erfassen

Navigieren Sie nach *Buchhaltung > Kunden > Zahlung* und erfassen Sie eine Zahlung:

* **Zahlungsart**: Wählen Sie hier *Eingehend*
* **Kunde**: Wählen Sie den Kunden von dem Sie die Zahlung erhalten haben
* **Betrag**: Geben Sie hier den erhaltenen Betrag ein
* **Datum**: Das ist das Datum an dem die Zahlung erfolgt ist
* **Memo**: Tragen Sie hier die Zahlungsreferenz des Kunden ein
* **Journal**: Hier wählen Sie das passende Journal (Bank oder Kasse) aus

Buchen Sie die Zahlung mit *Bestätigung*.

### Sammelzahlung von Kunde erfassen

Wenn Sie eine Anzeige für eine Sammelzahlung eines Kunden erhalten, können Sie diese auf zwei Wege erfassen und abstimmen. Entweder erfassen Sie die Sammelzahlung als eingehende Zahlung und gleichen diese mit den Kundenrechnungen ab oder Sie markieren die Kundenrechnungen und erfassen eine Zahlung.

::: tip
Wenn auf der Sammelrechnung eine Unter oder Überzahlung gemacht wurde, können Sie die Differenz im Abstimmungs-Dialog als manuelle Buchung ausgleichen.
:::

## Anzahlungen

### Konto für Anzahlungen festlegen

Navigieren Sie nach *Einstellungen > Verkauf > Abrechnung* und öffnen Sie das Produkt in der Auswahl von *Anzahlungen*. Im Tab *Buchhaltung*  wählen Sie im Feld *Erlöskonto* ein Konto aus den kurzfristigen Verbindlichkeiten aus, beispielsweise *2030 Erhaltene Anzahlungen*.

## Ansichten

### Zahlungsmethoden anzeigen

Damit Sie eine Übersicht der Zahlungsmethoden erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Zahlungsmethoden`\
Objekt: `account.payment.method`\
Ansichtsmodus: `tree,form`\
Menü: `Zahlungsmethoden`\
Obermenü: `Buchhaltung/Konfiguration/Buchhaltung`\
Aktion: `ir.actions.act_window` `Zahlungsmethoden`\
Nummernfolge: `10`

Laden Sie die Odoo-App neu. Anschliessend finden Sie unter *Buchhaltung > Konfiguration > Zahlungsmethoden* eine Übersicht der Zahlungsmethoden.

