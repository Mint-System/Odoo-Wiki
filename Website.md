---
title: Website
description: Website Builder für Unternehmen. Einfach. Mobil. Open Source.
tags:
- HowTo
prev: ./
---
# Website
![icons_odoo_website](attachments/icons_odoo_website.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/website>

## Bereiche

| Bereich                                     | Beschreibung                                                   |
| ------------------------------------------- | -------------------------------------------------------------- |
| [Website Aktionen](Website%20Actions.md)    | Automatisierung der Website-Vorgänge.                          |
| [Website Partner](Website%20Partner.md)     | Partner auf Website publizieren.                               |
| [Website E-Commerce](Website%20E-Commerce.md) | Webshop ohne Integrationsaufwand.                              |
| [Verkauf Treue](Sale%20Loyalty.md)           | Kundentreue mit Rabatten, Coupons und Geschenkkarten belohnen. |

## Erweiterungen

| Erweiterung                                                                               | Beschreibung                                                           |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Website Date of Birth](Website%20Date%20of%20Birth.md)                                   | Geburtsdatum auf Anmeldeformular.                                      |
| [Website Font HCo Mercury SSm](Website%20Font%20HCo%20Mercury%20SSm.md)                   | Benutzerdefinierte Schriftart "HCo Mercury SSm".                       |
| [Website Product Description](Website%20Product%20Description.md)                         | Separates Feld für Produktbeschreibungen.                              |
| [Website Sale Default Country CH](Website%20Sale%20Default%20Country%20CH.md)             | Schweiz als Standardland im Webshop festlegen.                         |
| [Website Sale Minimum Order Quantity](Website%20Sale%20Minimum%20Order%20Quantity.md)     | Legen Sie Mindestbestellmengen für Produkte und Produktvarianten fest. |
| [Website Sale Pricelist Fixed Discount](Website%20Sale%20Pricelist%20Fixed%20Discount.md) | Warenkorb mit Rabatten aus Preisliste mit Festpreis.                   |
|                                                                                           |                                                                        |

## Verwendung

### Website-Domain festlegen

Navigieren Sie nach *Website > Konfiguration > Websites* und zeigen Sie eine Website an. Im Feld *Website Domain* legen Sie die Url fest.

::: tip
Wenn die Domain mit dem Datenbanknamen gekoppelt ist, können Sie das Feld leer lassen.
:::

## Berechtigung

### Kunden-Registration verhindern

Navigieren Sie nach *Einstellungen > Website > Shop - Kassiervorgang* und wählen Sie die Option *Deaktiviert (als Gast einkaufen)* bei *Anmelden/Registrieren bei Kassiervorgang*.

### Kunden-Registration erlauben

Navigieren Sie nach *Einstellungen > Website > Shop - Kassiervorgang* und wählen Sie eine Option bei *Anmelden/Registrieren bei Kassiervorgang* aus:

* **Optional**: Benutzer können sich registrieren
* **Erforderlich**: Benutzer müssen sich registrieren

### Zugriff Menu beschränken

Der Zugriff auf die verfügbaren Seite in der Menu-Struktur kann ganz einfach angepasst werden. Navigieren Sie nach *Website > Konfiguration > Menüs*. In der Spalte *Visible Groups* können die Benutzer-Gruppen hinterlegt werden für welche das Menu angezeigt werden soll.

## Bearbeitung

### Seite hinzufügen

Mit dem Odoo Website-Editor können Sie ganz einfach neue Seiten hinzufügen.

![](attachments/Website%20Neue%20Seite%20hinzufügen.gif)

### Link auf Abschnitt einfügen

Auf jeden beliebigen Abschnitt auf einer Seite kann ein Link gesetzt werden. Die Namensgebung können Sie verändern. (Hinweis: Auf Leerzeichen verzichten)

Über *Menu bearbeiten* kann die URL unter Verwendung des Sonderzeichens *#* schnell gefunden und einfach eingefügt werden.

![Website Link auf Abschnitt einfügen](attachments/Website%20Link%20auf%20Abschnitt%20einfügen.gif)

### Formular erweitern

Website-Formulare können mit bestehenden Feldern aus dem Datenbankmodell erweitert werden. Im folgenden Beispiel wurd dem Formular für *Bewerbungen* ein neus Feld hinzugefügt. In der Auswahl des Feldtyps können Sie ein bestehendes Feld auswählen:

![](attachments/Website%20Form%20Existing%20Fields.png)

Dem Formular wurde das bestehende Feld *Datenschutz* hinzufgefügt:

![](attachments/Website%20Form%20Datenschutz.png)

Die Eingabe des neues Feldes ist im Backend ersichtlich:

![](attachments/Website%20Backend%20Feld.png)


## Technisch

### Umleitung einrichten

Für bestimmte URL-Pfade, beispielsweise `/promo` können Sie eine Umleitung auf eine andere Seite einrichten. Navigieren Sie nach *Website > Konfiguration > Umleitungen* und erstellen Sie einen neuen Eintrag.

### Seiteninhalt in Backend bearbeiten

Odoo speichert Seiteninhalte in QWeb-Ansichten. Aktivieren Sie den Entwicklermodus und navigieren Sie nach *Website > Site > Seiten*. Klicken Sie auf auf der ausgewählten Seite auf das Entwicklertools-Icon in der letzten Spalte.

![](attachments/Website%20Entwicklermodus.png)

Nun öffnet sich die Definition der QWeb-Ansicht und Sie können den Code direkt bearbeiten.

### Externen Link übersetzen

Eine Übersetzung der Link-Urls ist mit dem Odoo Website-Editor nicht möglich. Wenn Sie jedoch den [Seiteninhalt in Backend bearbeiten](#Seiteninhalt%20in%20Backend%20bearbeiten), können Sie eine Übersetzung mit einer Bedingung machen. Im folgenden Beispiel ist im Seiteinhalt dieser Link enthalten:

`<a href="https://clubofrome.de/die-grenzen-des-wachstums/" data-bs-original-title="" title="">Die Grenzen des Wachstums</a>`

Der Link soll auf Französisch übersetzt werden. Mithilfe einer Bedingung kann die aktive Sprache geprüft werden: `t-if="request.context.get('lang') == 'de_CH'"`

In diesem Fall würde man den Link mit diesen Inhalt ersetzen:

`<a t-if="request.context.get('lang') == 'de_CH'" href="https://clubofrome.de/die-grenzen-des-wachstums/" data-bs-original-title="" title="">Die Grenzen des Wachstums</a><a t-if="request.context.get('lang') == 'fr'" href="https://fr.wikipedia.org/wiki/Les_Limites_%C3%A0_la_croissance" data-bs-original-title="" title="">Les limites à la Croissance</a>`

::: tip
Eine weitere Möglichkeit zur Übersetzung von externen Links sind Umleitungen. Sie eine können den Inhalt mit einem internen Link `/example` verlinken und dazu zwei [Umleitungen einrichten](#Umleitung%20einrichten). Für den original Link leiten `/example` um und für den übersetzen Link leiten Sie  `/fr/example` um. 
:::