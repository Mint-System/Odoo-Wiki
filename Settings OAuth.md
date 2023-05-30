---
title: Einstellungen OAuth
description: OAuth-Integration mit Odoo.
tags:
- HowTo
prev: ./settings
---
# Einstellungen OAuth
![icons_odoo_settings](assets/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Konfiguration

### Odoo als OAuth-App auf Azure registrieren

Damit sich Odoo-Benutzer den OAuth-Authorisierungsflow mit Azure abwickeln können, muss Odoo auf Azure registriert werden.

Klicken Sie auf <https://portal.azure.com/> um in das Azure-Portal zu gelangen. Navigieren Sie nach *Azure Active Directory > App-Registrierungen* und erstellen Sie eine neue App mit *Neue Registrierung*.

![](assets/Einstellungen%20OAuth%20App-Registrierungen.png)

Verwenden Sie diese Angaben:

* **Name**: Odoo
* **Unterstützte Kontentypen**: Konten in einem beliebigen Organisationsverziechnis (mehrinstanzenfähig)
* **Redirect URI**: Web `https://odoo.example.com/microsoft_outlook/confirm`

Ist die App erstellt erhalten Sie diese Zusammenfassung:

![](assets/Einstellungen%20OAuth%20Odoo%20App.png)

Kopieren Sie die *Anwendungs-ID (Client)*, es handelt sich hierbei um die *Client ID* der registrierten App.

Klicken anschliessend auf *Ein Zertifikat oder Geheimnis hinzufügen*. Erstellen Sie diesen Eintrag.

![](assets/Einstellungen%20OAuth%20Client%20Secret.png)

Kopieren Sie das Feld *Wert*, es handelt sich hierbei um das *Client Secret*.

![](assets/Einstellungen%20OAuth%20Copy%20Secret.png)

Öffnen Sie jetzt Odoo und navigieren Sie nach *Einstellungen > Diskussion > Outlook Credentials*. Geben Sie hier die *Client ID* und das *Client Secret* ein.

![](assets/Einstellungen%20OAuth%20Paste%20Client%20ID%20and%20Secret.png)

## Verwendung

### Outlook OAuth-Verbindung einrichten

Navigieren Sie nach *Einstellungen > Technisch > Eingehender Mail-Server*. Markieren Sie den Eintrag *Outlook* auf dem Mail-Server. Klicken Sie auf *Connect your Outlook account* und loggen Sie sich mit dem Postfach-Benutzer ein.

![](assets/Einstellungen%20OAuth%20Outlook.png)

### OAuth-Token regenerieren

Navigieren Sie nach *Einstellungen > Technisch > Eingehender Mail-Server* oder *Einstellungen > Technisch > Ausgehender Mail-Server*. Öffnen Sie einen Eintrag mit einer OAuth-Verbindung. Klicken Sie auf *Edit settings*. Der OAuth-Authorisierungsflow wird gestartet. Loggin Sie sich mit dem Postfach-Benutzer ein. Anschliessend werden Sie wieder nach Odoo zurückgeführt. Damit wurden das OAuth-Token regeneriert.

::: warning
Wenn Sie bei den Microsoft-Diensten bereits eingeloggt sind, müssen Sie diesen Vorgang entweder in einem privaten Browser-Tab ausführen oder Sie müssen sich bei den Microsoft-Diensten via <https://login.microsoftonline.com> ausloggen.
:::

### OAuth Benutzername festlegen

Wurde ein OAuth Provider konfiguriert, kann jedem Odoo Benutzer ein bestimmer OAuth Benutzername hinterlegt werden. Führen Sie diese Aktionen aus *Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer wählen > Tab OAuth öffnen*. Im Feld *OAuth User ID* können Sie den Benutzernamen für das Login festlegen.

![](assets/Integration%20OAuth%20Benutzername.png)

### Mit Google-Account anmelden

Wählen Sie im Login-Fenster die Option *Log in with Google*. Sie werden nun zur Google-Anmeldemaske umgeleitet. Melden Sie sich mit dem Google-Acccount an und erlauben Sie den Zugriff von Odoo. Sie werden nun zurückgeleitet.

Falls ihr Benutzer in Odoo noch nicht existiert hat, erscheint die folgende Meldung:

![Einstellungen Login Fehler](assets/Einstellungen%20Login%20Fehler.png)

Kontaktieren Sie den/die AdministratorIn und bitten Sie um eine Freigabe. Wurde die Freigabe erstellt, loggen Sie sich erneut ein.