---
title: Dokumente
description: Sparen Sie Zeit beim Erfassen von Rechnungen, Scannen von Verträgen und bei der Freigabe von Dokumenten.
tags:
- HowTo
prev: ./
---
# Dokumente
![icons_odoo_documents](attachments/icons_odoo_documents.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/documents>

## Bereiche

| Bereich                                       | Beschreibung |
| -------------------------------------------- | ------------ |
| [Dokumente Aktionen](Documents%20Actions.md) | Arbeitsflüsse mit Dokumenten automatisieren.             |

## Erweiterungen

| Erweiterung   | Beschreibung                               |
| ------------- | ------------------------------------------ |
| [Agreement Legal](Agreement%20Legal.md) | Verträge und Vereinbarungen dokumentieren. |

## Konfiguration

### Aktion zur Verknüpfung mit Datensatz erstellen

Navigieren Sie nach *Dokumente > Konfiguration > Aktionen* und erstellen Sie einen neuen Eintrag. Als *Name der Aktion* geben Sie beispielsweise *Mit Wareneingang verknüpfen* ein. Im Feld *Zugehöriger Arbeitsbereich* wählen Sie den Arbeitsbereich aus, wo die Aktion verfügbar ist. Im Tab *Aktionen* wählen Sie für *Erstellen* die Option *Verknüpfung mit Datensatz* aus. Im Feld *Spezifisches Modell verlinkt?* geben Sie beispielsweise *stock.picking* ein.

Nun können Sie im gewählten Arbeitsbereich ein Dokument anzeigen und finden auf der rechten Seite die erstellt Aktion.

## Verwendung

### Dokumente auswählen

Zeigen Sie *Dokumente* an und wählen Sie auf der linken Seite einen Arbeitsbereich und ggf. Stichwörter aus. Mit einem Klick oben rechts können Sie ein Dokument markieren und eine Aktion auf der rechten Seite auswählen.

::: tip
Um mehrere Dokumente auswählen, markieren Sie das erste Dokumente, halten <kbd>Shift</kbd> gedrückt und wählen das letzte Dokumente aus. Alle Dokumente innerhalb der Auswahl werden ebenfalls markiert.
:::

### E-Mail-Hochladen für Arbeitsbereich einrichten

Wählen Sie einen Arbeitsbereich via *Dokumente* aus und klicken Sie auf *Teilen*. Wählen Sie die Option *Erlaubt es: Hoch- und runterladen* und geben Sie rechts den E-Mail-Alias ein. Speichern Sie den Vorgang.

Richten Sie den E-Mail-Alias für ihre konfigurierte Odoo-Mail-Adresse ein.
