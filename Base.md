---
title: Server
description: Odoo installieren und konfigurieren.
kind: howto
prev: ./
---
# Server
![icons_odoo_website_enterprise](attachments/icons_odoo_website_enterprise.png)

{{ $frontmatter.description }}

## Erweiterungen

| Erweiterung                                                                       | Beschreibung                                                         |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [Auditlog](Auditlog.md)                                                           | Operationen auf Daten loggen.                                        |
| [Base Action Manager Access](Base%20Action%20Manager%20Access.md)                 | Zugriff auf Aktionen für Gruppe Administration / Zugriffsrechte.     |
| [Base Module User ACL](Base%20Module%20User%20ACL.md)                             | Zugriffsrechte auf Apps festlegen.                                   |
| [Base Optional Quick Create](Base%20Optional%20Quick%20Create.md)                 | Quick Create Option für Datenmodelle deaktivieren.                   |
| [Base Recursion Limit](Base%20Recursion%20Limit.md)                               | Limit für Python-Rekursionen erhöhen.                                |
| [Base User ACL](Base%20User%20ACL.md)                                             | Basis für Zugriffsrechte-Module.                                     |
| [Extended view inheritance](Extended%20view%20inheritance.md)                     | Benutzerdefinierte Operatoren auf vererbten Ansichten.               |
| [Fetchmail Incoming Log](Fetchmail%20Incoming%20Log.md)                           | Loggt Informationen zu eingehenden E-Mails.                          |
| [Mail Format with Parent](Mail%20Format%20With%20Parent.md)                       | Unternehmensname des Kontakts alternativ für E-Mails verwenden.      |
| [Mail Manual Routing](Mail%20Manual%20Routing.md)                                 | Erlaubt Zuordnung von empfangenen E-Mails.                           |
| [Mail Server Filter](Mail%20Server%20Filter.md)                                   | Eingehende und ausgehende Mail-Server anhand Datenbanknamen filtern. |
| [Mail Service Users](Mail%20Service%20Users.md)                                   | Service-Benutzer von Lizenzvertrag ausschliessen.                    |
| [Module Auto Update](Module%20Auto%20Update.md)                                   | Aktualisiert automatiscch neue Versionen von Odoo Modulen.           |
| [Server Config Environment](Server%20Config%20Environment.md)                     | Umgebungen für die Server-Konfiguration definieren.                  |
| [Url Slug](Url%20Slug.md)                                                         | Mixin zur Generierung von Url-Slugs.                                 |
| [Web Dark Mode](Web%20Dark%20Mode.md)                                             | Dark mode für Web-Oberfläche.                                        |
| [Web Editor Disable Convert Inline](Web%20Editor%20Disable%20Convert%20Inline.md) | Konvertierung der Inline-Styles im Odoo Editor verhindern.           |
| [Web Editor Show Code](Web%20Editor%20Show%20Code.md)                             | Aktion "Code anzeigen" im HTML-Editor ohne Entwicklermodus anzeigen. |
| [Web Font Arial](Web%20Font%20Arial.md)                                           | Fügt Schriftart Arial der Auswahl hinzu.                             |
| [Web Responsive](Web%20Responsive.md)                                             | Responsive Anzeige der Odoo-Oberfläche.                              |

## Infrastruktur

### Mail-Account bereitstellen

Odoo benötigt zum Empfang und Versand von E-Mails einen exklusiven Mail-Account. Im  Normalfall lautet die Mail Adresse `odoo@example.com`, wobei `example.com` mit der Domain des Kunden zu ersetzen ist.

**Aliase**

Damit Antworten an E-Mails von Odoo korrekt verarbeitet werden können, müssen Mail-Aliase konfiguriert werden. Erstellen Sie die folgenden Mail-Aliase für `odoo@example.com`:

* `reply@example.com` Zum sammeln von Antworten
* `invoice@example.com` Zum Empfang von Rechnungen
* `support@example.com` Zum Empfang von Support-Anfragen
* `contact@example.com` Zum Empfang von Leads

Wenn jemand eine Mail an eine dieser Adresse schickt, werden Sie ans Postfach von `odoo@example.com` weitergeleitet und anschliessen von Odoo verarbeitet.

### DNS-Einträge erstellen

Odoo ist eine Webapplikation und muss über eine bestimmte Adresse im Browser aufgerufen werden. Wir empfehlen als Adresse für die produktive Umgebung `odoo.example.com` festzulegen und für die Testumgebung `odoo-dev.example.com`. `example.com` ist natürlich mit der Domain des Kunden zu ersetzen.

Damit die Adresse korrekt aufgelöst wird, müssen DNS-Einträge erstellt werden. Angenommen es wird ein Server unter der Adresse `server1.example.org` bereitgestellt, müssen diese DNS-Einträge erstellt werden:

```
odoo.example.com ALIAS server1.example.org
odoo-dev.example.com ALIAS server1.example.org
```

Alternativ können auch Einträge vom Typ CNAME statt ALIAS erstellt werden.

### DNS-Auflösung prüfen

Wenn Sie prüfen möchten mit welcher IP-Adresse ein DNS-Eintrag aufgelöst wird, können Sie das mit dem Kommandozeilenwerkzeug `nslookup` prüfen.

Drücken Sie <kbd>Windows</kbd> + <kbd>R</kbd> und geben Sie `cmd` ein. Tippen Sie den Befehl mit dem entsprechenden DNS-Namen ein: `nslookup odoo.example.com`

![](attachments/cmd%20nslookup.png)

Als Antwort erhalten Sie die IP-Adresse vom Server, Router oder Firewall.