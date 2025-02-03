---
title: Einstellungen OAuth
description: OAuth-Integration mit Odoo.
tags:
- HowTo
prev: ./settings
---
# Einstellungen OAuth
![icons_odoo_settings](attachments/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Konfiguration

### Odoo als OAuth-App auf Azure registrieren

Damit sich Odoo-Benutzer den OAuth-Authorisierungsflow mit Azure abwickeln können, muss Odoo auf Azure registriert werden.

Klicken Sie auf <https://portal.azure.com/> um in das Azure-Portal zu gelangen. Navigieren Sie nach *Microsoft Entra ID > App-Registrierungen* und erstellen Sie eine neue App mit *Neue Registrierung*.

![](attachments/Einstellungen%20OAuth%20App-Registrierungen.png)

Verwenden Sie diese Angaben:

* **Name**: Odoo
* **Unterstützte Kontentypen**: Konten in einem beliebigen Organisationsverziechnis (mehrinstanzenfähig)
* **Redirect URI**: Web `https://$HOSTNAME/microsoft_outlook/confirm`

::: warning
Bitten ersetzen Sie `$HOSTNAME` mit dem Hostnamen ihrer Odoo-Installation.
:::

Ist die App erstellt erhalten Sie diese Zusammenfassung:

![](attachments/Einstellungen%20OAuth%20Odoo%20App.png)

Erteilen Sie der OAuth-App diese Berechtigungen:

* SMTP.Send
* IMAP.AccessAsUser.All

Kopieren Sie die *Anwendungs-ID (Client)*, es handelt sich hierbei um die *Client ID* der registrierten App.

Klicken anschliessend auf *Ein Zertifikat oder Geheimnis hinzufügen*. Erstellen Sie diesen Eintrag.

![](attachments/Einstellungen%20OAuth%20Client%20Secret.png)

Kopieren Sie das Feld *Wert*, es handelt sich hierbei um das *Client Secret*.

![](attachments/Einstellungen%20OAuth%20Copy%20Secret.png)

Öffnen Sie jetzt Odoo und navigieren Sie nach *Einstellungen > Dialog > Outlook Credentials*. Geben Sie hier die *Client ID* und das *Client Secret* ein.

![](attachments/Einstellungen%20OAuth%20Paste%20Client%20ID%20and%20Secret.png)

### OAuth-App auf Azure als einzelner Mandant konfigurieren

Standardmässig ist die OAuth-App mehrinstanzenfähig. Wenn Sie dies ändern möchten, öffnen Sie den Link <https://portal.azure.com/>, navigieren nach *Microsoft Entra ID > App-Registrierungen* und zeigen Sie OAuth-App an. Anschliessend klicken Sie auf *Mehrere Organisationen* und wählen bei *Unterstützte Kontotypen* die Option *Nur Konten in diesem Organisationsverzeichnis (einzelner Mandant)*. Öffnen Sie die Übersicht und kopieren Sie die *Verzeichnis-ID (Mandant)*. 

Legen Sie [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `microsoft_outlook.endpoint` und Wert `https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0` an. Wobei `TENANT_ID` gleich *Verzeichnis-ID (Mandant)* ist.

Wenn Sie die [Outlook OAuth-Verbindung einrichten](#Outlook%20OAuth-Verbindung%20einrichten), wird nun die Mandanten-ID verwendet.

### Microsoft OAuth-Endpunkte für einzelne Mandanten festlegen

Wenn Sie die OAuth-App als einzelner Mandant verwenden, müssen Sie die OAuth-Endpunkte in Odoo anpassen.

Öffnen Sie den Link <https://portal.azure.com/>, navigieren nach *Microsoft Entra ID > App-Registrierungen* und zeigen Sie OAuth-App an. Öffnen Sie die Übersicht und klicken Sie auf *Endpunkte*. Notieren Sie sich die Werte aus *OAuth 2.0-Autorisierungsendpunkt (v2)* und *OAuth 2.0-Token-Endpunkt (v2)*.

![](attachments/Settings%20OAuth%20Azure%20Endpunkte.png)

Für diese Werte müssen Sie in Odoo zwei [Systemparameter anlegen](Development.md#Systemparameter%20anlegen):

* Schlüssel `microsoft_account.auth_endpoint` mit Wert `https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0/authorize`
* Schlüssel `microsoft_account.token_endpoint` mit Wert `https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0/token`

## Verwendung

### Outlook OAuth-Verbindung einrichten

Navigieren Sie nach *Einstellungen > Technisch > Eingehender Mail-Server*. Markieren Sie den Eintrag *Outlook* auf dem Mail-Server. Klicken Sie auf *Connect your Outlook account* und loggen Sie sich mit dem Postfach-Benutzer ein.

![](attachments/Einstellungen%20OAuth%20Outlook.png)

::: warning
Damit eine Verbindung mit Outlook aufbaut werden kann, müsssen Sie [Odoo als OAuth-App auf Azure registrieren](#Odoo%20als%20OAuth-App%20auf%20Azure%20registrieren).
:::

### OAuth-Token regenerieren

Navigieren Sie nach *Einstellungen > Technisch > Eingehender Mail-Server* oder *Einstellungen > Technisch > Ausgehender Mail-Server*. Öffnen Sie einen Eintrag mit einer OAuth-Verbindung. Klicken Sie auf *Edit settings*. Der OAuth-Authorisierungsflow wird gestartet. Loggen Sie sich mit dem Postfach-Benutzer ein. Anschliessend werden Sie wieder nach Odoo zurückgeführt. Damit wurden das OAuth-Token regeneriert.

::: warning
Wenn Sie bei den Microsoft-Diensten bereits eingeloggt sind, müssen Sie diesen Vorgang entweder in einem privaten Browser-Tab ausführen oder Sie müssen sich bei den Microsoft-Diensten via <https://login.microsoftonline.com> ausloggen.
:::

### OAuth Benutzername festlegen

Wurde ein OAuth Provider konfiguriert, kann jedem Odoo Benutzer ein bestimmer OAuth Benutzername hinterlegt werden. Führen Sie diese Aktionen aus *Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer wählen > Tab OAuth öffnen*. Im Feld *OAuth User ID* können Sie den Benutzernamen für das Login festlegen.

![](attachments/Integration%20OAuth%20Benutzername.png)

### Mit Google-Account anmelden

Wählen Sie im Login-Fenster die Option *Log in with Google*. Sie werden nun zur Google-Anmeldemaske umgeleitet. Melden Sie sich mit dem Google-Acccount an und erlauben Sie den Zugriff von Odoo. Sie werden nun zurückgeleitet.

Falls ihr Benutzer in Odoo noch nicht existiert hat, erscheint die folgende Meldung:

![Einstellungen Login Fehler](attachments/Einstellungen%20Login%20Fehler.png)

Kontaktieren Sie den/die AdministratorIn und bitten Sie um eine Freigabe. Wurde die Freigabe erstellt, loggen Sie sich erneut ein.