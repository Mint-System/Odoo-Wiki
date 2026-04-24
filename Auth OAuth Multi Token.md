---
description: Unterstützung für mehrere Geräteabhängigke OAuth-Tokens.
forge: github.com
kind: howto
name: auth_oauth_multi_token
partner: OCA
prev: ./settings
repo: OCA/server-auth
title: OAuth Multi Token
versions:
- '17.0'
---


# OAuth Multi Token

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung können Sie auf mehreren Geräten mit OAuth in Odoo eingeloggt sein. Standardmässig speichert Odoo nur ein Geräte-Token. Die Erweiterung erlaubt die Speicherung von mehreren Geräte-Tokens.

## Verwendung

### Alle OAuth-Tokens entfernen

Zeigen Sie unter _Einstellungen > Benutzer & Unternehmen > Benutzer_ einen Benutzer an. Im Tab _OAuth_ wählen Sie die Aktion _Clear Tokens_.
