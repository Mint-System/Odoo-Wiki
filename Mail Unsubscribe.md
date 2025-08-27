---
title: Mail Unsubscribe
description: Automatische Abmeldung der Follower vor dem Versand einer Nachricht.
kind: howto
partner: Mint-System
prev: ./dialog
---
# Mail Unsubscribe
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mail_unsubscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/17.0/mail_unsubscribe>

## Beschreibung

Ist diese Erweiterung installiert, werden vor dem Versenden einer Nachricht alle Follower auf dem Dokument entfernt. Damit ist sichergestellt, dass nur ausgewählte Empfänger die Nachricht erhalten.

## Konfiguration

### Eigener Benutzer beim  Entfernen ignorieren

Ab #Odoo16.

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Diskussion* und aktivieren Sie die Option *Eigener Benutzer ignorieren*. Damit werden vor dem Versand einer Nachricht alle Abonnenten ausser des eigenen Benutzer entfernt.

Bis #Odoo15.

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail_unsubscribe.ignore_current_partner` und Wert `True` anlegen, werden vor dem Versand einer Nachricht alle Abonnenten ausser des aktuellen Benutzer entfernt.

### Abonnieren von Empfängern erlauben

Ab #Odoo16.

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Diskussion* und aktivieren Sie die Option *Empfänger automatisch abonnieren*. Damit werden die Empfänger nach dem Versand der Nachricht als Abonnenten hinzugefügt.

Bis #Odoo15.

Wenn Sie möchten, dass die Empfänger der Nachricht nach dem Versenden der Nachricht als Abonnenten hinzugefügt werden, legen Sie einen Systemparameter mit Schlüssel `mail_unsubscribe.mail_post_autofollow` und Wert `True` an.

### Abonnieren von eigenem Benutzer verhindern

Ab #Odoo16.

Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Diskussion* und aktivieren Sie die Option *Eigener Bentuzer nicht abonnieren*. Damit wird verhindert, dass der eigene Benutzer nach dem Versenden einer Nachricht als Abonnent hinzugefügt wird.

Bis #Odoo15.

Wenn Sie möchten, dass der eigene Benutzer nach dem Versenden einer Nachricht nicht als Abonnent hinzugefügt wird, legen Sie einen Systemparameter mit Schlüssel `mail_unsubscribe.mail_create_nosubscribe` und Wert `True` an.

### Entfernen von Abonnenten für Datenmodell deaktivieren

Bis #Odoo15.

Wenn Sie für bestimmte Dokumente verhindern möchten, dass die Abonnenten vor dem Versenden einer Nachricht entfernt werden, navigieren Sie nach *Einstellungen > Technisch > Modelle* und suchen das entsprechende Datenmodell. Entfernen Sie die Markierung bei *Unsubscribe before Message Post*.
