---
title: Website E-Commerce
description: Webshop ohne Integrationsaufwand.
tags:
- HowTo
prev: ./
---
# Website E-Commerce
![](attachments/icons_odoo_website_sale.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/ecommerce>

## Erweiterungen

| Erweiterung                                                   | Beschreibung                                                |
| ------------------------------------------------------------- | ----------------------------------------------------------- |
| [PITS Payment Saferpay](PITS%20Payment%20Saferpay.md)         | Saferpay Payment Provider Plugin von PIT Solutions.         |
| [Payment Payrexx](Payment%20Payrexx.md)                       | Payrexx Payment Provider Plugin von Soludoo.                |
| [Payment Saferpay](Payment%20Saferpay.md)                     | Zahlungsanbieter für Saferpay (ohne Zahlungstokens).        |
| [Website Berichte](Website%20Berichte.md)                     | Verkaufszahlen analysieren.                                 |
| [Website Sale Cart Expire](Website%20Sale%20Cart%20Expire.md) | Warenkörbe nach einer bestimmten Zeit automatisch abbrechen |
| [Website Sale Firstname](Website%20Sale%20Firstname.md)       | Vor- und Nachname auf Adressformular.                       |
| [Website Sale Float Qty](Website%20Sale%20Float%20Qty.md)     | Teilmengen von Produkten in Webshop bestellen.              |
| [Website Shop Coupons](Website%20Shop%20Coupons.md)           | Website Coupons & Gutscheine im Odoo Shop.                  |

## Konfiguration

### Checkout-Formular aktivieren

Navigieren Sie nach *Einstellungen > Website > Shop - Checkout Process* und aktivieren Sie die Option *Zusätzlicher Schritt an der Kasse*. Damit wird im Checkout-Prozess ein zusätzlicher Schritt zum Ausfüllen eines anpassbaren Formulars hinzugefügt.

### Checkout-Formular konfigurieren

Navigieren Sie nach *Einstellungen > Website > Shop - Checkout Process* und wählen Sie die Aktion *Formular konfigurieren*.

## Produkte

### Produkt veröffentlichen

Nach dem erstellen eines Produkts wird dieses standardmässig nicht auf der Webiste veröffentlicht und muss explizit publiziert werden.

Klicken Sie auf *Gehe zu Website* auf der Produkt-Ansicht.

![](attachments/Website%20Gehe%20zu%20Website.png)

Wählen Sie *Publish*  in der oberen Menü-Leiste.

![](attachments/Website%20Publish%20toggle.png)

### Kategorien aktivieren

Shop-Seite aufrufen und *Anpassen* wählen und die Option *eCommerce Categories* aktivieren.

### Produkt ohne Versandkosten einrichten

Die Berechnung der Versandkosten basiert standardmässig auf dem Warenkorb und der Lieferadresse. Damit stehen verschiedene Attribute zur Berechnung des Versandpreises fest. Im folgenden ein Beispiel wie man am einfachsten die Versandkosten auf Null setzt, wenn es sich beim bestellten Produkt um einen Gutschein handelt.

Legen Sie in der Versandmethode unter *Website > Konfiguration > Versandmethoden* eine neue Preisregel fest:

![](attachments/Website%20eCommerce%20Preisregel%20Gewicht.png)

Wenn das Gewicht des Warenkorbs unter Null fällt, fallen die Lieferkosten auf Null.

Für die Produkte, welche keine Lieferkosten geneieren sollen, geben Sie als Gewicht -0.01 ein und für alle anderen Produkte ein Gewicht grösser als Null ein:

![](attachments/Website%20eCommerce%20Gutschein%20Gewicht.png)

## Abrechnung

### Mehrwertsteuer im Shop inklusive anzeigen

Soll im Webshop der Artikelpreis inklussive der Mehrwertsteur angezeigt werden, so setzen Sie beim Artikel in *Produkte* den Wert Mehrwertsteuersatz *zu zahlende Mwst 7.7% inkl NRZ*. Die zu zahlende Mehrwertsteuer wird im Warenkorb anschliessend als sepraten Betrag ausgewiesen.

### Fakturierungsregel festlegen

Für Bestellungen via Webshop können Sie festlegen, ob die Abrechnung nach Bestellung oder nach Lieferung erfolgen soll. Navigieren Sie nach *Einstellungen > Website > Abrechnung* und wählen Sie hier die entsprechende Checkbox aus.

![](attachments/eCommerce%20Fakturierungsregel.png)

Diese Einstellungen kann vom einzelnen Produkt übersteuert werden. Sehen Sie *Website > Produkte > Produkt auswählen > Tab Verkauf*.

![](attachments/eCommerce%20Fakturierungsregel%20auf%20Produkt.png)

::: warning
Falls während der Lieferung zusätzliche Produkte erfasst werden, muss die abzurechendende Menge des Verkaufsauftrag aktualisiert werden. Nur dann wird das zusätzliche Produkt auf die Rechnung übertragen.
:::

### Zahlungsanbieter aktivieren

Öffnen Sie die Übersicht *Buchhaltung > Konfiguration > Zahlungsanbieter* und aktivieren Sie einen Zahlungsanbieter.

![](attachments/eCommerce%20Zahlungsanbieter.png)

### Demo-Zahlungasanbieter aktivieren

Dieser Zahlungsanbieter simuliert Online-Zahlungen. Navigieren Sie nach  *Website > Konfiguration > Zahlungsanbieter* und wählen Sie den Eintrag *Demo* aus. Klicken Sie auf *Installieren*, wenn der Anbieter nicht zur Verfügung steht. Anschliessend wählen Sie für *Status* die Option *Testmodus* aus.

Nun können Sie im Bezahlungs-Vorgang im Webshop eine Testzahlung auslösen. Der Demo-Anbieter simuliert eine Verbindung mit einem externen Zahlungsanbieter.

### Bestellung auf Rechnung einrichten

Damit eine Bestellung auf Rechnung möglich ist, können Sie den Zahlungsanbieter *Banküberweisung* unter   *Website > Konfiguration > Zahlungsanbieter* kopieren und auf *Rechnung* umbenennen. Passen Sie im Tab *Nachrichten* den Inhalt von *noch nicht erledigt Nachricht* an.

Auf den Produkte müssen Sie die [Fakturierungsregel](#Fakturierungsregel%20festlegen) *Rechnung bei Auftrag* festlegen.

::: warning
Für den automatischen Versand der Rechnung sind zusätzliche Konfigurationen nötig. 
:::

## Benachrichtigung

### Bericht in Bestätigungsmail festlegen

Standardmässig versenden Odoo mit der Bestätigungsmail zur Bestellung eine Proformarechnung. Sie können auch das Angebot/Auftrag versenden. Öffnen Sie *Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen* und zeigen Sie die die Vorlage *Sales Order: Confirmation Email* an. Im Tab *Erweiterte Einstellungen* können Sie den Bericht im Anhang festlegen.

![](attachments/eCommerce%20Anhang%20Bestätigung.png)

### Aufträge von Website an Team oder Verkäufer zuweisen

Unter *Einstellungen > Website > Order Followup* im Bereich *Assignment* können Sie bestimmten an welche Person oder Team neue Aufträge zugewiesen werden sollen.

![](attachments/Website%20eCommerce%20Zuweisung.png)

## Kampagnen

### Promo-Codes für Webshop aktivieren

Mit den Preislisten können Sie Promo-Codes für den Webshop definieren. Als erstes aktivieren Sie die Option *Erweiterte Preisregeln (Rabatte, Formeln)* unter *Einstellungen > Website*.

![](attachments/Website%20eCommerce%20Preislisten.png)

Auf der Website-Ansicht klicken Sie auf *Anpassen* und aktivieren *Promo Code*.

![](attachments/Website%20eCommerce%20Promo%20Code.png)

Nun navigieren Sie nach *Website > Produkte > Preislisten* und erstellen einen neuen Eintrag mit Namen *Promo-Code*. Im Tab *Konfiguration* können Sie den Code im Feld *E-Commerce Gutscheincode* hinteregen. Mit der Option *Rabattpolitk* können Sie steuern wie der Rabatt im Webshop dargestellt werden soll. 

Im Tab *Preisregeln* können den neuen Preis für das Produkt festlegen.

![](attachments/Website%20eCommerce%20Rabatt.png)

::: warning
Der neue Preis kann nur für Produkte und nicht für den Warenkorb geltend gemacht werden.
:::

Zum Abschluss ein Beispiel wie das aus Sicht den Besuchers aussieht:

![Website eCommerce Rabatte](attachments/Website%20eCommerce%20Rabatte.gif)

Ist der Code einmal eingeben erhält der Besucher eine Auswahl der Preislisten.

![](attachments/Website%20eCommerce%20Auswahl%20Preislisten.png)
