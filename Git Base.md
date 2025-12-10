---
title: Git
description: Git Repositories mit Odoo verwalten.
kind: howto
partner: Mint-System
prev: ./
---

# Git

![icons_odoo_git_base_modern](attachments/icons_odoo_git_base_modern.png)

{{ $frontmatter.description }}

Technischer Name: `git_base`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/17.0/git_base>

## Verwendung

### Account anlegen

Navigieren Sie nach _Git > Account_ und erstellen Sie einen neuen Eintrag. Wählen Sie die _Forge_ aus und geben Sie den Account-Namen, wie er auf der Forge abrufbar ist, ein. Prüfen Sie der _HTTP Url_ ob Sie den Account anzeigen können.

### Repository anlegen

Navigieren Sie nach _Git > Repos_ und erstellen einen Eintrag. Wählen Sie einen Git-Account aus und geben Sie einen validen Namen ein.

### Repository-Benutzer auswählen

Der Author der Commits ist standardmässig der eingeloggte Benutzer. Wenn Sie einen bestimmten Benutzer auswählen möchten, können Sie im Git Repo _Git > Repos_ im Tab _Configuration_ den Benutzer auswählen.

### SSH-Schlüssel für Repository generieren

Öffnen Sie unter _Git > Repos_ ein Repository. Im Tab _Configuration_ führen Sie die Aktion _Generate Deploy Keys_.

::: tip
Diesen SSH-Schlüssel hinterlegen Sie als _Deploy key_ auf den Remote Repository.
:::

### Repository initialisieren oder klonen

Öffnen Sie unter _Git > Repos_ ein Repository, das sich im Status _Draft_ oder _Deleted_ befindet. Wählen Sie den Befehl `Init`, wenn das Git-Repo nicht als Remote existiert. Wählen Sie den Befehl `Clone`, wenn ein Remote existiert.

![](attachments/Git%20Base%20Screenshot.png)

### Branch auf Repository anlegen

Öffnen Sie unter _Git > Repos_ ein Repository, das sich im Status _Initialized_ oder _Connected_ befindet. Zeigen Sie den Tab _Branches_ an und erstellen Sie einen neuen Eintrag.

### Datei zu Repository hinzufügen und committen

Öffnen Sie unter _Git > Repos_ ein Repository, das sich im Status _Initialized_ oder _Connected_ befindet. Fügen Sie über den Datei-Upload eine Datei hinzu. Führen Sie den Befehl `Add All` aus. Nun ist die Datei im Staging, Sie können diese mit dem Befehl `Commit` und mit der Eingabe einer Nachricht committen.

::: tip
Wenn Sie eine Zip-Datei hochladen wird diese entpackt.
:::

### Remote für Repository registrieren

Wenn Sie einen Remote für ein initialisiertes Git-Repository angelegt haben, können Sie diesen mit dem Befehl `Add Remote` registrieren.

### Repository pullen und pushen

Damit Sie ein Repository mit einem Remote synchronisieren können, muss dieses im Status _Connected_ sein.

Mit dem Befehl `Pull` werden Änderungen auf dem Remote-Branch heruntergeladen. Wenn auf dem lokalen Branch noch keine Upstream registriert ist, wird dies erledigt.

Mit dem Befehl `Push` können Sie lokale Änderungen auf den Remote laden. Wenn der Remote-Branch noch nicht existiert, wählen Sie `Push Upstream`.

::: warning
Mit dem Befehl `Push Force` können Sie einen Remote-Branch überschreiben.
:::

### Repository entfernen

Wählen Sie den Befehl `Remove` um den Ordner des Git-Repository zu löschen. Anschliessend können Sie _Aktionen > Löschen_ ausführen.

### Repositories von lokalem Pfad importieren

Sie können den lokalen Pfad der Forge nach Repositories durchsuchen lassen und importieren. Zeigen Sie eine Forge unter _Git > Forges_ an. Klicken Sie auf _Import Repos from Local Path_.

## Entwicklung

### Umgebung auf Branch festlegen

Öffnen Sie unter _Git > Repos_ ein Repository, das sich im Status _Initialized_ oder _Connected_ befindet. Zeigen Sie den Tab _Branches_ an. Verknüpfen Sie in der Spalte _Environment_ den Branch mit der Umgebung.

### Auf Branch der aktiven Umgebung wechseln

Wenn Sie ein Odoo Modul entwickeln und dieses eine Git-Repository definiert, können Sie mit den folgenden Instruktionen in den Branch der aktiven Umgebung wechseln:

```python
repo_id = self.ref("project_github.project_repo")
repo_id.switch_to_environment_branch()
```

::: warning
Diese Methode wirft einen Fehler, wenn kein Branch anhand der aktiven Umgebung gefunden werden konnte. Stellen Sie sicher, dass die aktive Umgebung mit einem Branch verknüpft ist.
:::
