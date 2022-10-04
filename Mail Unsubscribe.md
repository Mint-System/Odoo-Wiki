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
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/14.0/mail_unsubscribe>

#FIXME 

## Abonnenten vor dem Versenden einer Nachricht entfernen

Ist diese Erweiterung installiert, werden vor dem Versenden einer Nachricht alle Abnonnenten des Geschäftsobjekts entfernt. Damit ist sichergestellt, dass nur die ausgewählten Empfänger die Nachricht erhalten. 

## Entfernen von Abonnenten für Datenmodell deaktivieren

Wenn Sie für bestimmten Geschäftsobjekte verhindern möchten, dass die Abonnenten vor dem Versenden einer Nachricht entfernt werden, navigieren Sie nach *Einstellungen > Technisch > Datenmodelle* und suchen das entsprechende Datenmodell. Entfernen Sie die Markierung für **.

![](assets/Mail%20Unsubscribe%20Datenmodelle.png)

## Aktueller Benutzer beim  Entfernen ignorieren

Wenn Sie den [Systemparameter](Entwicklung.md#Systemparameter%20anlegen) mit Schlüssel `mail_unsubscribe.ignore_current_partner` und Wert `True` anlegen, 

