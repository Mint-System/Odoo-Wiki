---
tags:
- HowTo
- OCA
prev: ./verkauf
---

## Sale Blanket Order
![icon_oca_app](assets/icon_oca_app.png)

Rahmenverträge für Verkäufe erstellen.

Technischer Name: `sale_blanket_order`\
Repository: <https://github.com/OCA/sale-workflow/tree/14.0/sale_blanket_order>

## Erweiterungen

| Erweiterung                                                                                             | Beschreibung                                                                                     |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [Sale Blanket Order CRM Tags](Sale%20Blanket%20Order%20CRM%20Tags.md)                                   | Stichwörter auf dem Rahmenauftrag setzen.                                                        |
| [Sale Blanket Order Cancel State](Sale%20Blanket%20Order%20Cancel%20State.md)                           | Beim Abbrechen wird der Verkaufsautrag in den entsprechendne Status versetzt.                    |
| [Sale Blanket Order Carrier](Sale%20Blanket%20Order%20Carrier.md)                                       | Auslieferungsmethode auf dem Rahmenvertrag festlegen.                                            |
| [Sale Blanket Order Comment](Sale%20Blanket%20Order%20Comment.md)                                       | Kommentar auf Rahmenauftrag.                                                                     |
| [Sale Blanket Order Commitment Date](Sale%20Blanket%20Order%20Commitment%20Date.md)                     | Kopiert das geplante Datum der Rahmenauftragszeile in das Lieferdatum der Verkaufsauftragszeile. |
| [Sale Blanket Order Contact Person](Sale%20Blanket%20Order%20Contact%20Person.md)                       | Kontaktperson auf Rahmenauftrag festlegen.                                                       |
| [Sale Blanket Order Date Confirmed](Sale%20Blanket%20Order%20Date%20Confirmed.md)                       | Bestätigungsdatum auf dem Verkaufsauftrag sezten.                                                |
| [Sale Blanket Order Discount](Sale%20Blanket%20Order%20Discount.md)                                     | Rabatt auf der Rahmenauftragszeile definieren.                                                   |
| [Sale Blanket Order Extended](Sale%20Blanket%20Order%20Extended.md)                                     | Kopiert weitere Felder vom Rahmenauftrag auf den Verkaufsauftrag.                                |
| [Sale Blanket Order Invoice Shipping Partner](Sale%20Blanket%20Order%20Invoice%20Shipping%20Partner.md) | Liefer- und Rechnungsadresse auf Rahmenauftrag definieren.                                       |
| [Sale Blanket Order Line Description](Sale%20Blanket%20Order%20Line%20Description.md)                   | Beschreibungsfeld der Rahmenauftragszeile auf die Verkaufsauftragszeile kopieren.                |
| [Sale Blanket Order Notes](Sale%20Blanket%20Order%20Notes.md)                                           | Rahmenaufträge mit Notizen, die in den Verkaufsauftrag kopiert werden.                           |
| [Sale Blanket Order Readonly States Extended](Sale%20Blanket%20Order%20Readonly%20States%20Extended.md) | Bearbeiten von Feldern aus weiteren Rahmenauftrags-Modulen im bestätigen Zustand.                |
| [Sale Blanket Order Readonly States](Sale%20Blanket%20Order%20Readonly%20States.md)                     | Bestätigte Rahmenaufträge bearbeiten.                                                            |
| [Sale Blanket Order Send](Sale%20Blanket%20Order%20Send.md)                                             | Workflow mit Rahmenauftrag per E-Mail.                                                           |
| [Sale Blanket Order Stock Terms](Sale%20Blanket%20Order%20Stock%20Terms.md)                             | Lieferbedinungen auf dem Rahmenauftrag festlegen.                                                |
| [Sale Blanket Order Template](Sale%20Blanket%20Order%20Template.md)                                     | Vorlagen für Rahmenaufträge.                                                                     |

## Verwendung

### Rahmenauftrag erstellen

Rahmenaufträge werden unabhängig von Verkaufsaufträgen unter *Verkauf > Aufträge > Rahmenaufträge* erfasst. Klicken Sie dort auf *Anlegen* und erfassen Sie einen Auftrag mit diesen Feldern:

* Partner: Der Verkaufspartner
* Gültigkeitsdatum: Wie lange der Rahmenauftrag gültig ist

Fügen Sie anschliessend Produktzeilen hinzu und bestimmen Sie jeweils die vertragliche Menge und das *Geplantes Datum*.

![](assets/Sale%20Blanket%20Order%20Beispiel%20Rahmenauftrag.png)

### Angebot aus Rahmenauftrag anlegen

Öffnen Sie einen Rahmenauftrag via *Verkauf > Rahmenaufträge > Rahmenauftrag auswählen*. Klicken Sie auf *Verkaufsauftrag erstellen*, geben Sie im Dialog die  *Bestellmenge* ein und bestätigen Sie mit *Auftrag erstellen und anzeigen*.

![](assets/Sale%20Blanket%20Order%20Dialog.png)
