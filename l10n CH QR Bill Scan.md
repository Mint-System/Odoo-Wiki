---
title: Switzerland QR-Bill Scan
description: Daten aus QR-Code bei Rechnungsimport auslesen.
kind: howto
partner: OCA
prev: ./l10n-ch
---

# Switzerland QR-Bill Scan

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `l10n_ch_qr_bill_scan`\
Repository: <https://github.com/OCA/l10n-switzerland/tree/18.0>

::: warning
Diese App ist veraltet. Wir empfehlen die App [l10n CH QR ISR Invoice Import](l10n%20CH%20QR%20ISR%20Invoice%20Import.md) zu verwenden.
#DEPRECATED
:::

## Verwendung

### Rechnungsimport konfigurieren

Rufen Sie _Einstellungen > Abrechnung_ auf legen Sie die gemäss Kontenplan die folgenden Einstellungen fest:

![](attachments/Switzerland%20QR-bill%20scan%20Einstellungen.png)

Mit der Option _Auto-create Bank Account of Supplier_ können Sie festlegen, ob beim Importvorgang die Bankdaten des Lieferanten ausgelesen und ein entsprechendes Bankkonto angelegt werden soll.

### QR-Rechnung importieren

Mit dieser Erweiterung können Sie PDF-Rechnungen mit einem QR-Code importieren und die enthaltenen Daten auslesen lassen. Rufen Sie dazu _Rechnungsstellung > Lieferanten > Rechnung importieren_ auf und laden Sie das PDF-Dokument hoch.

![](attachments/Switzerland%20QR-bill%20scan%20Import.png)

Mit _Import_ bestätigen Sie den Importvorgang.

Ist der Kontakt des Lieferanten nicht vorhanden, erscheint diese Fehlermeldung:

![](attachments/Switzerland%20QR-bill%20scan%20Fehler%20Vendor.png)

Klicken Sie auf _Create_ um den Lieferanten-Kontakt zu erfassen. Starten Sie anschliessend den Importvorgang erneut.

Für jeden Lieferant muss eine Definition für den Rechnungsimport vorhanden sein. Ist dies nicht der Fall, erscheint diese Fehlermelung:

![](attachments/Switzerland%20QR-bill%20scan%20Fehler%20Rechnungsimport.png)

Legen Sie für den Lieferant einen Eintrag unter _Rechnungsstellung > Konfiguration > Rechnungen importieren_ an.

![](attachments/Switzerland%20QR-bill%20scan%20Konfiguration%20Rechnungsimport.png)

Und importieren Sie anschliessend die Rechnung erneut. Dazu ein Beispiel:

![](attachments/Switzerland%20QR-bill%20scan%20Importierte%20Rechnung.png)

Im Chatter wird vermerkt, wenn anhand der QR-Code-Daten ein Bankkonto angelegt wird.

![](attachments/Switzerland%20QR-bill%20scan%20Kommentar%20Rechnung.png)
