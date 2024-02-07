---
title: Audit Log
description: Operationen auf Daten loggen.
tags:
- HowTo
- OCA
prev: ./base
---
# Audit Log
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `auditlog`\
Repository: <https://github.com/OCA/server-tools/tree/15.0/auditlog>

## Konfiguration

### Logging für Datenmodell aktivieren

Mit dieser Erweiterung können Sie für bestimmte Datenmodelle und Operationen ein Audit Log aktivieren. Navigieren Sie nach *Einstellungen > Technisch > Audit > Regel* und erstellen Sie einen neuen Eintrag. Dazu folgendes Beispiel:

* **Name**: Kontakt Log
* **Modell**: Kontakt
* **Art**: Kurz-Protokoll

Speichern und archivieren Sie die Regel mit *Aktiviere*. Damit erscheint sie in der Liste *Regeln*. Wenn Sie jetzt einen neuen Eintrag erstellen, bearbeiten oder löschen wird diese Operation protokolliert.

## Verwendung

### Log-Protokolle anzeigen

Navigieren Sie nach *Einstellungen > Technisch > Audit > Protokolle*. Hier finden Sie alle Log-Einträge, die anhand der Regeln generiert wurden. Filtern Sie die Einträge gemäss Anforderungen.

### Feld-Operationen anzeigen

Jeder Log-Eintrag ist mit ein oder mehreren Feld-Operationen verknüpft. Navigieren Sie nach *Einstellungen > Technisch > Audit > Log Lines* um alle Operationen in einer Liste anzuzeigen. 