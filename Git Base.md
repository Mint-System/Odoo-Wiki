---
title: Git
description: Git Repositories mit Odoo verwalten.
tags:
- HowTo
prev: ./
---
# Git
![icons_odoo_git_base](attachments/icons_odoo_git_base.png)

{{ $frontmatter.description }}

Technischer Name: `git_base`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/16.0/git_base>

## Konfiguration

### SSH-Schlüssel hinterlegen

Klicken Sie *Benutzer-Menu > Präferenzen* und zeigen Sie den Tab *SSH* an. Hier können Sie ihren privaten und öffentlichen SSH-Schlüssel hinterlegen. Wenn der private SSH-Schlüssel verschlüssel ist, geben im entsprechenden Feld das Passwort ein.

::: warning
Die SSH-Schlüssel werden unverschlüsselt in der Datenbank gespeichert und können von Systemadministrator gelesen werden.
:::

### SSH-Schlüssel auf Benutzer hinterlegen

Navigieren Sie nach *Einstellungen > Benutzer und Gruppen > Benutzer* und zeigen Sie einen Benutzer an. Im Tab *SSH* können Sie die SSH-Schlüssel für den Benutzer festlegen.

## Verwendung

### Git-Account anlegen

Navigieren Sie nach *Git > Account* und erstellen Sie einen neuen Eintrag. Wählen Sie die *Forge* aus und geben Sie den Account-Namen, wie er auf der Forge abrufbar ist, ein. Prüfen Sie der *HTTP Url* ob Sie den Account anzeigen können.

### Git-Repository anlegen

Navigieren Sie nach *Git > Repos* und erstellen einen Eintrag. Wählen Sie einen Git-Account aus und geben Sie validen Namen ein.

### Git-Repository initialisieren oder klonen

Öffnen Sie unter *Git > Repos* ein Repository, das sich im Status *Draft* oder *Deleted* befindet. Wählen Sie den Befehl `git init`, wenn das Git-Repo nicht als Remote existiert. Wählen Sie den Befehl `git clone`, wenn ein Remote existiert.

### Branch auf Git-Repository anlegen

### Datei zu Git-Repository hinzufügen und committen

### Git-Repository pullen und pushen

### Git-Repository entfernen