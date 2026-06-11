---
description: Automatische Abmeldung der Follower vor dem Versand einer Nachricht.
forge: github.com
kind: howto
name: mail_unsubscribe
partner: Mint System
prev: ./discuss-e-mail
repo: Mint-System/Odoo-Apps-Social
title: Mail Unsubscribe
versions:
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Mail Unsubscribe

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Ist diese Erweiterung installiert, werden vor dem Versenden einer Nachricht alle Follower auf dem Dokument entfernt. Damit ist sichergestellt, dass nur ausgewählte Empfänger die Nachricht erhalten.

## Konfiguration

### Eigener Benutzer beim Entfernen ignorieren

Ab #Odoo16.

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Diskussion_ und aktivieren Sie die Option _Eigener Benutzer ignorieren_. Damit werden vor dem Versand einer Nachricht alle Abonnenten ausser des eigenen Benutzer entfernt.

Bis #Odoo15.

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail_unsubscribe.ignore_current_partner` und Wert `True` anlegen, werden vor dem Versand einer Nachricht alle Abonnenten ausser des aktuellen Benutzer entfernt.

### Abonnieren von Empfängern erlauben

Ab #Odoo16.

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Diskussion_ und aktivieren Sie die Option _Empfänger automatisch abonnieren_. Damit werden die Empfänger nach dem Versand der Nachricht als Abonnenten hinzugefügt.

Bis #Odoo15.

Wenn Sie möchten, dass die Empfänger der Nachricht nach dem Versenden der Nachricht als Abonnenten hinzugefügt werden, legen Sie einen Systemparameter mit Schlüssel `mail_unsubscribe.mail_post_autofollow` und Wert `True` an.

### Abonnieren von eigenem Benutzer verhindern

Ab #Odoo16.

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Diskussion_ und aktivieren Sie die Option _Eigener Bentuzer nicht abonnieren_. Damit wird verhindert, dass der eigene Benutzer nach dem Versenden einer Nachricht als Abonnent hinzugefügt wird.

Bis #Odoo15.

Wenn Sie möchten, dass der eigene Benutzer nach dem Versenden einer Nachricht nicht als Abonnent hinzugefügt wird, legen Sie einen Systemparameter mit Schlüssel `mail_unsubscribe.mail_create_nosubscribe` und Wert `True` an.

### Entfernen von Abonnenten für Datenmodell deaktivieren

Bis #Odoo15.

Wenn Sie für bestimmte Dokumente verhindern möchten, dass die Abonnenten vor dem Versenden einer Nachricht entfernt werden, navigieren Sie nach _Einstellungen > Technisch > Modelle_ und suchen das entsprechende Datenmodell. Entfernen Sie die Markierung bei _Unsubscribe before Message Post_.
