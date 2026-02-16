---
title: Website E-Commerce
description: Webshop ohne Integrationsaufwand.
kind: howto
prev: ./
---

# Website E-Commerce

![](attachments/icons_odoo_website_sale.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/ecommerce>

## Erweiterungen

| Erweiterung                                                   | Beschreibung                                                |
| ------------------------------------------------------------- | ----------------------------------------------------------- |
| [Payment Payrexx](Payment%20Payrexx.md)                       | Payrexx Payment Provider Plugin von Soludoo.                |
| [Payment Saferpay](Payment%20Saferpay.md)                     | Zahlungsanbieter für Saferpay (ohne Zahlungstokens).        |
| [Saferpay Payment Provider](Saferpay%20Payment%20Provider.md) | Saferpay Payment Provider Plugin von PIT Solutions.         |
| [Website Sale Cart Expire](Website%20Sale%20Cart%20Expire.md) | Warenkörbe nach einer bestimmten Zeit automatisch abbrechen |
| [Website Sale Extra Infos](Website%20Sale%20Extra%20Infos.md) | Zusätzliche Informationen bei Checkout abfragen.            |
| [Website Sale Firstname](Website%20Sale%20Firstname.md)       | Vor- und Nachname auf Adressformular.                       |
| [Website Sale Float Qty](Website%20Sale%20Float%20Qty.md)     | Teilmengen von Produkten in Webshop bestellen.              |
| [Website Shop Coupons](Website%20Shop%20Coupons.md)           | Website Coupons & Gutscheine im Odoo Shop.                  |

## Konfiguration

### Checkout-Formular aktivieren

Navigieren Sie nach _Einstellungen > Website > Shop - Checkout Process_ und aktivieren Sie die Option _Zusätzlicher Schritt an der Kasse_. Damit wird im Checkout-Prozess ein zusätzlicher Schritt zum Ausfüllen eines anpassbaren Formulars hinzugefügt.

### Checkout-Formular konfigurieren

Navigieren Sie nach _Einstellungen > Website > Shop - Checkout Process_ und wählen Sie die Aktion _Formular konfigurieren_.

## Produkte

### Produkt veröffentlichen

Nach dem erstellen eines Produkts wird dieses standardmässig nicht auf der Webiste veröffentlicht und muss explizit publiziert werden.

Klicken Sie auf _Gehe zu Website_ auf der Produkt-Ansicht.

![](attachments/Website%20Gehe%20zu%20Website.png)

Wählen Sie _Publish_ in der oberen Menü-Leiste.

![](attachments/Website%20Publish%20toggle.png)

### Kategorien aktivieren

Shop-Seite aufrufen und _Anpassen_ wählen und die Option _eCommerce Categories_ aktivieren.

### Produkt ohne Versandkosten einrichten

Die Berechnung der Versandkosten basiert standardmässig auf dem Warenkorb und der Lieferadresse. Damit stehen verschiedene Attribute zur Berechnung des Versandpreises fest. Im folgenden ein Beispiel wie man am einfachsten die Versandkosten auf Null setzt, wenn es sich beim bestellten Produkt um einen Gutschein handelt.

Legen Sie in der Versandmethode unter _Website > Konfiguration > Versandmethoden_ eine neue Preisregel fest:

![](attachments/Website%20eCommerce%20Preisregel%20Gewicht.png)

Wenn das Gewicht des Warenkorbs unter Null fällt, fallen die Lieferkosten auf Null.

Für die Produkte, welche keine Lieferkosten geneieren sollen, geben Sie als Gewicht -0.01 ein und für alle anderen Produkte ein Gewicht grösser als Null ein:

![](attachments/Website%20eCommerce%20Gutschein%20Gewicht.png)

## Abrechnung

### Mehrwertsteuer im Shop inklusive anzeigen

Soll im Webshop der Artikelpreis inklussive der Mehrwertsteur angezeigt werden, so setzen Sie beim Artikel in _Produkte_ den Wert Mehrwertsteuersatz fest. Die zu zahlende Mehrwertsteuer wird im Warenkorb anschliessend als separaten Betrag ausgewiesen.

### Fakturierungsregel festlegen

Für Bestellungen via Webshop können Sie festlegen, ob die Abrechnung nach Bestellung oder nach Lieferung erfolgen soll. Navigieren Sie nach _Einstellungen > Website > Abrechnung_ und wählen Sie hier die entsprechende Checkbox aus.

![](attachments/eCommerce%20Fakturierungsregel.png)

Diese Einstellungen kann vom einzelnen Produkt übersteuert werden. Sehen Sie _Website > Produkte > Produkt auswählen > Tab Verkauf_.

![](attachments/eCommerce%20Fakturierungsregel%20auf%20Produkt.png)

::: warning
Falls während der Lieferung zusätzliche Produkte erfasst werden, muss die abzurechendende Menge des Verkaufsauftrag aktualisiert werden. Nur dann wird das zusätzliche Produkt auf die Rechnung übertragen.
:::

## Kassiervorgang

### Express-Kassiervorgang deaktivieren

Der Express-Kassiervorgang ist auf Zahlungsanbieter standardmässig aktiviert. Zeigen Sie einen Zahlungsanbeiter unter _Website > Konfiguration > Zahlungsanbieter_ an. Deaktivieren Sie die Option _Express-Kassiervorgang erlauben_ um den Express-Kassiervorgang zu deaktivieren

### Zahlungsanbieter aktivieren

Öffnen Sie die Übersicht _Buchhaltung > Konfiguration > Zahlungsanbieter_ und aktivieren Sie einen Zahlungsanbieter.

![](attachments/eCommerce%20Zahlungsanbieter.png)

### Demo-Zahlungasanbieter aktivieren

Dieser Zahlungsanbieter simuliert Online-Zahlungen. Navigieren Sie nach _Website > Konfiguration > Zahlungsanbieter_ und wählen Sie den Eintrag _Demo_ aus. Klicken Sie auf _Installieren_, wenn der Anbieter nicht zur Verfügung steht. Anschliessend wählen Sie für _Status_ die Option _Testmodus_ aus.

Nun können Sie im Bezahlungs-Vorgang im Webshop eine Testzahlung auslösen. Der Demo-Anbieter simuliert eine Verbindung mit einem externen Zahlungsanbieter.

### Bestellung auf Rechnung einrichten

Damit eine Bestellung auf Rechnung möglich ist, können Sie den Zahlungsanbieter _Banküberweisung_ unter _Website > Konfiguration > Zahlungsanbieter_ kopieren und auf _Rechnung_ umbenennen. Passen Sie im Tab _Nachrichten_ den Inhalt von _noch nicht erledigt Nachricht_ an.

Auf den Produkte müssen Sie die [Fakturierungsregel](#Fakturierungsregel%20festlegen) _Rechnung bei Auftrag_ festlegen.

::: warning
Für den automatischen Versand der Rechnung sind zusätzliche Konfigurationen nötig.
:::

## Benachrichtigung

### Bericht in Bestätigungsmail festlegen

Standardmässig versenden Odoo mit der Bestätigungsmail zur Bestellung eine Proformarechnung. Sie können auch das Angebot/Auftrag versenden. Öffnen Sie _Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen_ und zeigen Sie die die Vorlage _Sales Order: Confirmation Email_ an. Im Tab _Erweiterte Einstellungen_ können Sie den Bericht im Anhang festlegen.

![](attachments/eCommerce%20Anhang%20Bestätigung.png)

### Aufträge von Website an Team oder Verkäufer zuweisen

Unter _Einstellungen > Website > Order Followup_ im Bereich _Assignment_ können Sie bestimmten an welche Person oder Team neue Aufträge zugewiesen werden sollen.

![](attachments/Website%20eCommerce%20Zuweisung.png)

## Kampagnen

### Promo-Codes für Webshop aktivieren

Mit den Preislisten können Sie Promo-Codes für den Webshop definieren. Als erstes aktivieren Sie die Option _Erweiterte Preisregeln (Rabatte, Formeln)_ unter _Einstellungen > Website_.

![](attachments/Website%20eCommerce%20Preislisten.png)

Auf der Website-Ansicht klicken Sie auf _Anpassen_ und aktivieren _Promo Code_.

![](attachments/Website%20eCommerce%20Promo%20Code.png)

Nun navigieren Sie nach _Website > Produkte > Preislisten_ und erstellen einen neuen Eintrag mit Namen _Promo-Code_. Im Tab _Konfiguration_ können Sie den Code im Feld _E-Commerce Gutscheincode_ hinteregen. Mit der Option _Rabattpolitk_ können Sie steuern wie der Rabatt im Webshop dargestellt werden soll.

Im Tab _Preisregeln_ können den neuen Preis für das Produkt festlegen.

![](attachments/Website%20eCommerce%20Rabatt.png)

::: warning
Der neue Preis kann nur für Produkte und nicht für den Warenkorb geltend gemacht werden.
:::

Zum Abschluss ein Beispiel wie das aus Sicht den Besuchers aussieht:

![Website eCommerce Rabatte](attachments/Website%20eCommerce%20Rabatte.gif)

Ist der Code einmal eingeben erhält der Besucher eine Auswahl der Preislisten.

![](attachments/Website%20eCommerce%20Auswahl%20Preislisten.png)
