---
title: PLM
description: Management des Produktlebenszyklus für moderne Firmen.
kind: howto
prev: ./
partner: Odoo S.A.
---

# PLM

![icons_odoo_mrp_plm](attachments/icons_odoo_mrp_plm.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/plm>

## Engeering Change Order

### ECO-Typ und Stufen erfassen

Um einen ECO-Type zu erfassen navigieren Sie nach _PLM > Konfiguration > ECO-Typen_. Mit einem klick auf _+ Anlegen_ erstellen Sie einen neuen Typen.

Damit die Prozess-Stufen beim Auswahl des Types dargestellt wird, navigieren Sie nach _Konfiguration > ECO-Stufen_ und klicken auf _+ Anlegen_.

![](attachments/PLM%20ECO-Stufe%20erfassen.png)

Wählen Sie den Typen aus und legen die Optionen fest.

- Anwendung der Änderungen zulassen: Die Änderungen darf aktiviert werden.
- Endstufe: Die Änderung ist abgeschlossen.
- Genehmigung: Odoo-Benutzer festlegen, der die Änderungen auf der Stufe genehmigen muss.

### Technischer Änderungsauftrag erfassen

Klicken Sie auf _PLM > Änderungen > + Anlegen_.

![](attachments/PLM%20Änderungsauftrag%20erfassen.gif)

Wählen Sie _Neue Revision starten_.
