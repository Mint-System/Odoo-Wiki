---
title: QR-Rechnung
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# QR-Rechnung

Zur Generierung einer QR-Rechnung müssen verschiedene Bedingungen erfüllt sien.

* Der Kommunikationsstandard muss *Schweiz* sein: [Kommunikationsstandard festlegen](Finance.md#Kommunikationsstandard%20festlegen)
* Auf dem Bankkonto muss eine QR-IBAN hinterlegt sein: [QR-IBAN speichern](Finance%20Payments.md#QR-IBAN%20speichern)
* Auf der Adresse des Kunden und Unternehmen muss als Land *Schweiz* festgelegt sein
* Die Währung der Rechnung ist *EUR* oder *CHF*: [Währung auf Rechnung festlegen](Finance%20Multicurrency.md#Währung%20auf%20Rechnung%20festlegen)
* Der *Payment QR-code* ist *Swiss QR bill*: [QR-Code Zahlungstyp festlegen](Finance%20Payments.md#QR-Code%20Zahlungstyp%20festlegen)

Sind diese Bedingungen erfüllt, kann mit der *Print QR-Bill* Aktion eine QR-Rechnung generiert werden. 

## Rechnung und QR-Rechnung zusammen drucken

Gilt bis #Odoo15 .

Out-of-the-box generiert Odoo eine Rechnung eine QR-Rechnung separat sobald man die Aktion *Senden & Drucken* auf einer Rechnung ausführt. Damit dieses Verhalten unterdrückt werden kann, müssen diese Module installiert werden:

| Erweiterung                                                                         | Beschreibung                                       |
| ----------------------------------------------------------------------------------- | -------------------------------------------------- |
| [Mail Composer Default Template](Mail%20Composer%20Default%20Template.md)           | Standardvorlage für Mail-Dialog festlegen.         |
| [Switzerland Disable Default Reports](Switzerland%20Disable%20Default%20Reports.md) | Generierung der QR- und ISR-Berichte deaktivieren. |
| [l10n CH QR Code IBAN](l10n%20CH%20QR%20Code%20IBAN.md)                                   | Generierung der QR-Rechnung ohne ISR-Nummer.       |
| [l10n CH Invoice Reports](l10n%20CH%20Invoice%20Reports.md)                         | Rechnung mit ISR- und/oder QR-Zahlung drucken.     |

Damit die Rechnungsdokumente nicht automatisch generiert und an das Rechnungsobjekt angehägt werden, müssen Sie für die folgenden Rechnungs-Berichte die [Option Als Anhang speichern deaktivieren](Development%20Reports.md#Option%20Als%20Anhang%20speichern%20deaktivieren):

| Name                    | Entfernen                                                                         |
| ----------------------- | --------------------------------------------------------------------------------- |
| Originalrechnungen      | `'original_vendor_bill.pdf'`                                                      |
| QR-bill                 | `'QR-bill-' + object.name + '.pdf'`                                               |
| Rechnungen              | `(object.state == 'posted') and ((object.name or 'INV').replace('/','_')+'.pdf')` |
| Rechnungen ohne Zahlung | `(object.state == 'posted') and ((object.name or 'INV').replace('/','_')+'.pdf')` |
	