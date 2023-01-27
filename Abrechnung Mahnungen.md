---
tags:
- HowTo
prev: ./abrechnung
---
# Abrechnung Mahnungen
![icons_odoo_account_invoicing](assets/icons_odoo_account_invoicing.png)

Mahnberichte erstellen und verschicken

## Konfiguration

### Mahnstufe konfigurieren

Navigieren Sie nach *Abrechnung > Konfiguration > Mahnstufen*. Hier können Sie bestehende Mahnstufen konfigurieren oder neue Erstellen. Entscheidend bei den Mahnstufen ist das Feld *Nach X bei fällig, tun Sie folgendes:*. Hier können Sie Anzahl Tage (+/-) für den Zeitabstand zur Mahnung erstellen.

### Offene Rechnung als Nachrichtenanhang hinzufügen

Wenn Sie eine [Mahnstufe konfigurieren](#Mahnstufe%20konfigurieren) können Sie über die Option *Offene Rechnungen verbinden* bestimmen, ob die Rechnung als Anhang hinzufgefügt werden.

### Text Mahnbericht anpassen

Wenn Sie den Text des Mahnberichts anpassen möchten, müssen Sie eine [Übersetzung anpassen](Einstellungen%20Übersetzung.md#Übersetzung%20anpassen). Suchen Sie in den übersetzen Begriffen nach dem Modul `account_followup` und Sie finden den Text zum Mahnbericht. 

## Verwendung

### Mahnung versenden

Unbezahlte Rechnung, welche die Zahlungsfrist überschritten haben, können Sie unter *Finanzen > Kunden > Mahnberichte* anzeigen. Wählen Sie einen Eintrag aus und klicken Sie auf *Sende Per E-Mail*.

Anschliessend klicken Sie auf *Erledigen*. Damit wird die Rechnung in die nächste Mahnstufe versetzt und der Mahnstatus angepasst.

![](assets/Abrechnung%20Mahnungen%20Erledigt.png)

### Text Mahnbericht anpassen

Wenn Sie den Mahnbericht geöffnet haben und auf den Text klicken, können Sie diesen direkt bearbeiten. Schliessen Sie den Vorgang mit *Speichern* ab.

::: warning
Beim Bearbeiten des Texts gehen die Zeilenumbrüche verloren.
:::

### Rechnung von Mahnung auschliessen

Öffnen Sie einen Mahnbericht unter *Finanzen > Kunden > Mahnberichte*. Aktivieren Sie die Option *Ausgeschlossen* bei Rechnungen, die im Mahnbericht nicht erscheinen sollen.