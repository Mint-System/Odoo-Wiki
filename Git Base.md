---
title: Git
description: Git Repositories mit Odoo verwalten.
kind: howto
prev: ./
---
# Git
![icons_odoo_git_base_modern](attachments/icons_odoo_git_base_modern.png)

{{ $frontmatter.description }}

Technischer Name: `git_base`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/17.0/git_base>

## Verwendung

### Account anlegen

Navigieren Sie nach *Git > Account* und erstellen Sie einen neuen Eintrag. Wählen Sie die *Forge* aus und geben Sie den Account-Namen, wie er auf der Forge abrufbar ist, ein. Prüfen Sie der *HTTP Url* ob Sie den Account anzeigen können.

### Repository anlegen

Navigieren Sie nach *Git > Repos* und erstellen einen Eintrag. Wählen Sie einen Git-Account aus und geben Sie einen validen Namen ein.

### Repository-Benutzer auswählen

Der Author der Commits ist standardmässig der eingeloggte Benutzer. Wenn Sie einen bestimmten Benutzer auswählen möchten, können Sie im Git Repo *Git > Repos* im Tab *Configuration* den Benutzer auswählen.

### SSH-Schlüssel für Repository generieren

Öffnen Sie unter *Git > Repos* ein Repository. Im Tab *Configuration* führen Sie die Aktion *Generate Deploy Keys*.

::: tip
Diesen SSH-Schlüssel hinterlegen Sie als *Deploy key* auf den Remote Repository.
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

Wählen Sie den Befehl `Remove` um den Ordner des Git-Repository zu löschen. Anschliessend können Sie *Aktionen > Löschen* ausführen.

### Repositories von lokalem Pfad importieren

Sie können den lokalen Pfad der Forge nach Repositories durchsuchen lassen und importieren. Zeigen Sie eine Forge unter *Git > Forges* an. Klicken Sie auf *Import Repos from Local Path*.

## Entwicklung

### Umgebung auf Branch festlegen

Öffnen Sie unter *Git > Repos* ein Repository, das sich im Status *Initialized* oder *Connected* befindet. Zeigen Sie den Tab *Branches* an. Verknüpfen Sie in der Spalte *Environment* den Branch mit der Umgebung.

### Auf Branch der aktiven Umgebung wechseln

Wenn Sie ein Odoo Modul entwickeln und dieses eine Git-Repository definiert, können Sie mit den folgenden Instruktionen in den Branch der aktiven Umgebung wechseln: 

```python
repo_id = self.ref("project_github.project_repo")
repo_id.switch_to_environment_branch()
```

::: warning
Diese Methode wirft einen Fehler, wenn kein Branch anhand der aktiven Umgebung gefunden werden konnte. Stellen Sie sicher, dass die aktive Umgebung mit einem Branch verknüpft ist.
:::
