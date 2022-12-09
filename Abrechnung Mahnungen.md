---
tags:
- HowTo
prev: ./abrechnung
---
# Abrechnung Mahnungen
![icons_odoo_account_invoicing](assets/icons_odoo_account_invoicing.png)

Mahnberichte erstellen und verschicken

## Konfiguration

### Mahnstufen konfigurieren

Navigieren Sie nach *Abrechnung > Konfiguration > Mahnstufen*. Hier können Sie bestehende Mahnstufen konfigurieren oder neue Erstellen. Eintscheidend bei den Mahnstufen ist das Feld *Nach X bei fällig, tun Sie folgendes:*. Hier können Sie Anzahl Tage (+/-) für den Zeitabstand zur Mahnung erstellen.

### Text Mahnbericht anpassen

Wenn Sie den Text des Mahnberichts anpassen möchten, müssen Sie eine [Übersetzung anpassen](Einstellungen%20Übersetzung.md#Übersetzung%20anpassen). Suchen Sie in den übersetzen Begriffen nach dem Modul `account_followup` und Sie finden den Text zum Mahnbericht. 

## Verwendung

### Mahnung versenden

Unbezahlte Rechnung, welche die Zahlungsfrist überschritten haben, können Sie unter *Finanzen > Kunden > Mahnberichte* anzeigen. Wählen Sie einen Eintrag aus und klicken Sie auf *Sende Per E-Mail*.
