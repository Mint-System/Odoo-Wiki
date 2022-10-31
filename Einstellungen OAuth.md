---
tags:
- HowTo
prev: ./einstellungen
---
# Einstellungen OAuth
![icons_odoo_settings](assets/icons_odoo_settings.png)

OAuth-Integration mit Odoo.

## Verknüpfung

### Odoo als OAuth-Client auf Azure registrieren

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

### Outlook OAuth-Verbindung einrichten

Navigieren Sie nach *Einstellungen > Technisch > Eingehender Mail-Server*. Markieren Sie den Eintrag *Outlook* auf dem Mail-Server. Klicken Sie auf *Connect your Outlook account* und loggen Sie sich mit dem Postfach-Benutzer ein.

![](assets/Einstellungen%20OAuth%20Outlook.png)
