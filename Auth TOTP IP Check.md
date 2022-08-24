---
tags:
- HowTo
- Drittanbieter
prev: ./einstellungen
---
# Auth TOTP IP Check
![icon_oms_box](assets/icon_oms_box.png)

Zwei-Faktor-Authentisierung für bestimmte IP-Netzwerke ignorieren.

Technischer Name: `auth_totp_ip_check`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/14.0/auth_totp_ip_check>

## Zwei-Faktor-Authentisierung für bestimmte Benutzer und Netzwerke deaktivieren

Zeigen Sie *Einstellungen > Technisch > Sicherheit > Allowed TOTP Cidrs* an. Geben Sie hier ein Cidr-Adresse für ein IP-Netzwerk ein für welches die Zwei-Faktor-Authentisierung ignoriert werden soll. Wählen Sie die Benutzer aus für welche diese Ausnahme gelten soll.

![Auth TOTP IP Check](assets/Auth%20TOTP%20IP%20Check.gif)