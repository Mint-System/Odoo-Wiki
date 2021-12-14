---
tags:
- HowTo
---
[🔗 Website](Website.md)
# Website eCommerce
![](assets/icons_odoo_website_sale.png)

Webshop ohne Integrationsaufwand.

## Produkt veröffentlichen

Nach dem erstellen eines Produkts wird dieses standardmässig nicht auf der Webiste veröffentlicht und muss explizit publiziert werden.

Klicken Sie auf *Gehe zu Website* auf der Produkt-Ansicht.

![](assets/Website%20Gehe%20zu%20Website.png)

Wählen sie *Publish*  in der oberen Menü-Leiste.

![](assets/Website%20Publish%20toggle.png)

## Kategorien aktivieren

Shop-Seite aufrufen und *Anpassen* wählen und die Option *eCommerce Categories* aktivieren.

## Mehrwertsteuer im Shop inklusive anzeigen

Soll im Webshop der Artikelpreis inklussive der Mehrwertsteur angezeigt werden, so setzen sie beim Artikel in *Produkte* den Wert Mehrwertsteuersatz *zu zahlende Mwst 7.7% inkl NRZ*. Die zu zahlende Mehrwertsteuer wird im Warenkorb anschliessend als sepraten Betrag ausgewiesen.

## Fakturierungsregel festlegen

Für Bestellungen via Webshop können sie festlegen, ob die Abrechnung nach Bestellung oder nach Lieferung erfolgen soll. Navigieren sie nach *Einstellungen > Website > Abrechnung* und wählen sie hier die entsprechende Checkbox aus.

![](assets/eCommerce%20Fakturierungsregel.png)

Diese Einstellungen kann vom einzelnen Produkt übersteuert werden. Sehen sie *Website > Produkte > Produkt auswählen > Tab Verkauf*.

![](assets/eCommerce%20Fakturierungsregel%20auf%20Produkt.png)

::: warning
Falls während der Lieferung zusätzliche Produkte erfasst werden, muss die abzurechendende Menge des Verkaufsauftrag aktualisiert werden. Nur dann wird das zusätzliche Produkt auf die Rechnung übertragen.
:::

## Zahlungsanbieter aktivieren

Öffnen sie die Übersicht *Finanzen > Konfiguration > Zahlungsanbieter* und aktivieren sie einen Zahlungsanbieter.

![](assets/eCommerce%20Zahlungsanbieter.png)

## Bericht in Bestätigungsmail festlegen

Standardmässig versenden Odoo mit der Bestätigungsmail zur Bestellung eine Proformarechnung. Sie können auch das Angebot/Auftrag versenden. Öffnen sie *Einstellungen > Technisch > E-Mail > Vorlagen* und zeigen sie die die Vorlage *Sales Order: Confirmation Email* an. Im Tab *Erweiterte Einstellungen* können sie den Bericht im Anhang festlegen.

![](assets/eCommerce%20Anhang%20Bestätigung.png)