---
title: Server
description: Odoo installieren und konfigurieren.
tags:
- HowTo
prev: ./
---
# Server
![icons_odoo_website_enterprise](attachments/icons_odoo_website_enterprise.png)

{{ $frontmatter.description }}

## Erweiterungen

| Erweiterung                                                       | Beschreibung                                                         |
| ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| [Audit Log](Audit%20Log.md)                                       | Operationen auf Daten loggen.                                        |
| [Base Action Manager Access](Base%20Action%20Manager%20Access.md) | Zugriff auf Aktionen für Gruppe Administration / Zugriffsrechte.     |
| [Base Optional Quick Create](Base%20Optional%20Quick%20Create.md) | Quick Create Option für Datenmodelle deaktivieren.                   |
| [Base Recursion Limit](Base%20Recursion%20Limit.md)               | Limit für Python-Rekursionen erhöhen.                                |
| [Base User ACL](Base%20User%20ACL.md)                             | Basis für Zugriffsrechte-Module.                                     |
| [Fetchmail Incoming Log](Fetchmail%20Incoming%20Log.md)           | Loggt Informationen zu eingehenden E-Mails.                          |
| [Mail Format with Parent](Mail%20Format%20With%20Parent.md)       | Unternehmensname des Kontakts alternativ für E-Mails verwenden.      |
| [Mail Manual Routing](Mail%20Manual%20Routing.md)                 | Erlaubt Zuordnung von empfangenen E-Mails.                           |
| [Mail Server Filter](Mail%20Server%20Filter.md)                   | Eingehende und ausgehende Mail-Server anhand Datenbanknamen filtern. |
| [Mail Service Users](Mail%20Service%20Users.md)                   | Service-Benutzer von Lizenzvertrag ausschliessen.                    |
| [Module Auto Update](Module%20Auto%20Update.md)                   | Aktualisiert automatiscch neue Versionen von Odoo Modulen.           |
| [Url Slug](Url%20Slug.md)                                         | Mixin zur Generierung von Url-Slugs.                                 |
| [Web Dark Mode](Web%20Dark%20Mode.md)                             | Dark mode für Web-Oberfläche.                                        |
| [Web Editor Show Code](Web%20Editor%20Show%20Code.md)             | Aktion "Code anzeigen" im HTML-Editor ohne Entwicklermodus anzeigen. |
| [Web Responsive](Web%20Responsive.md)                             | Responsive Anzeige der Odoo-Oberfläche.                              |

## Infrastruktur

### Mail-Account bereitstellen

Odoo benötigt zum Empfang und Versand von E-Mails einen exklusiven Mail-Account. Im  Normalfall lautet die Mail Adresse `odoo@example.com`, wobei `example.com` mit der Domain des Kunden zu ersetzen ist.

**Aliase**

Damit Antworten an E-Mails von Odoo korrekt verarbeitet werden können, müssen Mail-Aliase konfiguriert werden. Erstellen Sie die folgenden Mail-Aliase für `odoo@example.com`:

* `catchall@example.com` Für allgemeine Antworten
* `eingangsrechnung@example.com` Zum Empfang von Rechnungen
* `support@example.com` Zum Empfang von Support-Anfragen

Wenn jemand eine Mail an eine dieser Adresse schickt, werden Sie ans Postfach von `odoo@example.com` weitergeleitet und anschliessen von Odoo verarbeitet.

### DNS-Einträge erstellen

Odoo ist eine Webapplikation und muss über eine bestimmte Adresse im Browser aufgerufen werden. Wir empfehlen als Adresse für die produktive Umgebung `odoo.example.com` festzulegen und für die Testumgebung `odoo-dev.example.com`. `example.com` ist natürlich mit der Domain des Kunden zu ersetzen.

Damit die Adresse korrekt aufgelöst wird, müssen DNS-Einträge erstellt werden. Angenommen es wird ein Server unter der Adresse `server1.example.org` bereitgestellt, müssen diese DNS-Einträge erstellt werden:

```
odoo.example.com ALIAS server1.example.org
odoo-dev.example.com ALIAS server1.example.org
```

Alternativ können auch Einträge vom Typ CNAME statt ALIAS erstellt werden.
