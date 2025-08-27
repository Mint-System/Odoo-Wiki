---
title: OAuth Multi Token
description: Unterstützung für mehrere Geräteabhängigke OAuth-Tokens.
kind: howto
partner: OCA
prev: ./settings
---
# OAuth Multi Token
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `auth_oauth_multi_token`\
Repository: <https://github.com/OCA/server-auth/tree/17.0/auth_oauth_multi_token>

## Beschreibung

Mit dieser Erweiterung können Sie auf mehreren Geräten mit OAuth in Odoo eingeloggt sein. Standardmässig speichert Odoo nur ein Geräte-Token. Die Erweiterung erlaubt die Speicherung von mehreren Geräte-Tokens.

## Verwendung

### Alle OAuth-Tokens entfernen

Zeigen Sie unter *Einstellungen > Benutzer & Unternehmen > Benutzer* einen Benutzer an. Im Tab *OAuth* wählen Sie die Aktion *Clear Tokens*.
