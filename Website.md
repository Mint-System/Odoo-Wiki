---
tags:
- HowTo
prev: ./
---
# Website
![icons_odoo_website](assets/icons_odoo_website.png)

Website Builder für Unternehmen. Einfach. Mobil. Open Source.

Website: <https://www.odoo.com/de_DE/app/website>

## Bereiche

| Bereich                                     | Beschreibung                          |
| ------------------------------------------- | ------------------------------------- |
| [Website Aktionen](Website%20Aktionen.md)   | Automatisierung der Website-Vorgänge. |
| [Website Partner](Website%20Partner.md)     | Partner auf Website publizieren.      |
| [Website eCommerce](Website%20eCommerce.md) | Webshop ohne Integrationsaufwand.     |

## Erweiterungen

| Erweiterung                                                                   | Beschreibung                                  |
| ----------------------------------------------------------------------------- | --------------------------------------------- |
| [Website Date of Birth](Website%20Date%20of%20Birth.md)                       | Geburtsdatum auf Anmeldeformular.             |
| [Website Product Description](Website%20Product%20Description)                | Separates Feld für Produktbeschreibungen.     |
| [Website Sale Default Country CH](Website%20Sale%20Default%20Country%20CH.md) | Schweiz als Standardland im Webhop festlegen. |

## Berechtigung

### Zugriff Menu beschränken

Der Zugriff auf die verfügbaren Seite in der Menu-Struktur kann ganz einfach angepasst werden. Navigieren Sie nach *Website > Konfiguration > Menüs*. In der Spalte *Visible Groups* können die Benutzer-Gruppen hinterlegt werden für welche das Menu angezeigt werden soll.

## Bearbeitung

### Seite hinzufügen

Mit dem Odoo Website-Editor können Sie ganz einfach neue Seiten hinzufügen.

![](assets/Website%20Neue%20Seite%20hinzuf%C3%BCgen.gif)

### Link auf Abschnitt einfügen

Auf jeden beliebigen Abschnitt auf einer Seite kann ein Link gesetzt werden. Die Namensgebung können Sie verändern. (Hinweis: Auf Leerzeichen verzichten)

Über *Menu bearbeiten* kann die URL unter Verwendung des Sonderzeichens *#* schnell gefunden und einfach eingefügt werden.

![Website Link auf Abschnitt einfügen](assets/Website%20Link%20auf%20Abschnitt%20einfügen.gif)

### Formular erweitern

Website-Formulare können mit bestehenden Feldern aus dem Datenbankmodell erweitert werden. Im folgenden Beispiel wurd dem Formular für *Bewerbungen* ein neus Feld hinzugefügt. In der Auswahl des Feldtyps können Sie ein bestehendes Feld auswählen:

![](assets/Website%20Form%20Existing%20Fields.png)

Dem Formular wurde das bestehende Feld *Datenschutz* hinzufgefügt:

![](assets/Website%20Form%20Datenschutz.png)

Die Eingabe des neues Feldes ist im Backend ersichtlich:

![](assets/Website%20Backend%20Feld.png)