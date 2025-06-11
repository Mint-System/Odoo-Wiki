---
title: License OCAD
description: Synchronisation Lizenzen mit dem OCAD Lizenzaktivierungsdienst.
kind: howto
prev: ./license
---
# License OCAD
![odoo_icons_license](attachments/odoo_icons_license.png)

{{ $frontmatter.description }}

Technischer Name: `license_ocad`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Vertical-SaaS/tree/16.0/license_ocad>

## Konfiguration

### Benutzer und Passwort festlegen

Navigieren Sie nach *Einstellungen > Verkauf > Konnektoren* und tragen Sie bei *License OCAD* den Benutzernamen und das Passwort für die Verbindung zum OCAD Lizenzaktivierungsdienst ein.

## Aktionen

### Lizenzinformationen kopieren


Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lizenzinformationen kopieren`\
Modell: `license.license`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
output = "License name: " + record.client_order_ref
output += "\nLicense number: " + record.name 

raise UserError(output)
```