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

## Versendete Nachrichten betrachten

Nachrichten, die von Odoo versendet werden, werden zentral gespeichert. Im Entwicklermodus sehen sie diese unter *Einstellungen > Technisch > E-Mail > Nachrichten*. Hier sehen sie alle versendeten Nachrichten aufgelistet. In der Detailansicht sieht man den *Nachrichtentext* und die Metadaten.

![](assets/Diskussion%20Detailansicht.png)

Jede versendete Nachricht erhält eine eindeutige *Nachrichten-ID*.

![](assets/Diskussion%20Nachrichten-ID.png)

Wurde die Nachricht als Mail versendet, können sie im Tab *Empfänger* die Kontakte sehen.

![](assets/Diskussion%20Empfänger.png)

## Nachrichten abrufen

Führen sie folgendes aus  *Einstellungen > Diskussion > Externe E-Mail-Server > Eintrag auswählen*. Führen sie die Aktion *Nachrichten abrufen* aus. Im Feld *Letztes Abholdatum* sehen ob die E-Mails abgerufen werden konnten.