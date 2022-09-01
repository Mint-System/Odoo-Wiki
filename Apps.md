---
tags:
- HowTo
prev: ./
---
# Apps
![icons_odoo_modules](assets/icons_odoo_modules.png)

Neue Apps installieren und aktualisieren.

Website: <https://www.odoo.com/de_DE/page/all-apps>

## Erweiterungen

| Erweiterung                                                 | Beschreibung                                |
| ----------------------------------------------------------- | ------------------------------------------- |
| [Product Name Sequence](Product%20Name%20Sequence.md)           | Generate product names based on a sequence. |
| [Product Barcode Generator](Product%20Barcode%20Generator.md)   | Autogenerate EAN13 product barcodes.        |
| [Cancel Manufacturing Order](Cancel%20Manufacturing%20Order.md) | Fertigungsauftrag rückgängig machen.        |

## Liste der Apps aktualisieren

Um die Liste der verfügbaren Apps zu aktualisieren, wechseln Sie in den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren) und öffnen *Apps*. Im oberen Menu klicken Sie auf *Update der Apps*. Wenn der Vorgang abgeschlossen ist, können Sie die neuen Apps in der Liste suchen.

![](assets/Apps%20Liste%20aktualisieren.png)

## App installieren

Rufen Sie die Liste der verfügbaren Apps auf. Suchen Sie die App, die installieren möchten und klicken Sie auf *Installieren*.

![](assets/Apps%20installieren%20und%20aktualisieren.png)

## Themes in Liste anzeigen

Website Themes sind auch Odoo-Apps, werden aber standardmässig nicht angezeigt. Verwantwortlich für die Filterung ist die Aktion, welche beim Anlicken von *Apps* aufgerufen wird.

Damit auch Apps in der Theme-Liste angezeigt werden, klicken Sie erstmals auf *Apps*. Wählen Sie dann *Entwicklertools > Aktion bearbeiten*. Im Dialog entfernen Sie den Eintrag unter *Filter > Wertebereich* und speichern. Nun werden beim Aufruf von *Apps* auch Themes angezeigt.

![Apps Themes anzeigen](assets/Apps%20Themes%20anzeigen.gif)

## App aktualisieren

Wählen Sie *Apps* und entfernen Sie den Standardfilter *Apps*. Suchen Sie nach der gewünschten App, klicken Sie auf das Kontext-Menü und wählen Sie *Modul Inofrmation*.

![](assets/Apps%20Modul%20aktualisieren.png)

In der Formular-Ansicht wählen Sie *Aktualiseren*. Nun aktualisiert Odoo die App-Daten (Daten, Ansichten und Assets).

## Aktion "Modul aktualisieren" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Modul aktualisieren`\
Modell: `ir.module.module`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:
	record.button_immediate_upgrade()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Apps erscheint nun in der Auswahl *Aktion* das Menu *Modul aktualisieren*.