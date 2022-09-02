---
tags:
- HowTo
prev: ./verkauf
---
# Verkauf Versand
![icons_odoo_sale](assets/icons_odoo_sale.png)

Versandmethoden und Logistik definieren.

## Erweiterungen

| Erweiterung                                                                           | Beschreibung                                                                                    |     |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --- |
| [Sale Order Default Carrier](Sale%20Order%20Default%20Carrier.md)                     | Auslieferungsmethode von Kontakt übernehmen.                                                    |     |
| [Sale Order Default Commitment Date](Sale%20Order%20Default%20Commitment%20Date.md)   | Standardlieferdatum festlegen.                                                                  |     |
| [Sale Order Delivery Note](Sale%20Order%20Delivery%20Note.md)                         | Notiz auf Verkaufsauftrag für Lieferung hinzufügen.                                             |     |
| [Sale Order Expected Commitment Date](Sale%20Order%20Expected%20Commitment%20Date.md) | Das Standardlieferdatum ist das erwartete Datum.                                                |     |
| [Sale Order Line Date Propagate](Sale%20Order%20Line%20Date%20Propagate.md)           | Lieferfristen auf dem Verkaufsautrag und dessen Zeilen werden auf den Lieferauftrag übertragen. |     |
| [Sale Order Line Date](Sale%20Order%20Line%20Date.md)                                 | Lieferdatum pro Position.                                                                       |     |
| [Sale Order Line Default Packaging](Sale%20Order%20Line%20Default%20Packaging.md)     | Standardverpackung auf Position setzen.                                                         |     |
| [Sale Stock Picking Note](Sale%20Stock%20Picking%20Note.md)                           | Interne und externe Notiz für Lieferungen.                                                      |     |

## Lieferung anzeigen

Durch einen Verkaufsauftrag entsteht automatisch ein Lieferauftrag. Die Verbindung wird über einen entsprechenden *Smart Button* oben rechts sichtbar.

## Versandmethode erstellen

Navigieren Sie nach *Verkauf > Konfiguration > Versandmethoden* und erstellen Sie eine neue Methode. Eine Versandmethode braucht miestends einen *Namen*, *Anbieter* und ein *Auslieferungsprodukt*. Erstellen Sie für die neue Versandmethode ein Auslieferungsprodukt.

## Versand hinzufügen

Auf dem Verkaufsauftrag können Sie über den Knopf *Versand Hinzufügen* eine Versandmethode wählen.

![](assets/Verkauf%20Versand%20Versandmethode%20hinzufügen.png)

Das *Auslieferungsprodukt* wird nun dem Verkaufsauftrag hinzugefügt.

## Incoterms festlegen

Damit Sie die Lieferbedinungen auf einem Angebot festlegen können, müssen Sie Mitglied in der Gruppe *Lieferbedingungen auf Angeboten und Rechnungen anzeigen* sein.

Ist diese Bedinung erfüllt können Sie ein Angebot öffnen *Verkauf > Angebot auswählen > Tab Weitere Informationen*. Im Feld *Lieferbedingungen* können Sie die Incoterm festlegen.

![](assets/Verkauf%20Lieferbedingungen.png)

## Liefer- und Rechnungsadresse festlegen

Damit Sie die Liefer- und Rechnungsadresse explizit festlegen können, muss die Option *Einstellungen > Verkauf > Angebote und Aufträge > Kundenadresse* aktiviert sein.

![](assets/Verkauf%20Rechnung-%20und%20Lieferadresse.png)

## Anzahl Auslieferungsprodukte festlegen

Haben Sie einen Verkaufsauftrag bestätigt und können Sie auf der dazugehörigen Lieferung die definitive Anzahl der *Auslieferungsprodukte* festlegen. Dazu ein Beispiel aus der Strichcode App:

![](assets/Verkauf%20Versand%20Anzahl%20Auslieferungsprodukte%20festlegen.png)
## Retoure Auslieferungsprodukt auf Lieferung erfassen

Öffnen Sie eine Lieferung via *Lager > Lieferaufträge* und klicken Sie auf *Rücklieferung*. Entfernen Sie im Dialog die Produkte, welche nicht zurückgeliefert wurde und geben Sie die Menge ein.

![](assets/Verkauf%20Versand%20Rücklieferung.png)

Mit der Bestätigung wird ein neuer Transfer angelegt. Bestätigen Sie diesen Transfer.

Auf dem Verkaufsauftrag wird nun die ausgelieferte Menge zurückgesetzt.

![](assets/Verkauf%20Versand%20Ausgeliefert%20zurückgesetzt.png)

Auf den verknüpften Lieferungen des Verkaufsauftrag ist die Retoure ersichtlich.

![](assets/Verkauf%20Versand%20Transfers%20mit%20Retoure.png)

## Retoure Auslieferungsprodukt ohne Lieferung erfassen

Das einlagerbare Auslieferungsprodukt muss für diesen Vorgang eine Lager-Route haben. Stellen Sie sicher, dass auf dem Produkt eine entsprechende Route definiert ist.

Erstellen Sie einen Lagereingang mit der Menge der eingegangen *Auslieferugnsprodukte*.

![](assets/Verkauf%20Versand%20Rückgabe%20Auslieferungsprodukt%20erfassen.png)
