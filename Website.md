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
| [Website Product Description](Website%20Product%20Description.md)                        | Separates Feld für Produktbeschreibungen.                              |
| [Website Sale Default Country CH](Website%20Sale%20Default%20Country%20CH.md)             | Schweiz als Standardland im Webshop festlegen.                         |
| [Website Sale Minimum Order Quantity](Website%20Sale%20Minimum%20Order%20Quantity.md)     | Legen Sie Mindestbestellmengen für Produkte und Produktvarianten fest. |
| [Website Sale Pricelist Fixed Discount](Website%20Sale%20Pricelist%20Fixed%20Discount.md) | Warenkorb mit Rabatten aus Preisliste mit Festpreis.                   |

## Verwendung

### Website-Domain festlegen

Navigieren Sie nach *Website > Konfiguration > Websites* und zeigen Sie eine Website an. Im Feld *Website Domain* legen Sie die Url fest.

::: tip
Wenn die Domain mit dem Datenbanknamen gekoppelt ist, können Sie das Feld leer lassen.
:::

## Berechtigung

### Registration erlauben

Navigieren Sie nach *Einstellungen > Website > Berechtigung* und wählen Sie eine Option bei *Kundenkonto* aus:

* **Auf Einladung**: Portal-Benutzer müssen eingeladen werden, damit Sie Zugriff erhalten
* **Kostenlose Anmeldung**: Benutzer können sich selber im Portal registrieren.

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