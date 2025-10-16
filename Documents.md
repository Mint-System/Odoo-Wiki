---
title: Dokumente
description: Sparen Sie Zeit beim Erfassen von Rechnungen, Scannen von Verträgen und bei der Freigabe von Dokumenten.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Dokumente

![icons_odoo_documents](attachments/icons_odoo_documents.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/documents>

## Bereiche

| Bereich                                      | Beschreibung                                 |
| -------------------------------------------- | -------------------------------------------- |
| [Dokumente Aktionen](Documents%20Actions.md) | Arbeitsflüsse mit Dokumenten automatisieren. |

## Erweiterungen

| Erweiterung                             | Beschreibung                               |
| --------------------------------------- | ------------------------------------------ |
| [Agreement Legal](Agreement%20Legal.md) | Verträge und Vereinbarungen dokumentieren. |

## Konfiguration

### Aktion zur Verknüpfung mit Datensatz erstellen

Navigieren Sie nach _Dokumente > Konfiguration > Aktionen_ und erstellen Sie einen neuen Eintrag. Als _Name der Aktion_ geben Sie beispielsweise _Mit Wareneingang verknüpfen_ ein. Im Feld _Zugehöriger Arbeitsbereich_ wählen Sie den Arbeitsbereich aus, wo die Aktion verfügbar ist. Im Tab _Aktionen_ wählen Sie für _Erstellen_ die Option _Verknüpfung mit Datensatz_ aus. Im Feld _Spezifisches Modell verlinkt?_ geben Sie beispielsweise _stock.picking_ ein.

Nun können Sie im gewählten Arbeitsbereich ein Dokument anzeigen und finden auf der rechten Seite die erstellt Aktion.

## Verwendung

### Dokumente auswählen

Zeigen Sie _Dokumente_ an und wählen Sie auf der linken Seite einen Arbeitsbereich und ggf. Stichwörter aus. Mit einem Klick oben rechts können Sie ein Dokument markieren und eine Aktion auf der rechten Seite auswählen.

::: tip
Um mehrere Dokumente auswählen, markieren Sie das erste Dokumente, halten <kbd>Shift</kbd> gedrückt und wählen das letzte Dokumente aus. Alle Dokumente innerhalb der Auswahl werden ebenfalls markiert.
:::

### E-Mail-Hochladen für Arbeitsbereich einrichten

Wählen Sie einen Arbeitsbereich via _Dokumente_ aus und klicken Sie auf _Teilen_. Wählen Sie die Option _Erlaubt es: Hoch- und runterladen_ und geben Sie rechts den E-Mail-Alias ein. Speichern Sie den Vorgang.

Richten Sie den E-Mail-Alias für ihre konfigurierte Odoo-Mail-Adresse ein.
