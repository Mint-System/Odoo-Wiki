---
tags:
- HowTo
---
[🔗 Diskussion](Diskussion.md)
# Diskussion E-Mail
![icons_odoo_mail](assets/icons_odoo_mail.png)

E-Mail mit Odoo versenden.

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

## Mail an Kontakt senden

Mit dem Odoo-Chatter können auf jedem Geschäftsobjekt interne Notizen hinzugefügt werden, aber auch Mails für Externe.

Zum versenden einer Nachricht an einen Kontakt wählen sie *Kontakte > Kontakte* und navigieren zum *Chatter*. Wählen sie *Sende Nachricht* und vergrössern sie das Eingabefeld. Wählen sie die Empfänger, den Betreff, geben sie ihre Nachricht ein und klicken sie auf *Senden.*

![Diskussion Nachricht versenden](assets/Diskussion%20Nachricht%20versenden.gif)

## Mail-Versand prüfen

Wenn man eine Odoo-Nachricht als E-Mail versendet, wird die Nachricht im Chatter geloggt. Man findet dort das Mail-Icon.

![](assets/Diskussion%20Mail%20Fehlschlag.png)

Ist das Mail-Icon rot markiert (und nicht weiss), konnte die E-Mail nicht versendet werden. Klickt man auf das Icon erfährt wieso der Mail-Versand nicht funktioniert hat.

![Diskussion Mail Fehlschlag Beispiel](assets/Diskussion%20Mail%20Fehlschlag%20Beispiel.png)