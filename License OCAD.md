---
description: Synchronisation Lizenzen mit dem OCAD Lizenzaktivierungsdienst.
forge: github.com
kind: howto
name: license_ocad
prev: ./license
repo: Mint-System/Odoo-Apps-Vertical-SaaS
title: License OCAD
versions:
- '16.0'
---


# License OCAD

![odoo_icons_license](attachments/odoo_icons_license.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Benutzer und Passwort festlegen

Navigieren Sie nach _Einstellungen > Verkauf > Konnektoren_ und tragen Sie bei _License OCAD_ den Benutzernamen und das Passwort für die Verbindung zum OCAD Lizenzaktivierungsdienst ein.

## Aktionen

### Lizenzinformationen kopieren

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lizenzinformationen kopieren`\
Modell: `license.license`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
output = "License name: " + record.client_order_ref
output += "\nLicense number: " + record.name

raise UserError(output)
```
