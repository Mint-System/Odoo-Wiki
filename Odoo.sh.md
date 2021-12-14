---
tags:
- HowTo
---
[🔗 Home](/)
# Odoo.sh
![icons_odoo_app](assets/icons_odoo_app.png)  

The Odoo Cloud Platform.

## Projekt mit Github-Benutzer teilen

Odoo.sh Projekte sind an ein Github-Repository gekoppelt, wenn sie einem Benutzer Zugriff auf das Projekt geben möchten, müssen sie den Github-Benutzernamen in den Projekteinstellungen hinterlegen.

Öffnen sie das Odoo.sh Projekt und navigieren sie nach *Settings > Collaborators*. Tragen sie hier den Benutzernamen und die enstprechenden Berechtigungen ein.

![](assets/Odoo.sh%20Benutzer%20hinzuf%C3%BCgen.png)

## Eigene Domain konfigurieren

Damit ihre Odoo-Installation oder Website unter einer eigenen Domain erreichbar sind, müssen sie im Besitz der Domäne sein und einen DNS-Eintrag machen. Der DNS-Eintrag zeigt wo man den Odoo-Server für eine bestimme Domain findet. Angenommen ihr Odoo.sh-Projekt heisst `example` und ihre Domain `example.com`, dann müssen sie diesen DNS-Eintrag machen: `www.example.com ALIAS example.odoo.com` oder `www.example.com CNAME example.odoo.com`.

::: tip
Die DNS-Einträge können sie oft dort machen, wo sie die Domain erworben haben. Verantwortlich für die DNS-Einträge sind die sog. Nameserver.
:::

In den Einstellung findet sie den Abschnitt "Custom domains". hier fügen 

![](assets/Odoo.sh%20Custom%20domains.png)