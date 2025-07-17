---
title: Odoo Microsoft Account
description: Login mit Microsoft-Account.
kind: howto
tags:
- Mint-System
prev: ./settings
---
# Odoo Microsoft Account
![](attachments/icons_odoo_microsoft_account.png)

{{ $frontmatter.description }}

Technischer Name: `odoo_microsoft_account`\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/16.0/odoo_microsoft_account>\
Odoo App Store: <https://apps.odoo.com/apps/modules/16.0/odoo_microsoft_account/>

::: warning
Diese App ist veraltet. Es wird empfohlen die App [Auth OIDC](Auth%20OIDC.md) zu verwenden.
#DEPRECATED
:::

## Konfiguration

### Microsoft OAuth-Provider einrichten

Damit der OAuth-Flow mit Microsoft Azure funktioniert, müssen Sie [Odoo als OAuth-App auf Azure registrieren](Settings%20OAuth.md#Odoo%20als%20OAuth-App%20auf%20Azure%20registrieren). Verwenden Sie zusätzliche diese Angaben:

* **Name**: Odoo Login
* **Redirect URI**: `https://odoo.example.com/auth_oauth/microsoft/signin`

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > OAuth-Provider* und Zeigen Sie den Provider *Microsoft OAuth2* an. Überschreiben Sie die Werte im Feld *Client ID* und *Secret Key* mit den Angaben aus der vorhergehenden Registration.

Im Feld *Gültigkeitsbereich* geben Sie `offline_access User.Read Mail.Read Contacts.ReadWrite Calendars.ReadWrite` ein.

### Login nur für eigenen Tenant erlauben

Damit nur Benutzer aus dem eigenen Tenant einloggen können, müssen Sie den OAuth-Client auf Azure als *Single-Tenant* konfigurieren:

* **Unterstützte Kontentypen**: Nur Konten in diesem Organisationsverzeichnis (einzelner Mandant)

![](attachments/Odoo%20Microsoft%20Account%20Single%20Tenant.png)

Und in den Einstellungen des OAuth-Provider die Authorisierungs-URL entsprechend festlegen:

![](attachments/Odoo%20Microsoft%20Account%20URL.png)

Verwenden Sie die URLs:

* **Authorization URL**: `https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0/authorize`
* **UserInfo URL**: `https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0/token`

Mit diesen beiden Einstellungen können nur Benutzer aus dem entsprechenden Tenant einloggen.

## Verwendung

### Microsoft-Account anlegen

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer* und erstellen Sie einen neuen Benutzer:

* **Name**: Vor- und Nachname des Benutzers
* **E-Mail-Adresse**: E-Mail-Adresse des Microsoft-Account
* **Gruppen**: Aktivieren Sie Gruppenzugehörigkeit für *Office-365 User*

### Mit Microsoft-Account einloggen

Zeigen Sie die Odoo-Loginseite an und wählen Sie *Login in with Microsoft*. Sie werden nun auf die Anmelde-Seite von Microsoft umgeleitet. Loggen Sie sich mit dem Microsoft-Account ein und erlauben Sie den Zugriff von Odoo auf ihren Account.

![](attachments/Odoo%20Microsoft%20Account%20Permissions.png)

Sie werden wieder zu Odoo umgeleitet und eingeloggt.

::: warning
Wenn ihr Odoo Benutzer im Schritt [Microsoft-Account anlegen](#Microsoft-Account%20anlegen) nicht erstellt wurde, erscheint beim ersten Login der Fehler *Access Denied*. Odoo hat ihren Benutzer erstellt und Sie können sich einloggen, wenn Sie erneut auf *Log in with Microsoft* klicken.
:::
