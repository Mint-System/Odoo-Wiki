---
tags:
- HowTo
---
[🔗 Finanzen](Finanzen.md)
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

## Stapelzahlung anlegen

Um eine Zahlung zu exportieren, klicken sie auf *Finanzen > X Über SEPA zu sendende Zahlungen*, markieren die offenen Zahlungen und wählen *Aktion > Stapelzahlung anlegen*. Im neuen Dialog wählen sie *Bestätigen* und erhalten so die generierte Zahlungsdatei, die sie exportieren können.

## Mehrere Zahlungen auf einmal anlegen

Öffnen sie *Finanzen > Lieferanten > Rechnungen* und zeigen sie die Spalte *Zahlung Status* an. Filtern sie nach *Nicht bezahl* und selektieren sie die Rechnungen, für welche sie eine Zahlung erfassen möchten.

![](assets/Finanzen%20Zahlungen%20erfassen.png)

Wählen sie *Zahlung Erfassen*. Schliessen sie den Dialog. Nun wird für jede Rechnung eine Zahlung generiert.

## QR-IBAN speichern

Zur Speicherung der QR-IBAN gibt es auf dem Bankkonto ein entsprechendes Feld. Navigieren sie nach *Finanzen > Konfiguraiton > Bankkonten*, wählen sie das Bankkonto aus und tragen sie im Feld *QR-IBAN* die Nummer ein.

## QR-Code Zahlungstyp festlegen

Zeigen sie eine Rechnung via *Finanzen > Kunden > Rechnungen* an und öffnen sie den Tab *Weitere Informationen*. Im Feld *Payment QR-code* ist die Methode zum Generieren des QR-Codes festgelegt.

## Ausgehende Zahlung für mehrere Rechnungen erfassen
Im App Finanzen in der Ansicht *Finanzen >  Lieferanten > Rechnung* den Fiilter *Nicht bezahlt* setzen. Die zu zahhlenden Rechnungen links markieren und *Zahlung erfassen* auswählen. 

![](assets/Finanzen%20Sepa%20Zahlung%20erfassen.png)

Für jede Rechnung wird eine SEPA-Zahlung angelegt.