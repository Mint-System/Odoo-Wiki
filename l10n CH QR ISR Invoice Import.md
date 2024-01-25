---
title: Swiss QR/ESR scan
description: Rechnung anhand QR-Daten erstellen.
tags:
- HowTo
- OCA
- Drittanbieter
prev: ./l10n-ch
---
# Swiss QR/ESR scan
![](attachments/icon_camp_to_camp.png)

{{ $frontmatter.description }}

Technischer Name: `l10n_ch_qr_isr_invoice_import`\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/14.0/l10n_ch_qr_isr_invoice_import>\
Odoo App Store: <https://apps.odoo.com/apps/modules/15.0/l10n_ch_qr_isr_invoice_import/>

## Verwendung

### Rechnung aus QR-Daten erstellen

Mit dieser Erweiterung können Sie anhand QR-Daten eine Rechnung erstellen. Klicken Sie auf *Abrechnung > Scan QR Bill* um den Vorgang zustarten.

![](attachments/Swiss%20QR-ESR%20Scan%20Scan%20Button.png)

Geben Sie die QR-Daten mithilfe eines Scanners in das Feld *Scan of the invoice* ein.

![](attachments/Swiss%20QR-ESR%20Scan%20Wizard%20Scan.png)

::: tip
QR-Daten aus QR-Rechnungen beginnen immer mit der Zeile *SPC* (Swiss Payments Code).
:::

Ist der Kontakt noch nicht erfasst, können Sie diesen direkt erstellen. Im selben Dialog wählen Sie das Aufwandskonto aus.

![](attachments/Swiss%20QR-ESR%20Scan%20Wizard%20Create%20Partner.png)

Wenn Sie *Create Partner* gedrückt haben, wird der Vorgang nochmals bestätigt. Fahren Sie weiter mit *Create*.

![](attachments/Swiss%20QR-ESR%20Scan%20Wizard%20Confirm%20Partner.png)

Nun wird die Rechnung generiert und validiert.

Wenn die folgende Meldung erscheint, fehlt entweder ein Standard-Aufwandskonto auf dem Kontakt (Mehr dazu unter [Standard-Aufwandskonto auf Kontakt hinterlegen](#Standard-Aufwandskonto%20auf%20Kontakt%20hinterlegen)) oder die Standard-Steuern müssen entfernt werden (Mehr dazu unter [Standard-Steuer für Verkauf und Einkauf festlegen](Finance%20Tax.md#Standard-Steuer%20für%20Verkauf%20und%20Einkauf%20festlegen)).

![](attachments/Swiss%20QR-ESR%20Scan%20Error%20Missing%20Account.png)

Konnte die Rechnung erfolgreich importiert werden, werden Sie auf die Formularansicht umgeleitet.

![](attachments/Swiss%20QR-ESR%20Scan%20Imported%20Invoice.png)

::: tip
Die Standardsteuern der Rechnungszeile wird von der [Standard-Steuer auf dem Konto](Finance%20Tax.md#Standard-Steuer%20auf%20Konto%20hinterlegen) übernommen.

![](attachments/Swiss%20QR-ESR%20Scan%20Standard%20Steuern.png)
:::

Starten Sie den nächsten Scan-Vorgang mit *Scan Next QR Bill*.

### Rechung anhand QR-Daten aktualisieren

Legen Sie eine neue Rechnung unter *Abrechnung > Kunden > Rechnungen* oder *Abrechnung > Lieferanten > Rechnungen* an. Klicken Sie auf den Knopf *Scan QR* und geben Sie die QR-Daten ein. Aktualisieren Sie die Rechnung mit der Aktion *Update Invoice*.

### Standard-Aufwandskonto auf Kontakt hinterlegen

Bearbeiten Sie den Kontakt und navigieren Sie zum Tab *Abrechnung*. Auf der rechten Seite sehen Sie die Standardkonten für die Buchhaltung. Legen Sie im Feld *Expense Import Account* das Aufwandskonto für den Kontakt fest.

![](attachments/Swiss%20QR-ESR%20Scan%20Buchungen.png)

::: tip
Damit die Standardkonten für die Buchhaltung sichtbar sind, muss der Odoo-Benutzer über die Berechtigung *Buchhaltungsfunktionen anzeigen - schreibgeschützt* verfügen.
:::
