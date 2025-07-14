---
title: SSH
description: SSH-Schlüssel verwalten.
kind: howto
prev: ./
---
# SSH
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `ssh`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/16.0/ssh>

## Beschreibung

Die SSH-Schlüssel können an mehreren Stellen erfasst werden. Das Modul wählt den SSH-Schlüssel nach folgender Priorität aus:

1. **Deploy Keys**: Schüssel generiert für das Dokument
2. **Repo User Keys**: Schlüssel hinterlegt auf dem Repository-Benutzer
3. **Current User Keys**: Schlüssel hinterlegt auf dem eigenen Benutzer
4. **Company Keys**: Schlüssel definiert in den Einstellungen des Unternehmens

### Persönlicher SSH-Schlüssel festlegen

Klicken Sie *Benutzer-Menu > Präferenzen* und zeigen Sie den Tab *SSH* an. Hier können Sie ihren privaten und öffentlichen SSH-Schlüssel hinterlegen. Wenn der private SSH-Schlüssel verschlüssel ist, geben im entsprechenden Feld das Passwort ein.

::: warning
Die SSH-Schlüssel werden unverschlüsselt in der Datenbank gespeichert und können vom Systemadministrator gelesen werden.
:::

### SSH-Schlüssel auf Benutzer hinterlegen

Navigieren Sie nach *Einstellungen > Benutzer und Gruppen > Benutzer* und zeigen Sie einen Benutzer an. Im Tab *SSH* können Sie die SSH-Schlüssel für den Benutzer festlegen.

### SSH-Schlüssel für Unternehmen festlegen

Zeigen Sie *Einstellungen > Allgemeine Einstellungen > Integrationen* an. Unter der Option *SSH* finden Sie die Felder um den SSH-Schlüssel einzutragen.

::: warning
Der private SSH-Schlüssel muss Base64-Kodiert sein.

```bash
cat ~/.ssh/id_ed25519 | base64 -w0
```
:::

## Entwicklung

### Schlüssel-Anhänger implmentieren

Diese Modul stellt ein abstraktes Datenmodell `res.users.keychain` zur Verfügung. Wenn Sie dieses Datenmodell vererben stehen diese Methoden zur Verfügung:

* `_get_keychain`: Gibt Schlüssel-Anhänger mit der höchsten Priorität zurück.
* `run_ssh_command(command, timeout)`: Führen Sie Befehle im SSH-Kontext aus.