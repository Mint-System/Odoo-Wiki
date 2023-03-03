---
tags:
- Best-Practice
prev: ./best-practice
---
# QR-Rechnung

Zur Generierung einer QR-Rechnung müssen verschiedene Bedingungen erfüllt sien.

* Der Kommunikationsstandard muss *Schweiz* sein: [Kommunikationsstandard festlegen](Finanzen.md#Kommunikationsstandard%20festlegen)
* Auf dem Bankkonto muss eine QR-IBAN hinterlegt sein: [QR-IBAN speichern](Finanzen%20Zahlungen.md#QR-IBAN%20speichern)
* Auf der Adresse des Kunden und Unternehmen muss als Land *Schweiz* festgelegt sein
* Die Währung der Rechnung ist *EUR* oder *CHF*: [Währung auf Rechnung festlegen](Finanzen%20Mehrere%20Währungen.md#Währung%20auf%20Rechnung%20festlegen)
* Der *Payment QR-code* ist *Swiss QR bill*: [QR-Code Zahlungstyp festlegen](Finanzen%20Zahlungen.md#QR-Code%20Zahlungstyp%20festlegen)

Sind diese Bedingungen erfüllt, kann mit der *Print QR-Bill* Aktion eine QR-Rechnung generiert werden. 

## Rechnung und QR-Rechnung zusammen drucken

Out-of-the-box generiert Odoo eine Rechnung eine QR-Rechnung separat sobald man die Aktion *Senden & Drucken* auf einer Rechnung ausführt. Damit dieses Verhalten unterdrückt werden kann müssen diese Module installiert werden:

| Erweiterung                                                                                                     | Beschreibung                                       |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [Switzerland Disable Default Reports](Switzerland%20Disable%20Default%20Reports.md)                             | Generierung der QR- und ISR-Berichte deaktivieren. |
| [L10n CH Invoice Reports](L10n%20CH%20Invoice%20Reports.md) | Rechnung mit ISR- und/oder QR-Zahlung drucken.     |
| [Switzerland QR IBAN](Switzerland%20QR%20IBAN.md)                                                               | Generierung der QR-Rechnung ohne ISR-Nummer.       |
| [Mail Composer Default Template](Mail%20Composer%20Default%20Template.md)                                       | Standardvorlage für Mail-Dialog festlegen.         |

Damit die Rechnungsdokumente nicht automatisch generiert und an das Rechnungsobjekt angehägt werden, müssen Sie für die folgenden Rechnungs-Berichte die [Option Als Anhang speichern deaktivieren](Entwicklung%20QWeb-Berichte.md#Option%20Als%20Anhang%20speichern%20deaktivieren):

| Name                    | Entfernen                                                                         |
| ----------------------- | --------------------------------------------------------------------------------- |
| Originalrechnungen      | `'original_vendor_bill.pdf'`                                                      |
| QR-bill                 | `'QR-bill-' + object.name + '.pdf'`                                               |
| Rechnungen              | `(object.state == 'posted') and ((object.name or 'INV').replace('/','_')+'.pdf')` |
| Rechnungen ohne Zahlung | `(object.state == 'posted') and ((object.name or 'INV').replace('/','_')+'.pdf')` |
