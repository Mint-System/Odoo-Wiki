---
title: Versand
description: Versandmethoden und Logistik definieren.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Versand

![icons_odoo_website_sale_delivery](attachments/icons_odoo_website_sale_delivery.png)

Versandmethoden und Logistik definieren.

## Erweiterungen

| Erweiterung                                                                           | Beschreibung                                                                                    |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| [DPD for Switzerland](Delivery%20DPDch.md)                                            | Versand mit DPD.                                                                                |
| [Sale Order Default Carrier](Sale%20Order%20Default%20Carrier.md)                     | Auslieferungsmethode von Kontakt übernehmen.                                                    |
| [Sale Order Default Commitment Date](Sale%20Order%20Default%20Commitment%20Date.md)   | Standardlieferdatum festlegen.                                                                  |
| [Sale Order Delivery Note](Sale%20Order%20Delivery%20Note.md)                         | Notiz auf Verkaufsauftrag für Lieferung hinzufügen.                                             |
| [Sale Order Expected Commitment Date](Sale%20Order%20Expected%20Commitment%20Date.md) | Das Standardlieferdatum ist das erwartete Datum.                                                |
| [Sale Order Line Date Propagate](Sale%20Order%20Line%20Date%20Propagate.md)           | Lieferfristen auf dem Verkaufsautrag und dessen Zeilen werden auf den Lieferauftrag übertragen. |
| [Sale Order Line Date](Sale%20Order%20Line%20Date.md)                                 | Lieferdatum pro Position.                                                                       |
| [Sale Order Line Default Packaging](Sale%20Order%20Line%20Default%20Packaging.md)     | Standardverpackung auf Position setzen.                                                         |
| [Sale Stock Picking Note](Sale%20Stock%20Picking%20Note.md)                           | Interne und externe Notiz für Lieferungen.                                                      |

## Lieferung

### Lieferung anzeigen

Durch einen Verkaufsauftrag entsteht automatisch ein Lieferauftrag. Die Verbindung wird über einen entsprechenden _Smart Button_ oben rechts sichtbar.

### Versandmethode erstellen

Navigieren Sie nach _Verkauf > Konfiguration > Versandmethoden_ und erstellen Sie eine neue Methode. Eine Versandmethode braucht miestends einen _Namen_, _Anbieter_ und ein _Auslieferungsprodukt_. Erstellen Sie für die neue Versandmethode ein Auslieferungsprodukt.

### Versand hinzufügen

Auf dem Verkaufsauftrag können Sie über den Knopf _Versand Hinzufügen_ eine Versandmethode wählen.

![](attachments/Verkauf%20Versand%20Versandmethode%20hinzufügen.png)

Das _Auslieferungsprodukt_ wird nun dem Verkaufsauftrag hinzugefügt.

### Liefer- und Rechnungsadresse festlegen

Damit Sie die Liefer- und Rechnungsadresse explizit festlegen können, muss die Option _Einstellungen > Verkauf > Angebote und Aufträge > Kundenadresse_ aktiviert sein.

![](attachments/Verkauf%20Rechnung-%20und%20Lieferadresse.png)

### Anzahl Auslieferungsprodukte festlegen

Haben Sie einen Verkaufsauftrag bestätigt und können Sie auf der dazugehörigen Lieferung die definitive Anzahl der _Auslieferungsprodukte_ festlegen. Dazu ein Beispiel aus der Strichcode App:

## Lieferbedingungen

### Incoterms festlegen

Damit Sie die Lieferbedingungen auf einem Angebot festlegen können, müssen Sie Mitglied in der Gruppe _Lieferbedingungen auf Angeboten und Rechnungen anzeigen_ sein.

Ist diese Bedinung erfüllt können Sie ein Angebot öffnen _Verkauf > Angebot auswählen > Tab Weitere Informationen_. Im Feld _Lieferbedingungen_ können Sie die Incoterm festlegen.

![](attachments/Verkauf%20Lieferbedingungen.png)

## Retoure

![](attachments/Verkauf%20Versand%20Anzahl%20Auslieferungsprodukte%20festlegen.png)

### Retoure Auslieferungsprodukt auf Lieferung erfassen

Öffnen Sie eine Lieferung via _Lager > Lieferaufträge_ und klicken Sie auf _Rücklieferung_. Entfernen Sie im Dialog die Produkte, welche nicht zurückgeliefert wurde und geben Sie die Menge ein.

![](attachments/Verkauf%20Versand%20Rücklieferung.png)

Mit der Bestätigung wird ein neuer Transfer angelegt. Bestätigen Sie diesen Transfer.

Auf dem Verkaufsauftrag wird nun die ausgelieferte Menge zurückgesetzt.

![](attachments/Verkauf%20Versand%20Ausgeliefert%20zurückgesetzt.png)

Auf den verknüpften Lieferungen des Verkaufsauftrag ist die Retoure ersichtlich.

![](attachments/Verkauf%20Versand%20Transfers%20mit%20Retoure.png)

### Retoure Auslieferungsprodukt ohne Lieferung erfassen

Das einlagerbare Auslieferungsprodukt muss für diesen Vorgang eine Lager-Route haben. Stellen Sie sicher, dass auf dem Produkt eine entsprechende Route definiert ist.

Erstellen Sie einen Lagereingang mit der Menge der eingegangen _Auslieferugnsprodukte_.

![](attachments/Verkauf%20Versand%20Rückgabe%20Auslieferungsprodukt%20erfassen.png)
