---
title: Discuss
description: In alle Module integrierter privater Chat und Gruppen-Chat.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Discuss

![icons_odoo_mail](attachments/icons_odoo_mail.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/discuss>

## Bereiche

| Bereich                                               | Beschreibung                                 |
| ----------------------------------------------------- | -------------------------------------------- |
| [Discuss Aktionen](Discuss%20Actions.md)                | Arbeitsflüsse für Dialog automatisieren.     |
| [Discuss Aktivitäten](Discuss%20Activities.md)          | Arbeitsplanung mit Odoo Aktivitäten.         |
| [Discuss Datenmanagement](Discuss%20Datenmanagement.md) | Daten zu Dialog exportieren und importieren. |
| [Discuss E-Mail](Discuss%20E-Mail.md)                   | E-Mail mit Odoo versenden.                   |

## Erweiterungen

| Erweiterung                                                                         | Beschreibung                                                             |
| ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [Account Move Mail Thread](Account%20Move%20Mail%20Thread.md)                       | Verhindert das versenden von Nachrichten beim Erstellen einer Buchung.   |
| [Account Move Send Unsubscribe](Account%20Move%20Send%20Unsubscribe.md)             | Alle Abonnenten nach Versenden der Rechnung entfernen.                   |
| [Account Move Unsubscribe](Account%20Move%20Unsubscribe.md)                         | Alle Abonnenten nach Buchung eines Buchungssatzes entfernen.             |
| [Email CC and BCC](Mail%20Composer%20Cc%20Bcc.md)                                   | Im E-Mail-Dialog Cc und Bcc festlegen.                                   |
| [Mail Activity Datetime](Mail%20Activity%20Datetime.md)                             | Datum mit Zeit für Fälligkeit von Aktivität.                             |
| [Mail Channel Follow Model](Mail%20Channel%20Follow%20Model.md)                     | Kanäle können Datenmodell abonnieren und zeigen Benachrichtigungen an.   |
| [Mail Composer Default Template](Mail%20Composer%20Default%20Template.md)           | Standardvorlage für E-Mail-Dialog festlegen.                             |
| [Mail Composer Mass Layout](Mail%20Composer%20Mass%20Layout.md)                     | Mail-Layout beim Versand von mehreren Mails anwenden.                    |
| [Mail Debrand](Mail%20Debrand.md)                                                   | Odoo Promotion aus E-Mail-Vorlagen entfernen.                            |
| [Mail No Autofollow](Mail%20No%20Autofollow.md)                                     | Beim Erstellen von Nachrichten erfolgt keine automatische Abonnierung.   |
| [Mail Optional Follower Notification](Mail%20Optional%20Follower%20Notification.md) | Auswahl Nachrichen an Abonnenten verschicken.                            |
| [Mail Restrict Follower Selection](Mail%20Restrict%20Follower%20Selection.md)       | Auswahl der Follower einschränken.                                       |
| [Mail Show Follower](Mail%20Show%20Follower.md)                                     | CC-Hinweis in E-Mail-Header einfügen.                                    |
| [Mail Template Subscribe](Mail%20Template%20Subscribe.md)                           | Beim Versenden einer Nachricht Kontakte gemäss Domain-Filter abonnieren. |
| [Mail Thread Context](Mail%20Thread%20Context.md)                                   | Automatisches Abonnieren deaktiveren.                                    |
| [Mail Unsubscribe](Mail%20Unsubscribe.md)                                           | Automatische Abmeldung der Follower vor dem Versand einer Nachricht.     |
| [Purchase Order Send Unsubscribe](Purchase%20Order%20Send%20Unsubscribe.md)         | Alle Abonnenten nach Versenden der Bestellung entfernen.                 |
| [Purchase Order Unsubscribe](Purchase%20Order%20Unsubscribe.md)                     | Alle Abonnenten nach Bestätigung der Bestellung entfernen.               |
| [Sale Order Send Unsubscribe](Sale%20Order%20Send%20Unsubscribe.md)                 | Alle Abonnenten nach Versenden des Angebots entfernen.                   |
| [Sale Order Unsubscribe](Sale%20Order%20Unsubscribe.md)                             | Alle Abonnenten nach Bestätigung des Angebots entfernen.                 |
| [URL Attachment](URL%20Attachment.md)                                               | Url als Dokument anhängen.                                               |
|                                                                                     |                                                                          |

## Beschreibung

Die App Dialog ist mit allen Odoo-Dokumente integriert. Sie ermöglicht die interne und externe Kommunikation im Kontext eines Dokuments. Bis #Odoo15 hat die App _Diskussion_ geheissen und _Follower_ waren _Abonnemente_.

## Follower

### Eigener Follower hinzufügen

Wenn Sie den Chatter zu einem Odoo-Dokumente sehen, können Sie mit einem Klick auf _Folgen_ Aktivitäten auf dem Dokument abonnieren.

### Follower hinzufügen

Fügen Sie einen Follower dem Odoo-Objekt hinzu indem Sie rechts von _Folgen_ auf das Icon klicken und _Follower hinzufügen_ wählen.

![](attachments/Discuss%20Follower%20hinzufügen.gif)

### Follower bearbeiten

Wählen Sie einen Follower auf dem Odoo-Dokument aus, indem Sie rechts von _Folgen_ auf das Icon klicken und ein Follower auswählen.

### Follower entfernen

Entfernen Sie einen Follower vom Odoo-Objekt indem Sie rechts von _Folgen_ auf das Icon klicken.

![](attachments/Discuss%20Follower%20entfernen.gif)

### Alle Follower löschen

Wenn Sie oder ein anderer Benutzer einem Dokument folgen, speichert das Odoo in einer technischen Tabelle. Diese Einträge können Sie via _Einstellungen > Technisch > Dialog > Abonnenten_ löschen. Filtern Sie die Einträge nach einem bestimmten Modellname. Dazu ein Beispiel mit dem Verkaufsaufträgen (`sale.order`):

![](attachments/Discuss%20Follower%20löschen.gif)

::: warning
Das löschen von Follower kann die Kommunikation in der App Dialog beeinflussen.
:::

## Nachrichten

### Nachricht verschicken

Im Chatter des Dokument wählen Sie den Tab _Sende Nachricht_. Geben Sie eine Nachricht eine und wählen Sie _Senden_ um die Nachricht an den Empfänger zu schicken.

::: warning
Die Empfänger sind alle Follower des Dokuments.
:::

## E-Mail-Dialog anzeigen

Im Chatter des Dokument wählen Sie den Tab _Sende Nachricht_. Klicken Sie auf das Icon unten rechts im Eingabe-Fenster um den Dialog zu anzuzeigen.

### E-Mail aus E-Mail-Vorlage verschicken

Im Chatter des Dokument wählen Sie den Tab _Sende Nachricht_. Klicken Sie auf das Icon unten rechts im Eingabe-Fenster um den Dialog zu vergrößern.

![](attachments/Discuss%20Extend%20Editor.png)

Wählen Sie im Feld _Benutze Vorlage_ ein E-Mail-Vorlage aus. Odoo füllt die Platzhalter aus und Sie können die Nachricht mit _Senden_ an den Empfänger verschicken.

::: warning
Die Eingaben in _Empfänger_ werden mit den Follower des Dokuments kumuliert.
:::

### Benachrichtigungen anzeigen

Wenn Odoo Nachrichten versendet, werden abonnierte Benutzer benachrichtigt. Diese Benachrichtigungen können via _Einstellungen > Technisch > Benachrichtigungen_ angezeigt werden.

## Subtypen

### Subtypen verwalten

Navigieren Sie nach _Einstellungen > Technisch > Subtypen_ und zeigen Sie beispielsweise den Subtyp _Bestätigt_ an.

![](attachments/Discuss%20Subtyp%20Bestätigt.png)

Konfigurieren Sie den Subtypen gemäss Anforderungen:

- **Standard**: Wird beim Abonnieren automatisch ausgewählt.
- **Nur interne**: Nachrichten nur für interne Benutzer sichtbar.
- **Versteckt**: Subtyp wird auf Abonnement-Formular ausgeblendet.

### Subtyp auf Abonnement aktivieren

Zeigen Sie ein Odoo Dokument an und bearbeiten Sie ein Abonnement.

![](attachments/Discuss%20Follower%20bearbeiten.png)

Wählen Sie die Subtypen aus, welche für das Abonnement aktiv sein sollen.

## Benachrichtigung

### Nachrichten nur an interne Benutzer schicken

Benutzer werden standardmässig mit dem Subtyp _Diskussion_ abonniert. Damit Nachrichten ohne expliziten Emfänger nur an interne Kontakte verschickt werden können, müssen Sie diesen Subtyp anpassen. Navigieren Sie nach _Einstellungen > Technisch > Subtypen_ und zeigen Sie den Subtypen _Diskussion_ an. Aktivieren Sie die Option _Nur interne_.

::: tip
Um eine Nachricht explizit an externe Benutzer zu schicken, wählen Sie beim Nachrichten versenden eine E-Mail-Vorlage aus oder fügen den Empfänger manuell hinzu.
:::

### Nachrichten nicht an Follower schicken

Wenn Sie verhindern, möchten dass Nachrichten an die Follower des Dokuments verschickt werden, dann müssen Sie den entsprechenden Subtypen bearbeiten. Navigieren Sie nach _Einstellungen > Technisch > Subtypen_ und zeigen Sie den Subtypen _Diskussion_ an. Deaktiveren die Option _Standard_.

::: warning
Für ausgewählte Dokumenten wie das _Helpdesk-Team_ gibt es zusätzliche Subtypen, beispielsweise _Ticket erstellt_, welche die Option _Standard_ aktiv haben.
:::

## Kanäle

### Kanal löschen

Um einen Kanal zu löschen navigieren Sie nach _Einstellungen > Technisch > Kanäle_, wechseln in die Listenansicht und wählen die Kanäle die gelöscht werden sollen. Klicken Sie auf _Aktionen > Löschen_.

::: warning
Alle mit dem Kanal verknüpften Nachrichten werden mit dieser Aktion gelöscht.
:::

## Auswertung

### Versendete Nachrichten betrachten

Nachrichten, die von Odoo versendet werden, werden zentral gespeichert. Im Entwicklermodus sehen Sie diese unter _Einstellungen > Technisch > E-Mail > Nachrichten_. Hier sehen Sie alle versendeten Nachrichten aufgelistet. In der Detailansicht sieht man den _Nachrichtentext_ und die Metadaten.

![](attachments/Discuss%20Detailansicht.png)

Jede versendete Nachricht erhält eine eindeutige _Nachrichten-ID_.

![](attachments/Discuss%20Nachrichten-ID.png)

Wurde die Nachricht als Mail versendet, können Sie im Tab _Empfänger_ die Kontakte sehen.

![](attachments/Discuss%20Empfänger.png)
