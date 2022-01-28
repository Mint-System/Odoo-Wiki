---
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Zahlungen
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

SEPA- und QR-Zahlungen mit Odoo Finanzen abwickeln.

## SEPA-Zahlung aktivieren

Damit SEPA-Zahlungen exportiert werden können, müssen unter *Einstellungen > Finanzen > Zahlung des Lieferant* die folgenden Einstellungen vorgenommen werden:

* Unternehmensname: Name des Unternehmesn
* Identifikation: Mwst. oder andere eindeutige Identifikationsnummer
* Veranlasser: Name des Buchhalters
* SEPA PAIN Version: Schweizer Version

## SEPA-Zahlmethode aktiveren

Damit Zahlungen aus Odoo exportiert und im eBanking importiert werden können, müssen sie die SEPA-Zahlmethode für das entsprechende Bank-Journal aktiveren.

![Finanzen SEPA Zahlung aktivieren](assets/Finanzen%20SEPA%20Zahlung%20aktivieren.gif)

Navigieren sie nach *Finanzen > Optionen Journal > Einstellungen > Tab Erweiterte Einstellungen* und aktiveren sie *SEPA Kreditübertragung*.

## SEPA-Zahlung erstellen

Öffnen sie eine Rechung und drücken sie auf *Einzahlung erfassen*. Wählen sie *SEPA Kreditübertragung als Zahlungsmethode*.

![Finanzen SEPA-Zahlung erfassen](assets/Finanzen%20SEPA-Zahlung%20erfassen.gif)

## SEPA-Zahlung nach Währung gruppieren

Oft macht es Sinn Zahlungen nach Währung oder einem anderen Attribut zu gruppieren. Klicken sie auf *Finanzen > X Über SEPA zu sendende Zahlungen* und wählen sie *Gruppieren nach > Währung*. Führen sie nun eine Folgeaktion aus mit der markierten Elementen einer Gruppe.

![](assets/Finanzen%20Zahlungen%20SEPA-Zahlung%20nach%20Währung%20gruppieren.png)

## Stapelzahlung anlegen

Um eine Zahlung zu exportieren, klicken sie auf *Finanzen > X Über SEPA zu sendende Zahlungen*, markieren die offenen Zahlungen und wählen *Aktion > Stapelzahlung anlegen*. Im neuen Dialog wählen sie *Bestätigen* und erhalten so die generierte Zahlungsdatei, die sie exportieren können.

Im Menüpunkt *Finanzen > Lieferanten > Stapel-Überweisungen* sehen sie alle Stapelzahlungen.

## Zahlungsdatei neu generieren

Angenommen sie haben Stammdaten oder Kontoangaben der Lieferanten angepasst und möcht die Zahlungsdatei erneut generieren, öffnen sie *Finanzen > Lieferanten > Stapel-Überweisungen*. Wählen sie die betroffene Stapelzahlung aus und klicken sie auf *Re-generate Export File*. Ein Dialog öffnet sich und sie können sie Zahlung herunterladen.

![](assets/Finanzen%20Zahlungen%20Datei%20herunterladen.png)

::: warning
Falls sie beim Neugenerieren der Zahlung einen Fehler erhalten, müssen sie die Zahlungen zurücksetzen.

![](assets/Finanzen%20Zahlung%20gesendet%20Fehler.png)
:::

## Zahlungsbetrag korrigieren

Angenommen sie möchten eine Zahlung korrigeren und anschliessen erneut zur Zahlung hochladen. Gehen sie wie folgt vor. Rufen sie die Zahlung unter *Finanzen > Lieferanten > Zahlungen* auf. Wählen sie *Stornieren* und passen sie die Zahlung an. *Bestätigen* sie anschliessend die Zahlung klicken sie auf *Abstimmung Rechnungen & Zahlungen*.

![](assets/Pasted%20image%2020220120113850.png)

Hat sich der Betrag genändert muss nun die Differenz entsprechend verbucht werden.

![](assets/Finanzen%20Zahlungen%20Zahlungsbetrag%20korrigieren.png)

## Mehrere Zahlungen auf einmal anlegen

Öffnen sie *Finanzen > Lieferanten > Rechnungen* und zeigen sie die Spalte *Zahlung Status* an. Filtern sie nach *Nicht bezahl* und selektieren sie die Rechnungen, für welche sie eine Zahlung erfassen möchten.

![](assets/Finanzen%20Zahlungen%20erfassen.png)

Wählen sie *Zahlung Erfassen*. Schliessen sie den Dialog. Nun wird für jede Rechnung eine Zahlung generiert.

## QR-IBAN speichern

Zur Speicherung der QR-IBAN gibt es auf dem Bankkonto ein entsprechendes Feld. Navigieren sie nach *Finanzen > Konfiguraiton > Bankkonten*, wählen sie das Bankkonto aus und tragen sie im Feld *QR-IBAN* die Nummer ein.

## QR-Code Zahlungstyp festlegen

Zeigen sie eine Rechnung via *Finanzen > Kunden > Rechnungen* an und öffnen sie den Tab *Weitere Informationen*. Im Feld *Payment QR-code* ist die Methode zum Generieren des QR-Codes festgelegt.

## Zahlungsreferenz Lieferant hinterlegen

Auf einer Lieferantenrechnung unter *Finanzen > Lieferanten > Rechnung* geben sie im Feld *Zahlungsreferenz* die Rechnungsnummer des Lieferanten ein. Dazu ein Beispiel:

![](assets/Finanzen%20Zahlungen%20Zahlungsreferenz%20Lieferant%20hinterlegen.png)

Wenn sie eine Zahlung erfassen wird diese Zahlungsreferenz als *Memo* übernommen.

![](assets/Finanzen%20Zahlungen%20Memo%20Zahlung.png)

## Ausgehende Zahlung für mehrere Rechnungen erfassen
Im App Finanzen in der Ansicht *Finanzen >  Lieferanten > Rechnung* den Filter *Nicht bezahlt* setzen. Die zu zahhlenden Rechnungen links markieren und *Zahlung erfassen* auswählen. 

![](assets/Finanzen%20Sepa%20Zahlung%20erfassen.png)

Für jede Rechnung wird eine SEPA-Zahlung angelegt.

## Zahlung mit Rabatt erstellen

Wenn sie für eine Rechnung *Finanzen > Lieferanten > Rechnung* eine Zahlung erfassen, können sie den Zahlungsbetrag mit dem gewährten Rabatt überschreiben. Den Rabatt-Betrag erhalten sie im Tab *Buchungszeilen* unter Berücksichtigung der entsprechenden *Fälligkeit*. Im Dialog *Zahlung erfassen*, geben sie den entsprechenden Betrag ein und wählen für das Feld *Zahlungsdifferenz* die Option *Mark as fully paid*. Geben sie nun das entsprechende Konto für das Skonto ein.

![](assets/Finanzen%20Zahlung%20mit%20Rabatt.png)

## Zahlung anzeigen

Wählen sie bezahlte Rechnung oder Rechnung in Zahlung via *Finanzen > Lieferanten > Rechnung* aus. Klicken sie auf das Informations-Icon unterhalb des Rechnungstotal und wählen anschliessen *Ansicht*.

![](assets/Finanzen%20Zahlungen%20anzeigen.png)

## Zahlungsreferenz neu geneireren

Wählen sie die gebuchte Rechnung unter *Finanzen > Lieferanten > Rechnung* und klicken sie auf *Zurücksetzen*. Entfernen sie die Inhalte aus dem Feld *Zahlungsreferenz* und bestätigen sie die Rechnung. Nun sollte eine neue Zahlungsreferenz generiert werden.

## Zahlungsdatei validieren

Falls die Zahlung nach dem Hochladen ins eBanking nicht ausgeführt werden kann, können sie die Zahlungsdatei validieren lassen. Registrieren sie sich im [Swiss Pyament Standards Validation.Portal](https://validation.iso-payments.ch).

Laden sie die Datei hoch und wählen sie den Standard aus. Drücken sie *Nachricht Hochladen* und anschliessen *Jetzt validieren* um den Validierungsvorgang zustarten.

![](assets/Finanzen%20Zahlungen%20Zahlungsdatei%20validieren.png)

Nach der Validierung erhalten sie einen ausführlichen Bericht.

![](assets/Finanzen%20Zahlungen%20Zahlungsdatei%20output.png)

## Aktion  "Zahlung gesendet zurücksetzen" erstellen

Navigieren sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Zahlung gesendet zurücksetzen`\
Modell: `account.payment`\
Folgeaktion: `Python-Code ausführen`

Kopieren sie die folgenden Zeilen in das Feld *Pythoncode*:

```py
for record in records:  
  record.write({'is_move_sent': False})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Zahlung erscheint nun in der Auswahl *Aktion* das Menu *Zahlung gesendet zurücksetzen*.

## Zahlung gesendet zurücksetzen

Wenn  sie die [Aktion "Zahlung gesendet zurücksetzen" erstellen](#Aktion%20Zahlung%20gesendet%20zurücksetzen%20erstellen), können sie Stapelzahlung mit gesendeten Zahlungen neu generieren.

![Finanzen Zahlungen gesendet zurücksetzen](assets/Finanzen%20Zahlungen%20gesendet%20zurücksetzen.gif)