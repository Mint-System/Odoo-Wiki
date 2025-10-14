---
title: Odoo.sh
description: Platform-as-a-Service Angebot von Odoo.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Odoo.sh

![](attachments/icons_odoo_server.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.sh/>

## Konfiguration

### Eigene Domain konfigurieren

Damit ihre Odoo-Installation oder Website unter einer eigenen Domain erreichbar sind, müssen Sie im Besitz der Domäne sein und einen DNS-Eintrag machen. Der DNS-Eintrag zeigt wo man den Odoo-Server für eine bestimme Domain findet.

Angenommen ihr Odoo.sh-Projekt heisst `acme` und ihre Domain ist `example.com`, dann müssen Sie diesen DNS-Eintrag erstellen: `www.example.com ALIAS acme.odoo.com` oder `www.example.com CNAME acme.odoo.com`.

::: tip
Die DNS-Einträge können Sie im Normalfall dort machen, wo Sie die Domain erworben und registriert haben. Verantwortlich für die DNS-Einträge sind die sog. _Nameserver_.
:::

In den Einstellung findet Sie den Abschnitt _Custom domains_, hier fügen Sie den Namen ihrer Domain ein.

![](attachments/Odoo.sh%20Custom%20domains.png)

### Build-Verhalten bei Commit festlegen

Wenn Sie auf einen Staging- oder Entwicklungs-Branch committen, erstellt Odoo.sh standardmässig einen neuen Build. In bestimmten Fällen ist dies nicht erwünscht. Das Verhalten können Sie unter _Branch > Settings_ festlegen.

![](attachments/Odoo.sh%20Behavior%20Commit.png)

## Verwendung

### Branch entfernen

Für jede Staging-Phase können Sie eine bestimmte Azahl Branches haben. Möchten Sie einen Branch entfernen so wählen Sie diesen aus und klicken oben rechts auf _Delete_.

![](attachments/Odoo.sh%20Delete.png)

### Build-Backup erstellen

Zie Sie die Ansicht _Builds_ des aktuellen Projekts an und suchen Sie den Build aus, den Sie sichern möchten. Wählen Sie im Kontext-Menü die Aktion _Download-Backup_.

### Staging-Upgrade ausführen

Aktualisieren Sie den Staging-Branch mit den Modulen für die neue Odoo Version. Wählen Sie den Branch aus und klicken Sie auf _Upgrade_. Bestätigen Sie den Dialog und der Upgrade wird gestartet.

Der Upgrade-Prozess wird beim Punkt _Waiting user commit..._ angehalten. Nun können die Submodule angepasst werden. Mit dem Befehl `git commit --allow-empty -m 'Trigger update'; git push` können Sie ein Upgrade der Datebank auslösen.

![](attachments/Odoo.sh%20Trigger%20update.png)

Odoo stellt die aktualisierte Datenbank auf dem Staging-Branch zum Testen bereit. Sie können weitere Anpassungen vornehmen und comitten.

### Upgrade-Modus beenden

Auf dem Branch wählen Sie _Exit upgrade mode_. Damit wird die ursprüngliche Version

### Production-Upgrade ausführen

Mergen Sie den Staging-Branch in den Production-Branch und wählen Sie die Aktion _Upgrade_ aus. Bestätigen Sie den Dialog und Odoo.sh führt das produktive Upgrade aus.

### GitHub-Repository einbinden

Angenommen Sie möchten die OCA-Module von <https://github.com/OCA/partner-contact> auf ihrer Odoo.sh Umgebung zur Verfügung stellen, gehen Sie wie folgt vor. Rufen Sie GitHub-Seite auf und kopieren Sie den SSH-Link zum Repository.

![](attachments/GitHub%20OCA%20Copy%20SSH-Link.png)

Rufen Sie ihr Odoo.sh Projekt auf und wählen Sie den Staging-Branch aus. Klicken Sie oben rechts auf _Submodule > Run on Odoo.sh_.

![](attachments/Odoo.sh%20Submodule.png)

Im Dialog geben Sie den SSH-Link ein, wählen den Branch gemäss Odoo Version und klicken auf _Add Submodule_.

![](attachments/Odoo.sh%20Submodule%20Dialog.png)

Nun wird das Submodule und die darin enthaltenen Module auf der Staging-Umgebung zur Verfügung gestellt.

::: tip
Um die Submodule zu aktualisieren, müssen Sie das Odoo.sh Projekt als Git-Repository auschecken und die Git-Referenzen auf die Submodule aktualisieren.
:::

### Modul-Code bearbeiten

Auf den Staging- und Entwicklungsbranches kann der Code von Modulen direkt bearbeitet werden. Wählen Sie einen Branch aus und klicken Sie auf _Editor_. Nun öffnet sich in einem neues Fenster _JupyterLab_. Navigieren Sie nach `/src/user`. Hie finden Sie den Modul-Code aus dem GitHub-Repository.

### Betriebssystem wählen

Das Odoo.sh Projekt wird für ein bestimmtes Betriebssystem eingerichtet. Wenn dieses veraltet ist, können Sie unter _Settings_ ein neueres Betriebssystem wählen.

::: warning
Die entsprechende Einstellung wird nur angezeigt, wenn das Betriebssystem veraltet ist.
:::

## Berechtigungen

### Projekt mit Github-Benutzer teilen

Odoo.sh Projekte sind an ein Github-Repository gekoppelt, wenn Sie einem Benutzer Zugriff auf das Projekt geben möchten, müssen Sie den Github-Benutzernamen in den Projekteinstellungen hinterlegen.

Öffnen Sie das Odoo.sh Projekt und navigieren Sie nach _Settings > Collaborators_. Tragen Sie hier den Benutzernamen und die enstprechenden Berechtigungen ein.

![](attachments/Odoo.sh%20Benutzer%20hinzufügen.png)

### GitHub-Repository mit Benutzer teilen

Odoo.sh Projekte sind an ein Github-Repository gekoppelt, wenn Sie einem Benutzer Zugriff auf das Repository geben möchten, müssen Sie das via GitHub machen.

Klicken Sie auf der Projekt-Kachel-Ansicht von Odoo.sh auf den GitHub-Link. Auf der GitHub-Seite wählen Sie _Settings > Collaborators and teams > Manage access > Add people_. Geben Sie den GitHub-Benutzernamen ein. Wählen Sie anschliessend eine Rolle aus (_Writer_ ist empfohlen).

Der Benutzer erhält eine Einladung via E-Mail und GitHub-Benachrichtigung. Erst wenn die Einladung angenommen ist, wird der Zugriff erteilt.

## Datenbank

### Datenbank importieren

Loggen Sie sich in ihr Odoo.sh Projekt ein. Wählen Sie den auf linken Seiten den Branch aus und klicken Sie auf den Tab _Backups_. Anschliessend klicken Sie auf _Import Database_. Es öffent sich ein Dialog mit Informationen zum Import-Vorgang. Klicken Sie auf _Next_. Abhängig von der Grösse der Zip-Datei wählen Sie die entsprechende Option.

1. Wählen Sie die Zip-Datei aus und klicken Sie auf _Import_.
2. Führen Sie den Kommandozeilen-Befehl aus. Starten Sie nach dem Upload den Vorgang mit _Import_.
