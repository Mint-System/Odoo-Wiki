---
title: Rechnungsstellung Mahnungen
description: Mahnberichte erstellen und verschicken.
kind: howto
prev: ./invoicing
---
# Rechnungsstellung Mahnungen
![icons_odoo_account](attachments/icons_odoo_account.png)

{{ $frontmatter.description }}

## Konfiguration

### Mahnstufe konfigurieren

Navigieren Sie nach *Rechnungsstellung > Konfiguration > Mahnstufen*. Hier können Sie bestehende Mahnstufen konfigurieren oder neue Erstellen. Entscheidend bei den Mahnstufen ist das Feld *Nach X bei fällig, tun Sie folgendes:*. Hier können Sie Anzahl Tage (+/-) für den Zeitabstand zur Mahnung erstellen.

### Offene Rechnung als Anhang hinzufügen

Wenn Sie eine [Mahnstufe konfigurieren](#Mahnstufe%20konfigurieren) können Sie über die Option *Rechnungen anhängen* bestimmen, ob die Rechnung als Anhang hinzufgefügt werden.

### Text Mahnbericht anpassen

Gilt bis #Odoo16.

Wenn Sie den Text des Mahnberichts anpassen möchten, müssen Sie eine [Übersetzung anpassen](Settings%20Translations.md#Übersetzung%20anpassen). Suchen Sie in den übersetzen Begriffen nach dem Modul `account_followup` und Sie finden den Text zum Mahnbericht. 

### Produkt Mahngebühren einrichten

Führen Sie [Produkt erfassen](Product.md#Produkt%20erfassen) mit diesen Informationen aus:

* **Produktname**: Mahngebühren
* **Optionen**: Verkauf
* **Produktart**: Dienstleistung
* **Fakturierungsregel**: Vorkasse/Festpreis
* **Verkaufspreis**: Gemäss ihren Angaben
* **Steuern**: Gemäss ihrer Abrechnungsmethode
* **Erlöskonto**: 3804 Inkassoaufwand

Anschliessend müssen Sie eine [Externe ID in Metadaten erfassen](Development.md#Externe%20ID%20in%20Metadaten%20erfassen). Verwenden Sie als Bezeichnung `__custom__.product_follwup_fees`

## Verwendung

### Mahnung versenden

Gilt bis #Odoo16.

Unbezahlte Rechnung, welche die Zahlungsfrist überschritten haben, können Sie unter *Buchhaltung > Kunden > Mahnberichte* anzeigen. Wählen Sie einen Eintrag aus und klicken Sie auf *Sende Per E-Mail*.

Anschliessend klicken Sie auf *Erledigen*. Damit wird die Rechnung in die nächste Mahnstufe versetzt und der Mahnstatus angepasst.

![](attachments/Rechnungsstellung%20Mahnungen%20Erledigt.png)

Gilt ab #odoo17.

Rufe die App *Kontakte* auf und wähle *Filter > Mahnung erforderlich*. Zeig einen Konakt an und öffne den Tab *Buchhaltung*. Klick auf *Senden* um den Dialog *Senden und drucken* zu öffnen. Prüfe die Angaben und versende das Mail mit dem Mahnbericht.


### Text Mahnbericht anpassen


Gilt bis #Odoo16.

Wenn Sie den Mahnbericht geöffnet haben und auf den Text klicken, können Sie diesen direkt bearbeiten. Schliessen Sie den Vorgang mit *Speichern* ab.

::: warning
Beim Bearbeiten des Texts gehen die Zeilenumbrüche verloren.
:::

### Rechnung von Mahnung auschliessen

Gilt bis #Odoo16.

Öffnen Sie einen Mahnbericht unter *Buchhaltung > Kunden > Mahnberichte*. Aktivieren Sie die Option *Ausgeschlossen* bei Rechnungen, die im Mahnbericht nicht erscheinen sollen.