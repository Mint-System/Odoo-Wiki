---
description: Zwei-Faktor-Authentisierung für bestimmte IP-Netzwerke ignorieren.
tags:
- HowTo
- Drittanbieter
prev: ./einstellungen-login
---
# Auth TOTP IP Check
![icon_oms_box](assets/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `auth_totp_ip_check`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/14.0/auth_totp_ip_check>

## Verwendung

### Zwei-Faktor-Authentisierung für bestimmte Benutzer und Netzwerke deaktivieren

Zeigen Sie *Einstellungen > Technisch > Sicherheit > Disable TOTP Check* an. Geben Sie hier ein Cidr-Adresse für ein IP-Netzwerk ein für welches die Zwei-Faktor-Authentisierung ignoriert werden soll. Wählen optional die Benutzer, für welche Ausnahme gelten soll.

![Auth TOTP IP Check](assets/Auth%20TOTP%20IP%20Check.gif)

### Login ohne Zwei-Faktor-Authentisierung für unbestimmte Netzwerke verhindern

Wenn Sie den [Systemparameter](Entwicklung.md#Systemparameter%20anlegen) mit Schlüssel `auth_totp.prevent_login_without_2fa` und Wert `True` anlegen, können Benutzer ohne Zwei-Faktor-Authentisierung aus unbestimmten Netzwerken nicht mehr einloggen.

