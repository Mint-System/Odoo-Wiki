---
tags:
- HowTo
prev: ./website
---
# Website eCommerce
![](assets/icons_odoo_website_sale.png)

Webshop ohne Integrationsaufwand.

Website: <https://www.odoo.com/de_DE/app/ecommerce>

## Erweiterungen

| Erweiterung                                         | Beschreibung                               |
| --------------------------------------------------- | ------------------------------------------ |
| [Website Shop Coupons](Website%20Shop%20Coupons.md) | Website Coupons & Gutscheine im Odoo Shop. |
| [Website Berichte](Website%20Berichte.md)           | Verkaufszahlen analysieren.                |

## Produktverwaltung

### Produkt veröffentlichen

Nach dem erstellen eines Produkts wird dieses standardmässig nicht auf der Webiste veröffentlicht und muss explizit publiziert werden.

Klicken Sie auf *Gehe zu Website* auf der Produkt-Ansicht.

![](assets/Website%20Gehe%20zu%20Website.png)

Wählen Sie *Publish*  in der oberen Menü-Leiste.

![](assets/Website%20Publish%20toggle.png)

### Kategorien aktivieren

Shop-Seite aufrufen und *Anpassen* wählen und die Option *eCommerce Categories* aktivieren.

### Produkt ohne Versandkosten einrichten

Die Berechnung der Versandkosten basiert standardmässig auf dem Warenkorb und der Lieferadresse. Damit stehen verschiedene Attribute zur Berechnung des Versandpreises fest. Im folgenden ein Beispiel wie man am einfachsten die Versandkosten auf Null setzt, wenn es sich beim bestellten Produkt um einen Gutschein handelt.

Legen Sie in der Versandmethode unter *Website > Konfiguration > Versandmethoden* eine neue Preisregel fest:

![](assets/Website%20eCommerce%20Preisregel%20Gewicht.png)

Wenn das Gewicht des Warenkorbs unter Null fällt, fallen die Lieferkosten auf Null.

Für die Produkte, welche keine Lieferkosten geneieren sollen, geben Sie als Gewicht -0.01 ein und für alle anderen Produkte ein Gewicht grösser als Null ein:

![](assets/Website%20eCommerce%20Gutschein%20Gewicht.png)

## Abrechnung

### Mehrwertsteuer im Shop inklusive anzeigen

Soll im Webshop der Artikelpreis inklussive der Mehrwertsteur angezeigt werden, so setzen Sie beim Artikel in *Produkte* den Wert Mehrwertsteuersatz *zu zahlende Mwst 7.7% inkl NRZ*. Die zu zahlende Mehrwertsteuer wird im Warenkorb anschliessend als sepraten Betrag ausgewiesen.

### Fakturierungsregel festlegen

Für Bestellungen via Webshop können Sie festlegen, ob die Abrechnung nach Bestellung oder nach Lieferung erfolgen soll. Navigieren Sie nach *Einstellungen > Website > Abrechnung* und wählen Sie hier die entsprechende Checkbox aus.

![](assets/eCommerce%20Fakturierungsregel.png)

Diese Einstellungen kann vom einzelnen Produkt übersteuert werden. Sehen Sie *Website > Produkte > Produkt auswählen > Tab Verkauf*.

![](assets/eCommerce%20Fakturierungsregel%20auf%20Produkt.png)

::: warning
Falls während der Lieferung zusätzliche Produkte erfasst werden, muss die abzurechendende Menge des Verkaufsauftrag aktualisiert werden. Nur dann wird das zusätzliche Produkt auf die Rechnung übertragen.
:::

### Zahlungsanbieter aktivieren

Öffnen Sie die Übersicht *Finanzen > Konfiguration > Zahlungsanbieter* und aktivieren Sie einen Zahlungsanbieter.

![](assets/eCommerce%20Zahlungsanbieter.png)

## Benachrichtigung

### Bericht in Bestätigungsmail festlegen

Standardmässig versenden Odoo mit der Bestätigungsmail zur Bestellung eine Proformarechnung. Sie können auch das Angebot/Auftrag versenden. Öffnen Sie *Einstellungen > Technisch > E-Mail > Vorlagen* und zeigen Sie die die Vorlage *Sales Order: Confirmation Email* an. Im Tab *Erweiterte Einstellungen* können Sie den Bericht im Anhang festlegen.

![](assets/eCommerce%20Anhang%20Bestätigung.png)

### Aufträge von Website an Team oder Verkäufer zuweisen

Unter *Einstellungen > Website > Order Followup* im Bereich *Assignment* können Sie bestimmten an welche Person oder Team neue Aufträge zugewiesen werden sollen.

![](assets/Website%20eCommerce%20Zuweisung.png)

## Kampagnen

### Promo-Codes für Webshop aktivieren

Mit den Preislisten können Sie Promo-Codes für den Webshop definieren. Als erstes aktivieren Sie die Option *Erweiterte Preisregeln (Rabatte, Formeln)* unter *Einstellungen > Website*.

![](assets/Website%20eCommerce%20Preislisten.png)

Auf der Website-Ansicht klicken Sie auf *Anpassen* und aktivieren *Promo Code*.

![](assets/Website%20eCommerce%20Promo%20Code.png)

Nun navigieren Sie nach *Website > Produkte > Preislisten* und erstellen einen neuen Eintrag mit Namen *Promo-Code*. Im Tab *Konfiguration* können Sie den Code im Feld *E-Commerce Gutscheincode* hinteregen. Mit der Option *Rabattpolitk* können Sie steuern wie der Rabatt im Webshop dargestellt werden soll. 

Im Tab *Preisregeln* können den neuen Preis für das Produkt festlegen.

![](assets/Website%20eCommerce%20Rabatt.png)

::: warning
Der neue Preis kann nur für Produkte und nicht für den Warenkorb geltend gemacht werden.
:::

Zum Abschluss ein Beispiel wie das aus Sicht den Besuchers aussieht:

![Website eCommerce Rabatte](assets/Website%20eCommerce%20Rabatte.gif)

Ist der Code einmal eingeben erhält der Besucher eine Auswahl der Preislisten.

![](assets/Website%20eCommerce%20Auswahl%20Preislisten.png)
