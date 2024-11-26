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
Die SSH-Schlüssel werden unverschlüsselt in der Datenbank gespeichert und können vom Systemadministrator gelesen werden.
:::

### SSH-Schlüssel auf Benutzer hinterlegen

Navigieren Sie nach *Einstellungen > Benutzer und Gruppen > Benutzer* und zeigen Sie einen Benutzer an. Im Tab *SSH* können Sie die SSH-Schlüssel für den Benutzer festlegen.

## Verwendung

### Account anlegen

Navigieren Sie nach *Git > Account* und erstellen Sie einen neuen Eintrag. Wählen Sie die *Forge* aus und geben Sie den Account-Namen, wie er auf der Forge abrufbar ist, ein. Prüfen Sie der *HTTP Url* ob Sie den Account anzeigen können.

### Repository anlegen

Navigieren Sie nach *Git > Repos* und erstellen einen Eintrag. Wählen Sie einen Git-Account aus und geben Sie validen Namen ein.

### SSH-Schlüssel für Repository generieren

Öffnen Sie unter *Git > Repos* ein Repository. Im Tab *Configuration* führen Sie die Aktion *Generate Deploy Keys*.

::: tip
Diese SSH-Schlüssel können Sie als *Deploy keys* auf Remote Repositories hinterlegen.
:::

### Repository initialisieren oder klonen

Öffnen Sie unter *Git > Repos* ein Repository, das sich im Status *Draft* oder *Deleted* befindet. Wählen Sie den Befehl `Init`, wenn das Git-Repo nicht als Remote existiert. Wählen Sie den Befehl `Clone`, wenn ein Remote existiert.

![](attachments/Git%20Base%20Screenshot.png)

### Branch auf Repository anlegen

Öffnen Sie unter *Git > Repos* ein Repository, das sich im Status *Initialized* oder *Connected* befindet. Zeigen Sie den Tab *Branches* an und erstellen Sie einen neuen Eintrag.

### Datei zu Repository hinzufügen und committen

Öffnen Sie unter *Git > Repos* ein Repository, das sich im Status *Initialized* oder *Connected* befindet. Fügen Sie über den Datei-Upload eine Datei hinzu. Führen Sie den Befehl `Add All` aus. Nun ist die Datei im Staging, Sie können diese mit dem Befehl `Commit` und mit der Eingabe einer Nachricht committen.

::: tip
Wenn Sie eine Zip-Datei hochladen wird diese entpackt.
:::

### Remote für Repository registrieren

Wenn Sie einen Remote für ein initialisiertes Git-Repository angelegt haben, können Sie diesen mit dem Befehl `Add Remote` registrieren.

### Repository pullen und pushen

Damit Sie ein Repository mit einem Remote synchronisieren können, muss dieses im Status *Connected* sein.

Mit dem Befehl `Pull` werden Änderungen auf dem Remote-Branch heruntergeladen. Wenn auf dem lokalen Branch noch keine Upstream registriert ist, wird dies erledigt.

Mit dem Befehl `Push` können Sie lokale Änderungen auf den Remote laden. Wenn der Remote-Branch noch nicht existiert, wählen Sie `Push Upstream`.

::: warning
Mit dem Befehl `Push Force` können Sie einen Remote-Branch überschreiben.
:::

### Repository entfernen

Wählen Sie den Befehl `Remove` um den Ordner des Git-Repository zu löschen. Anschliessend können Sie die *Aktion > Löschen* ausführen. 