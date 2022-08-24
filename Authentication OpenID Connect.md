---
tags:
- HowTo
- OCA
prev: ./einstellungen-login
---
# Authentication OpenID Connect
![icon_oca_app](assets/icon_oca_app.png)

Login mit OpenID Connect Provider.

Technischer Name: `auth_oidc`\
Repository: <https://github.com/OCA/server-auth/tree/14.0/auth_oidc>

## Login mit GitLab konfigurieren

Damit Sie mit einem GitLab Account in Odoo einloggen können, müssen Sie als erstes eine OAuth-Applikation unter <https://gitlab.com/oauth/applications> erstellen. In diesem Beispiel ist die Odoo-Installation unter <https://erp.binary-business.ch> erreichbar.

Name: `BINARY Business`\
Redirect URI:\
```
http://localhost:8069/auth_oauth/signin
https://erp.binary-business.ch/auth_oauth/signin
https://erp-dev.binary-business.ch/auth_oauth/signin
```
Condential: [ ]\
Scopes: `openid`

Speichern sie die Applikation und kopieren Sie diese Informationen:

* Application ID
* Secret

Sie brauchen diese Information um die Verbindung zwischen Odoo und GitLab im nächsten Schritt zu erstellen.

Loggen Sie sich in Odoo ein und navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Integration*, klicken Sie auf ** und erstellen Sie einen neuen Eintrag:

Provider Name: `Login with GitLab`  
Auth Flow: `OpenID Connect (authorization code flow)`  
Token Map: `sub:user_id`  
Client ID: `a0816649461bcd17f7e7574ea5b5ff2deedba3ccaf6613b4255f497ae05aeef4`  
Client Secret: `**************************************************`  
Allowed: `[x]`  
Body: `Login with GitLab`  
Authorization URL: `https://gitlab.com/oauth/authorize`  
Scope: `openid`  
Token URL: `https://gitlab.com/oauth/token`  
JWKS URL: `https://gitlab.com/-/jwks`

## Login freigeben

Es gibt zwei Registrationsverfahren für neue Benuter: Freigeben und Einrichten.

Im Freigababeverfahren loggt sich der Benutzer ein:

![Authentication OpenID Connect Login](assets/Authentication%20OpenID%20Connect%20Login.gif)

Nun wird ein Benutzer-Account in Odoo erstellt und der Adminisrator muss diesen Freigeben:

![Authentication OpenID Connect Freigabe](assets/Authentication%20OpenID%20Connect%20Freigabe.gif)

Wurde die Freigabe erteilt, kann sich der Benutzer nochmals einloggen.

## Login einrichten

Möchte man die Logins vorgängig einrichten, kann man die Odoo-Accounts anlegen und die muss nur noch die *OAuth User ID* hinterlegen. Diese ID erhlält bei GitLab in dem man diesen Link aufruft: <https://gitlab.com/api/v4/users?username=$USERNAME>.

Dazu ein Beispiel:

![](assets/Authentication%20OpenID%20Connect%20User%20ID.png)

Die hier angezeigte ID hinterlegt man im Benutzer-Account von Odoo:

![](assets/Authentication%20OpenID%20Connect%20OAuth%20User%20ID.png)

Nun kann sich der Benutzer einloggen.

![Authentication OpenID Connect Login Success](assets/Authentication%20OpenID%20Connect%20Login%20Success.gif)