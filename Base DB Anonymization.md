---
title: Base DB Anonymization
description: Inhalt von ausgewählten Datenbank-Felder anonmyisieren.
kind: howto
partner: Mint-System
prev: ./database
---
# Base DB Anonymization
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `base_db_anonymization`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/18.0/base_db_anonymization>

## Konfiguration

### Anonymisierte Felder konfigurieren

Navigieren Sie nach *Einstellungen > Technisch > Fields Anonymize*. Erstellen und verwalten Sie hier die Anonymisierungs-Einträge.

* **Model**: Auswahl Datenbankmodell um Auswahl Felder zu filtern
* **Field**: Ausgewähltes Feld, dessen Inhalt anonymisiert werden soll
* **Anonymize Strategy**: Methode um Feldinhalt zu anonymisieren
* **Domain**: Filter zur Auswahl der Datenbank-Einträge
* **Output New Value**: Aktivieren falls der neue Feldinhalt bei der Anonymisierung im Server-Log ausgegeben werden soll
* **Is Anonymized**: Ist aktiviert wenn Anonymisierung für dieses Feld durchgeführt wurde

::: warning
Wenn das Feld **Is Anonymized** gesetzt ist, wird der Anonymisierungs-Eintrag ignoriert.
:::

## Verwendung

### Datenbank-Felder anonymisieren

Navigieren Sie nach *Einstellungen > Technisch > Fields Anonymize* und markieren Sie die Anonymisierungs-Einträge, die Sie ausführen möchten. Wählen Sie die Aktion *Anonymize Records*.
