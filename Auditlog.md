---
title: Audit Log
description: Operationen auf Daten loggen.
kind: howto
tags:
- OCA
prev: ./base
---
# Audit Log
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `auditlog`\
Repository: <https://github.com/OCA/server-tools/tree/17.0/auditlog>

## Konfiguration

### Logging für Datenmodell aktivieren

Mit dieser Erweiterung können Sie für bestimmte Datenmodelle und Operationen ein Audit Log aktivieren. Navigieren Sie nach *Einstellungen > Technisch > Audit > Regel* und erstellen Sie einen neuen Eintrag. Dazu folgendes Beispiel:

* **Name**: Kontakt Log
* **Modell**: Kontakt
* **Art**: Kurz-Protokoll

Speichern und archivieren Sie die Regel mit *Aktiviere*. Damit erscheint sie in der Liste *Regeln*. Wenn Sie jetzt einen neuen Eintrag erstellen, bearbeiten oder löschen wird diese Operation protokolliert.

### Logging für mehrere Datenmodelle aktiveren

Wenn Sie das Logging für mehrere Datenmodell aktivieren möchten, dann können Sie eine `.csv` Datei vorbereiten und importieren. Damit die Audit-Regel auf das korrekte Datenmodell referenzieren kann, müssen Sie als erstes einen Export der ausgewählten Datenmodelle machen. Navigieren Sie nach *Einstellungen > Technisch > Modelle*, suchen und filtern Sie die ausgewählten Modelle. Exportieren Sie die Daten um die externen IDs zu erhalten.

Für den Import der Audit-Regeln können Sie diese Vorlage verwenden:

| id                                  | name                                       | model_id/id                             | log_type       | state   | action_id           | log_create | log_read | log_unlink | log_write |
|-------------------------------------|--------------------------------------------|-----------------------------------------|---------------|---------|---------------------|------------|----------|------------|-----------|
| \_\_import\_\_.model\_account\_move     | sale\_subscription.model\_account\_move     | sale\_subscription.model\_account\_move | Kurz-Protokoll | Entwurf | Protokolle sichten | True       |          | True       | True      |
| \_\_import\_\_.model\_account\_account | account.model\_account\_account       | account.model\_account\_account    | Kurz-Protokoll | Entwurf | Protokolle sichten | True       |          | True       | True      |
| \_\_import\_\_.model\_account\_asset    | account\_asset.model\_account\_asset       | account\_asset.model\_account\_asset    | Kurz-Protokoll | Entwurf | Protokolle sichten | True       |          | True       | True      |

Aktivieren Sie jede Regel nach dem Import.

## Verwendung

### Log-Protokolle anzeigen

Navigieren Sie nach *Einstellungen > Technisch > Audit > Protokolle*. Hier finden Sie alle Log-Einträge, die anhand der Regeln generiert wurden. Filtern Sie die Einträge gemäss Anforderungen.

### Feld-Operationen anzeigen

Jeder Log-Eintrag ist mit ein oder mehreren Feld-Operationen verknüpft. Navigieren Sie nach *Einstellungen > Technisch > Audit > Log Lines* um alle Operationen in einer Liste anzuzeigen.