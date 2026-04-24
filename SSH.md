---
description: SSH-Schlüssel verwalten.
forge: github.com
kind: howto
name: ssh
partner: Mint System
prev: ./connector
repo: Mint-System/Odoo-Apps-Connector
title: SSH
versions:
- '18.0'
- '16.0'
---


# SSH

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Die SSH-Schlüssel können an mehreren Stellen erfasst werden. Das Modul wählt den SSH-Schlüssel nach folgender Priorität aus:

1. **Deploy Keys**: Schüssel generiert für das Dokument
2. **Repo User Keys**: Schlüssel hinterlegt auf dem Repository-Benutzer
3. **Current User Keys**: Schlüssel hinterlegt auf dem eigenen Benutzer
4. **Company Keys**: Schlüssel definiert in den Einstellungen des Unternehmens

### Persönlicher SSH-Schlüssel festlegen

Klicken Sie _Benutzer-Menu > Präferenzen_ und zeigen Sie den Tab _SSH_ an. Hier können Sie ihren privaten und öffentlichen SSH-Schlüssel hinterlegen. Wenn der private SSH-Schlüssel verschlüssel ist, geben im entsprechenden Feld das Passwort ein.

::: warning
Die SSH-Schlüssel werden unverschlüsselt in der Datenbank gespeichert und können vom Systemadministrator gelesen werden.
:::

### SSH-Schlüssel auf Benutzer hinterlegen

Navigieren Sie nach _Einstellungen > Benutzer und Gruppen > Benutzer_ und zeigen Sie einen Benutzer an. Im Tab _SSH_ können Sie die SSH-Schlüssel für den Benutzer festlegen.

### SSH-Schlüssel für Unternehmen festlegen

Zeigen Sie _Einstellungen > Allgemeine Einstellungen > Integrationen_ an. Unter der Option _SSH_ finden Sie die Felder um den SSH-Schlüssel einzutragen.

::: warning
Der private SSH-Schlüssel muss Base64-Kodiert sein.

```bash
cat ~/.ssh/id_ed25519 | base64 -w0
```

:::

## Entwicklung

### Schlüssel-Anhänger implmentieren

Diese Modul stellt ein abstraktes Datenmodell `res.users.keychain` zur Verfügung. Wenn Sie dieses Datenmodell vererben stehen diese Methoden zur Verfügung:

- `_get_keychain`: Gibt Schlüssel-Anhänger mit der höchsten Priorität zurück.
- `run_ssh_command(command, timeout)`: Führen Sie Befehle im SSH-Kontext aus.
