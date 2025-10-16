---
title: QR-Rechnung
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# QR-Rechnung

Zur Generierung einer QR-Rechnung müssen verschiedene Bedingungen erfüllt sien.

- Der Kommunikationsstandard muss _Schweiz_ sein: [Kommunikationsstandard festlegen](Accounting.md#Kommunikationsstandard%20festlegen)
- Auf dem Bankkonto muss eine QR-IBAN hinterlegt sein: [QR-IBAN speichern](Accounting%20Payments.md#QR-IBAN%20speichern)
- Auf der Adresse des Kunden und Unternehmen muss als Land _Schweiz_ festgelegt sein
- Die Währung der Rechnung ist _EUR_ oder _CHF_: [Währung auf Rechnung festlegen](Accounting%20Multicurrency.md#Währung%20auf%20Rechnung%20festlegen)
- Der _Payment QR-code_ ist _Swiss QR bill_: [QR-Code Zahlungstyp festlegen](Accounting%20Payments.md#QR-Code%20Zahlungstyp%20festlegen)

Sind diese Bedingungen erfüllt, kann mit der _Print QR-Bill_ Aktion eine QR-Rechnung generiert werden.

::: tip
Um den QR-Code der QR-Rechnung zu validieren, können Sie die PDF-Datei auf <https://www.swiss-qr-invoice.org/validator/> hochladen und validieren.
:::

## Rechnung und QR-Rechnung zusammen drucken

Gilt bis #Odoo15.

Out-of-the-box generiert Odoo eine Rechnung eine QR-Rechnung separat sobald man die Aktion _Senden & Drucken_ auf einer Rechnung ausführt. Damit dieses Verhalten unterdrückt werden kann, müssen diese Module installiert werden:

| Erweiterung                                                                   | Beschreibung                                       |
| ----------------------------------------------------------------------------- | -------------------------------------------------- |
| [Mail Composer Default Template](Mail%20Composer%20Default%20Template.md)     | Standardvorlage für den E-Mail-Dialog festlegen.   |
| [l10n CH Disable Default Reports](l10n%20CH%20Disable%20Default%20Reports.md) | Generierung der QR- und ISR-Berichte deaktivieren. |
| [l10n CH QR Code IBAN](l10n%20CH%20QR%20Code%20IBAN.md)                       | Generierung der QR-Rechnung ohne ISR-Nummer.       |
| [l10n CH Invoice Reports](l10n%20CH%20Invoice%20Reports.md)                   | Rechnung mit ISR- und/oder QR-Zahlung drucken.     |

Damit die Rechnungsdokumente nicht automatisch generiert und an das Rechnungsobjekt angehägt werden, müssen Sie für die folgenden Rechnungs-Berichte die [Option Als Anhang speichern deaktivieren](Development%20Reports.md#Option%20Als%20Anhang%20speichern%20deaktivieren):

| Name                    | Entfernen                                                                         |
| ----------------------- | --------------------------------------------------------------------------------- |
| Originalrechnungen      | `'original_vendor_bill.pdf'`                                                      |
| QR-bill                 | `'QR-bill-' + object.name + '.pdf'`                                               |
| Rechnungen              | `(object.state == 'posted') and ((object.name or 'INV').replace('/','_')+'.pdf')` |
| Rechnungen ohne Zahlung | `(object.state == 'posted') and ((object.name or 'INV').replace('/','_')+'.pdf')` |
