---
tags:
- HowTo
prev: ./
---
## Diskussion
![icons_odoo_mail](assets/icons_odoo_mail.png)

In alle Module integrierter privater Chat und Gruppen-Chat.

## Bereiche

| Bereich                                                         | Beschreibung                                                           |
| --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Diskussion E-Mail](Diskussion%20E-Mail.md)                     | E-Mail mit Odoo versenden.                                             |

## Erweiterungen

| Erweiterung                                                     | Beschreibung                                                           |
| --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [URL Attachment](URL%20Attachment.md)                           | Url als Dokument anhängen.                                             |
| [Mail Thread Context](Mail%20Thread%20Context.md)               | Automatisches Abonnieren deaktiveren.                                  |
| [Account Move Mail Thread](Account%20Move%20Mail%20Thread.md)   | Verhindert das versenden von Nachrichten beim Erstellen einer Buchung. |
| [Sale Order Unsubscribe](Sale%20Order%20Unsubscribe.md)         | Alle Abonnenten nach Bestätigung des Angebots entfernen.               |
| [Purchase Order Unsubscribe](Purchase%20Order%20Unsubscribe.md) | Alle Abonnenten nach Bestätigung der Bestellung entfernen.             |
| [Account Move Unsubscribe](Account%20Move%20Unsubscribe.md)     | Alle Abonnenten nach Buchung eines Buchungssatzes entfernen.           |

## Versendete Nachrichten betrachten

Nachrichten, die von Odoo versendet werden, werden zentral gespeichert. Im Entwicklermodus sehen Sie diese unter *Einstellungen > Technisch > E-Mail > Nachrichten*. Hier sehen Sie alle versendeten Nachrichten aufgelistet. In der Detailansicht sieht man den *Nachrichtentext* und die Metadaten.

![](assets/Diskussion%20Detailansicht.png)

Jede versendete Nachricht erhält eine eindeutige *Nachrichten-ID*.

![](assets/Diskussion%20Nachrichten-ID.png)

Wurde die Nachricht als Mail versendet, können Sie im Tab *Empfänger* die Kontakte sehen.

![](assets/Diskussion%20Empfänger.png)

## Nachrichten abrufen

Führen Sie folgendes aus  *Einstellungen > Diskussion > Externe E-Mail-Server > Eintrag auswählen*. Führen Sie die Aktion *Nachrichten abrufen* aus. Im Feld *Letztes Abholdatum* sehen ob die E-Mails abgerufen werden konnten.

## Abonnent hinzufügen

Für Sie einen Abonnent dem Odoo-Objekt hinzu indem Sie rechts von *Abonnieren* auf das Icon klicken und *Followers hinzufügen* wählen.

![Diskussion Abonnent hinzufügen](assets/Diskussion%20Abonnent%20hinzufügen.gif)

## Abonnent entfernen

Entfernen Sie einen Abonnent vom Odoo-Objekt indem Sie rechts von *Abonnieren* auf das Icon klicken.

![Diskussion Abonnent entfernen](assets/Diskussion%20Abonnent%20entfernen.gif)

## Benachrichtigungen anzeigen

Wenn Odoo Nachrichten versendet, werden abonnierte Benutzer benachrichtigt. Diese Benachrichtigungen können via *Einstellungen > Technisch > Benachrichtigungen* angezeigt werden.

## Nicht versende E-Mails anzeigen

Wenn Sie den Entwicklermodus eingeschaltet haben, finden Sie unter *Einstellungen > Technisch > E-Mails* eine Liste der nicht versendeten E-Mails. Odoo registiert wenn die E-Mail-Zustellung nicht erfolgreich war.

![](assets/Diskussion%20nicht%20versendete%20E-Mails.png)