---
title: Apps
description: Neue Apps installieren und aktualisieren.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Apps

![icons_odoo_hr_appraisal](attachments/icons_odoo_hr_appraisal.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/page/all-apps>

## Bereiche

| Bereich                            | Beschreibung                  |
| ---------------------------------- | ----------------------------- |
| [Apps Aktionen](Apps%20Actions.md) | Aktionen für Apps einrichten. |

## Verwendung

### Liste der Apps aktualisieren

Um die Liste der verfügbaren Apps zu aktualisieren, wechseln Sie in den [Entwicklermodus](Settings.md#Entwicklermodus%20aktivieren) und öffnen _Apps_. Im oberen Menu klicken Sie auf _Update der Apps_. Wenn der Vorgang abgeschlossen ist, können Sie die neuen Apps in der Liste suchen.

![](attachments/Apps%20Liste%20aktualisieren.png)

### App installieren

Rufen Sie die Liste der verfügbaren Apps auf. Suchen Sie die App, die Sie installieren möchten und klicken Sie auf _Installieren_.

![](attachments/Apps%20installieren%20und%20aktualisieren.png)

### App aktualisieren

Wählen Sie _Apps_ und entfernen Sie den Standardfilter _Apps_. Suchen Sie nach der gewünschten App, klicken Sie auf das Kontext-Menü und wählen Sie _Modul Information_.

![](attachments/Apps%20Modul%20aktualisieren.png)

In der Formular-Ansicht wählen Sie _Aktualiseren_. Nun aktualisiert Odoo die App-Daten (Daten, Ansichten und Assets).

### App deinstallieren

Rufen Sie die Liste der verfügbaren Apps auf. Suchen Sie die App, die Sie deinstallieren möchten und klicken Sie auf _Kontext-Menü > Deinstallieren_.

![](attachments/Apps%20App%20deinstallieren.png)

::: warning
Je nach Abhängigkeit und Definition der App, werden Daten gelöscht oder die Odoo-Installation in einen fehlerhaften Zustand versetzt.
:::

### App entfernen

Die Liste der Odoo-Apps ist ein Abbild der Modul-Struktur auf dem Odoo-Server. Wurde ein Modul auf dem Server entfernt, müssen Sie dieses manuell von der App-Liste entfernen. Wählen Sie dazu _Apps > Listenansicht > App markieren > Aktion > Löschen_.

![](attachments/Apps%20App%20entfernen.png)

## Technisch

### Themes in Liste anzeigen

Website Themes sind auch Odoo-Apps, werden aber standardmässig nicht angezeigt. Verwantwortlich für die Filterung ist die Aktion, welche beim Anlicken von _Apps_ aufgerufen wird.

Damit auch Apps in der Theme-Liste angezeigt werden, klicken Sie erstmals auf _Apps_. Wählen Sie dann _Entwicklertools > Aktion bearbeiten_. Im Dialog entfernen Sie den Eintrag unter _Filter > Wertebereich_ und speichern. Nun werden beim Aufruf von _Apps_ auch Themes angezeigt.

![Apps Themes anzeigen](attachments/Apps%20Themes%20anzeigen.gif)

## Berechtigungen

### Zugriffsrechte zur Verwaltung von Apps erteilen

Wenn Sie für eine bestimmte Gruppe, beispielsweise _Administration / Zugriffsrechte_ die Installation von Apps erlauben möchten, müssen [Zugriffsrechte auf Datenmodell vergeben](Settings%20Permissions.md#Zugriffsrechte%20auf%20Datenmodell%20vergeben):

Module:

- **Datenmodell**: `ir.module.module`
- **Name**: `ir_module_module erp_manager`
- **Gruppe**: _Administration / Zugriffsrechte_
- **Berechtigung**: Alle

Abhängigkeiten:

- **Datenmodell**: `ir.module.module.dependency`
- **Name**: `ir_module_module_dependency erp_manager`
- **Gruppe**: _Administration / Zugriffsrechte_
- **Berechtigung**: Alle

Ausnahmen:

- **Datenmodell**: `ir.module.module.exclusion`
- **Name**: `ir_module_module_exclusion erp_manager`
- **Gruppe**: _Administration / Zugriffsrechte_
- **Berechtigung**: Alle

Todos:

- **Datenmodell**: `ir.actions.todo`
- **Name**: `ir_actions_todo erp_manager`
- **Gruppe**: _Administration / Zugriffsrechte_
- **Berechtigung**: Alle

Deinstallation:

- **Datenmodell**: `base.module.uninstall`
- **Name**: `access.base.module.uninstall erp_manager`
- **Gruppe**: _Administration / Zugriffsrechte_
- **Berechtigung**: Alle
