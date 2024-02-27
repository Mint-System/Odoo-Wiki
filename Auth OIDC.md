---
title: Authentication OpenID Connect
description: Login mit OpenID Connect Provider.
tags:
- HowTo
- OCA
prev: ./settings
---
# Authentication OpenID Connect
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `auth_oidc`\
Repository: <https://github.com/OCA/server-auth/tree/16.0/auth_oidc>

## Konfiguration

### Login mit GitLab konfigurieren

Damit Sie mit einem GitLab-Account in Odoo einloggen können, müssen Sie als erstes eine OAuth-Applikation unter <https://gitlab.com/oauth/applications> erstellen. In diesem Beispiel ist die Odoo-Installation unter <https://odoo.example.com> erreichbar.

* **Name**: `Odoo Example`
* **Redirect URI**:
```
http://localhost:8069/auth_oauth/signin
https://odoo.example.com/auth_oauth/signin
https://odoo-dev.example.com/auth_oauth/signin
```

* **Condential**: [ ]
* **Scopes**: `openid`

Speichern sie die Applikation und kopieren Sie diese Informationen:

* Application ID
* Secret

Sie brauchen diese Information um die Verbindung zwischen Odoo und GitLab im nächsten Schritt zu erstellen.

Loggen Sie sich in Odoo ein und navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Integration*. Klicken Sie auf *OAuth-Provider* und erstellen Sie einen neuen Eintrag:

* **Provider Name**: `Login with GitLab`
* **Auth Flow**: `OpenID Connect (authorization code flow)`
* **Token Map**: `sub:user_id`
* **Client ID**: `a0816649461bcd17f7e7574ea5b5ff2deedba3ccaf6613b4255f497ae05aeef4`
* **Client Secret**: `**************************************************`
* **Allowed**: `[x]`
* **Body**: `Login with GitLab`
* **Authorization URL**: `https://gitlab.com/oauth/authorize`
* **Scope**: `openid`
* **Token URL**: `https://gitlab.com/oauth/token`
* **JWKS URL**: `https://gitlab.com/-/jwks`

### Login mit Keycloak konfigurieren

Damit Sie mit einem Keycloak-Account in Odoo einloggen können, müssen Sie als erstes ein OAuth-Client in einem ausgewählten Keycloak Realm erstellen. Im folgenden Beispiel ist Odoo-Installation unter <https://sozialinfo.16.odoo.build> und eine Keycloak-Instanz unter <https://login.mintsys.ch> mit dem realm "Demo" verügbar.

Loggen Sie sich bei Keycloak ein und erstellen Sie einen neuen Client mit diesen Informationen:

* **Client type**: OpenID Connect
* **Client ID**: `sozialinfo.16.odoo.build`
* **Client authentication**: On
* **Root URL**: <https://sozialinfo.16.odoo.build>

Öffnen Sie den *Credentials* Tab des Client und notieren Sie sich den Wert von *Client secret*.

Loggen Sie sich in Odoo ein und navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Integration*. Klicken Sie auf *OAuth Provider* und erstellen Sie einen neuen Eintrag:

* **Provider Name**: `Login with Keycloak`
* **Auth Flow**: `OpenID Connect (authorization code flow)`
* **Token Map**: `sub:user_id`
* **Client ID**: `sozialinfo.16.odoo.build`
* **Client Secret**: Fügen Sie das notierte *Client secret* ein
* **Allowed**: `[x]`
* **Body**: `Login with Keycloak`
* **Authorization URL**: `https://login.mintsys.ch/realms/Demo/protocol/openid-connect/auth`
* **Scope**: `openid`
* **Token URL**: `https://login.mintsys.ch/realms/Demo/protocol/openid-connect/token`
* **JWKS URL**: `https://login.mintsys.ch/realms/Demo/protocol/openid-connect/certs`

## Verwendung

### Login freigeben

Es gibt zwei Registrationsverfahren für neue Benuter: Freigeben und Einrichten.

Im Freigababeverfahren loggt sich der Benutzer ein:

![Authentication OpenID Connect Login](attachments/Authentication%20OpenID%20Connect%20Login.gif)

Nun wird ein Benutzer-Account in Odoo erstellt und der Administrator muss diesen Freigeben:

![Authentication OpenID Connect Freigabe](attachments/Authentication%20OpenID%20Connect%20Freigabe.gif)

Wurde die Freigabe erteilt, kann sich der Benutzer nochmals einloggen.

### Login einrichten

Möchte man die Logins vorgängig einrichten, kann man die Odoo-Accounts anlegen und die muss nur noch die *OAuth User ID* hinterlegen. Diese ID erhlält bei GitLab in dem man diesen Link aufruft: <https://gitlab.com/api/v4/users?username=$USERNAME>.

Dazu ein Beispiel:

![](attachments/Authentication%20OpenID%20Connect%20User%20ID.png)

Die hier angezeigte ID hinterlegt man im Benutzer-Account von Odoo:

![](attachments/Authentication%20OpenID%20Connect%20OAuth%20User%20ID.png)

Nun kann sich der Benutzer einloggen.

![Authentication OpenID Connect Login Success](attachments/Authentication%20OpenID%20Connect%20Login%20Success.gif)
