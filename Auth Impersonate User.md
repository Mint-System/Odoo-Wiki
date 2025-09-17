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
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/18.0/auth_impersonate_user>

## Konfiguration

### Einloggen durch andere Benutzer erlauben

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer* und öffnen Sie einen Benutzer. Aktivieren Sie Berechtigung *Kann impersoniert werden*.

### Einloggen als andere Benutzer erlauben

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer* und öffnen Sie einen Benutzer. Aktivieren Sie Berechtigung *Kann Benutzer impersonieren*.

## Verwendung

### Mit einem anderen Benutzer einloggen

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer*, wählen Sie einen Benutzer aus und klicken Sie auf *Als Benutzer einloggen*. Sie werden anschliessend als den gewählten Benutzer eingeloggt.

::: tip
Sie können sich so auch als Portal-Benutzer einloggen.
:::

### Identitätswechsel beenden

Den Identitätswechsel-Vorgang können Sie beenden indem Sie oben Rechts auf *Benutzer-Menü > Abmeldung* klicken. Statt direkt abgemeldet zu werden, werden Sie stattdessen als ihren ursprünglichen Benutzer eingeloggt. Wenn Sie nochmals auf *Abmeldung* klicken, werden Sie ausgeloggt.
