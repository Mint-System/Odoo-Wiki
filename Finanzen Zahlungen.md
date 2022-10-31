---
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Zahlungen
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

SEPA- und QR-Zahlungen mit Odoo Finanzen abwickeln.

## SEPA-Zahlung

### SEPA-Zahlung aktivieren

Damit SEPA-Zahlungen exportiert werden können, müssen unter *Einstellungen > Finanzen > Zahlung des Lieferant* die folgenden Einstellungen vorgenommen werden:

* Unternehmensname: Name des Unternehmesn
* Identifikation: Mwst. oder andere eindeutige Identifikationsnummer
* Veranlasser: Name des Buchhalters
* SEPA PAIN Version: Schweizer Version

### SEPA-Zahlmethode aktiveren

Damit Zahlungen aus Odoo exportiert und im eBanking importiert werden können, müssen Sie die SEPA-Zahlmethode für das entsprechende Bank-Journal aktiveren.

![Finanzen SEPA Zahlung aktivieren](assets/Finanzen%20SEPA%20Zahlung%20aktivieren.gif)

Navigieren Sie nach *Finanzen > Optionen Journal > Einstellungen > Tab Erweiterte Einstellungen* und aktiveren Sie *SEPA Kreditübertragung*.

### SEPA-Zahlung erstellen

Öffnen Sie eine Rechung und drücken Sie auf *Einzahlung erfassen*. Wählen Sie *SEPA Kreditübertragung als Zahlungsmethode*.

![Finanzen SEPA-Zahlung erfassen](assets/Finanzen%20SEPA-Zahlung%20erfassen.gif)

### SEPA-Zahlung nach Währung gruppieren

Oft macht es Sinn Zahlungen nach Währung oder einem anderen Attribut zu gruppieren. Klicken Sie auf *Finanzen > X Über SEPA zu sendende Zahlungen* und wählen Sie *Gruppieren nach > Währung*. Führen Sie nun eine Folgeaktion aus mit der markierten Elementen einer Gruppe.

![](assets/Finanzen%20Zahlungen%20SEPA-Zahlung%20nach%20Währung%20gruppieren.png)

### Stapelzahlung anlegen

Um eine Zahlung zu exportieren, klicken Sie auf *Finanzen > X Über SEPA zu sendende Zahlungen*, markieren die offenen Zahlungen und wählen *Aktion > Stapelzahlung anlegen*. Im neuen Dialog wählen Sie *Bestätigen* und erhalten so die generierte Zahlungsdatei, die Sie exportieren können.

Im Menüpunkt *Finanzen > Lieferanten > Stapel-Überweisungen* sehen Sie alle Stapelzahlungen.

### Zahlungsdatei neu generieren

Angenommen Sie haben Stammdaten oder Kontoangaben der Lieferanten angepasst und möcht die Zahlungsdatei erneut generieren, öffnen Sie *Finanzen > Lieferanten > Stapel-Überweisungen*. Wählen Sie die betroffene Stapelzahlung aus und klicken Sie auf *Re-generate Export File*. Ein Dialog öffnet sich und Sie können Sie Zahlung herunterladen.

![](assets/Finanzen%20Zahlungen%20Datei%20herunterladen.png)

::: warning
Falls Sie beim Neugenerieren der Zahlung einen Fehler erhalten, müssen Sie die Zahlungen zurücksetzen.

![](assets/Finanzen%20Zahlung%20gesendet%20Fehler.png)
:::

### Zahlungsbetrag korrigieren

Angenommen Sie möchten eine Zahlung korrigeren und anschliessen erneut zur Zahlung hochladen. Gehen Sie wie folgt vor. Rufen Sie die Zahlung unter *Finanzen > Lieferanten > Zahlungen* auf. Wählen Sie *Stornieren* und passen Sie die Zahlung an. *Bestätigen* Sie anschliessend die Zahlung klicken Sie auf *Abstimmung Rechnungen & Zahlungen*.

![](assets/Finanzen%20Zahlungen%20Abstimmen.png)

Hat sich der Betrag genändert muss nun die Differenz entsprechend verbucht werden.

![](assets/Finanzen%20Zahlungen%20Zahlungsbetrag%20korrigieren.png)

### Mehrere Zahlungen auf einmal anlegen

Öffnen Sie *Finanzen > Lieferanten > Rechnungen* und zeigen Sie die Spalte *Zahlung Status* an. Filtern Sie nach *Nicht bezahl* und selektieren Sie die Rechnungen, für welche Sie eine Zahlung erfassen möchten.

![](assets/Finanzen%20Zahlungen%20erfassen.png)

Wählen Sie *Zahlung Erfassen*. Schliessen Sie den Dialog. Nun wird für jede Rechnung eine Zahlung generiert.

## QR-Rechnung

### QR-IBAN speichern

Zur Speicherung der QR-IBAN gibt es auf dem Bankkonto ein entsprechendes Feld. Navigieren Sie nach *Finanzen > Konfiguraiton > Bankkonten*, wählen Sie das Bankkonto aus und tragen Sie im Feld *QR-IBAN* die Nummer ein.

### QR-Code Zahlungstyp festlegen

Zeigen Sie eine Rechnung via *Finanzen > Kunden > Rechnungen* an und öffnen Sie den Tab *Weitere Informationen*. Im Feld *Payment QR-code* ist die Methode zum Generieren des QR-Codes festgelegt.

## Zahlungen

### Zahlungsreferenz Lieferant hinterlegen

Auf einer Lieferantenrechnung unter *Finanzen > Lieferanten > Rechnung* geben Sie im Feld *Zahlungsreferenz* die Rechnungsnummer des Lieferanten ein. Dazu ein Beispiel:

![](assets/Finanzen%20Zahlungen%20Zahlungsreferenz%20Lieferant%20hinterlegen.png)

Wenn Sie eine Zahlung erfassen wird diese Zahlungsreferenz als *Memo* übernommen.

![](assets/Finanzen%20Zahlungen%20Memo%20Zahlung.png)

### Ausgehende Zahlung für mehrere Rechnungen erfassen
Im App Finanzen in der Ansicht *Finanzen >  Lieferanten > Rechnung* den Filter *Nicht bezahlt* setzen. Die zu zahhlenden Rechnungen links markieren und *Zahlung erfassen* auswählen. 

![](assets/Finanzen%20Sepa%20Zahlung%20erfassen.png)

Für jede Rechnung wird eine SEPA-Zahlung angelegt.

### Zahlung mit Rabatt erstellen

Wenn Sie für eine Rechnung *Finanzen > Lieferanten > Rechnung* eine Zahlung erfassen, können Sie den Zahlungsbetrag mit dem gewährten Rabatt überschreiben. Den Rabatt-Betrag erhalten Sie im Tab *Buchungszeilen* unter Berücksichtigung der entsprechenden *Fälligkeit*. Im Dialog *Zahlung erfassen*, geben Sie den entsprechenden Betrag ein und wählen für das Feld *Zahlungsdifferenz* die Option *Mark as fully paid*. Geben Sie nun das entsprechende Konto für das Skonto ein.

![](assets/Finanzen%20Zahlung%20mit%20Rabatt.png)

### Zahlung anzeigen

Wählen Sie bezahlte Rechnung oder Rechnung in Zahlung via *Finanzen > Lieferanten > Rechnung* aus. Klicken Sie auf das Informations-Icon unterhalb des Rechnungstotal und wählen anschliessen *Ansicht*.

![](assets/Finanzen%20Zahlungen%20anzeigen.png)

### Zahlungsreferenz neu generieren

Wählen Sie die gebuchte Rechnung unter *Finanzen > Lieferanten > Rechnung* und klicken Sie auf *Zurücksetzen*. Entfernen Sie die Inhalte aus dem Feld *Zahlungsreferenz* und bestätigen Sie die Rechnung. Nun sollte eine neue Zahlungsreferenz generiert werden.

### Zahlungsdatei validieren

Falls die Zahlung nach dem Hochladen ins eBanking nicht ausgeführt werden kann, können Sie die Zahlungsdatei validieren lassen. Registrieren Sie sich im [Swiss Pyament Standards Validation.Portal](https://validation.iso-payments.ch).

Laden Sie die Datei hoch und wählen Sie den Standard aus. Drücken Sie *Nachricht Hochladen* und anschliessen *Jetzt validieren* um den Validierungsvorgang zustarten.

![](assets/Finanzen%20Zahlungen%20Zahlungsdatei%20validieren.png)

Nach der Validierung erhalten Sie einen ausführlichen Bericht.

![](assets/Finanzen%20Zahlungen%20Zahlungsdatei%20output.png)

### Zahlung gesendet zurücksetzen

Wenn  Sie die [Aktion "Zahlung gesendet zurücksetzen" erstellen](Finanzen%20Aktionen.md#Aktion%20"Zahlung%20gesendet%20zurücksetzen"%20erstellen), können Sie Stapelzahlung mit gesendeten Zahlungen neu generieren.

![Finanzen Zahlungen gesendet zurücksetzen](assets/Finanzen%20Zahlungen%20gesendet%20zurücksetzen.gif)

### Zahlungsmethoden anzeigen

Damit Sie eine Übersicht der Zahlungsmethoden erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Entwicklung%20Aktionen.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Zahlungsmethoden`\
Objekt: `account.payment.method`\
Ansichtsmodus: `tree,form`\
Menü: `Auftragszeilen`\
Obermenü: `Finanzen/Konfiguration/Zahlungen`\
Aktion: `ir.actions.act_window` `Zahlungsmethoden`\
Nummernfolge: `10`

Laden Sie die Odoo-App neu. Anschliessend finden Sie unter *Finanzen > Konfiguration > Zahlungsmethoden* eine Übersicht der Zahlungsmethoden.