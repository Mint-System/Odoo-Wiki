---
description: Mit einem anderen Benutzer einloggen.
forge: github.com
kind: howto
name: auth_impersonate_user
partner: Mint System
prev: ./settings
repo: Mint-System/Odoo-Apps-Server-Tools
title: Auth Impersonate User
versions:
- '19.0'
---


# Auth Impersonate User

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Einloggen durch andere Benutzer erlauben

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_ und öffnen Sie einen Benutzer. Aktivieren Sie Berechtigung _Kann impersoniert werden_.

### Einloggen als andere Benutzer erlauben

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_ und öffnen Sie einen Benutzer. Aktivieren Sie Berechtigung _Kann Benutzer impersonieren_.

## Verwendung

### Mit einem anderen Benutzer einloggen

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_, wählen Sie einen Benutzer aus und klicken Sie auf _Als Benutzer einloggen_. Sie werden anschliessend als den gewählten Benutzer eingeloggt.

::: tip
Sie können sich so auch als Portal-Benutzer einloggen.
:::

### Identitätswechsel beenden

Den Identitätswechsel-Vorgang können Sie beenden indem Sie oben Rechts auf _Benutzer-Menü > Abmeldung_ klicken. Statt direkt abgemeldet zu werden, werden Sie stattdessen als ihren ursprünglichen Benutzer eingeloggt. Wenn Sie nochmals auf _Abmeldung_ klicken, werden Sie ausgeloggt.
