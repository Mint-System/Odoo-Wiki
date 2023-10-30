---
title: Base DB Anonymization
description: Inhalt von ausgewählten Datenbank-Felder anonmyisieren.
tags:
- HowTo
- Drittanbieter
prev: ./settings-login
---
# Base DB Anonymization
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `base_db_anonymization`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/16.0/base_db_anonymization>

## Konfiguration

### Anonymisierte Felder konfigurieren

Navigieren Sie nach *Einstellungen > Technisch > Fields Anonymize*. Erstellen und verwalten Sie hier die Anonymisierungs-Einträge.

* **Field**: Ausgewähltes Feld, dessen Inhalt anonymisiert werden soll
* **Anonymize Strategy**: Methode um Feldinhalt zu anonymisieren
* **Domain**: Filter zur Auswahl der Einträge
* **Output New Value**: Aktivieren wenn neuer Feldinhalt bei Durchführung von Anonymisierung in Server-Log ausgegeben werden soll
* **Is Anonymized**: Ist aktiviert, wenn Anonymisierung wurde für dieses Feld durchgeführt wurde

::: warning
Wenn das Feld **Is Anonymized** gesetzt ist, wird der Anonymisierung-Eintrag ignoriert.
:::

## Verwendung

### Datenbank-Felder anonymisieren

Navigieren Sie nach *Einstellungen > Technisch > Fields Anonymize* und markieren Sie die Anonymisierungs-Einträge, die Sie ausführen möchten. Wählen Sie die Aktion *Anonymize Records*.

