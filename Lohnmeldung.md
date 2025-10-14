---
title: Lohnmeldung
description: Lohnmeldungen ganz einfach generieren.
kind: howto
partner: Giordano
prev: ./hr-payroll
---

# Lohnmeldung

![](attachments/odoo_icon_gioardano.png)

{{ $frontmatter.description }}

Technischer Name: `gio_generic_excel_addon`\
Repository: <https://gitlab.giordano.ch/odoo/giordano-addons/swiss-payroll/-/tree/14.0/gio_generic_excel_addon>

## Verwendung

### Excel-Konfiguration einrichten

Unter _Einstellungen > Technisch > Generic Excel Export_ ein neuer Report _Lohnmeldung_ erstellen.

Bei den _Fields to Print_ den Mitarbeiter hinzufügen.

![](attachments/Lohnmeldung%20Mitarbeiter.png)

Im nächsten Tab _Sub model Fields to Print_ diese drei Fehler hinzufügen:

![](attachments/Lohnmeldung%20Felder.png)

Als nächstes in den _Einstellungen > Technisch > Template Configurations_ ein neues Template _Lohnmeldung_ erstellen.

![](attachments/Lohmeldung%20Report.png)

Hier die gewünschten Daten des _Header / Styles_ anpassen.

![](attachments/Lohnmeldung%20Report%20Header%20Style.png)

![](attachments/Lohnmeldung%20Report%20Total%20Style.png)

Zum Schluss das Template _Lohnmeldung_ dem Excel Export als Template mitgeben.

![](attachments/Lohnmeldung%20Template%20for%20Report.png)

Nach dieser Konfiguration wird das Excel der Lohnmeldung entsprechend exportiert und im Excel dargestellt.
