---
tags:
- HowTo
- Drittanbieter
prev: ./einstellungen-login
---
# Mail Service Users
![icon_oms_box](assets/icon_oms_box.png)

Service-Benutzer von Lizenzvertrag ausschliessen.

Technischer Name: `mail_service_users`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/14.0/mail_service_users>

## Verwendung

### Benutzer als Service-Benutzer festlegen

Mit dieser Erweiterung können Sie bestimmte Benutzer als *Service-Benutzer* markieren. Diese Benutzer werden vom Lizenzvertrag von Odoo augeschlossen. Sie dürfen diese Benutzer nicht als persönliches Login verwenden.

Rufen Sie einen Benutzer via *Einstellungen > Benutzer und Unternehmen > Benutzer* auf. Setzen Sie die Checkbox wenn es sich um einen Service-Benutzer handelt.

![](assets/Mail%20Service%20Users.png)

::: warning
Dieses Modul verändert die Berechnung der aktiven Benutzer auf dem System. Mit dieser Anpassung verstosst man gegen die Bedinungen im Odoo Enterprise Lizenzvertrag. 
:::