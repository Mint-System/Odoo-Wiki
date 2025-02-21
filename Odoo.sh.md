---
title: Odoo.sh
description: Platform-as-a-Service Angebot von Odoo.
tags:
- HowTo
prev: ./
---
# Odoo.sh
![](attachments/icons_odoo_server.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.sh/>

## Konfiguration

### Eigene Domain konfigurieren

Damit ihre Odoo-Installation oder Website unter einer eigenen Domain erreichbar sind, müssen Sie im Besitz der Domäne sein und einen DNS-Eintrag machen. Der DNS-Eintrag zeigt wo man den Odoo-Server für eine bestimme Domain findet. 

Angenommen ihr Odoo.sh-Projekt heisst `acme` und ihre Domain  ist `example.com`, dann müssen Sie diesen DNS-Eintrag erstellen: `www.example.com ALIAS acme.odoo.com` oder `www.example.com CNAME acme.odoo.com`.

::: tip
Die DNS-Einträge können Sie im Normalfall dort machen, wo Sie die Domain erworben und registriert haben. Verantwortlich für die DNS-Einträge sind die sog. *Nameserver*.
:::

In den Einstellung findet Sie den Abschnitt *Custom domains*, hier fügen Sie den Namen ihrer Domain ein.

![](attachments/Odoo.sh%20Custom%20domains.png)

### Build-Verhalten bei Commit festlegen

Wenn Sie auf einen Staging- oder Entwicklungs-Branch committen, erstellt Odoo.sh standardmässig einen neuen Build. In bestimmten Fällen ist dies nicht erwünscht. Das Verhalten können Sie unter *Branch > Settings* festlegen.

![](attachments/Odoo.sh%20Behavior%20Commit.png)

## Verwendung

### Branch entfernen

Für jede Staging-Phase können Sie eine bestimmte Azahl Branches haben. Möchten Sie einen Branch entfernen so wählen Sie diesen aus und klicken oben rechts auf *Delete*.

![](attachments/Odoo.sh%20Delete.png)

### Build-Backup erstellen

Zie Sie die Ansicht *Builds* des aktuellen Projekts an und suchen Sie den Build aus, den Sie sichern möchten. Wählen Sie im Kontext-Menü die Aktion *Download-Backup*.

### Staging-Upgrade ausführen

Aktualisieren Sie den Staging-Branch mit den Modulen für die neue Odoo Version. Wählen Sie den Branch aus und klicken Sie auf *Upgrade*. Bestätigen Sie den Dialog und der Upgrade wird gestartet.

Der Upgrade-Prozess wird beim Punkt *Waiting user commit...* angehalten. Nun können die Submodule angepasst werden. Mit dem Befehl `git commit --allow-empty -m 'Trigger update'; git push` können Sie ein Upgrade der Datebank auslösen.

![](attachments/Odoo.sh%20Trigger%20update.png)

Odoo stellt die aktualisierte Datenbank auf dem Staging-Branch zum Testen bereit. Sie können weitere Anpassungen vornehmen und comitten.

### Upgrade-Modus beenden

Auf dem Branch wählen Sie *Exit upgrade mode*. Damit wird die ursprüngliche Version 

### Production-Upgrade ausführen

Mergen Sie den Staging-Branch in den Production-Branch und wählen Sie die Aktion *Upgrade* aus. Bestätigen Sie den Dialog und Odoo.sh führt das produktive Upgrade aus.

### GitHub-Repository einbinden

Angenommen Sie möchten die OCA-Module von <https://github.com/OCA/partner-contact> auf ihrer Odoo.sh Umgebung zur Verfügung stellen, gehen Sie wie folgt vor. Rufen Sie GitHub-Seite auf und kopieren Sie den SSH-Link zum Repository.

![](attachments/GitHub%20OCA%20Copy%20SSH-Link.png)

Rufen Sie ihr Odoo.sh Projekt auf und wählen Sie den Staging-Branch aus. Klicken Sie oben rechts auf *Submodule > Run on Odoo.sh*.

![](attachments/Odoo.sh%20Submodule.png)

Im Dialog geben Sie den SSH-Link ein, wählen den Branch gemäss Odoo Version und klicken auf *Add Submodule*.

![](attachments/Odoo.sh%20Submodule%20Dialog.png)

Nun wird das Submodule und die darin enthaltenen Module auf der Staging-Umgebung zur Verfügung gestellt.

::: tip
Um die Submodule zu aktualisieren, müssen Sie das Odoo.sh Projekt als Git-Repository auschecken und die Git-Referenzen auf die Submodule aktualisieren. 
:::

### Modul-Code bearbeiten

Auf den Staging- und Entwicklungsbranches kann der Code von Modulen direkt bearbeitet werden. Wählen Sie einen Branch aus und klicken Sie auf *Editor*. Nun öffnet sich in einem neues Fenster *JupyterLab*. Navigieren Sie nach `/src/user`. Hie finden Sie den Modul-Code aus dem GitHub-Repository.

### Betriebssystem wählen

Das Odoo.sh Projekt wird für ein bestimmtes Betriebssystem eingerichtet. Wenn dieses veraltet ist, können Sie unter *Settings* ein neueres Betriebssystem wählen.

::: warning
Die entsprechende Einstellung wird nur angezeigt, wenn das Betriebssystem veraltet ist.
:::

## Berechtigungen

### Projekt mit Github-Benutzer teilen

Odoo.sh Projekte sind an ein Github-Repository gekoppelt, wenn Sie einem Benutzer Zugriff auf das Projekt geben möchten, müssen Sie den Github-Benutzernamen in den Projekteinstellungen hinterlegen.

Öffnen Sie das Odoo.sh Projekt und navigieren Sie nach *Settings > Collaborators*. Tragen Sie hier den Benutzernamen und die enstprechenden Berechtigungen ein.

![](attachments/Odoo.sh%20Benutzer%20hinzufügen.png)