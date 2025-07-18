---
title: Cancel Manufacturing Order
description: Fertigungsauftrag rückgängig machen.
kind: howto
tags:
- Mint-System
prev: ./manufacture
---
# Cancel Manufacturing Order
![](attachments/icons_odoo_eq.png)

{{ $frontmatter.description }}

Technischer Name: `eq_cancel_mrp_orders`\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/14.0/eq_cancel_mrp_orders>\
Odoo App Store: <https://gitlab.com/mint-system/odoo-app-cancel-manufacturing-order>

## Verwendung

### Berechtigung festlegen

In den Benutzereinstellungen aktivieren Sie die Option *Cancel Manufacturing Orders*. Benutzer mit dieser Berechtigung können Fertigungsaufträge abbrechen.

![](attachments/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Berechtigung.png)

### Fertigungsauftrag zurücksetzen

Damit ein Fertigungsauftrag zurückgesetzt werden kann muss sichergestellt werden, dass die Produkte an Lager sind.

![](attachments/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Menge.png)

Der Fertigungsauftrag muss im Zustand *Erledigt* sein. Dann kann man über den Knopf *Cancel* den Fertigungsauftrag abbrechen.

![](attachments/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Knopf.png)

 Entsprechend werden die konsumierten Materialien angepasst.

![](attachments/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Menge%20aktuaisiert.png)

Beim Klick auf *Cancel* werden die Lagerbewegungen zurückgesetzt und der Fertigungsaufrag wird abgebrochen.

Im Status *Abgebrochen* kann der Fertigungsauftrag in den Entwurfs-Status gesetzt werden.

![](attachments/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Zurücksetzen.png)

Nach Abbruch des Fertigungsauftrags werden die Bestände der konsumierten Materialien angepasst.

![](attachments/Fertigung%20Fertigungsauftrag%20Abbrechen%20Menge%20konsumiert.png)

Setzt man den Fertigungsauftrag in den Entwurfsstatus, werden alle Lagerbewegungen und Arbeitsaufträge abgebrochen.

![](attachments/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Entwurf%20erstellen.png)

![](attachments/Odoo%20App%20Fertigung%20Fertigungsauftrag%20Abbrechen%20Bereit.png)
