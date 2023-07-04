---
title: Einstellungen E-Mail
description: Odoo mit Plattformen von Dritten integrieren.
tags:
- HowTo
prev: ./settings
---
# Einstellungen E-Mail
![icons_odoo_settings](assets/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Empfang

### Eingehender Mail-Server konfigurieren

Damit Odoo Mails empfangen und verarbeiten kann, muss ein eingehender Mail-Server konfiguriert werden.

Unter *Einstellungen > Diskussion > Externe E-Mail-Server* aktivieren Sie das Feature, wenn noch nicht erledigt und wählen *Eingehender Mail-Server*. Klicken Sie auf *Anlegen* um eine Verbindung zu einem Mail-Account einzurichten. Dazu ein Beispiel mit Infomaniak:

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

### Eingehende E-Mails erneut empfangen

Odoo markiert empfangene und verarbeitete E-Mails im Postfach als gelesen. Markieren Sie die E-Mails im Postfach als ungelesen damit Odoo beim der nächsten Ausführung zur Verarbeitung der eingehenden E-Mails die markierten E-Mails erneut verarbeitet.

### Aliase anzeigen

Navigieren Sie nach *Einstellungen > Technisch > E-Mail > Aliase*. Hier sehen Sie alle die von Odoo registrierten Aliase und verknüpften Dokumente.

::: tip
Der Empfänger der eingehenden E-Mails werden mit der Liste der Aliase verglichen. Wenn das E-Mail keine Antwort auf einen bestehenden Chatter-Thread ist, wird die Aktion des registrierten Aliases ausgelöst.
:::

## Versand

### Ausgehender Mail-Server konfigurieren

Damit Odoo Mail verschicken kann, muss ein ausgehender Mail-Server konfiguriert werden.

Unter *Einstellungen > Diskussion > Externe E-Mail-Server* aktivieren Sie das Feature, wenn noch nicht erledigt und wählen *Ausgehender Mail-Server*. Klicken Sie auf *Anlegen* um eine Verbindung zu einem Mail-Account einzurichten. Dazu ein Beispiel für Infomaniak:

* **Beschreibung**: Infomaniak Outgoing
* **SMTP Server**: `mail.infomaniak.com`
* **SMTP Port**: 587
* **Verbindungssicherheit**: TLS
* **Benutzername**: Mail-Adresse von Odoo Postfach
* **Passwort**: Passwort des Odoo Postfach
* **Aus Filter**: Mail-Adresse von Odoo Postfach (gilt ab #Odoo15)

::: tip
Für Vorgänge wie das Zurücksetzen eines Passworts oder Versand einer Einladung, versendet Odoo die E-Mail im Namen des Unternehmens und verwendet dazu die E-Mail-Adresse aus den Unternehmenseinstellungen.
:::

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

## Konfiguration

### Aktion für eingehende nicht zuordbare E-Mails konfigurieren

Navigieren Sie nach *Einstellungen > Technisch > Eingehender Mail-Server* und zeigen Sie einen aktiven Eintrag an. Im Feld *Einen neuen Datensatz erzeugen?* können Sie ein Datenmodell auswählen. Wenn Odoo eine E-Mail verarbeitet und dieses nicht einer bestehenden Diskussion erzeugen kann, erstellt es einen Datensatz des ausgewählten Datenmodells.

::: tip
Als ausgewähltes Datenmodell empfehlen wir *Diskussionskanal* oder *Notiz*. 
:::

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

Wenn Odoo eine E-Mail erhält, dessen Empfänger-Adresse nicht mit dem Catchall-Alias übereinstimmt, versendet Odoo eine Nachricht. Der Absender dieser Nachricht verwendet den Bounce-Alias.

Falls Sie den Bounce-Alias ändern möchten, öffnen Sie *Einstellungen > Technisch > Parameter > Systemparameter* und passen den Wert für `mail.bounce.alias` an.

### Absender-Adresse überschreiben

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
Abhängig vom Mail-Provider darf die Absender-Adresse nicht von der Adresse des Postfachs abweichen und die sogennanten *Senden als*-Freigaben müssen explizit konfiguriert werden. 
:::

### Antwort-Adresse mit Konfiguration von E-Mail-Vorlage überschreiben

Damit die Antwort-Adresse aus der Konfiguration der Mail-Vorlage übernommen wird, muss 
der Eintrag `mail.catchall.domain` unter *Einstellungen > Technisch > Parameter > Systemparameter* entfernt werden.

In der E-Mail-Vorlage muss im Tab *E-Mail-Konfiguration* das feld *Antwort an* gesetzt sein.

![](assets/Einstellungen%20E-Mail%20Konfiguration.png)

### E-Mail nach Versand nicht löschen

Damit E-Mail nach dem Versand nicht aus der Odoo-Datenbank und dem Postfach gelöscht wird, können Sie in den E-Mail-Vorlagen unter *Einstellungen > Technisch > E-Mail > Vorlagen > Vorlage auswählen > Tab Erweiterte Einstellungen* die Option *Autom. Löschen* deaktivieren.

Nach dem Versand der E-Mail können Sie die [E-Mail anzeigen](Discuss%20E-Mail.md#E-Mail%20anzeigen).

## Troubleshooting

### Bounce-Nachricht erhalten

**Problem**

Sie haben eine E-Mail an das Odoo Postfach geschickt und diese Antwort erhalten:

```
Hallo ,

Die E-Mail senden an Odoo Demo <odoo@example.com> kann nicht verarbeitet werden. Diese Adresse wird verwendet, um Antworten zu sammeln und sollte nicht zur direkten Kontaktaufnahme verwendet werden example.com.

Bitte kontaktieren Sie uns stattdessen unter Verwendung von contact@example.com

Grüße,

Der example.com Team.
```

**Ursache**

Odoo bounced die E-Mail, wenn diese direkt an den Catchall- oder den Bounce-Alias geschickt wird.

**Lösung**

Sie müssen den [Catchall-Alias anpassen](#Catchall-Alias%20anpassen) oder den [Bounce-Alias anpassen](#Bounce-Alias%20anpassen), damit die E-Mail nicht gebounced wird.