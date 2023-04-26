---
description: Neue Apps installieren und aktualisieren.
tags:
- HowTo
prev: ./
---
# Apps
![icons_odoo_modules](assets/icons_odoo_modules.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/page/all-apps>

## Bereiche

| Bereich                             | Beschreibung                  |
| ----------------------------------- | ----------------------------- |
| [Apps Aktionen](Apps%20Aktionen.md) | Aktionen für Apps einrichten. |

## Verwendung

### Liste der Apps aktualisieren

Um die Liste der verfügbaren Apps zu aktualisieren, wechseln Sie in den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren) und öffnen *Apps*. Im oberen Menu klicken Sie auf *Update der Apps*. Wenn der Vorgang abgeschlossen ist, können Sie die neuen Apps in der Liste suchen.

![](assets/Apps%20Liste%20aktualisieren.png)

### App installieren

Rufen Sie die Liste der verfügbaren Apps auf. Suchen Sie die App, die Sie installieren möchten und klicken Sie auf *Installieren*.

![](assets/Apps%20installieren%20und%20aktualisieren.png)

### Themes in Liste anzeigen

Website Themes sind auch Odoo-Apps, werden aber standardmässig nicht angezeigt. Verwantwortlich für die Filterung ist die Aktion, welche beim Anlicken von *Apps* aufgerufen wird.

Damit auch Apps in der Theme-Liste angezeigt werden, klicken Sie erstmals auf *Apps*. Wählen Sie dann *Entwicklertools > Aktion bearbeiten*. Im Dialog entfernen Sie den Eintrag unter *Filter > Wertebereich* und speichern. Nun werden beim Aufruf von *Apps* auch Themes angezeigt.

![Apps Themes anzeigen](assets/Apps%20Themes%20anzeigen.gif)

### App aktualisieren

Wählen Sie *Apps* und entfernen Sie den Standardfilter *Apps*. Suchen Sie nach der gewünschten App, klicken Sie auf das Kontext-Menü und wählen Sie *Modul Information*.

![](assets/Apps%20Modul%20aktualisieren.png)

In der Formular-Ansicht wählen Sie *Aktualiseren*. Nun aktualisiert Odoo die App-Daten (Daten, Ansichten und Assets).

### App deinstallieren

Rufen Sie die Liste der verfügbaren Apps auf. Suchen Sie die App, die Sie deinstallieren möchten und klicken Sie auf *Kontext-Menü > Deinstallieren*.

![](assets/Apps%20App%20deinstallieren.png)

::: warning
Je nach Abhängigkeit und Definition der App, werden Daten gelöscht oder die Odoo-Installation in einen fehlerhaften Zustand versetzt.
:::

### App entfernen

Die Liste der Odoo-Apps ist ein Abbild der Modul-Struktur auf dem Odoo-Server. Wurde ein Modul auf dem Server entfernt, müssen Sie dieses manuell von der App-Liste entfernen. Wählen Sie dazu *Apps > Listenansicht > App markieren > Aktion > Löschen*.

![](assets/Apps%20App%20entfernen.png)

::: tip
Wenn die App-Liste aktualisiert wird, sollte die gelöschte App nicht mehr erscheinen.
:::

