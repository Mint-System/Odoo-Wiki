---
tags:
- HowTo
---
# Diskussion
![icons_odoo_mail](assets/icons_odoo_mail.png)

In alle Module integrierter privater Chat und Gruppen-Chat.

## Ausgehender Mail-Server konfigurieren

Damit Odoo Mail verschicken kann, muss ein ausgehender Mail-Server konfiguriert werden.

Unter *Einstellungen > Diskussion > Externe E-Mail-Server* aktivieren sie das Feature, wenn noch nicht erledigt und wählen *Ausgehender Mail-Server*. Klicken sie auf *Anlegen* um eine Verbindung zu einem Mail-Account einzurichten.

::: tip
Für Vorgänge wie das Zurücksetzen eines Passworts oder Versand einer Einladung, versendet Odoo die E-Mail im Namen des Unternehmens und verwendet dazu die E-Mail-Adresse aus den Unternehmenseinstellungen.
:::

## Eingehender Mail-Server konfigurieren
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Damit Odoo Mails empfanen und verarbeiten kann, muss ein eingehender Mail-Server konfiguriert werden.

Unter *Einstellungen > Diskussion > Externe E-Mail-Server* aktivieren sie das Feature, wenn noch nicht erledigt und wählen *Eingehender Mail-Server*. Klicken sie auf *Anlegen* um eine Verbindung zu einem Mail-Account einzurichten.

## Testnachrichten verschicken
Aufgabenträger: [Administrator](Rollen.md#Administrator)

Um sicherzustellen, dass Odoo Nachrichten am richtigen Ort platziert, kann man als Administrator des Systems Testnachrichten erstellen und verschicken.

Öffnen sie *Einstellungen > Diskussion > Externe E-Mail-Server > Eintrag auswählen > Aktion > Nachrichten*. Mit *Anlegen* könne sie nun ein Nachricht erfassen und verschicken.