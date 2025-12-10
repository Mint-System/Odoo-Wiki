---
title: Auth Impersonate User
description: Mit einem anderen Benutzer einloggen.
kind: howto
partner: Mint-System
prev: ./settings
---

# Auth Impersonate User

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `auth_impersonate_user`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/17.0/auth_impersonate_user>

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
