---
tags:
- HowTo
---
# SEPA-Zahlung
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

SEPA-Zahlungen mit Odoo Finanzen abwickeln.

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

