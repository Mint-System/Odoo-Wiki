---
title: Report QWeb PDF Watermark
description: Wasserzeichen auf PDF-Berichte hinzufügen.
kind: howto
partner: OCA
prev: ./settings
---

# Report QWeb PDF Watermark

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `report_qweb_pdf_watermark`\
Repository: <https://github.com/OCA/reporting-engine/tree/17.0/report_qweb_pdf_watermark>

## Konfiguration

### Wasserzeichen für Unternehmen einrichten

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Unternehmen_ und wählen Sie ein Unternehmen. Wählen Sie beim Feld _Wasserzeichen_ die Aktion _Datei Hochladen_ um eine PDF-Datei mit Wasserzeichen hochzuladen.

::: tip
Die PDF-Datei mit Wasserzeichen, muss dasselbe Papierformat der generierten Berichte haben. Dazu ein Beispiel: [sample.pdf](https://github.com/Mint-System/Odoo-Wiki/raw/master/assets/sample.pdf)[](attachments/sample.pdf)
:::

### Wasserzeichen von Unternehmen für Bericht aktivieren

Navigieren Sie nach _Einstellungen > Technisch > Aktionen > Berichte_ und zeigen Sie einen Bericht an. Im Tab _Erweiterte Eigenschaften_ aktivieren Sie die Option _Use Company Watermark?_

### Wasserzeichen für Bericht einrichten

Navigieren Sie nach _Einstellungen > Technisch > Aktionen > Berichte_ und zeigen Sie einen Bericht an. Im Tab _Erweiterte Eigenschaften_ wählen Sie beim Feld _Wasserzeichen_ die Aktion _Datei Hochladen_.

## Verwendung

### Beispiel-Bericht mit Wasserzeichen generieren

Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer_ und öffnen Sie einen Benutzer. Wählen Sie _Aktionen > Waktermark Demo report_ um einen Beispiel-Bericht zu erstellen.
