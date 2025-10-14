---
title: Entwicklung Performance
description: Performance-Probleme analysieren.
kind: howto
prev: ./development
---

# Entwicklung Performance

![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Profiling

### Profiling aktivieren

Klicken Sie auf _Entwickler-Tools > Profiling aktiveren_. Im Dialog wählen Sie für _Profiling aktivieren für_ eine Zeitdauer aus und bestätigen mit _Profiling Aktivieren_.

Wählen Sie nochmals _Entwickler-Tools > Profiling aktiveren_ und nun wird das Profiling aktiv.

![](attachments/Entwicklung%20Performance%20Profiling%20Aktiv.png)

Odoo zeichnet nun alle Methoden- und Daten-Zugriffe auf. Sie können wie gewohnt die Odoo-Aktione ausführen, die Sie analysieren möchten.

### Profiling beenden

Wenn das Profiling aktiv ist, klicken Sie auf _Entwickler-Tools > Profiling aktiveren_ um es zu beenden.

### Profiling-Daten anzeigen

Klicken Sie rechts von _Entwickler-Tools > Profiling aktiveren_ auf das Icon. Sie sehen nun die von Odoo gesammelten Profiling-Daten gruppiert nach Session. Zu jedem Zugriff wird die Dauer gespeichert.
