---
tags:
- HowTo
- OCA
prev: ./verkauf
---
# Sale Blanket Order
![icon_oca_app](assets/icon_oca_app.png)

Rahmenverträge für Verkäufe erstellen.

Technischer Name: `sale_blanket_order`\
Repository: <https://github.com/Mint-System/sale-workflow/tree/14.0-mig-sale_blanket_order/sale_blanket_order>

| Erweiterung                                                                       | Beschreibung                                                           |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Sale Blanket Order Notes](Sale%20Blanket%20Order%20Notes.md)                     | Rahmenaufträge mit Notizen, die in den Verkaufsauftrag kopiert werden. |
| [Sale Blanket Order Contact Person](Sale%20Blanket%20Order%20Contact%20Person.md) | Kontaktperson auf Rahmenauftrag festlegen.                             |
| [Sale Blanket Order Stock Terms](Sale%20Blanket%20Order%20Stock%20Terms.md)       | Legen Sie Lieferbedinungen auf dem Rahmenauftrag fest.                 |
| [Sale Blanket Order Send](Sale%20Blanket%20Order%20Send.md)                       | Workflow mit Rahmenauftrag per E-Mail.                                 |
| [Sale Blanket Order Comment](Sale%20Blanket%20Order%20Comment.md)                 | Kommentar auf Verkauf- und Rahmenauftrag.                              |

## Rahmenauftrag erstellen

Rahmenaufträge werden unabhängig von Verkaufsaufträgen unter *Verkauf > Aufträge > Rahmenaufträge* erfasst. Klicken Sie dort auf *Anlegen* und erfassen Sie einen Auftrag mit diesen Felder:

* Partner: Der Verkaufspartner
* Gültigkeitsdatum: Wie lange der Rahmenauftrag gültig ist

Fügen Sie anschliessen Produktzeilen hinzu und bestimmen Sie jeweils die vertragliche Menge und das *Geplantes Datum*.

![](assets/Sale%20Blanket%20Order%20Beispiel%20Rahmenauftrag.png)

## Angebot aus Rahmenauftrag anlegen

Öffnen Sie einen Rahmenauftrag via *Verkauf > Rahmenaufträge > Rahmenauftrag auswählen*. Klicken Sie auf *Verkaufsauftrag erstellen*, geben Sie im Dialog die  *Bestellmenge* ein und bestätigen Sie mit *Auftrag erstellen und anzeigen*.

![](assets/Sale%20Blanket%20Order%20Dialog.png)
