---
title: Authentication OpenID Connect
description: Login mit OpenID Connect Provider.
kind: howto
partner: OCA
prev: ./settings
---
# Authentication OpenID Connect
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `auth_oidc`\
Repository: <https://github.com/OCA/server-auth/tree/18.0/auth_oidc>

## Konfiguration

### Login mit Microsoft Azure einrichten

Damit der OAuth-Flow mit Microsoft Azure funktioniert, müssen Sie [Odoo als OAuth-App auf Azure registrieren](Settings%20OAuth.md#Odoo%20als%20OAuth-App%20auf%20Azure%20registrieren) und
[Berechtigungen und Tokens konfigurieren](https://github.com/OCA/server-auth/tree/16.0/auth_oidc#setup-for-microsoft-azure). Verwenden Sie diese Angaben:

* **Name**: Odoo Login
* **Redirect URI**: `https://odoo.example.com/auth_oauth/signin`
* **Unterstützte Kontentypen**: Nur Konten in diesem Organisationsverzeichnis (einzelner Mandant)

Loggen Sie sich in Odoo ein und navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Integrationen*. Klicken Sie auf *OAuth-Provider* und wählen Sie den Eintrag *Azure AD Single Tenant*.

::: tip
Single-Tenant-Anbieter beschränken den Zugang auf die Nutzer Ihres Tenants, während Multitenants den Zugang für alle Azure-AD-Nutzer erlauben, so dass Nutzer fremder Unternehmen ihren Azure-AD-Login ohne Gastkonto nutzen können.
:::

Aktivieren Sie den Eintrag mit *Erlauben* und füllen Sie die Felder *Client-ID* und *Secret Key* aus. Wenn Sie *Azure AD Single Tenant* gewählt haben, müssen Sie in den Feldern *Autorisierungs-URL*, *Token URL* und *JWKS URL* den Platzhalter `{tenant_id}` mit ihrer Tenant-ID ersetzen.

::: tip
Wenn die OpenID Connect Tokens nicht mitgegeben werden, kann im OAuth-Provider das Feld *Token Map* von `upn:user_id upn:email` zu `preferred_username:user_id preferred_username:email` angepasst werden.
::::

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

Loggen Sie sich in Odoo ein und navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Integrationen*. Klicken Sie auf *OAuth-Provider* und erstellen Sie einen neuen Eintrag:

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

Damit Sie mit einem Keycloak-Account in Odoo einloggen können, müssen Sie als erstes ein OAuth-Client in einem ausgewählten Keycloak Realm erstellen. Im folgenden Beispiel ist Odoo-Installation unter <https://odoo.example.com> und eine Keycloak-Instanz unter <https://login.example.com> mit dem realm *Demo* bereits verfügbar.

Loggen Sie sich bei Keycloak ein und erstellen Sie einen neuen Client mit diesen Informationen:

* **Client type**: OpenID Connect
* **Client ID**: `odoo.example.com`
* **Client authentication**: On
* **Root URL**: <https://odoo.example.com>

Öffnen Sie den *Credentials* Tab des Client und notieren Sie sich den Wert von *Client secret*.

Zeigen Sie die OpenID Konfigurationen ihres Realms an: <https://login.example.com/realms/Demo/.well-known/openid-configuration>. Hier finden Sie Endpoint-URLs, die Sie für die Konfiguration in Odoo brauchen.

Loggen Sie sich in Odoo ein und navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Integration*. Klicken Sie auf *OAuth Provider* und erstellen Sie einen neuen Eintrag:

* **Provider Name**: `Login with Keycloak`
* **Auth Flow**: `OpenID Connect (authorization code flow)`
* **Token Map**: `sub:user_id`
* **Client ID**: `odoo.example.com`
* **Client Secret**: Fügen Sie das notierte *Client secret* ein
* **Allowed**: `[x]`
* **Body**: `Login with Keycloak`
* **Authorization URL**: `https://login.example.com/realms/Demo/protocol/openid-connect/auth`
* **Scope**: `openid`
* **Benutzerinfo-URL**: `https://login.example.com/realms/Demo/protocol/openid-connect/userinfo`
* **Token URL**: `https://login.example.com/realms/Demo/protocol/openid-connect/token`
* **JWKS URL**: `https://login.example.com/realms/Demo/protocol/openid-connect/certs`

Passen Sie die Domains `odoo.example.com` und `login.example.com` sowie den Realm `Demo` gemäss ihrer Umgebung an.

## Verwendung

Es gibt zwei Registrationsverfahren für neue Benuter: Freigeben oder Einrichten.

### GitLab-Login freigeben

Im Freigababeverfahren loggt sich der Benutzer ein:

![Authentication OpenID Connect Login](attachments/Authentication%20OpenID%20Connect%20Login.gif)

Nun wird ein Benutzer-Account in Odoo erstellt und der Administrator muss diesen Freigeben:

![Authentication OpenID Connect Freigabe](attachments/Authentication%20OpenID%20Connect%20Freigabe.gif)

Wurde die Freigabe erteilt, kann sich der Benutzer nochmals einloggen.

### GitLab-Login einrichten

Möchte man die Logins vorgängig einrichten, kann man die Odoo-Accounts anlegen und die muss nur noch die *OAuth User ID* hinterlegen. Diese ID erhlält bei GitLab in dem man diesen Link aufruft: <https://gitlab.com/api/v4/users?username=$USERNAME>.

Dazu ein Beispiel:

![](attachments/Authentication%20OpenID%20Connect%20User%20ID.png)

Die hier angezeigte ID hinterlegt man im Benutzer-Account von Odoo:

![](attachments/Authentication%20OpenID%20Connect%20OAuth%20User%20ID.png)

Nun kann sich der Benutzer einloggen.

![Authentication OpenID Connect Login Success](attachments/Authentication%20OpenID%20Connect%20Login%20Success.gif)

## Troubleshooting

### OpenID Connect scope must contain

**Problem**

Im Server-Log von Odoo erscheint diese Meldung:

```
ERROR erp odoo.addons.auth_oidc.controllers.main: openid connect scope must contain 'openid'
```

**Lösung**

Stellen Sie sicher, dass im *Bereich* ihres OAuth-Providers der Wert `openid` steht.
