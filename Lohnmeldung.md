---
tags:
- HowTo
- Drittanbieter
prev: ./personalabrechnung
---
# Lohnmeldung
![](assets/odoo_icon_gioardano.png)

Lohnmeldungen ganz einfach generieren.

Technischer Name: `gio_generic_excel_addon`\
Repository: <https://gitlab.giordano.ch/odoo/giordano-addons/swiss-payroll/-/tree/14.0/gio_generic_excel_addon>

## Verwendung

### Excel-Konfiguration einrichten

Unter *Einstellungen > Technisch > Generic Excel Export* ein neuer Report *Lohnmeldung* erstellen.

Bei den *Fields to Print* den Mitarbeiter hinzufügen.

![](assets/Lohnmeldung%20Mitarbeiter.png)

Im nächsten Tab *Sub model Fields to Print* diese drei Fehler hinzufügen:

![](assets/Lohnmeldung%20Felder.png)

Als nächstes in den *Einstellungen > Technisch > Template Configurations* ein neues Template *Lohnmeldung* erstellen.

![](assets/Lohmeldung%20Report.png)

Hier die gewünschten Daten des *Header / Styles* anpassen.

![](assets/Lohnmeldung%20Report%20Header%20Style.png)

![](assets/Lohnmeldung%20Report%20Total%20Style.png)

Zum Schluss das Template *Lohnmeldung* dem Excel Export als Template mitgeben.

![](assets/Lohnmeldung%20Template%20for%20Report.png)

Nach dieser Konfiguration wird das Excel der Lohnmeldung entsprechend exportiert und im Excel dargestellt.