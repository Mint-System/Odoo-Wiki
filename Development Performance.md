---
title: Entwicklung Performance
description: Performance-Probleme analysieren.
tags:
- HowTo
prev: ./development
---
# Entwicklung Performance
![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Profiling

### Profiling aktivieren

Klicken Sie auf *Entwickler-Tools > Profiling aktiveren*. Im Dialog wählen Sie für *Profiling aktivieren für* eine Zeitdauer aus und bestätigen mit *Profiling Aktivieren*.

Wählen Sie nochmals *Entwickler-Tools > Profiling aktiveren* und nun wird das Profiling aktiv. 

![](attachments/Entwicklung%20Performance%20Profiling%20Aktiv.png)

Odoo zeichnet nun alle Methoden- und Daten-Zugriffe auf. Sie können wie gewohnt die Odoo-Aktione ausführen, die Sie analysieren möchten.

### Profiling beenden

Wenn das Profiling aktiv ist, klicken Sie auf *Entwickler-Tools > Profiling aktiveren* um es zu beenden.

### Profiling-Daten anzeigen

Klicken Sie rechts von *Entwickler-Tools > Profiling aktiveren* auf das Icon. Sie sehen nun die von Odoo gesammelten Profiling-Daten gruppiert nach Session. Zu jedem Zugriff wird die Dauer gespeichert.