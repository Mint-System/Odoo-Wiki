---
tags:
- HowTo
---
[🔗 Home](/)
# Apps
![icons_odoo_modules](assets/icons_odoo_modules.png)

Neue Apps installieren und aktualisieren.

| Erweiterung                                                 | Beschreibung                                |
| ----------------------------------------------------------- | ------------------------------------------- |
| [Product Name Sequence](Product%20Name%20Sequence.md)           | Generate product names based on a sequence. |
| [Product Barcode Generator](Product%20Barcode%20Generator.md)   | Autogenerate EAN13 product barcodes.        |
| [Cancel Manufacturing Order](Cancel%20Manufacturing%20Order.md) | Fertigungsauftrag rückgängig machen.        |
| [Blanket Sale Order](Blanket%20Sale%20Order.md)                 | Rahmenverträge für Verkäufe erstellen.      |

## Liste der Apps aktualisieren

Um die Liste der verfügbaren Apps zu aktualisieren, wechseln sie in den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren) und öffnen *Apps*. Im oberen Menu klicken sie auf *Update der Apps*. Wenn der Vorgang abgeschlossen ist, können sie die neuen Apps in der Liste suchen.

![](assets/Apps%20Liste%20aktualisieren.png)

## App installieren

**Was ist der unterschied zwischen Aktualisieren und Installieren?**

![](assets/Apps%20installieren%20und%20aktualisieren.png)

> Für die Enterprise Apps stellen wir den Code der ausschliesslich lizenzierten Apps zur Verfügung. Wenn die Option “Installiere” zur Verfügung steht, kann die App installiert werden. Wenn “Aktualisieren” steht muss die App zuerst gekauft werden, der Code muss bereitgestellt werden und nur dann kann man diese installieren.

### Themes in Liste anzeigen

Website Themes sind auch Odoo-Apps, werden aber standardmässig nicht angezeigt. Verwantwortlich für die Filterung ist die Aktion, welche beim Anlicken von *Apps* aufgerufen wird.

Damit auch Apps in der Theme-Liste angezeigt werden, klicken sie erstmals auf *Apps*. Wählen sie dann *Entwicklertools > Aktion bearbeiten*. Im Dialog entfernen sie den Eintrag unter *Filter > Wertebereich* und speichern. Nun werden beim Aufruf von *Apps* auch Themes angezeigt.

![Apps Themes anzeigen](assets/Apps%20Themes%20anzeigen.gif)

