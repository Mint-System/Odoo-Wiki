---
tags:
- HowTo
- Drittanbieter
prev: ./diskussion
---
# Mail Unsubscribe
![icon_oms_box](assets/icon_oms_box.png)

Automatische Abmeldung der Follower vor dem Versand einer Nachricht.
 
Technischer Name: `mail_unsubscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/15.0/mail_unsubscribe>

## Verwendung

### Abonnenten vor dem Versenden einer Nachricht entfernen

Ist diese Erweiterung installiert, werden vor dem Versenden einer Nachricht alle Abonnenten des Geschäftsobjekts entfernt. Damit ist sichergestellt, dass nur die ausgewählten Empfänger die Nachricht erhalten. 

![Mail Unsubscribe](assets/Mail%20Unsubscribe.gif)

### Entfernen von Abonnenten für Datenmodell deaktivieren

Wenn Sie für bestimmten Geschäftsobjekte verhindern möchten, dass die Abonnenten vor dem Versenden einer Nachricht entfernt werden, navigieren Sie nach *Einstellungen > Technisch > Datenmodelle* und suchen das entsprechende Datenmodell. Entfernen Sie die Markierung für **.

![](assets/Mail%20Unsubscribe%20Datenmodelle.png)

## Konfiguration

### Aktueller Benutzer beim  Entfernen ignorieren

Wenn Sie den [Systemparameter](Entwicklung.md#Systemparameter%20anlegen) mit Schlüssel `mail_unsubscribe.ignore_current_partner` und Wert `True` anlegen, werden vor dem Versand einer Nachricht alle Abonnenten ausser des aktuellen Benutzer entfernt.

![Mail Unsubscribe Ignore Current User](assets/Mail%20Unsubscribe%20Ignore%20Current%20User.gif)

### Abonnieren von Empfängern erlauben

Wenn Sie möchten, dass die Empfänge als Abonnenten nach dem Versenden der Nachricht hinzugefügt werden, legen Sie einen Systemparameter mit Schlüssel `mail_unsubscribe.mail_post_autofollow` und Wert `True` an. 

![Mail Unsubscribe Allow Follow](assets/Mail%20Unsubscribe%20Allow%20Follow.gif)

### Abonnieren von aktuellen Benutzer verhindern

Wenn Sie möchten, dass der aktuelle Benutzer beim Versenden einer Nachricht nicht als Abonnent hinzugefügt wird, legen Sie einen Systemparameter mit Schlüssel `mail_unsubscribe.mail_create_nosubscribe` und Wert `True` an. 
