---
tags:
- HowTo
- OCA
prev: ./einstellungen
---
# Audit Log
![icon_oca_app](assets/icon_oca_app.png)

Operationen auf Daten loggen.

Technischer Name: `auditlog`\
Repository: <https://github.com/OCA/server-tools/tree/15.0/auditlog>

## Konfiguration

### Logging für Datenmodell aktivieren

Mit dieser Erweiterung können Sie für bestimmte Datenmodelle und Operationen ein Audit Log aktivieren. Navigieren Sie nach *Einstellungen > Technisch > Audit > Regel* und erstellen Sie einen neuen Eintrag, dazu ein Bespiel

* **Name**: Kontakt Log\
* **Modell**: Kontakt\
* **Art**: Kurz-Protokoll

Und aktivieren Sie die Regel mit *Aktiviere*. Wenn Sie jetzt einen neuen Eintrag erstellen, bearbeiten oder löschen wird diese Operation protokolliert.

## Verwendung

### Log-Protokolle anzeigen

Navigieren Sie nach *Einstellungen > Technisch > Audit > Protokolle*. Hier finden Sie alle Log-Einträge, die anhand der Regeln generiert wurden. Filtern Sie die Einträge gemäss Anforderungen.