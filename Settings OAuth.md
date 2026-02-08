---
title: Einstellungen OAuth
description: OAuth-Integration mit Odoo.
kind: howto
section: true
prev: ./settings
---

# Einstellungen OAuth

![icons_odoo_settings](attachments/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Konfiguration

### Odoo als OAuth-App auf Azure registrieren

::: tip
Wir empfehlen Produkte von [Infomaniak](https://www.infomaniak.com/goto/de/home?utm_term=67ff9acbaabca) anstatt Microsoft zu verwenden.
:::

Damit sich Odoo-Benutzer den OAuth-Authorisierungsflow mit Azure abwickeln können, muss Odoo auf Azure registriert werden.

Klicken Sie auf <https://portal.azure.com/> um in das Azure-Portal zu gelangen. Navigieren Sie nach _Microsoft Entra ID > App-Registrierungen_ und erstellen Sie eine neue App mit _Neue Registrierung_.

![](attachments/Einstellungen%20OAuth%20App-Registrierungen.png)

Verwenden Sie diese Angaben:

- **Name**: Odoo
- **Unterstützte Kontentypen**: Konten in einem beliebigen Organisationsverziechnis (mehrinstanzenfähig)
- **Redirect URI**: Web `https://$HOSTNAME/microsoft_outlook/confirm`

::: warning
Bitten ersetzen Sie `$HOSTNAME` mit dem Hostnamen ihrer Odoo-Installation.
:::

Ist die App erstellt erhalten Sie diese Zusammenfassung:

![](attachments/Einstellungen%20OAuth%20Odoo%20App.png)

Erteilen Sie der OAuth-App diese Berechtigungen:

- SMTP.Send
- IMAP.AccessAsUser.All

Kopieren Sie die _Anwendungs-ID (Client)_, es handelt sich hierbei um die _Client ID_ der registrierten App.

Klicken anschliessend auf _Ein Zertifikat oder Geheimnis hinzufügen_. Erstellen Sie diesen Eintrag.

![](attachments/Einstellungen%20OAuth%20Client%20Secret.png)

Kopieren Sie das Feld _Wert_, es handelt sich hierbei um das _Client Secret_.

![](attachments/Einstellungen%20OAuth%20Copy%20Secret.png)

::: warning
Die _Geheime-ID_ des Schlüssels benötigen Sie nicht. Es handelt sich hier nicht um die _Client ID_.
:::

Öffnen Sie jetzt Odoo und navigieren Sie nach _Einstellungen > Dialog > Outlook Credentials_. Geben Sie hier die _Client ID_ und das _Client Secret_ ein.

![](attachments/Einstellungen%20OAuth%20Paste%20Client%20ID%20and%20Secret.png)

### OAuth-App auf Azure als einzelner Mandant konfigurieren

Standardmässig ist die OAuth-App mehrinstanzenfähig. Wenn Sie dies ändern möchten, öffnen Sie den Link <https://portal.azure.com/>, navigieren nach _Microsoft Entra ID > App-Registrierungen_ und zeigen Sie OAuth-App an. Anschliessend klicken Sie auf _Mehrere Organisationen_ und wählen bei _Unterstützte Kontotypen_ die Option _Nur Konten in diesem Organisationsverzeichnis (einzelner Mandant)_. Öffnen Sie die Übersicht und kopieren Sie die _Verzeichnis-ID (Mandant)_.

Legen Sie [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `microsoft_outlook.endpoint` und Wert `https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0` an. Wobei `TENANT_ID` gleich _Verzeichnis-ID (Mandant)_ ist.

Wenn Sie die [Outlook OAuth-Verbindung einrichten](#Outlook%20OAuth-Verbindung%20einrichten), wird nun die Mandanten-ID verwendet.

### Microsoft OAuth-Endpunkte für einzelne Mandanten festlegen

Wenn Sie die OAuth-App als einzelner Mandant verwenden, müssen Sie die OAuth-Endpunkte in Odoo anpassen.

Öffnen Sie den Link <https://portal.azure.com/>, navigieren nach _Microsoft Entra ID > App-Registrierungen_ und zeigen Sie OAuth-App an. Öffnen Sie die Übersicht und klicken Sie auf _Endpunkte_. Notieren Sie sich die Werte aus _OAuth 2.0-Autorisierungsendpunkt (v2)_ und _OAuth 2.0-Token-Endpunkt (v2)_.

![](attachments/Settings%20OAuth%20Azure%20Endpunkte.png)

Für diese Werte müssen Sie in Odoo zwei [Systemparameter anlegen](Development.md#Systemparameter%20anlegen):

- Schlüssel `microsoft_account.auth_endpoint` mit Wert `https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0/authorize`
- Schlüssel `microsoft_account.token_endpoint` mit Wert `https://login.microsoftonline.com/$TENANT_ID/oauth2/v2.0/token`

## Verwendung

### Outlook OAuth-Verbindung einrichten

::: tip
Wir empfehlen Produkte von [Infomaniak E-Mail-Hosting](https://www.infomaniak.com/goto/de/hosting.mail?utm_term=67ff9acbaabca) anstatt Outlook zu verwenden.
:::

Navigieren Sie nach _Einstellungen > Technisch > Eingehender Mail-Server_. Markieren Sie den Eintrag _Outlook_ auf dem Mail-Server. Klicken Sie auf _Connect your Outlook account_ und loggen Sie sich mit dem Postfach-Benutzer ein.

![](attachments/Einstellungen%20OAuth%20Outlook.png)

::: warning
Damit eine Verbindung mit Outlook aufbaut werden kann, müsssen Sie [Odoo als OAuth-App auf Azure registrieren](#Odoo%20als%20OAuth-App%20auf%20Azure%20registrieren).
:::

### Azure OAuth-App Client-Secret neu erstellen

Wenn ihr Client-Secret abgelaufen ist, können Sie einfach ein Neue erstellen. Loggen Sie sich auf <https://portal.azure.com/> ein in das Azure-Portal zu gelangen. Navigieren Sie nach _Microsoft Entra ID > App-Registrierungen_ und rufen Sie die Odoo OAuth-App auf.

Klicken anschliessend auf _Ein Zertifikat oder Geheimnis hinzufügen_. Erstellen Sie diesen Eintrag.

![](attachments/Einstellungen%20OAuth%20Client%20Secret.png)

Kopieren Sie das Feld _Wert_, es handelt sich hierbei um das _Client Secret_.

![](attachments/Einstellungen%20OAuth%20Copy%20Secret.png)

::: warning
Die _Geheime-ID_ des Schlüssels benötigen Sie nicht. Es handelt sich hier nicht um die _Client ID_.
:::

Öffnen Sie jetzt Odoo und navigieren Sie nach _Einstellungen > Dialog > Outlook Credentials_. Überschreiben Sie das bestehende _Client Secret_.

### OAuth-Token regenerieren

Navigieren Sie nach _Einstellungen > Technisch > Eingehender Mail-Server_ oder _Einstellungen > Technisch > Ausgehender Mail-Server_. Öffnen Sie einen Eintrag mit einer OAuth-Verbindung. Klicken Sie auf _Edit settings_. Der OAuth-Authorisierungsflow wird gestartet. Loggen Sie sich mit dem Postfach-Benutzer ein. Anschliessend werden Sie wieder nach Odoo zurückgeführt. Damit wurden das OAuth-Token regeneriert.

::: warning
Wenn Sie bei den Microsoft-Diensten bereits eingeloggt sind, müssen Sie diesen Vorgang entweder in einem privaten Browser-Tab ausführen oder Sie müssen sich bei den Microsoft-Diensten via <https://login.microsoftonline.com> ausloggen.
:::

### OAuth Benutzername festlegen

Wurde ein OAuth Provider konfiguriert, kann jedem Odoo Benutzer ein bestimmer OAuth Benutzername hinterlegt werden. Führen Sie diese Aktionen aus _Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer wählen > Tab OAuth öffnen_. Im Feld _OAuth User ID_ können Sie den Benutzernamen für das Login festlegen.

![](attachments/Integration%20OAuth%20Benutzername.png)

### Mit Google-Account anmelden

Wählen Sie im Login-Fenster die Option _Log in with Google_. Sie werden nun zur Google-Anmeldemaske umgeleitet. Melden Sie sich mit dem Google-Acccount an und erlauben Sie den Zugriff von Odoo. Sie werden nun zurückgeleitet.

Falls ihr Benutzer in Odoo noch nicht existiert hat, erscheint die folgende Meldung:

![Einstellungen Login Fehler](attachments/Einstellungen%20Login%20Fehler.png)

Kontaktieren Sie den/die AdministratorIn und bitten Sie um eine Freigabe. Wurde die Freigabe erstellt, loggen Sie sich erneut ein.
