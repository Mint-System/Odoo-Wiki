---
tags:
- HowTo
- OCA
- Drittanbieter
prev: ./abrechnung
---
# Swiss QR-ESR Scan
![](assets/icon_camp_to_camp.png)

Rechnung anhand QR-Daten erstellen.

Technischer Name: `l10n_ch_qr_isr_invoice_import`\
Repository: <https://github.com/camptocamp>\
Odoo App Store: <https://apps.odoo.com/apps/modules/15.0/l10n_ch_qr_isr_invoice_import/>

## Rechnung aus QR-Daten erstellen

Mit dieser Erweiterung können Sie anhand QR-Daten eine Rechnung erstellen. Klicken Sie auf *Abrechnung > Scan QR Bill* um den Vorgang zustarten.

![](assets/Swiss%20QR-ESR%20Scan%20Scan%20Button.png)

Geben Sie die QR-Daten mithilfe eines Scanners in das Feld *Scan of the invoice* ein.

![](assets/Swiss%20QR-ESR%20Scan%20Wizard%20Scan.png)

::: tip
QR-Daten aus QR-Rechnungen beginnen immer mit der Zeile *SPC* (Swiss Payments Code).
:::

Ist der Kontakt noch nicht erfasst, können Sie diesen Erstellen lassen. In diesem Dialog können Sie auch das Aufwandskonto auswählen.

![](assets/Swiss%20QR-ESR%20Scan%20Wizard%20Create%20Partner.png)

Wenn Sie *Create Partner* gedrückt haben, wird der Vorgang nochmals bestätigt. Fahren Sie weiter mit *Create*.

![](assets/Swiss%20QR-ESR%20Scan%20Wizard%20Confirm%20Partner.png)

Wenn der folgende Dialog erscheint, fehlt ein Standard-Aufwandskonto auf dem Kontakt. Mehr dazu unter [Standard-Aufwandskonto auf Kontakt hinterlegen](#Standard-Aufwandskonto%20auf%20Kontakt%20hinterlegen)

![](assets/Swiss%20QR-ESR%20Scan%20Error%20Missing%20Account.png)

Konnte die Rechnung erfolgreich importiert werden, werden Sie auf die Formularansicht umgeleitet.

![](assets/Swiss%20QR-ESR%20Scan%20Imported%20Invoice.png)

::: tip
Die Standardsteuern der Rechnungszeile wird von der [Standard-Steuer auf dem Konto](Finanzen%20Mehrwertsteuer.md#Standard-Steuer%20auf%20Konto%20hinterlegen) übernommen.

![](assets/Swiss%20QR-ESR%20Scan%20Standard%20Steuern.png)
:::

Starten Sie den nächsten Scan-Vorgang mit *Scan Next QR Bill*.

## Rechung anhand QR-Daten aktualisieren

Legen Sie eine neue Rechnung unter *Abrechnung > Kunden > Rechnungen* oder *Abrechnung > Lieferanten > Rechnungen* an. Klicken Sie auf den Knopf *Scan QR* und geben Sie die QR-Daten ein. Aktualisieren Sie die Rechnung mit der Aktion *Update Invoice*.

## Standard-Aufwandskonto auf Kontakt hinterlegen

Bearbeiten Sie den Kontakt und navigieren Sie zum Tab *Abrechung*. Auf der rechten Seite sehen Sie die Standardkonten für die Buchhaltung. Legen Sie im Feld *Expense Import Account* das Aufwandskonto für den Kontakt fest.

![](assets/Pasted%20image%2020220906091650.png)

::: tip
Damit die Standardkonten für die Buchhaltung sichtbar sind, muss der Odoo-Benutzer über die Berechtigung *Buchhaltungsfunktionen anzeigen - schreibgeschützt* verfügen.
:::

