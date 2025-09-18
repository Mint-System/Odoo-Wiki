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

Um einen ECO-Type zu erfassen navigieren Sie nach *PLM > Konfiguration > ECO-Typen*. Mit einem klick auf *+ Anlegen* erstellen Sie einen neuen Typen.

Damit die Prozess-Stufen beim Auswahl des Types dargestellt wird, navigieren Sie nach *Konfiguration > ECO-Stufen* und klicken auf *+ Anlegen*.

![](attachments/PLM%20ECO-Stufe%20erfassen.png)

Wählen Sie den Typen aus und legen die Optionen fest.

* Anwendung der Änderungen zulassen: Die Änderungen darf aktiviert werden.
* Endstufe: Die Änderung ist abgeschlossen.
* Genehmigung: Odoo-Benutzer festlegen, der die Änderungen auf der Stufe genehmigen muss.

### Technischer Änderungsauftrag erfassen

Klicken Sie auf *PLM > Änderungen > + Anlegen*.

![](attachments/PLM%20Änderungsauftrag%20erfassen.gif)

Wählen Sie *Neue Revision starten*.