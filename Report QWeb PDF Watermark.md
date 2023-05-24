---
title: Report QWeb PDF Watermark
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- OCA
prev: ./settings
---
# Report QWeb PDF Watermark
![icon_oca_app](assets/icon_oca_app.png)

Wasserzeichen auf PDF-Berichte hinzufügen.

Technischer Name: `report_qweb_pdf_watermark`\
Repository: <https://github.com/OCA/reporting-engine/tree/15.0/report_qweb_pdf_watermark>

## Konfiguration

### Wasserzeichen für Unternehmen einrichten

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Unternehmen* und wählen Sie ein Unternehmen. Wählen Sie beim Feld *Wasserzeichen* die Aktion *Datei Hochladen* um eine PDF-Datei mit Wasserzeichen hochzuladen.

::: tip
Die PDF-Datei mit Wasserzeichen, muss dasselbe Papierformat der generierten Berichte haben. Dazu ein Beispiel: [sample.pdf](https://github.com/Mint-System/Odoo-Wiki/raw/master/assets/sample.pdf)[](assets/sample.pdf)
:::

### Wasserzeichen von Unternehmen für Bericht aktivieren

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Berichte* und zeigen Sie einen Bericht an. Im Tab *Erweiterte Eigenschaften* aktivieren Sie die Option *Use Company Watermark?*

### Wasserzeichen für Bericht einrichten

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Berichte* und zeigen Sie einen Bericht an. Im Tab *Erweiterte Eigenschaften* wählen Sie beim Feld *Wasserzeichen* die Aktion *Datei Hochladen*.

## Verwendung

### Beispiel-Bericht mit Wasserzeichen generieren

Navigieren Sie nach *Einstellunge > Benutzer und Unternehmen > Benutzer* und öffnen Sie einen Benutzer. Wählen Sie *Aktion > Waktermark Demo report* um einen Beispiel-Bericht zu erstellen.
