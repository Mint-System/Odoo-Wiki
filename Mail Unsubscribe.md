---
title: Mail Unsubscribe
description: Automatische Abmeldung der Follower vor dem Versand einer Nachricht.
tags:
- HowTo
- Drittanbieter
prev: ./discuss
---
# Mail Unsubscribe
![icon_oms_box](assets/icon_oms_box.png)

{{ $frontmatter.description }}
 
Technischer Name: `mail_unsubscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/15.0/mail_unsubscribe>

## Verwendung

### Abonnenten vor dem Versenden einer Nachricht entfernen

Ist diese Erweiterung installiert, werden vor dem Versenden einer Nachricht alle Abonnenten des Geschäftsobjekts entfernt. Damit ist sichergestellt, dass nur die ausgewählten Empfänger die Nachricht erhalten.

### Entfernen von Abonnenten für Datenmodell deaktivieren

Wenn Sie für bestimmten Geschäftsobjekte verhindern möchten, dass die Abonnenten vor dem Versenden einer Nachricht entfernt werden, navigieren Sie nach *Einstellungen > Technisch > Datenmodelle* und suchen das entsprechende Datenmodell. Entfernen Sie die Markierung bei *Unsubscribe before Message Post*.

## Konfiguration

Standardmässig werden vor dem Versenden der Nachricht alle Abonenten entfernt und anschliessend wird der eigene Benutzer abonniert. Diese Standard-Einstellungen können Sie wie folgt anpassen.

### Eigener Benutzer beim  Entfernen ignorieren

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail_unsubscribe.ignore_current_partner` und Wert `True` anlegen, werden vor dem Versand einer Nachricht alle Abonnenten ausser des aktuellen Benutzer entfernt.

### Abonnieren von Empfängern erlauben

Wenn Sie möchten, dass die Empfänger der Nachricht nach dem Versenden der Nachricht als Abonnenten hinzugefügt werden, legen Sie einen Systemparameter mit Schlüssel `mail_unsubscribe.mail_post_autofollow` und Wert `True` an. 

### Abonnieren von eigenem Benutzer verhindern

Wenn Sie möchten, dass der eigene Benutzer nach dem Versenden einer Nachricht nicht als Abonnent hinzugefügt wird, legen Sie einen Systemparameter mit Schlüssel `mail_unsubscribe.mail_create_nosubscribe` und Wert `True` an. 
