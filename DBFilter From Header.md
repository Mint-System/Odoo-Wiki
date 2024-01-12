---
title: DBFilter From Header
description: Datenbank mit Proxy-Header auswählen.
tags:
- HowTo
- OCA
prev: ./development
---
# DBFilter From Header
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `dbfilter_from_header`\
Repository: <https://github.com/OCA/server-tools/tree/16.0/dbfilter_from_header>

## Konfiguration

### Datenbank-Filter in Proxy Header definieren

In der `odoo.conf` Datei, müssen Sie die Zeile `server_wide_modules = "web, dbfilter_from_header"` und `proxy_mode = True` hinzufügen. In der Proxy-Konfiguration können Sie mit dem Header `X-Odoo-dbfilter` die Datenbank definieren, welche geladen werden soll. Für Nginx legen beispielsweise `proxy_set_header X-Odoo-dbfilter database_name;` fest.