---
title: Einstellungen E-Mail
description: Odoo mit Plattformen von Dritten integrieren.
tags:
- HowTo
prev: ./settings
---
# Einstellungen E-Mail
![icons_odoo_settings](attachments/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Konfiguration

### E-Mail-Domain festlegen

Gilt bis #Odoo16.

Navigieren Sie nach *Einstellungen > Dialog* und aktivieren Sie die Option *Benutzerdefinierte E-Mail-Server*. Geben Sie im Feld *Alias-Domain* die E-Mail-Domain ein.

Gilt ab #odoo17.

Navigieren Sie nach *Einstellungen* und klicken Sie bei *Unternehmen* auf *Info aktualisieren*. Im Feld *E-Mail-Domain* geben Sie ihre Domain ein, beispielsweise `example.com`. Odoo generiert die zum Versand benötigten Systemparameter.

### Catchall-Alias anpassen

Unter der Catchall-Mail-Adresse versendet Odoo Nachrichten. Auf diese Adresse können die Empfänger antworten und Odoo kann die eingegangenen Nachrichten verarbeiten.

Falls Sie die Adresse ändern möchten, öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und passen den Wert für `mail.catchall.alias` an.

Angenommen Sie geben als Wert `erp` ein, so ist die resultierende Absender-Aresse `From: "FIRSTNAME LASTNAME" <erp@example.com>`.

::: tip
Eine Liste von Mail-Provider und ob diese die *catchall* und *no-reply* E-Mail-Aliase erlauben:
* ❌ Infomaniak
* ❌ Outlook
* ❌ Gmail
* ✅ Proton
:::

### Bounce-Alias anpassen

In jeder versendeten E-Mail wird im Header `Return-Path` die Mail-Adresse für Retouren mitgeteilt. Diese setzt sich aus dem Bounce-Alias und der Mail-Domain zusammen, beispielsweise `bounce@example.com`.

Falls Sie den Bounce-Alias ändern möchten, öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und passen den Wert für `mail.bounce.alias` an.

### Allgemeine Absender-Adresse festlegen

Wenn Odoo eine E-Mail versendet, wird im E-Mail eine Von- und Antwort-Adresse hinterlegt. In den E-Mail-Kopfzeilen sieht das so aus:

```txt
...
From: "FIRSTNAME LASTNAME" <firstname.lastname@example.com>
Reply-To: "My Company" <catchall@example.com>
...
```

Wenn Sie die Von-Adresse überschreiben möchten, öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und erstellen einen Eintrag mit Schlüssel `mail.force.smtp.from` (bis #Odoo14 ) `mail.default.from` (ab #Odoo15 ) und Wert `name@example.com` als gewünschte E-Mail-Adresse. Angenommen Sie geben `erp@example.com` ein, sehen die E-Mail-Kopfzeilen folgendermassen aus:

```txt
...
From: "FIRSTNAME LASTNAME" <erp@example.com>
Reply-To: "My Company" <catchall@example.com>
...
```

::: warning
Abhängig vom Mail-Provider darf die Absender-Adresse nicht von der Adresse des Postfachs abweichen und die sogenannten *Senden als*-Freigaben müssen explizit konfiguriert werden. 
:::

## Empfang

### Eingehender Mail-Server konfigurieren

Damit Odoo Mails empfangen und verarbeiten kann, muss ein eingehender Mail-Server konfiguriert werden.

Unter *Einstellungen > Dialog > Externe E-Mail-Server* aktivieren Sie das Feature, wenn noch nicht erledigt und wählen *Eingehender Mail-Server*. Klicken Sie auf *Neu* um eine Verbindung zu einem Mail-Account einzurichten. Dazu ein Beispiel mit Infomaniak:

* **Beschreibung**: Infomaniak Incoming
* **Servertyp**: IMAP Server
* **Servername**: `mail.infomaniak.com`
* **Port**: 993
* **SSL/TLS**: Option aktivieren
* **Benutzername**: Mail-Adresse des Odoo Postfach
* **Passwort**: Passwort des Odoo Postfach

### Eingehender Mail-Server Office 365 konfigurieren

Wenn Sie [Eingehender Mail-Server konfigurieren](#Eingehender%20Mail-Server%20konfigurieren) und Office 365 verwenden möchten, wählen Sie diese Parameter als Verbindungsoptionen:

* **Beschreibung**: Office 365 Incoming
* **Outlook**: Option markieren
* **Benutzername**: Mail-Adresse des Odoo Postfach

Und anschliessen die Aktion [Outlook OAuth-Verbindung einrichten](Settings%20OAuth.md#Outlook%20OAuth-Verbindung%20einrichten) ausführen.

::: warning
Das verwendete Outlook-Postfach darf keine Shared Mailbox sein. Der Benutzer und Postfach müssen lizenziert sein.
:::

## Versand

### Ausgehender Mail-Server konfigurieren

Damit Odoo Mail verschicken kann, muss ein ausgehender Mail-Server konfiguriert werden.

Unter *Einstellungen > Dialog > Externe E-Mail-Server* aktivieren Sie das Feature, wenn noch nicht erledigt und wählen *Ausgehender Mail-Server*. Klicken Sie auf *Neu* um eine Verbindung zu einem Mail-Account einzurichten. Dazu ein Beispiel für Infomaniak:

* **Beschreibung**: Infomaniak Outgoing
* **SMTP Server**: `mail.infomaniak.com`
* **SMTP Port**: 587
* **Verbindungssicherheit**: TLS
* **Benutzername**: Mail-Adresse von Odoo Postfach
* **Passwort**: Passwort des Odoo Postfach
* **Von-Filter**: Mail-Adresse von Odoo Postfach oder Mail-Domain

::: tip
Für Vorgänge wie das Zurücksetzen eines Passworts oder Versand einer Einladung, versendet Odoo die E-Mail im Namen des Unternehmens und verwendet dazu die E-Mail-Adresse aus den Unternehmenseinstellungen.
:::

## Alias

### E-Mail Aliase anzeigen

Navigieren Sie nach *Einstellungen > Technisch > E-Mail > Aliase*. Hier sehen Sie alle die von Odoo registrierten Aliase und verknüpften Dokumente.

::: tip
Der Empfänger der eingehenden E-Mails werden mit der Liste der Aliase verglichen. Wenn das E-Mail keine Antwort auf einen bestehenden Chatter-Thread ist, wird die Aktion des registrierten Aliases ausgelöst.
:::

### E-Mail Alias erstellen

Sie können für eine Ressource, beispielsweise Kundendienst Team, mehrere Alias haben. Navigieren Sie nach *Einstellungen > Technisch > E-Mail > Aliase* und zeigen Sie einen bestehenden Alias an. Wählen Sie *Aktion > Duplizieren* und passen Sie die Adresse des Alias an. 

### Ausgehender Mail-Server Office 365 konfigurieren

Wenn Sie [Ausgehender Mail-Server konfigurieren](#Ausgehender%20Mail-Server%20konfigurieren) und Office 365 verwenden möchten, wählen Sie diese Parameter als Verbindungsoptionen:

* **Beschreibung**: Office 365 Outgoing
* **Outlook**: Option markieren
* **Benutzername**: Mail-Adresse des Odoo Postfach

Und anschliessen die Aktion [Outlook OAuth-Verbindung einrichten](Settings%20OAuth.md#Outlook%20OAuth-Verbindung%20einrichten) ausführen.

::: warning
Das verwendete Outlook-Postfach darf keine Shared Mailbox sein. Der Benutzer und Postfach müssen lizenziert sein.
:::

::: warning
Die Relay-Funktion von Odoo funktioniert mit Office 365 nicht. Sie müssen eine feste Absender-Adresse gemäss [Absender-Adresse überschreiben](#Absender-Adresse%20überschreiben) wählen.
:::

## Erweitert

### Aktion für eingehende nicht zuordbare E-Mails konfigurieren

Navigieren Sie nach *Einstellungen > Technisch > Eingehender Mail-Server* und zeigen Sie einen aktiven Eintrag an. Im Feld *Einen neuen Datensatz erzeugen* können Sie ein Datenmodell auswählen. Wenn Odoo eine E-Mail verarbeitet und dieses nicht einem laufenden Dialog zugeordnet werden kann, erstellt Odoo einen Datensatz im ausgewählten Datenmodell.

::: tip
Als ausgewähltes Datenmodell empfehlen wir *Kanal* oder *Notiz*. 
:::

### Antwort-Adresse mit Konfiguration von E-Mail-Vorlage überschreiben

Damit die Antwort-Adresse aus der Konfiguration der Mail-Vorlage übernommen wird, muss 
der Eintrag `mail.catchall.domain` unter *Einstellungen > Technisch > Parameter > Systemparameter* entfernt werden.

In der E-Mail-Vorlage muss im Tab *E-Mail-Konfiguration* das Feld *Antwort an* gesetzt sein.

![](attachments/Einstellungen%20E-Mail%20Konfiguration.png)

### E-Mail nach Versand nicht löschen

Damit E-Mail nach dem Versand nicht aus der Odoo-Datenbank und dem Postfach gelöscht wird, können Sie in den E-Mail-Vorlagen unter *Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen > Vorlage auswählen > Tab Einstellungen* die Option *Autom. Löschen* deaktivieren.

## Testen

### DKIM-Signatur verifizieren

Öffnen Sie die Webapp <https://www.appmaildev.com/en/dkim/> und klicken Sie auf *Next Step*. Kopieren Sie die generierte E-Mail-Adresse und erstellen Sie in Odoo einen neuen Kontakt *DKIM*. Fügen Sie die E-Mail-Adresse dem Kontakt hinzu und verschicken Sie über den Chatter eine Nachricht. Kehren Sie zur Webapp zurück und prüfen Sie den generierten Bericht.

## Troubleshooting

### Bounce-Nachricht erhalten

**Problem**

Sie haben eine E-Mail an das Odoo Postfach geschickt und diese Antwort erhalten:

```
Hallo,

Die E-Mail senden an Odoo Demo <odoo@example.com> kann nicht verarbeitet werden. Diese Adresse wird verwendet, um Antworten zu sammeln und sollte nicht zur direkten Kontaktaufnahme verwendet werden example.com.

Bitte kontaktieren Sie uns stattdessen unter Verwendung von contact@example.com

Grüße,

Der example.com Team.
```

**Ursache**

Odoo bounced die E-Mail, wenn diese direkt an den Catchall- oder den Bounce-Alias geschickt wird.

**Lösung**

Sie müssen den [Catchall-Alias anpassen](#Catchall-Alias%20anpassen) oder den [Bounce-Alias anpassen](#Bounce-Alias%20anpassen), damit die E-Mail nicht gebounced wird.

### Weitergeleitetes Mail via Exchange wird von Odoo nicht verarbeitet

**Problem**

Sie haben eine E-Mail innerhalb der Exchange-Domäne an einen Odoo Mail-Alias weitergeleitet. Der Alias wird von Odoo nicht erkannt und das Mail wird nicht verarbeitet.

**Ursache**

Microsoft Exchange Alias-Adressen werden bei internen Absendern aufgelöst und im Header wird das `to:`-Attribut überschrieben.

**Lösung**

Verwenden Sie als Odoo-Postfach einen externen Mail-Provider und konfigurieren Sie die Mail-Domain als *Internal Relay*.