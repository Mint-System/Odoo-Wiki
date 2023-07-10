---
title: Lohnmeldung
description: Lohnmeldungen ganz einfach generieren.
tags:
- HowTo
- Drittanbieter
prev: ./hr-payroll
---
# Lohnmeldung
![](attachments/odoo_icon_gioardano.png)

{{ $frontmatter.description }}

Technischer Name: `gio_generic_excel_addon`\
Repository: <https://gitlab.giordano.ch/odoo/giordano-addons/swiss-payroll/-/tree/14.0/gio_generic_excel_addon>

## Verwendung

### Excel-Konfiguration einrichten

Unter *Einstellungen > Technisch > Generic Excel Export* ein neuer Report *Lohnmeldung* erstellen.

Bei den *Fields to Print* den Mitarbeiter hinzufügen.

![](attachments/Lohnmeldung%20Mitarbeiter.png)

Im nächsten Tab *Sub model Fields to Print* diese drei Fehler hinzufügen:

![](attachments/Lohnmeldung%20Felder.png)

Als nächstes in den *Einstellungen > Technisch > Template Configurations* ein neues Template *Lohnmeldung* erstellen.

![](attachments/Lohmeldung%20Report.png)

Hier die gewünschten Daten des *Header / Styles* anpassen.

![](attachments/Lohnmeldung%20Report%20Header%20Style.png)

![](attachments/Lohnmeldung%20Report%20Total%20Style.png)

Zum Schluss das Template *Lohnmeldung* dem Excel Export als Template mitgeben.

![](attachments/Lohnmeldung%20Template%20for%20Report.png)

Nach dieser Konfiguration wird das Excel der Lohnmeldung entsprechend exportiert und im Excel dargestellt.