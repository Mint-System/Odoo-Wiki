---
tags:
- HowTo
prev: ./
---
## Kalender
![icons_odoo_calendar](assets/icons_odoo_calendar.png)

Termine Team- und Anwendungs-übergreifend organisieren.

## Terminserie erstellen

Auf jedem Odoo-Eintrag können Sie als Aktivität einen Termin erstellen. Dieser Termin kann auch eine Serie sein. Hier ein Beispiel wie man auf einem Kontakt-Eintrag eine Terminserie erstellt:

![Kalender Terminserie](assets/Kalender%20Terminserie.gif)

## Versand Einladungen verhindern

Standardmässig versendet Odoo beim Hinzufügen von Teilnehmer an einen Termin an jeden Teilnehmer eine Einladung. Dieses Verhalten kann mit einer Einstellung in den Systemparameter verhindert werden.

Öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und erstellen Sie einen Eintrag mit Schlüssel `calendar.block_mail` und Wert `True` an.

::: warning
Werden Termine beispielsweise mit dem Google-Kalender synchronisiert, ist mit dieser Einstellung nicht ausgeschlossen, dass Google eine Einladungsmail verschickt.
:::