---
tags:
- HowTo
prev: ./zeiterfassung
---
# Terminal Zeiterfassung
![icons_odoo_hr_timesheet](assets/icons_odoo_hr_timesheet.png)

Ein- und auschecken mit dem Terminal Zeiterfassung.

## Verwendung

::: tip
Das Terminal Zeiterfassung ist im wesentlichen ein Mini-Computer, der die Odoo-Installation im Browser anzeigt. Mit dem eingebauten Touchscreen kann mit der Odoo-Oberfläche direkt interagiert werden.
:::

### Terminal Zeiterfassung in Betrieb nehmen

Damit Sie das Terminal Zeiterfassung verwenden können, müssen Sie es zuerst mit dem Netzwerk verbinden. Gehen Sie wie folgt vor:

* Tastatur und Maus an Terminal anschliessen
* Terminal und Stromadapter anschliessen
* Das Terminal startet automatisch und zeigt den Startbildschirm

![](assets/raspberry-pi-setup.png)

* Klicken Sie oben rechts auf das Wifi-Symbol
* Verbinden Sie das Terminal mit einem verfügbaren Router

![](assets/raspberry-wifi.png)

* Starten Sie den Browser
* Geben Sie die Adresse zu ihrer Odoo-Installation ein
* Loggen Sie sich mit einem Service-Benutzer ein

### RFID-Karte registrieren

Damit Mitarbeiter sich mit einer RFID-Chip anmelden können, muss die Chip-Nummer hinterlegt werden.

Navigieren Sie nach *Personal* und führen Sie diese Aktionen aus:
* Mitarbeiter wählen
* Bearbeiten
* Tab HR Einstellungen öffnen
* Feld *Ausweis ID* auswählen
* RFID-Chip auf den Scanner legen
* Speichern

<iframe title="vimeo-player" src="https://player.vimeo.com/video/727928057?h=8278678305" width="640" height="360" frameborder="0" allowfullscreen></iframe>

### Mit RFID-Karte an- und abmelden

Mitarbeiter können mit einem registrierten RFID-Chip ein- und auschecken.

<iframe title="vimeo-player" src="https://player.vimeo.com/video/727928034?h=e73bd9eb0f" width="640" height="360" frameborder="0" allowfullscreen></iframe>