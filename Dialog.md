---
title: Dialog
description: In alle Module integrierter privater Chat und Gruppen-Chat.
tags:
- HowTo
prev: ./
---
# Dialog
![icons_odoo_mail](attachments/icons_odoo_mail.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/discuss>

## Bereiche

| Bereich                                           | Beschreibung                                 |
| ------------------------------------------------- | -------------------------------------------- |
| [Dialog Aktionen](Dialog%20Actions.md)       | Arbeitsflüsse für Dialog automatisieren. |
| [Dialog Aktivitäten](Dialog%20Activities.md) | Arbeitsplanung mit Odoo Aktivitäten.         |
| [Dialog E-Mail](Dialog%20E-Mail.md)          | E-Mail mit Odoo versenden.                   |

## Erweiterungen

| Erweiterung                                                                         | Beschreibung                                                           |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Account Move Mail Thread](Account%20Move%20Mail%20Thread.md)                       | Verhindert das versenden von Nachrichten beim Erstellen einer Buchung. |
| [Account Move Send Unsubscribe](Account%20Move%20Send%20Unsubscribe.md)             | Alle Abonnenten nach Versenden der Rechnung entfernen.                 |
| [Account Move Unsubscribe](Account%20Move%20Unsubscribe.md)                         | Alle Abonnenten nach Buchung eines Buchungssatzes entfernen.           |
| [Mail Activity Datetime](Mail%20Activity%20Datetime.md)                             | Datum mit Zeit für Fälligkeit von Aktivität.                           |
| [Mail Composer Default Template](Mail%20Composer%20Default%20Template.md)           | Standardvorlage für Mail-Dialog festlegen.                             |
| [Mail Debrand](Mail%20Debrand.md)                                                   | Odoo Promotion aus E-Mail-Vorlagen entfernen.                          |
| [Mail No Autofollow](Mail%20No%20Autofollow.md)                                     | Beim Erstellen von Nachrichten erfolgt keine automatische Abonnierung. |
| [Mail Optional Follower Notification](Mail%20Optional%20Follower%20Notification.md) | Auswahl Nachrichen an Abonnenten verschicken.                          |
| [Mail Show Follower](Mail%20Show%20Follower.md)                                     | CC-Hinweis in E-Mail-Header einfügen.                                  |
| [Mail Thread Context](Mail%20Thread%20Context.md)                                   | Automatisches Abonnieren deaktiveren.                                  |
| [Mail Tracking Mailgun](Mail%20Tracking%20Mailgun.md)                               | Mailgun Events mit Webhook in Odoo empfangen.                          |
| [Mail Unsubscribe](Mail%20Unsubscribe.md)                                           | Automatische Abmeldung der Follower vor dem Versand einer Nachricht.   |
| [Purchase Order Send Unsubscribe](Purchase%20Order%20Send%20Unsubscribe.md)         | Alle Abonnenten nach Versenden der Bestellung entfernen.               |
| [Purchase Order Unsubscribe](Purchase%20Order%20Unsubscribe.md)                     | Alle Abonnenten nach Bestätigung der Bestellung entfernen.             |
| [Sale Order Send Unsubscribe](Sale%20Order%20Send%20Unsubscribe.md)                 | Alle Abonnenten nach Versenden des Angebots entfernen.                 |
| [Sale Order Unsubscribe](Sale%20Order%20Unsubscribe.md)                             | Alle Abonnenten nach Bestätigung des Angebots entfernen.               |
| [URL Attachment](URL%20Attachment.md)                                               | Url als Dokument anhängen.                                             |

## Beschreibung

Die App Dialog ist mit allen Odoo-Dokumente integriert. Sie ermöglicht die interne und externe Kommunikation im Kontext eines Dokuments. Bis #Odoo15 hat die *Diskussion* geheissen und *Follower* waren *Abonnemente*.

## Follower

### Eigener Follower hinzufügen

Wenn Sie den Chatter zu einem Odoo-Dokumente sehen, können Sie mit einem Klick auf *Folgen* Aktivitäten auf dem Dokument abonnieren.

### Follower hinzufügen

Fügen Sie einen Follower dem Odoo-Objekt hinzu indem Sie rechts von *Folgen* auf das Icon klicken und *Follower hinzufügen* wählen.

![](attachments/Dialog%20Follower%20hinzufügen.gif)

### Follower bearbeiten

Wählen Sie einen Follower auf dem Odoo-Dokument aus, indem Sie rechts von *Folgen* auf das Icon klicken und ein Follower auswählen.

### Follower entfernen

Entfernen Sie einen Follower vom Odoo-Objekt indem Sie rechts von *Folgen* auf das Icon klicken.

![](attachments/Dialog%20Follower%20entfernen.gif)

### Alle Follower löschen

Wenn Sie oder ein anderer Benutzer einem Dokument folgen, speichert das Odoo in einer technischen Tabelle. Diese Einträge können Sie via *Einstellungen > Technisch > Dialog > Abonnenten* löschen. Filtern Sie die Einträge nach einem bestimmten Modellname. Dazu ein Beispiel mit dem Verkaufsaufträgen (`sale.order`):

![](attachments/Dialog%20Follower%20löschen.gif)

::: warning
Das löschen von Follower kann die Kommunikation in der App Dialog beeinflussen.
:::

## Nachrichten

### Nachricht verschicken

Im Chatter des Dokument wählen Sie den Tab *Sende Nachricht*. Geben Sie eine Nachricht eine und wählen Sie *Senden* um die Nachricht an den Empfänger zu schicken.

::: warning
Die Empfänger sind alle Follower des Dokuments.
:::

### Nachricht aus E-Mail-Vorlage verschicken

Im Chatter des Dokument wählen Sie den Tab *Sende Nachricht*. Klicken Sie auf das Icon unten rechts im Eingabe-Fenster um den Dialog zu vergrössern.

![](attachments/Dialog%20Extend%20Editor.png)

Wählen Sie im Feld *Benutze Vorlage* ein E-Mail-Vorlage aus. Odoo füllt die Platzhalter aus und Sie können die Nachricht mit *Senden* an den Empfänger verschicken.

::: warning
Die Eingaben in *Empfänger* werden mit den Follower des Dokuments kumuliert.
:::

### Benachrichtigungen anzeigen

Wenn Odoo Nachrichten versendet, werden abonnierte Benutzer benachrichtigt. Diese Benachrichtigungen können via *Einstellungen > Technisch > Benachrichtigungen* angezeigt werden.

## Subtypen

### Subtypen verwalten

Navigieren Sie nach *Einstellungen > Technisch > Subtypen* und zeigen Sie beispielsweise den Subtyp *Bestätigt* an.

![](attachments/Dialog%20Subtyp%20Bestätigt.png)

Konfigurieren Sie den Subtypen gemäss Anforderungen:

* **Standard**: Wird beim Abonnieren automatisch ausgewählt.
* **Nur interne**: Nachrichten nur für interne Benutzer sichtbar.
* **Versteckt**: Subtyp wird auf Abonnement-Formular ausgeblendet.

### Subtyp auf Abonnement aktivieren

Zeigen Sie ein Odoo Dokument an und bearbeiten Sie ein Abonnement.

![](attachments/Dialog%20Follower%20bearbeiten.png)

Wählen Sie die Subtypen aus, welche für das Abonnement aktiv sein sollen.

### Nachrichten nur an interne Benutzer schicken

Benutzer werden standardmässig mit dem Subtyp *Diskussion* abonniert. Damit Nachrichten ohne expliziten Emfänger nur an interne Kontakte verschickt werden können, müssen Sie diesen Subtyp anpassen. Navigieren Sie nach *Einstellungen > Technisch > Subtypen* und zeigen Sie den Subtypen *Diskussion* an. Aktivieren Sie die Option *Nur interne*.

::: tip
Um eine Nachricht explizit an externe Benutzer zu schicken, wählen Sie beim Nachrichten versenden eine E-Mail-Vorlage aus oder fügen den Empfänger manuell hinzu.
:::

## Kanäle

### Kanal löschen

Um einen Kanal zu löschen navigieren Sie nach *Einstellungen > Technisch > Kanäle*, wechseln in die Listenansicht und wählen die Kanäle die gelöscht werden sollen. Klicken Sie auf *Aktion > Löschen*.

::: warning
Alle mit dem Kanal verknüpften Nachrichten werden mit dieser Aktion gelöscht.
:::

## Auswertung

### Versendete Nachrichten betrachten

Nachrichten, die von Odoo versendet werden, werden zentral gespeichert. Im Entwicklermodus sehen Sie diese unter *Einstellungen > Technisch > E-Mail > Nachrichten*. Hier sehen Sie alle versendeten Nachrichten aufgelistet. In der Detailansicht sieht man den *Nachrichtentext* und die Metadaten.

![](attachments/Dialog%20Detailansicht.png)

Jede versendete Nachricht erhält eine eindeutige *Nachrichten-ID*.

![](attachments/Dialog%20Nachrichten-ID.png)

Wurde die Nachricht als Mail versendet, können Sie im Tab *Empfänger* die Kontakte sehen.

![](attachments/Dialog%20Empfänger.png)