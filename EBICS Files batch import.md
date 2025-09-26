---
title: EBICS Files batch import
description: EBICS-Dateien automatisch herunterladen.
kind: howto
partner: Thirdparty
prev: ./accounting
---
# EBICS Files batch import
![](attachments/icons_odoo_ebics.png)

{{ $frontmatter.description }}

Technischer Name: `account_ebics_batch`\
Website: <https://apps.odoo.com/apps/modules/18.0/account_ebics_batch>\
Repository: <https://github.com/Noviat/account_ebics/tree/18.0/account_ebics_batch>

## Konfiguration

### Automatischer Import aktivieren

Die Erweiterung installiert eine geplante Aktion als Vorlage. Zeigen Sie die geplante Aktion *EBICS Batch Import* unter *Einstellungen > Technisch > Geplante Aktionen* an. Aktivieren Sie die Aktion und legen Sie als *Zeiplaner-Benutzer* einen Benutzer fest, der Zugriff auf die EBICS-Konfigurationen hat.

Kopieren Sie den folgenden Code in das Feld *Python-Code*: 

```python
ebics_config_ids = 1
date_from = datetime.datetime.today() - datetime.timedelta(days=1)
date_to = datetime.datetime.today() - datetime.timedelta(days=1)
model._batch_import(ebics_config_ids=ebics_config_ids, date_from=date_from , date_to=date_to)
```

Die Aktion lädt nun jeden Tag die EBIC-Dateien des Vortags herunter und verarbeitet diese.

## Verwendung

### Import-Log anzeigen

Zeigen Sie die Ansicht *Finanzen > EBICS Processing > EBICS Batch Import Logs* an. Für jeden automatischen Import-Vorgang wird hier ein Log-Eintrag erstellt.
